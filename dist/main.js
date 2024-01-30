/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Permanent+Marker&family=Playpen+Sans:wght@400;700&family=Roboto:wght@300;400;500;700&family=Sometype+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* SHOW COMPUTER SHIPS (FOR TESTING) */
/* .board .grid-square.has-ship {
  background-color: rgb(185, 186, 190);
} */

html {
  font-family: "Sometype Mono", monospace;
}

body,
h1,
h2,
button {
  margin: 0;
  padding: 0;
  font: inherit;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 32px;
}

button#start-game {
  width: 125px;
  border-radius: 6px;
}

.boards-container {
  position: relative;
  display: flex;
  gap: 40px;
}

.board-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.board {
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

.grid-square {
  border: 1px solid black;
  box-sizing: content-box;
}

.grid-square:hover {
  background-color: rgb(219, 219, 219);
}

.board#player .grid-square.has-ship,
.board#player .grid-square.ghost-ship {
  background-color: rgb(185, 186, 190);
}

.board#player .grid-square.has-ship.hit,
.board#computer .grid-square.has-ship.hit {
  background-color: rgb(214, 0, 0);
}

.board .grid-square.miss {
  background-color: rgb(0, 53, 200);
}

#game-over-container {
  width: 300px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  background-color: rgb(255, 255, 255, 0.9);
  border-radius: 24px;
  box-shadow: 2px 4px 8px gray;
}

#game-over-container button#play-again {
  cursor: pointer;
  width: 125px;
  height: 40px;
  border-radius: 12px;
  background-color: rgb(208 210 212);
  font-size: 16px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,sCAAsC;AACtC;;GAEG;;AAEH;EACE,uCAAuC;AACzC;;AAEA;;;;EAIE,SAAS;EACT,UAAU;EACV,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,yCAAyC;EACzC,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,kCAAkC;EAClC,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Permanent+Marker&family=Playpen+Sans:wght@400;700&family=Roboto:wght@300;400;500;700&family=Sometype+Mono&display=swap\");\n\n/* SHOW COMPUTER SHIPS (FOR TESTING) */\n/* .board .grid-square.has-ship {\n  background-color: rgb(185, 186, 190);\n} */\n\nhtml {\n  font-family: \"Sometype Mono\", monospace;\n}\n\nbody,\nh1,\nh2,\nbutton {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 24px;\n}\n\nh1 {\n  font-size: 48px;\n}\n\nh2 {\n  font-size: 32px;\n}\n\nbutton#start-game {\n  width: 125px;\n  border-radius: 6px;\n}\n\n.boards-container {\n  position: relative;\n  display: flex;\n  gap: 40px;\n}\n\n.board-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  border: 1px solid black;\n}\n\n.grid-square {\n  border: 1px solid black;\n  box-sizing: content-box;\n}\n\n.grid-square:hover {\n  background-color: rgb(219, 219, 219);\n}\n\n.board#player .grid-square.has-ship,\n.board#player .grid-square.ghost-ship {\n  background-color: rgb(185, 186, 190);\n}\n\n.board#player .grid-square.has-ship.hit,\n.board#computer .grid-square.has-ship.hit {\n  background-color: rgb(214, 0, 0);\n}\n\n.board .grid-square.miss {\n  background-color: rgb(0, 53, 200);\n}\n\n#game-over-container {\n  width: 300px;\n  height: 150px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  font-size: 24px;\n  background-color: rgb(255, 255, 255, 0.9);\n  border-radius: 24px;\n  box-shadow: 2px 4px 8px gray;\n}\n\n#game-over-container button#play-again {\n  cursor: pointer;\n  width: 125px;\n  height: 40px;\n  border-radius: 12px;\n  background-color: rgb(208 210 212);\n  font-size: 16px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGame: () => (/* binding */ createGame),
/* harmony export */   createReplay: () => (/* binding */ createReplay)
/* harmony export */ });
/* harmony import */ var _gameObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObjects.js */ "./src/gameObjects.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");





const createGame = function (difficulty) {
  let player, computer;
  let playerBoard, computerBoard;
  let playerBoardUI, computerBoardUI;
  const gameLog = {
    playerShips: [],
    computerShips: [],
    playerAttacks: [],
    computerAttacks: [],
  };
  let currPlayer;

  const ships = {
    Carrier: 5,
    Battleship: 4,
    Destroyer: 3,
    Submarine: 3,
    "Patrol Boat": 2,
  };

  async function startGame() {
    try {
      // Create boards
      playerBoard = (0,_gameObjects_js__WEBPACK_IMPORTED_MODULE_0__.createGameboard)("player");
      computerBoard = (0,_gameObjects_js__WEBPACK_IMPORTED_MODULE_0__.createGameboard)("computer");

      // Create board UIs
      playerBoardUI = _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.createBoardUI(playerBoard);
      computerBoardUI = _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.createBoardUI(computerBoard);

      // Create players
      player = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.createPlayer)(playerBoard, computerBoard);
      computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.createComputerPlayer)(computerBoard, playerBoard, difficulty);

      // Let players place their ships
      await playerPlaceShips();
      playerBoardUI.refresh();
      computerPlaceShips();
      computerBoardUI.refresh();

      // Start game loop
      await gameLoop();
      const playAgain = true;
      saveGameLog();
      return new Promise((resolve) => resolve(playAgain));
    } catch (e) {
      // Save game log so game can be restimulated to debug error
      saveGameLog();
      alert("FATAL ERROR: Game log sent to developers for troubleshooting!");
      console.log(e);
      return new Promise((resolve) => resolve(true));
    }
  }

  async function playerPlaceShips() {
    // REAL IMPLEMTATION
    for (const [shipName, shipLength] of Object.entries(ships)) {
      // Solicit player to interact with UI
      await solicitPlaceShip(shipName, shipLength);
      // Refresh UI
      playerBoardUI.refresh();
    }
  }

  async function solicitPlaceShip(name, length) {
    console.log(`waiting to place ${name}`);
    const placement = await playerBoardUI.solicitPlaceShip(name, length);
    // Get UI input and place on board
    try {
      playerBoard.placeShip(
        name,
        length,
        placement.row,
        placement.col,
        placement.orientation
      );
    } catch (e) {
      if (e instanceof playerBoard.InvalidShipPlacementError) {
        // Try again
        await solicitPlaceShip(name, length);
        return;
      } else {
        // Unexpected error
        throw e;
      }
    }
    gameLog.playerShips.push({ name, length, ...placement });
  }

  // (FOR TESTING) Automatically places players ships in top-left corner
  async function solicitPlaceShipAuto(name, length) {
    const playerPlacement = {
      Carrier: { row: 0, col: 0, orientation: "h" },
      Battleship: { row: 1, col: 0, orientation: "h" },
      Destroyer: { row: 2, col: 0, orientation: "h" },
      Submarine: { row: 3, col: 0, orientation: "h" },
      "Patrol Boat": { row: 4, col: 0, orientation: "h" },
    };
    const placement = playerPlacement[name];
    player.placeShip(
      name,
      length,
      placement.row,
      placement.col,
      placement.orientation
    );
    return new Promise((resolve) => resolve());
  }

  function computerPlaceShips() {
    for (const [name, length] of Object.entries(ships)) {
      const placement = computer.placeShip(name, length);
      gameLog.computerShips.push({ name, length, ...placement });
    }
  }

  function gameOver() {
    return playerBoard.allShipsSunk() || computerBoard.allShipsSunk();
  }

  async function processGameOver(winningPlayer) {
    await _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.displayGameOver(winningPlayer.name);
    return new Promise((resolve) => resolve());
  }

  async function gameLoop() {
    let currPlayer = player;

    function switchPlayer() {
      currPlayer = currPlayer == player ? computer : player;
    }

    while (!gameOver()) {
      // Wait for player to take turn
      if (currPlayer === player) {
        // Solicit attack spot from UI
        const loc = await solicitPlayerAttack();
        gameLog.playerAttacks.push(loc);
        computerBoardUI.refresh();
      } else {
        // Computer attacks
        const loc = computer.attack();
        gameLog.computerAttacks.push(loc);
        playerBoardUI.refresh();
      }
      // Next player's turn
      switchPlayer();
    }

    switchPlayer(); // switch so currPlayer is winner
    await processGameOver(currPlayer);

    // Game is over. Resolve the promise.
    return new Promise((resolve) => {
      resolve();
    });
  }

  async function solicitPlayerAttack() {
    const loc = await computerBoardUI.solicitAttack();
    try {
      player.attack(loc.row, loc.col);
    } catch {
      return await solicitPlayerAttack();
    }
    return new Promise((resolve) => resolve(loc));
  }

  function saveGameLog() {
    localStorage.setItem("gameLog", JSON.stringify(gameLog));
  }

  return {
    startGame,
  };
};

function createReplay() {
  async function replayGame(delay) {
    // INITIALIZE GAME
    const gameLog = loadGameLog();

    // Load the gameLog
    function loadGameLog() {
      return JSON.parse(localStorage.getItem("gameLog"));
    }

    // Sleep
    async function sleep() {
      return new Promise((resolve) => setTimeout(resolve, delay));
    }

    async function playerPlaceShips() {
      for (let ship of gameLog.playerShips) {
        playerBoard.placeShip(
          ship.name,
          ship.length,
          ship.row,
          ship.col,
          ship.orientation
        );
        playerBoardUI.refresh();
        await sleep();
      }
    }

    async function computerPlaceShips() {
      for (let ship of gameLog.computerShips) {
        computerBoard.placeShip(
          ship.name,
          ship.length,
          ship.row,
          ship.col,
          ship.orientation
        );
        computerBoardUI.refresh();
        await sleep();
      }
    }

    // Create boards
    const playerBoard = (0,_gameObjects_js__WEBPACK_IMPORTED_MODULE_0__.createGameboard)("player");
    const computerBoard = (0,_gameObjects_js__WEBPACK_IMPORTED_MODULE_0__.createGameboard)("computer");

    // Create board UIs
    const playerBoardUI = _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.createBoardUI(playerBoard);
    const computerBoardUI = _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.createBoardUI(computerBoard);

    // Let players place their ships
    await playerPlaceShips();
    playerBoardUI.refresh();
    await computerPlaceShips();
    computerBoardUI.refresh();

    // GAME LOOP

    async function playerAttack() {
      const attack = gameLog.playerAttacks.shift();
      computerBoard.receiveAttack(attack.row, attack.col);
      await sleep();
    }

    async function computerAttack() {
      const attack = gameLog.computerAttacks.shift();
      playerBoard.receiveAttack(attack.row, attack.col);
      await sleep();
    }

    function done() {
      return (
        gameLog.playerAttacks.length === 0 &&
        gameLog.computerAttacks.length === 0
      );
    }

    // Start game loop
    while (!done()) {
      if (gameLog.playerAttacks.length > 0) {
        await playerAttack();
        playerBoardUI.refresh();
      }
      if (gameLog.computerAttacks.length > 0) {
        await computerAttack();
        computerBoardUI.refresh();
      }
    }

    // Return the promise since we are done
    return new Promise((resolve) => {
      playerBoardUI.refresh();
      computerBoardUI.refresh();
      resolve();
    });
  }

  return { replayGame };
}


/***/ }),

/***/ "./src/gameObjects.js":
/*!****************************!*\
  !*** ./src/gameObjects.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameboard: () => (/* binding */ createGameboard),
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });


function createShip(name, length) {
  // Error checking
  if (length < 1) {
    throw new Error(
      `Cannot create a ship with length (${length}) less than 1!`
    );
  }

  // Private variables
  const _length = length;
  const _name = name;
  let _hitCount = 0;

  // Increments hit count on ship if it is not sunk. Errors if ship is sunk.
  const hit = function () {
    if (isSunk()) {
      throw new Error("Cannot hit a ship that is already sunk!");
    }
    _hitCount += 1;
  };

  // Returns true if ship is sunk, false otherwise
  const isSunk = function () {
    return _hitCount == _length;
  };

  // Returns the name of the ship
  const getName = function () {
    return _name;
  };

  return {
    hit,
    isSunk,
    getName,
  };
}

function createGameboard(boardName) {
  const BOARD_SIZE = 10;

  function getBoardWithFill(fillValue) {
    return [...Array(BOARD_SIZE)].map((e) => Array(BOARD_SIZE).fill(fillValue));
  }

  const _ships = getBoardWithFill(null);
  const _attacks = getBoardWithFill(null);
  let _numShipsLeft = 0;

  function validateRowCol(row, col) {
    if (row < 0 || col < 0 || row >= BOARD_SIZE || col >= BOARD_SIZE) {
      throw new Error(
        `Invalid (row, col) pair (${row}, ${col}) for board dimensions!`
      );
    }
  }

  function validateShipPlacement(length, row, col, orientation) {
    // Check for violations of board boundaries
    try {
      validateRowCol(row, col);
    } catch (e) {
      throw new InvalidShipPlacementError(e.message);
    }
    if (orientation !== "h" && orientation !== "v") {
      throw new InvalidShipPlacementError(
        `Orientation must be 'h' or 'v'! Value provided: ${orientation}`
      );
    }
    if (orientation === "h" && col + length > BOARD_SIZE) {
      throw new InvalidShipPlacementError(
        `Horizontally placing ship of length ${length} at row ${row}, col ${col} would violate board bounds!`
      );
    }
    if (orientation === "v" && row + length > BOARD_SIZE) {
      throw new InvalidShipPlacementError(
        `Vertically placing ship of length ${length} at row ${row}, col ${col} would violate board bounds!`
      );
    }
    // Check if intersects existing ships
    const shipLengthRange = [...Array(length).keys()];
    for (let delta of shipLengthRange) {
      const intersecting =
        orientation === "h"
          ? hasShip(row, col + delta)
          : hasShip(row + delta, col);
      if (intersecting) {
        throw new InvalidShipPlacementError(
          `Ship placement intersects a ship that is already on the board!`
        );
      }
    }
  }

  class InvalidShipPlacementError extends Error {
    constructor(message) {
      super(message);
      this.name = "InvalidShipPlacementError";
    }
  }

  const placeShip = function (name, length, row, col, orientation) {
    validateShipPlacement(length, row, col, orientation);

    const ship = createShip(name, length);
    const locations = [];
    for (let delta = 0; delta < length; delta++) {
      if (orientation == "h") {
        _ships[row][col + delta] = ship;
        locations.push({ row, col: col + delta });
      } else {
        _ships[row + delta][col] = ship;
        locations.push({ row: row + delta, col });
      }
    }
    _numShipsLeft += 1;
  };

  const hasShip = function (row, col) {
    validateRowCol(row, col);
    return _ships[row][col] ? true : false;
  };

  const allShipsSunk = function () {
    return _numShipsLeft === 0;
  };

  const receiveAttack = function (row, col) {
    validateRowCol(row, col);
    if (!attackAllowed(row, col)) {
      throw new Error(`Square at (${row}, ${col}) has already been attacked!`);
    }
    const hitShip = hasShip(row, col);
    _attacks[row][col] = hitShip ? true : false;
    if (hitShip) {
      _ships[row][col].hit();
      _numShipsLeft -= _ships[row][col].isSunk();
    }
    return hitShip;
  };

  const attackStatus = function (row, col) {
    try {
      validateRowCol(row, col);
    } catch {
      return "outOfBounds";
    }
    const status = _attacks[row][col];
    switch (status) {
      case null:
        return "none";
      case false:
        return "miss";
      case true:
        return "hit";
      default:
        throw new Error("Should not reach this line!");
    }
  };

  const attackAllowed = function (row, col) {
    try {
      validateRowCol(row, col);
    } catch {
      return false;
    }
    return attackStatus(row, col) == "none";
  };

  const attackableSpots = function () {
    const attackable = [];
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        if (attackAllowed(r, c)) {
          attackable.push([r, c]);
        }
      }
    }
    return attackable;
  };

  return {
    name: boardName,
    size: BOARD_SIZE,
    placeShip,
    hasShip,
    allShipsSunk,
    receiveAttack,
    attackStatus,
    attackAllowed,
    attackableSpots,
    InvalidShipPlacementError,
  };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");




while (true) {
  // Initialize UI
  const home = _ui_js__WEBPACK_IMPORTED_MODULE_2__.UI.loadHomePage();
  const difficulty = await home.solicitStartGame();
  // Create new game and start
  const game = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.createGame)(difficulty);
  await game.startGame();
}

// REPLAY SAVED GAME
// const replay = createReplay();
// await replay.replayGame(125);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createComputerPlayer: () => (/* binding */ createComputerPlayer),
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });


// HUMAN PLAYER
function createPlayer(board, opponentBoard) {
  const name = "player";

  function attack(row, col) {
    opponentBoard.receiveAttack(row, col);
  }

  async function placeShip(name, length, row, col, orientation) {
    board.placeShip(name, length, row, col, orientation);
    return new Promise((resolve) => resolve());
  }

  return {
    name,
    board,
    placeShip,
    attack,
  };
}

// COMPUTER PLAYER AI
function createComputerPlayer(board, opponentBoard, difficulty) {
  // Start with regular player as template, then override methods
  const computer = createPlayer(board, opponentBoard);

  // Overrides
  computer.name = "computer";

  // Repeatedly tries to place the ship at random until a success.
  // Returns the final placement.
  computer.placeShip = function (name, length) {
    const row = getRandomInt(0, board.size);
    const col = getRandomInt(0, board.size);
    const orientation = getRandomOrientation();
    try {
      computer.board.placeShip(name, length, row, col, orientation);
    } catch (e) {
      if (!(e instanceof board.InvalidShipPlacementError)) throw e;
      return computer.placeShip(name, length);
    }
    return { row, col, orientation };
  };

  // Attack a random spot from the set of all allowable spots
  computer.attack = function () {
    if (difficulty === "easy") {
      return computerAttackLogicEasy();
    } else if (difficulty === "medium") {
      return computerAttackLogicMedium();
    } else {
      throw new Error(`Difficulty level requested (${difficulty}) is invalid!`);
    }
  };

  // EASY DIFFICULTY AI LOGIC
  function computerAttackLogicEasy() {
    const [row, col] = getRandomAttackableSpot(opponentBoard);
    opponentBoard.receiveAttack(row, col);
    return { row, col };
  }

  // MEDIUM DIFFICULTY AI LOGIC
  let mode = "LOCATING"; // LOCATING, ORIENTING, DESTROYING

  const attackHistory = {};
  resetAttackHistory();

  function resetAttackHistory() {
    attackHistory.lastAttack = { row: null, col: null };
    // attackHistory.lastAttackHit = false;
    attackHistory.initialHit = { row: null, col: null };
    attackHistory.orientation = null; // "h" or "v"
    attackHistory.direction = null; // +/- 1
    attackHistory.numDirectionsFinished = 0;
  }

  function computerAttackLogicMedium() {
    let row, col;
    switch (mode) {
      case "LOCATING": {
        return locatingLogic();
      }
      case "ORIENTING": {
        // Last attack was a hit. Now trying to determine orientation of ship
        return orientingLogic();
      }
      case "DESTROYING": {
        // Orientation determined. Destroy ship in one direction, then the other!
        return destroyingLogic();
      }
      default:
        break;
    }
  }

  // LOCATING logic
  function locatingLogic() {
    // Choose a random spot
    const [row, col] = getRandomAttackableSpot(opponentBoard);
    const hit = opponentBoard.receiveAttack(row, col);
    // Update attack history
    attackHistory.lastAttack.row = row;
    attackHistory.lastAttack.col = col;
    // Change states if attack was a hit
    if (hit) {
      attackHistory.initialHit = { row, col };
      mode = "ORIENTING";
    }
    return { row, col };
  }

  // ORIENTING LOGIC
  function orientingLogic() {
    // Attack a random neighbor of initial hit location
    const rowCol = getRandomAttackableNeighbor(
      opponentBoard,
      attackHistory.initialHit.row,
      attackHistory.initialHit.col
    );
    if (!rowCol) {
      // No neighbors are attackable. Go back to LOCATING
      mode = "LOCATING";
      resetAttackHistory();
      return locatingLogic();
    }
    const [row, col] = rowCol;
    const hit = opponentBoard.receiveAttack(row, col);
    // Update attack history
    attackHistory.lastAttack.row = row;
    attackHistory.lastAttack.col = col;
    // Change states if attack was a hit
    if (hit) {
      mode = "DESTROYING";
      attackHistory.orientation =
        row == attackHistory.initialHit.row ? "h" : "v";
      attackHistory.direction =
        attackHistory.orientation === "h"
          ? Math.sign(col - attackHistory.initialHit.col)
          : Math.sign(row - attackHistory.initialHit.row);
      // Look around to see if we are finished with any directions yet
      const nextRowCol = getNextDirectedNeighbor(
        opponentBoard,
        attackHistory.lastAttack.row,
        attackHistory.lastAttack.col,
        attackHistory.orientation,
        attackHistory.direction
      );
      const oppoRowCol = getNextDirectedNeighbor(
        opponentBoard,
        attackHistory.initialHit.row,
        attackHistory.initialHit.col,
        attackHistory.orientation,
        attackHistory.direction * -1
      );
      if (
        !nextRowCol ||
        !opponentBoard.attackAllowed(nextRowCol[0], nextRowCol[1])
      ) {
        attackHistory.numDirectionsFinished += 1;
        attackHistory.direction *= -1;
      }
      if (
        !oppoRowCol ||
        !opponentBoard.attackAllowed(oppoRowCol[0], oppoRowCol[1])
      ) {
        attackHistory.numDirectionsFinished += 1;
      }
      if (attackHistory.numDirectionsFinished === 2) {
        // Go back to LOCATING for next turn
        mode = "LOCATING";
        resetAttackHistory();
      }
    }
    return { row, col };
  }

  // DESTROYING logic
  function destroyingLogic() {
    // Get next attack location
    const rowCol = getNextDirectedNeighbor(
      opponentBoard,
      attackHistory.lastAttack.row,
      attackHistory.lastAttack.col,
      attackHistory.orientation,
      attackHistory.direction
    );

    // If attack is not allowed, need to increment number of finished directions
    if (!rowCol || !opponentBoard.attackAllowed(rowCol[0], rowCol[1])) {
      // We finished this direction
      attackHistory.numDirectionsFinished += 1;
      if (attackHistory.numDirectionsFinished === 1) {
        // Still need to go other direction.
        attackHistory.lastAttack.row = attackHistory.initialHit.row;
        attackHistory.lastAttack.col = attackHistory.initialHit.col;
        attackHistory.direction *= -1;
      } else if (attackHistory.numDirectionsFinished === 2) {
        // Finished both directions
        mode = "LOCATING";
        resetAttackHistory();
        return locatingLogic();
      }
    }

    const [row, col] = rowCol;
    // Attack
    const hit = opponentBoard.receiveAttack(row, col);
    // Update attack history
    attackHistory.lastAttack.row = row;
    attackHistory.lastAttack.col = col;

    // Look ahead to next turn to see if we need to switch our direction.
    // If this turn wasn't a hit or next neighbor (next turn) not attackable, we finished in this direction
    const nextRowCol = getNextDirectedNeighbor(
      opponentBoard,
      row,
      col,
      attackHistory.orientation,
      attackHistory.direction
    );
    if (
      !hit ||
      !nextRowCol ||
      !opponentBoard.attackAllowed(nextRowCol[0], nextRowCol[1])
    ) {
      // We finished this direction
      attackHistory.numDirectionsFinished += 1;
      if (attackHistory.numDirectionsFinished === 1) {
        // Still need to go other direction.
        attackHistory.lastAttack.row = attackHistory.initialHit.row;
        attackHistory.lastAttack.col = attackHistory.initialHit.col;
        attackHistory.direction *= -1;
        // Check again if next
      } else if (attackHistory.numDirectionsFinished === 2) {
        // Finished both directions
        mode = "LOCATING";
        resetAttackHistory();
      }
    }
    return { row, col };
  }

  return computer;
}

// UTILITY FUNCS
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomOrientation() {
  return getRandomInt(0, 2) === 0 ? "h" : "v";
}

function getRandomArrayEntry(array) {
  return array[getRandomInt(0, array.length)];
}

function getRandomAttackableSpot(board) {
  return getRandomArrayEntry(board.attackableSpots());
}

function getRandomAttackableNeighbor(board, row, col) {
  const attackableNeighbors = board.attackableSpots().filter(([aRow, aCol]) => {
    return (
      (oneAway(row, aRow) && col === aCol) ||
      (row === aRow && oneAway(col, aCol))
    );
  });
  return getRandomArrayEntry(attackableNeighbors);
}

function getNextDirectedNeighbor(board, row, col, orientation, direction) {
  const [newRow, newCol] =
    orientation == "h" ? [row, col + direction] : [row + direction, col];
  const attackStatus = board.attackStatus(newRow, newCol);
  if (attackStatus == "outOfBounds") {
    return null;
  }
  if (attackStatus == "hit") {
    // Skip this one
    return getNextDirectedNeighbor(
      board,
      newRow,
      newCol,
      orientation,
      direction
    );
  }
  return [newRow, newCol];
}

function oneAway(a, b) {
  return Math.abs(a - b) === 1;
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });


const UI = (function () {
  // --------------------------
  // HOME PAGE LOADER
  // --------------------------
  function loadHomePage() {
    // ADD HOME PAGE ELEMENTS TO THE DOM
    const body = document.querySelector("body");
    body.innerHTML = `
      <h1>BATTLESHIP</h1>
      <div class="options-container">
        <label for="difficulty">Difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
        </select>
        <button type="button" id="start-game">Start Game</button>
      </div>
      <div class="boards-container"></div>
    `;

    // WAIT FOR USER TO PRESS START GAME BUTTON
    async function solicitStartGame() {
      return new Promise((resolve) => {
        function startGamePressed() {
          const difficulty = getDifficultySelection();
          removeStartGameOptions();
          // Return the difficulty chosen
          resolve(difficulty);
        }
        // Listen for Start Game button clicked
        document
          .querySelector("button#start-game")
          .addEventListener("click", startGamePressed);
      });
    }

    // HELPERS
    function removeStartGameOptions() {
      document.querySelector(".options-container").remove();
    }

    function getDifficultySelection() {
      const select = document.getElementById("difficulty");
      return select.options[select.selectedIndex].value;
    }

    return { solicitStartGame };
  }

  // --------------------------
  // BOARD UI FACTORY FUNCTION
  // --------------------------
  function createBoardUI(board) {
    // ADD BOARD UI TO DOM

    // Create container for board and title
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");
    // Add title
    const titleElem = document.createElement("h2");
    titleElem.innerText = board.name === "player" ? "YOU" : "AI";
    titleElem.classList.add("title");
    boardContainer.appendChild(titleElem);
    // Add board
    const boardElem = document.createElement("div");
    boardElem.classList.add("board");
    boardElem.id = board.name;
    for (let row = 0; row < board.size; row++) {
      for (let col = 0; col < board.size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-square");
        cell.dataset.row = row;
        cell.dataset.col = col;
        boardElem.appendChild(cell);
      }
    }
    boardContainer.appendChild(boardElem);
    document.querySelector(".boards-container").appendChild(boardContainer);

    // REFRESHES THE BOARD UI
    function refresh() {
      for (let row = 0; row < board.size; row++) {
        for (let col = 0; col < board.size; col++) {
          if (board.hasShip(row, col)) {
            addShip(row, col);
          }
          switch (board.attackStatus(row, col)) {
            case "hit":
              addHit(row, col);
              break;
            case "miss":
              addMiss(row, col);
              break;
            case "none":
              // Not attacked
              break;
            default:
              throw new Error(
                "Board attackStatus() method returned an unexpected value!"
              );
          }
        }
      }
    }

    // SOLICITS PLAYER TO PLACE A SHIP USING THE UI
    async function solicitPlaceShip(name, length) {
      // Return promise that resolves when ship successfully placed
      return new Promise((resolve) => {
        let orientation = "h"; // will toggle this with keydown listener on "r"

        // Callback for mouseover that adds shading to cells where ship will be
        // placed if target cell is clicked
        function addGhostShip(event) {
          if (!event.target || !event.target.classList.contains("grid-square"))
            return;
          const cell = event.target;
          const row = parseInt(cell.dataset.row);
          const col = parseInt(cell.dataset.col);
          if (orientation === "h") {
            for (let dcol = 0; dcol < length; dcol++) {
              try {
                getCell(row, col + dcol).classList.add("ghost-ship");
              } catch {
                // Invalid (row,col) -> ignore
                break;
              }
            }
          } else {
            for (let drow = 0; drow < length; drow++) {
              try {
                getCell(row + drow, col).classList.add("ghost-ship");
              } catch {
                // Invalid (row,col) -> ignore
                break;
              }
            }
          }
        }

        // Callback for mouseout that clears all ghost ships from the board
        function clearAllGhostShips() {
          const ghostShips = boardElem.querySelectorAll(
            ".grid-square.ghost-ship"
          );
          ghostShips.forEach((cell) => cell.classList.remove("ghost-ship"));
        }

        // Callback for keydown that rotates the ghost ship if "r" is pressed
        function keyPressed(event) {
          if (event.key.toLowerCase() !== "r") return;
          orientation = orientation == "h" ? "v" : "h";
          clearAllGhostShips();
          // Call the hover callback with a fudged event target to generate the rotated ghost ship
          const target = document.querySelector(".grid-square:hover");
          addGhostShip({ target });
        }

        // Callback when board is clicked that returns the placement chosen
        function boardClicked(event) {
          // Destroy all event listeners and custom hover effect
          removeAllEventListeners();
          clearAllGhostShips();
          // RESOLVE
          resolve({
            row: parseInt(event.target.dataset.row),
            col: parseInt(event.target.dataset.col),
            orientation,
          });
        }

        // Adds all event listeners for ship placement interactivity
        function addAllEventListeners() {
          boardElem.addEventListener("mouseover", addGhostShip);
          boardElem.addEventListener("mouseout", clearAllGhostShips);
          boardElem.addEventListener("click", boardClicked);
          addEventListener("keydown", keyPressed);
        }

        // Removes all event listeners for ship placement interactivity
        function removeAllEventListeners() {
          boardElem.removeEventListener("mouseover", addGhostShip);
          boardElem.removeEventListener("mouseout", clearAllGhostShips);
          boardElem.removeEventListener("click", boardClicked);
          removeEventListener("keydown", keyPressed);
        }

        //  Event listeners
        addAllEventListeners();
      });
    }

    // Solicit an attack using the board UI
    async function solicitAttack() {
      return new Promise((resolve) => {
        function boardClicked(event) {
          boardElem.removeEventListener("click", boardClicked);
          resolve({
            row: parseInt(event.target.dataset.row),
            col: parseInt(event.target.dataset.col),
          });
        }

        boardElem.addEventListener("click", boardClicked);
      });
    }

    // HELPERS

    // Get cell DOM element by (row, col) index
    function getCell(row, col) {
      return boardElem.querySelector(
        `.grid-square[data-row="${row}"][data-col="${col}"]`
      );
    }

    // Add ship to cell
    function addShip(row, col) {
      getCell(row, col).classList.add("has-ship");
    }

    // Add hit to cell
    function addHit(row, col) {
      getCell(row, col).classList.add("hit");
    }

    // Add miss to cell
    function addMiss(row, col) {
      getCell(row, col).classList.add("miss");
    }

    return { refresh, solicitPlaceShip, solicitAttack };
  }

  // GAME OVER DISPLAY
  async function displayGameOver(winner) {
    // Add game over display to DOM
    document
      .querySelector(".boards-container")
      .appendChild(getGameOverElement(winner));
    // Wait for user to click the restart button
    return new Promise((resolve) => {
      function playAgainPressed() {
        resolve();
      }
      document
        .querySelector("button#play-again")
        .addEventListener("click", playAgainPressed);
    });
  }

  function getGameOverElement(winner) {
    const container = document.createElement("div");
    container.id = "game-over-container";
    const message =
      winner === "player" ? "Game Over! You won!" : "Game Over! You lost!";
    container.innerHTML = `
      <div id="game-over-message">${message}</div>
      <button type="button" id="play-again">Play Again</button>
    `;
    return container;
  }

  return { loadHomePage, createBoardUI, displayGameOver };
})();


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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUM7QUFDakMsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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dEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RoaW5nK1lvdStDb3VsZCtEbyZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9UGxheXBlbitTYW5zOndnaHRANDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmZhbWlseT1Tb21ldHlwZStNb25vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogU0hPVyBDT01QVVRFUiBTSElQUyAoRk9SIFRFU1RJTkcpICovXG4vKiAuYm9hcmQgLmdyaWQtc3F1YXJlLmhhcy1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg2LCAxOTApO1xufSAqL1xuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiU29tZXR5cGUgTW9ub1wiLCBtb25vc3BhY2U7XG59XG5cbmJvZHksXG5oMSxcbmgyLFxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbmJ1dHRvbiNzdGFydC1nYW1lIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDQwcHg7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ncmlkLXNxdWFyZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLmdyaWQtc3F1YXJlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xufVxuXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5oYXMtc2hpcCxcbi5ib2FyZCNwbGF5ZXIgLmdyaWQtc3F1YXJlLmdob3N0LXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODYsIDE5MCk7XG59XG5cbi5ib2FyZCNwbGF5ZXIgLmdyaWQtc3F1YXJlLmhhcy1zaGlwLmhpdCxcbi5ib2FyZCNjb21wdXRlciAuZ3JpZC1zcXVhcmUuaGFzLXNoaXAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMCwgMCk7XG59XG5cbi5ib2FyZCAuZ3JpZC1zcXVhcmUubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MywgMjAwKTtcbn1cblxuI2dhbWUtb3Zlci1jb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IGdyYXk7XG59XG5cbiNnYW1lLW92ZXItY29udGFpbmVyIGJ1dHRvbiNwbGF5LWFnYWluIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTI1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCAyMTAgMjEyKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLHNDQUFzQztBQUN0Qzs7R0FFRzs7QUFFSDtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTs7OztFQUlFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90aGluZytZb3UrQ291bGQrRG8mZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVBsYXlwZW4rU2Fuczp3Z2h0QDQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZmYW1pbHk9U29tZXR5cGUrTW9ubyZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBTSE9XIENPTVBVVEVSIFNISVBTIChGT1IgVEVTVElORykgKi9cXG4vKiAuYm9hcmQgLmdyaWQtc3F1YXJlLmhhcy1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4NiwgMTkwKTtcXG59ICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIlNvbWV0eXBlIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxufVxcblxcbmJvZHksXFxuaDEsXFxuaDIsXFxuYnV0dG9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjRweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbmJ1dHRvbiNzdGFydC1nYW1lIHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdyaWQtc3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XFxufVxcblxcbi5ib2FyZCNwbGF5ZXIgLmdyaWQtc3F1YXJlLmhhcy1zaGlwLFxcbi5ib2FyZCNwbGF5ZXIgLmdyaWQtc3F1YXJlLmdob3N0LXNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg2LCAxOTApO1xcbn1cXG5cXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5oYXMtc2hpcC5oaXQsXFxuLmJvYXJkI2NvbXB1dGVyIC5ncmlkLXNxdWFyZS5oYXMtc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMCwgMCk7XFxufVxcblxcbi5ib2FyZCAuZ3JpZC1zcXVhcmUubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTMsIDIwMCk7XFxufVxcblxcbiNnYW1lLW92ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICBib3gtc2hhZG93OiAycHggNHB4IDhweCBncmF5O1xcbn1cXG5cXG4jZ2FtZS1vdmVyLWNvbnRhaW5lciBidXR0b24jcGxheS1hZ2FpbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTI1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCAyMTAgMjEyKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVPYmplY3RzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIsIGNyZWF0ZUNvbXB1dGVyUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpLmpzXCI7XG5leHBvcnQgeyBjcmVhdGVHYW1lLCBjcmVhdGVSZXBsYXkgfTtcblxuY29uc3QgY3JlYXRlR2FtZSA9IGZ1bmN0aW9uIChkaWZmaWN1bHR5KSB7XG4gIGxldCBwbGF5ZXIsIGNvbXB1dGVyO1xuICBsZXQgcGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQ7XG4gIGxldCBwbGF5ZXJCb2FyZFVJLCBjb21wdXRlckJvYXJkVUk7XG4gIGNvbnN0IGdhbWVMb2cgPSB7XG4gICAgcGxheWVyU2hpcHM6IFtdLFxuICAgIGNvbXB1dGVyU2hpcHM6IFtdLFxuICAgIHBsYXllckF0dGFja3M6IFtdLFxuICAgIGNvbXB1dGVyQXR0YWNrczogW10sXG4gIH07XG4gIGxldCBjdXJyUGxheWVyO1xuXG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIENhcnJpZXI6IDUsXG4gICAgQmF0dGxlc2hpcDogNCxcbiAgICBEZXN0cm95ZXI6IDMsXG4gICAgU3VibWFyaW5lOiAzLFxuICAgIFwiUGF0cm9sIEJvYXRcIjogMixcbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIENyZWF0ZSBib2FyZHNcbiAgICAgIHBsYXllckJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyXCIpO1xuICAgICAgY29tcHV0ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcImNvbXB1dGVyXCIpO1xuXG4gICAgICAvLyBDcmVhdGUgYm9hcmQgVUlzXG4gICAgICBwbGF5ZXJCb2FyZFVJID0gVUkuY3JlYXRlQm9hcmRVSShwbGF5ZXJCb2FyZCk7XG4gICAgICBjb21wdXRlckJvYXJkVUkgPSBVSS5jcmVhdGVCb2FyZFVJKGNvbXB1dGVyQm9hcmQpO1xuXG4gICAgICAvLyBDcmVhdGUgcGxheWVyc1xuICAgICAgcGxheWVyID0gY3JlYXRlUGxheWVyKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKTtcbiAgICAgIGNvbXB1dGVyID0gY3JlYXRlQ29tcHV0ZXJQbGF5ZXIoY29tcHV0ZXJCb2FyZCwgcGxheWVyQm9hcmQsIGRpZmZpY3VsdHkpO1xuXG4gICAgICAvLyBMZXQgcGxheWVycyBwbGFjZSB0aGVpciBzaGlwc1xuICAgICAgYXdhaXQgcGxheWVyUGxhY2VTaGlwcygpO1xuICAgICAgcGxheWVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICBjb21wdXRlclBsYWNlU2hpcHMoKTtcbiAgICAgIGNvbXB1dGVyQm9hcmRVSS5yZWZyZXNoKCk7XG5cbiAgICAgIC8vIFN0YXJ0IGdhbWUgbG9vcFxuICAgICAgYXdhaXQgZ2FtZUxvb3AoKTtcbiAgICAgIGNvbnN0IHBsYXlBZ2FpbiA9IHRydWU7XG4gICAgICBzYXZlR2FtZUxvZygpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKHBsYXlBZ2FpbikpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFNhdmUgZ2FtZSBsb2cgc28gZ2FtZSBjYW4gYmUgcmVzdGltdWxhdGVkIHRvIGRlYnVnIGVycm9yXG4gICAgICBzYXZlR2FtZUxvZygpO1xuICAgICAgYWxlcnQoXCJGQVRBTCBFUlJPUjogR2FtZSBsb2cgc2VudCB0byBkZXZlbG9wZXJzIGZvciB0cm91Ymxlc2hvb3RpbmchXCIpO1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUodHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHBsYXllclBsYWNlU2hpcHMoKSB7XG4gICAgLy8gUkVBTCBJTVBMRU1UQVRJT05cbiAgICBmb3IgKGNvbnN0IFtzaGlwTmFtZSwgc2hpcExlbmd0aF0gb2YgT2JqZWN0LmVudHJpZXMoc2hpcHMpKSB7XG4gICAgICAvLyBTb2xpY2l0IHBsYXllciB0byBpbnRlcmFjdCB3aXRoIFVJXG4gICAgICBhd2FpdCBzb2xpY2l0UGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoKTtcbiAgICAgIC8vIFJlZnJlc2ggVUlcbiAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNvbGljaXRQbGFjZVNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gICAgY29uc29sZS5sb2coYHdhaXRpbmcgdG8gcGxhY2UgJHtuYW1lfWApO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IGF3YWl0IHBsYXllckJvYXJkVUkuc29saWNpdFBsYWNlU2hpcChuYW1lLCBsZW5ndGgpO1xuICAgIC8vIEdldCBVSSBpbnB1dCBhbmQgcGxhY2Ugb24gYm9hcmRcbiAgICB0cnkge1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBuYW1lLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIHBsYWNlbWVudC5yb3csXG4gICAgICAgIHBsYWNlbWVudC5jb2wsXG4gICAgICAgIHBsYWNlbWVudC5vcmllbnRhdGlvblxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIHBsYXllckJvYXJkLkludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IpIHtcbiAgICAgICAgLy8gVHJ5IGFnYWluXG4gICAgICAgIGF3YWl0IHNvbGljaXRQbGFjZVNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVW5leHBlY3RlZCBlcnJvclxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lTG9nLnBsYXllclNoaXBzLnB1c2goeyBuYW1lLCBsZW5ndGgsIC4uLnBsYWNlbWVudCB9KTtcbiAgfVxuXG4gIC8vIChGT1IgVEVTVElORykgQXV0b21hdGljYWxseSBwbGFjZXMgcGxheWVycyBzaGlwcyBpbiB0b3AtbGVmdCBjb3JuZXJcbiAgYXN5bmMgZnVuY3Rpb24gc29saWNpdFBsYWNlU2hpcEF1dG8obmFtZSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgcGxheWVyUGxhY2VtZW50ID0ge1xuICAgICAgQ2FycmllcjogeyByb3c6IDAsIGNvbDogMCwgb3JpZW50YXRpb246IFwiaFwiIH0sXG4gICAgICBCYXR0bGVzaGlwOiB7IHJvdzogMSwgY29sOiAwLCBvcmllbnRhdGlvbjogXCJoXCIgfSxcbiAgICAgIERlc3Ryb3llcjogeyByb3c6IDIsIGNvbDogMCwgb3JpZW50YXRpb246IFwiaFwiIH0sXG4gICAgICBTdWJtYXJpbmU6IHsgcm93OiAzLCBjb2w6IDAsIG9yaWVudGF0aW9uOiBcImhcIiB9LFxuICAgICAgXCJQYXRyb2wgQm9hdFwiOiB7IHJvdzogNCwgY29sOiAwLCBvcmllbnRhdGlvbjogXCJoXCIgfSxcbiAgICB9O1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHBsYXllclBsYWNlbWVudFtuYW1lXTtcbiAgICBwbGF5ZXIucGxhY2VTaGlwKFxuICAgICAgbmFtZSxcbiAgICAgIGxlbmd0aCxcbiAgICAgIHBsYWNlbWVudC5yb3csXG4gICAgICBwbGFjZW1lbnQuY29sLFxuICAgICAgcGxhY2VtZW50Lm9yaWVudGF0aW9uXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcHMoKSB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbGVuZ3RoXSBvZiBPYmplY3QuZW50cmllcyhzaGlwcykpIHtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGNvbXB1dGVyLnBsYWNlU2hpcChuYW1lLCBsZW5ndGgpO1xuICAgICAgZ2FtZUxvZy5jb21wdXRlclNoaXBzLnB1c2goeyBuYW1lLCBsZW5ndGgsIC4uLnBsYWNlbWVudCB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gcGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgY29tcHV0ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NHYW1lT3Zlcih3aW5uaW5nUGxheWVyKSB7XG4gICAgYXdhaXQgVUkuZGlzcGxheUdhbWVPdmVyKHdpbm5pbmdQbGF5ZXIubmFtZSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgbGV0IGN1cnJQbGF5ZXIgPSBwbGF5ZXI7XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgICBjdXJyUGxheWVyID0gY3VyclBsYXllciA9PSBwbGF5ZXIgPyBjb21wdXRlciA6IHBsYXllcjtcbiAgICB9XG5cbiAgICB3aGlsZSAoIWdhbWVPdmVyKCkpIHtcbiAgICAgIC8vIFdhaXQgZm9yIHBsYXllciB0byB0YWtlIHR1cm5cbiAgICAgIGlmIChjdXJyUGxheWVyID09PSBwbGF5ZXIpIHtcbiAgICAgICAgLy8gU29saWNpdCBhdHRhY2sgc3BvdCBmcm9tIFVJXG4gICAgICAgIGNvbnN0IGxvYyA9IGF3YWl0IHNvbGljaXRQbGF5ZXJBdHRhY2soKTtcbiAgICAgICAgZ2FtZUxvZy5wbGF5ZXJBdHRhY2tzLnB1c2gobG9jKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbXB1dGVyIGF0dGFja3NcbiAgICAgICAgY29uc3QgbG9jID0gY29tcHV0ZXIuYXR0YWNrKCk7XG4gICAgICAgIGdhbWVMb2cuY29tcHV0ZXJBdHRhY2tzLnB1c2gobG9jKTtcbiAgICAgICAgcGxheWVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICAvLyBOZXh0IHBsYXllcidzIHR1cm5cbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgIH1cblxuICAgIHN3aXRjaFBsYXllcigpOyAvLyBzd2l0Y2ggc28gY3VyclBsYXllciBpcyB3aW5uZXJcbiAgICBhd2FpdCBwcm9jZXNzR2FtZU92ZXIoY3VyclBsYXllcik7XG5cbiAgICAvLyBHYW1lIGlzIG92ZXIuIFJlc29sdmUgdGhlIHByb21pc2UuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzb2xpY2l0UGxheWVyQXR0YWNrKCkge1xuICAgIGNvbnN0IGxvYyA9IGF3YWl0IGNvbXB1dGVyQm9hcmRVSS5zb2xpY2l0QXR0YWNrKCk7XG4gICAgdHJ5IHtcbiAgICAgIHBsYXllci5hdHRhY2sobG9jLnJvdywgbG9jLmNvbCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gYXdhaXQgc29saWNpdFBsYXllckF0dGFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUobG9jKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlR2FtZUxvZygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdhbWVMb2dcIiwgSlNPTi5zdHJpbmdpZnkoZ2FtZUxvZykpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydEdhbWUsXG4gIH07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXBsYXkoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlcGxheUdhbWUoZGVsYXkpIHtcbiAgICAvLyBJTklUSUFMSVpFIEdBTUVcbiAgICBjb25zdCBnYW1lTG9nID0gbG9hZEdhbWVMb2coKTtcblxuICAgIC8vIExvYWQgdGhlIGdhbWVMb2dcbiAgICBmdW5jdGlvbiBsb2FkR2FtZUxvZygpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2FtZUxvZ1wiKSk7XG4gICAgfVxuXG4gICAgLy8gU2xlZXBcbiAgICBhc3luYyBmdW5jdGlvbiBzbGVlcCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHBsYXllclBsYWNlU2hpcHMoKSB7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIGdhbWVMb2cucGxheWVyU2hpcHMpIHtcbiAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIHNoaXAubmFtZSxcbiAgICAgICAgICBzaGlwLmxlbmd0aCxcbiAgICAgICAgICBzaGlwLnJvdyxcbiAgICAgICAgICBzaGlwLmNvbCxcbiAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgICBhd2FpdCBzbGVlcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbXB1dGVyUGxhY2VTaGlwcygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgZ2FtZUxvZy5jb21wdXRlclNoaXBzKSB7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIHNoaXAubmFtZSxcbiAgICAgICAgICBzaGlwLmxlbmd0aCxcbiAgICAgICAgICBzaGlwLnJvdyxcbiAgICAgICAgICBzaGlwLmNvbCxcbiAgICAgICAgICBzaGlwLm9yaWVudGF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICAgIGF3YWl0IHNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGJvYXJkc1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwicGxheWVyXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoXCJjb21wdXRlclwiKTtcblxuICAgIC8vIENyZWF0ZSBib2FyZCBVSXNcbiAgICBjb25zdCBwbGF5ZXJCb2FyZFVJID0gVUkuY3JlYXRlQm9hcmRVSShwbGF5ZXJCb2FyZCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFVJID0gVUkuY3JlYXRlQm9hcmRVSShjb21wdXRlckJvYXJkKTtcblxuICAgIC8vIExldCBwbGF5ZXJzIHBsYWNlIHRoZWlyIHNoaXBzXG4gICAgYXdhaXQgcGxheWVyUGxhY2VTaGlwcygpO1xuICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgIGF3YWl0IGNvbXB1dGVyUGxhY2VTaGlwcygpO1xuICAgIGNvbXB1dGVyQm9hcmRVSS5yZWZyZXNoKCk7XG5cbiAgICAvLyBHQU1FIExPT1BcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHBsYXllckF0dGFjaygpIHtcbiAgICAgIGNvbnN0IGF0dGFjayA9IGdhbWVMb2cucGxheWVyQXR0YWNrcy5zaGlmdCgpO1xuICAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjay5yb3csIGF0dGFjay5jb2wpO1xuICAgICAgYXdhaXQgc2xlZXAoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpIHtcbiAgICAgIGNvbnN0IGF0dGFjayA9IGdhbWVMb2cuY29tcHV0ZXJBdHRhY2tzLnNoaWZ0KCk7XG4gICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjay5yb3csIGF0dGFjay5jb2wpO1xuICAgICAgYXdhaXQgc2xlZXAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZ2FtZUxvZy5wbGF5ZXJBdHRhY2tzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICBnYW1lTG9nLmNvbXB1dGVyQXR0YWNrcy5sZW5ndGggPT09IDBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgZ2FtZSBsb29wXG4gICAgd2hpbGUgKCFkb25lKCkpIHtcbiAgICAgIGlmIChnYW1lTG9nLnBsYXllckF0dGFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBwbGF5ZXJBdHRhY2soKTtcbiAgICAgICAgcGxheWVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAoZ2FtZUxvZy5jb21wdXRlckF0dGFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCBjb21wdXRlckF0dGFjaygpO1xuICAgICAgICBjb21wdXRlckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgcHJvbWlzZSBzaW5jZSB3ZSBhcmUgZG9uZVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcGxheWVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICBjb21wdXRlckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgcmVwbGF5R2FtZSB9O1xufVxuIiwiZXhwb3J0IHsgY3JlYXRlU2hpcCwgY3JlYXRlR2FtZWJvYXJkIH07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gIC8vIEVycm9yIGNoZWNraW5nXG4gIGlmIChsZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYENhbm5vdCBjcmVhdGUgYSBzaGlwIHdpdGggbGVuZ3RoICgke2xlbmd0aH0pIGxlc3MgdGhhbiAxIWBcbiAgICApO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSB2YXJpYWJsZXNcbiAgY29uc3QgX2xlbmd0aCA9IGxlbmd0aDtcbiAgY29uc3QgX25hbWUgPSBuYW1lO1xuICBsZXQgX2hpdENvdW50ID0gMDtcblxuICAvLyBJbmNyZW1lbnRzIGhpdCBjb3VudCBvbiBzaGlwIGlmIGl0IGlzIG5vdCBzdW5rLiBFcnJvcnMgaWYgc2hpcCBpcyBzdW5rLlxuICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzU3VuaygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaGl0IGEgc2hpcCB0aGF0IGlzIGFscmVhZHkgc3VuayFcIik7XG4gICAgfVxuICAgIF9oaXRDb3VudCArPSAxO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBzaGlwIGlzIHN1bmssIGZhbHNlIG90aGVyd2lzZVxuICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9oaXRDb3VudCA9PSBfbGVuZ3RoO1xuICB9O1xuXG4gIC8vIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHNoaXBcbiAgY29uc3QgZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX25hbWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGdldE5hbWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZChib2FyZE5hbWUpIHtcbiAgY29uc3QgQk9BUkRfU0laRSA9IDEwO1xuXG4gIGZ1bmN0aW9uIGdldEJvYXJkV2l0aEZpbGwoZmlsbFZhbHVlKSB7XG4gICAgcmV0dXJuIFsuLi5BcnJheShCT0FSRF9TSVpFKV0ubWFwKChlKSA9PiBBcnJheShCT0FSRF9TSVpFKS5maWxsKGZpbGxWYWx1ZSkpO1xuICB9XG5cbiAgY29uc3QgX3NoaXBzID0gZ2V0Qm9hcmRXaXRoRmlsbChudWxsKTtcbiAgY29uc3QgX2F0dGFja3MgPSBnZXRCb2FyZFdpdGhGaWxsKG51bGwpO1xuICBsZXQgX251bVNoaXBzTGVmdCA9IDA7XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVSb3dDb2wocm93LCBjb2wpIHtcbiAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwIHx8IHJvdyA+PSBCT0FSRF9TSVpFIHx8IGNvbCA+PSBCT0FSRF9TSVpFKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbnZhbGlkIChyb3csIGNvbCkgcGFpciAoJHtyb3d9LCAke2NvbH0pIGZvciBib2FyZCBkaW1lbnNpb25zIWBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVTaGlwUGxhY2VtZW50KGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gQ2hlY2sgZm9yIHZpb2xhdGlvbnMgb2YgYm9hcmQgYm91bmRhcmllc1xuICAgIHRyeSB7XG4gICAgICB2YWxpZGF0ZVJvd0NvbChyb3csIGNvbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IoZS5tZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uICE9PSBcImhcIiAmJiBvcmllbnRhdGlvbiAhPT0gXCJ2XCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yKFxuICAgICAgICBgT3JpZW50YXRpb24gbXVzdCBiZSAnaCcgb3IgJ3YnISBWYWx1ZSBwcm92aWRlZDogJHtvcmllbnRhdGlvbn1gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaFwiICYmIGNvbCArIGxlbmd0aCA+IEJPQVJEX1NJWkUpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yKFxuICAgICAgICBgSG9yaXpvbnRhbGx5IHBsYWNpbmcgc2hpcCBvZiBsZW5ndGggJHtsZW5ndGh9IGF0IHJvdyAke3Jvd30sIGNvbCAke2NvbH0gd291bGQgdmlvbGF0ZSBib2FyZCBib3VuZHMhYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZcIiAmJiByb3cgKyBsZW5ndGggPiBCT0FSRF9TSVpFKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcihcbiAgICAgICAgYFZlcnRpY2FsbHkgcGxhY2luZyBzaGlwIG9mIGxlbmd0aCAke2xlbmd0aH0gYXQgcm93ICR7cm93fSwgY29sICR7Y29sfSB3b3VsZCB2aW9sYXRlIGJvYXJkIGJvdW5kcyFgXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBpbnRlcnNlY3RzIGV4aXN0aW5nIHNoaXBzXG4gICAgY29uc3Qgc2hpcExlbmd0aFJhbmdlID0gWy4uLkFycmF5KGxlbmd0aCkua2V5cygpXTtcbiAgICBmb3IgKGxldCBkZWx0YSBvZiBzaGlwTGVuZ3RoUmFuZ2UpIHtcbiAgICAgIGNvbnN0IGludGVyc2VjdGluZyA9XG4gICAgICAgIG9yaWVudGF0aW9uID09PSBcImhcIlxuICAgICAgICAgID8gaGFzU2hpcChyb3csIGNvbCArIGRlbHRhKVxuICAgICAgICAgIDogaGFzU2hpcChyb3cgKyBkZWx0YSwgY29sKTtcbiAgICAgIGlmIChpbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IoXG4gICAgICAgICAgYFNoaXAgcGxhY2VtZW50IGludGVyc2VjdHMgYSBzaGlwIHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgYm9hcmQhYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsYXNzIEludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICB0aGlzLm5hbWUgPSBcIkludmFsaWRTaGlwUGxhY2VtZW50RXJyb3JcIjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbGFjZVNoaXAgPSBmdW5jdGlvbiAobmFtZSwgbGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pIHtcbiAgICB2YWxpZGF0ZVNoaXBQbGFjZW1lbnQobGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pO1xuXG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICBjb25zdCBsb2NhdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBkZWx0YSA9IDA7IGRlbHRhIDwgbGVuZ3RoOyBkZWx0YSsrKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT0gXCJoXCIpIHtcbiAgICAgICAgX3NoaXBzW3Jvd11bY29sICsgZGVsdGFdID0gc2hpcDtcbiAgICAgICAgbG9jYXRpb25zLnB1c2goeyByb3csIGNvbDogY29sICsgZGVsdGEgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc2hpcHNbcm93ICsgZGVsdGFdW2NvbF0gPSBzaGlwO1xuICAgICAgICBsb2NhdGlvbnMucHVzaCh7IHJvdzogcm93ICsgZGVsdGEsIGNvbCB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgX251bVNoaXBzTGVmdCArPSAxO1xuICB9O1xuXG4gIGNvbnN0IGhhc1NoaXAgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgICB2YWxpZGF0ZVJvd0NvbChyb3csIGNvbCk7XG4gICAgcmV0dXJuIF9zaGlwc1tyb3ddW2NvbF0gPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbnVtU2hpcHNMZWZ0ID09PSAwO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgICB2YWxpZGF0ZVJvd0NvbChyb3csIGNvbCk7XG4gICAgaWYgKCFhdHRhY2tBbGxvd2VkKHJvdywgY29sKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcXVhcmUgYXQgKCR7cm93fSwgJHtjb2x9KSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkIWApO1xuICAgIH1cbiAgICBjb25zdCBoaXRTaGlwID0gaGFzU2hpcChyb3csIGNvbCk7XG4gICAgX2F0dGFja3Nbcm93XVtjb2xdID0gaGl0U2hpcCA/IHRydWUgOiBmYWxzZTtcbiAgICBpZiAoaGl0U2hpcCkge1xuICAgICAgX3NoaXBzW3Jvd11bY29sXS5oaXQoKTtcbiAgICAgIF9udW1TaGlwc0xlZnQgLT0gX3NoaXBzW3Jvd11bY29sXS5pc1N1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdFNoaXA7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrU3RhdHVzID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbGlkYXRlUm93Q29sKHJvdywgY29sKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBcIm91dE9mQm91bmRzXCI7XG4gICAgfVxuICAgIGNvbnN0IHN0YXR1cyA9IF9hdHRhY2tzW3Jvd11bY29sXTtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSBudWxsOlxuICAgICAgICByZXR1cm4gXCJub25lXCI7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hvdWxkIG5vdCByZWFjaCB0aGlzIGxpbmUhXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2tBbGxvd2VkID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbGlkYXRlUm93Q29sKHJvdywgY29sKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja1N0YXR1cyhyb3csIGNvbCkgPT0gXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrYWJsZVNwb3RzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGF0dGFja2FibGUgPSBbXTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IEJPQVJEX1NJWkU7IHIrKykge1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBCT0FSRF9TSVpFOyBjKyspIHtcbiAgICAgICAgaWYgKGF0dGFja0FsbG93ZWQociwgYykpIHtcbiAgICAgICAgICBhdHRhY2thYmxlLnB1c2goW3IsIGNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXR0YWNrYWJsZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IGJvYXJkTmFtZSxcbiAgICBzaXplOiBCT0FSRF9TSVpFLFxuICAgIHBsYWNlU2hpcCxcbiAgICBoYXNTaGlwLFxuICAgIGFsbFNoaXBzU3VuayxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGF0dGFja1N0YXR1cyxcbiAgICBhdHRhY2tBbGxvd2VkLFxuICAgIGF0dGFja2FibGVTcG90cyxcbiAgICBJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yLFxuICB9O1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUdhbWUsIGNyZWF0ZVJlcGxheSB9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcIi4vdWkuanNcIjtcblxud2hpbGUgKHRydWUpIHtcbiAgLy8gSW5pdGlhbGl6ZSBVSVxuICBjb25zdCBob21lID0gVUkubG9hZEhvbWVQYWdlKCk7XG4gIGNvbnN0IGRpZmZpY3VsdHkgPSBhd2FpdCBob21lLnNvbGljaXRTdGFydEdhbWUoKTtcbiAgLy8gQ3JlYXRlIG5ldyBnYW1lIGFuZCBzdGFydFxuICBjb25zdCBnYW1lID0gY3JlYXRlR2FtZShkaWZmaWN1bHR5KTtcbiAgYXdhaXQgZ2FtZS5zdGFydEdhbWUoKTtcbn1cblxuLy8gUkVQTEFZIFNBVkVEIEdBTUVcbi8vIGNvbnN0IHJlcGxheSA9IGNyZWF0ZVJlcGxheSgpO1xuLy8gYXdhaXQgcmVwbGF5LnJlcGxheUdhbWUoMTI1KTtcbiIsImV4cG9ydCB7IGNyZWF0ZVBsYXllciwgY3JlYXRlQ29tcHV0ZXJQbGF5ZXIgfTtcblxuLy8gSFVNQU4gUExBWUVSXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIoYm9hcmQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgY29uc3QgbmFtZSA9IFwicGxheWVyXCI7XG5cbiAgZnVuY3Rpb24gYXR0YWNrKHJvdywgY29sKSB7XG4gICAgb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xuICAgIGJvYXJkLnBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICBhdHRhY2ssXG4gIH07XG59XG5cbi8vIENPTVBVVEVSIFBMQVlFUiBBSVxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJQbGF5ZXIoYm9hcmQsIG9wcG9uZW50Qm9hcmQsIGRpZmZpY3VsdHkpIHtcbiAgLy8gU3RhcnQgd2l0aCByZWd1bGFyIHBsYXllciBhcyB0ZW1wbGF0ZSwgdGhlbiBvdmVycmlkZSBtZXRob2RzXG4gIGNvbnN0IGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKGJvYXJkLCBvcHBvbmVudEJvYXJkKTtcblxuICAvLyBPdmVycmlkZXNcbiAgY29tcHV0ZXIubmFtZSA9IFwiY29tcHV0ZXJcIjtcblxuICAvLyBSZXBlYXRlZGx5IHRyaWVzIHRvIHBsYWNlIHRoZSBzaGlwIGF0IHJhbmRvbSB1bnRpbCBhIHN1Y2Nlc3MuXG4gIC8vIFJldHVybnMgdGhlIGZpbmFsIHBsYWNlbWVudC5cbiAgY29tcHV0ZXIucGxhY2VTaGlwID0gZnVuY3Rpb24gKG5hbWUsIGxlbmd0aCkge1xuICAgIGNvbnN0IHJvdyA9IGdldFJhbmRvbUludCgwLCBib2FyZC5zaXplKTtcbiAgICBjb25zdCBjb2wgPSBnZXRSYW5kb21JbnQoMCwgYm9hcmQuc2l6ZSk7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBnZXRSYW5kb21PcmllbnRhdGlvbigpO1xuICAgIHRyeSB7XG4gICAgICBjb21wdXRlci5ib2FyZC5wbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBib2FyZC5JbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yKSkgdGhyb3cgZTtcbiAgICAgIHJldHVybiBjb21wdXRlci5wbGFjZVNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcm93LCBjb2wsIG9yaWVudGF0aW9uIH07XG4gIH07XG5cbiAgLy8gQXR0YWNrIGEgcmFuZG9tIHNwb3QgZnJvbSB0aGUgc2V0IG9mIGFsbCBhbGxvd2FibGUgc3BvdHNcbiAgY29tcHV0ZXIuYXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkaWZmaWN1bHR5ID09PSBcImVhc3lcIikge1xuICAgICAgcmV0dXJuIGNvbXB1dGVyQXR0YWNrTG9naWNFYXN5KCk7XG4gICAgfSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICByZXR1cm4gY29tcHV0ZXJBdHRhY2tMb2dpY01lZGl1bSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERpZmZpY3VsdHkgbGV2ZWwgcmVxdWVzdGVkICgke2RpZmZpY3VsdHl9KSBpcyBpbnZhbGlkIWApO1xuICAgIH1cbiAgfTtcblxuICAvLyBFQVNZIERJRkZJQ1VMVFkgQUkgTE9HSUNcbiAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2tMb2dpY0Vhc3koKSB7XG4gICAgY29uc3QgW3JvdywgY29sXSA9IGdldFJhbmRvbUF0dGFja2FibGVTcG90KG9wcG9uZW50Qm9hcmQpO1xuICAgIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgfVxuXG4gIC8vIE1FRElVTSBESUZGSUNVTFRZIEFJIExPR0lDXG4gIGxldCBtb2RlID0gXCJMT0NBVElOR1wiOyAvLyBMT0NBVElORywgT1JJRU5USU5HLCBERVNUUk9ZSU5HXG5cbiAgY29uc3QgYXR0YWNrSGlzdG9yeSA9IHt9O1xuICByZXNldEF0dGFja0hpc3RvcnkoKTtcblxuICBmdW5jdGlvbiByZXNldEF0dGFja0hpc3RvcnkoKSB7XG4gICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrID0geyByb3c6IG51bGwsIGNvbDogbnVsbCB9O1xuICAgIC8vIGF0dGFja0hpc3RvcnkubGFzdEF0dGFja0hpdCA9IGZhbHNlO1xuICAgIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdCA9IHsgcm93OiBudWxsLCBjb2w6IG51bGwgfTtcbiAgICBhdHRhY2tIaXN0b3J5Lm9yaWVudGF0aW9uID0gbnVsbDsgLy8gXCJoXCIgb3IgXCJ2XCJcbiAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvbiA9IG51bGw7IC8vICsvLSAxXG4gICAgYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgPSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2tMb2dpY01lZGl1bSgpIHtcbiAgICBsZXQgcm93LCBjb2w7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIFwiTE9DQVRJTkdcIjoge1xuICAgICAgICByZXR1cm4gbG9jYXRpbmdMb2dpYygpO1xuICAgICAgfVxuICAgICAgY2FzZSBcIk9SSUVOVElOR1wiOiB7XG4gICAgICAgIC8vIExhc3QgYXR0YWNrIHdhcyBhIGhpdC4gTm93IHRyeWluZyB0byBkZXRlcm1pbmUgb3JpZW50YXRpb24gb2Ygc2hpcFxuICAgICAgICByZXR1cm4gb3JpZW50aW5nTG9naWMoKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJERVNUUk9ZSU5HXCI6IHtcbiAgICAgICAgLy8gT3JpZW50YXRpb24gZGV0ZXJtaW5lZC4gRGVzdHJveSBzaGlwIGluIG9uZSBkaXJlY3Rpb24sIHRoZW4gdGhlIG90aGVyIVxuICAgICAgICByZXR1cm4gZGVzdHJveWluZ0xvZ2ljKCk7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBMT0NBVElORyBsb2dpY1xuICBmdW5jdGlvbiBsb2NhdGluZ0xvZ2ljKCkge1xuICAgIC8vIENob29zZSBhIHJhbmRvbSBzcG90XG4gICAgY29uc3QgW3JvdywgY29sXSA9IGdldFJhbmRvbUF0dGFja2FibGVTcG90KG9wcG9uZW50Qm9hcmQpO1xuICAgIGNvbnN0IGhpdCA9IG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgLy8gVXBkYXRlIGF0dGFjayBoaXN0b3J5XG4gICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLnJvdyA9IHJvdztcbiAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2suY29sID0gY29sO1xuICAgIC8vIENoYW5nZSBzdGF0ZXMgaWYgYXR0YWNrIHdhcyBhIGhpdFxuICAgIGlmIChoaXQpIHtcbiAgICAgIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdCA9IHsgcm93LCBjb2wgfTtcbiAgICAgIG1vZGUgPSBcIk9SSUVOVElOR1wiO1xuICAgIH1cbiAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICB9XG5cbiAgLy8gT1JJRU5USU5HIExPR0lDXG4gIGZ1bmN0aW9uIG9yaWVudGluZ0xvZ2ljKCkge1xuICAgIC8vIEF0dGFjayBhIHJhbmRvbSBuZWlnaGJvciBvZiBpbml0aWFsIGhpdCBsb2NhdGlvblxuICAgIGNvbnN0IHJvd0NvbCA9IGdldFJhbmRvbUF0dGFja2FibGVOZWlnaGJvcihcbiAgICAgIG9wcG9uZW50Qm9hcmQsXG4gICAgICBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQucm93LFxuICAgICAgYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LmNvbFxuICAgICk7XG4gICAgaWYgKCFyb3dDb2wpIHtcbiAgICAgIC8vIE5vIG5laWdoYm9ycyBhcmUgYXR0YWNrYWJsZS4gR28gYmFjayB0byBMT0NBVElOR1xuICAgICAgbW9kZSA9IFwiTE9DQVRJTkdcIjtcbiAgICAgIHJlc2V0QXR0YWNrSGlzdG9yeSgpO1xuICAgICAgcmV0dXJuIGxvY2F0aW5nTG9naWMoKTtcbiAgICB9XG4gICAgY29uc3QgW3JvdywgY29sXSA9IHJvd0NvbDtcbiAgICBjb25zdCBoaXQgPSBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIC8vIFVwZGF0ZSBhdHRhY2sgaGlzdG9yeVxuICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5yb3cgPSByb3c7XG4gICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLmNvbCA9IGNvbDtcbiAgICAvLyBDaGFuZ2Ugc3RhdGVzIGlmIGF0dGFjayB3YXMgYSBoaXRcbiAgICBpZiAoaGl0KSB7XG4gICAgICBtb2RlID0gXCJERVNUUk9ZSU5HXCI7XG4gICAgICBhdHRhY2tIaXN0b3J5Lm9yaWVudGF0aW9uID1cbiAgICAgICAgcm93ID09IGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5yb3cgPyBcImhcIiA6IFwidlwiO1xuICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb24gPVxuICAgICAgICBhdHRhY2tIaXN0b3J5Lm9yaWVudGF0aW9uID09PSBcImhcIlxuICAgICAgICAgID8gTWF0aC5zaWduKGNvbCAtIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5jb2wpXG4gICAgICAgICAgOiBNYXRoLnNpZ24ocm93IC0gYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LnJvdyk7XG4gICAgICAvLyBMb29rIGFyb3VuZCB0byBzZWUgaWYgd2UgYXJlIGZpbmlzaGVkIHdpdGggYW55IGRpcmVjdGlvbnMgeWV0XG4gICAgICBjb25zdCBuZXh0Um93Q29sID0gZ2V0TmV4dERpcmVjdGVkTmVpZ2hib3IoXG4gICAgICAgIG9wcG9uZW50Qm9hcmQsXG4gICAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5yb3csXG4gICAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5jb2wsXG4gICAgICAgIGF0dGFja0hpc3Rvcnkub3JpZW50YXRpb24sXG4gICAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uXG4gICAgICApO1xuICAgICAgY29uc3Qgb3Bwb1Jvd0NvbCA9IGdldE5leHREaXJlY3RlZE5laWdoYm9yKFxuICAgICAgICBvcHBvbmVudEJvYXJkLFxuICAgICAgICBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQucm93LFxuICAgICAgICBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQuY29sLFxuICAgICAgICBhdHRhY2tIaXN0b3J5Lm9yaWVudGF0aW9uLFxuICAgICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvbiAqIC0xXG4gICAgICApO1xuICAgICAgaWYgKFxuICAgICAgICAhbmV4dFJvd0NvbCB8fFxuICAgICAgICAhb3Bwb25lbnRCb2FyZC5hdHRhY2tBbGxvd2VkKG5leHRSb3dDb2xbMF0sIG5leHRSb3dDb2xbMV0pXG4gICAgICApIHtcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgKz0gMTtcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb24gKj0gLTE7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICFvcHBvUm93Q29sIHx8XG4gICAgICAgICFvcHBvbmVudEJvYXJkLmF0dGFja0FsbG93ZWQob3Bwb1Jvd0NvbFswXSwgb3Bwb1Jvd0NvbFsxXSlcbiAgICAgICkge1xuICAgICAgICBhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkID09PSAyKSB7XG4gICAgICAgIC8vIEdvIGJhY2sgdG8gTE9DQVRJTkcgZm9yIG5leHQgdHVyblxuICAgICAgICBtb2RlID0gXCJMT0NBVElOR1wiO1xuICAgICAgICByZXNldEF0dGFja0hpc3RvcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgfVxuXG4gIC8vIERFU1RST1lJTkcgbG9naWNcbiAgZnVuY3Rpb24gZGVzdHJveWluZ0xvZ2ljKCkge1xuICAgIC8vIEdldCBuZXh0IGF0dGFjayBsb2NhdGlvblxuICAgIGNvbnN0IHJvd0NvbCA9IGdldE5leHREaXJlY3RlZE5laWdoYm9yKFxuICAgICAgb3Bwb25lbnRCb2FyZCxcbiAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5yb3csXG4gICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2suY29sLFxuICAgICAgYXR0YWNrSGlzdG9yeS5vcmllbnRhdGlvbixcbiAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uXG4gICAgKTtcblxuICAgIC8vIElmIGF0dGFjayBpcyBub3QgYWxsb3dlZCwgbmVlZCB0byBpbmNyZW1lbnQgbnVtYmVyIG9mIGZpbmlzaGVkIGRpcmVjdGlvbnNcbiAgICBpZiAoIXJvd0NvbCB8fCAhb3Bwb25lbnRCb2FyZC5hdHRhY2tBbGxvd2VkKHJvd0NvbFswXSwgcm93Q29sWzFdKSkge1xuICAgICAgLy8gV2UgZmluaXNoZWQgdGhpcyBkaXJlY3Rpb25cbiAgICAgIGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkICs9IDE7XG4gICAgICBpZiAoYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgPT09IDEpIHtcbiAgICAgICAgLy8gU3RpbGwgbmVlZCB0byBnbyBvdGhlciBkaXJlY3Rpb24uXG4gICAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5yb3cgPSBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQucm93O1xuICAgICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2suY29sID0gYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LmNvbDtcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb24gKj0gLTE7XG4gICAgICB9IGVsc2UgaWYgKGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkID09PSAyKSB7XG4gICAgICAgIC8vIEZpbmlzaGVkIGJvdGggZGlyZWN0aW9uc1xuICAgICAgICBtb2RlID0gXCJMT0NBVElOR1wiO1xuICAgICAgICByZXNldEF0dGFja0hpc3RvcnkoKTtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW5nTG9naWMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbcm93LCBjb2xdID0gcm93Q29sO1xuICAgIC8vIEF0dGFja1xuICAgIGNvbnN0IGhpdCA9IG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgLy8gVXBkYXRlIGF0dGFjayBoaXN0b3J5XG4gICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLnJvdyA9IHJvdztcbiAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2suY29sID0gY29sO1xuXG4gICAgLy8gTG9vayBhaGVhZCB0byBuZXh0IHR1cm4gdG8gc2VlIGlmIHdlIG5lZWQgdG8gc3dpdGNoIG91ciBkaXJlY3Rpb24uXG4gICAgLy8gSWYgdGhpcyB0dXJuIHdhc24ndCBhIGhpdCBvciBuZXh0IG5laWdoYm9yIChuZXh0IHR1cm4pIG5vdCBhdHRhY2thYmxlLCB3ZSBmaW5pc2hlZCBpbiB0aGlzIGRpcmVjdGlvblxuICAgIGNvbnN0IG5leHRSb3dDb2wgPSBnZXROZXh0RGlyZWN0ZWROZWlnaGJvcihcbiAgICAgIG9wcG9uZW50Qm9hcmQsXG4gICAgICByb3csXG4gICAgICBjb2wsXG4gICAgICBhdHRhY2tIaXN0b3J5Lm9yaWVudGF0aW9uLFxuICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb25cbiAgICApO1xuICAgIGlmIChcbiAgICAgICFoaXQgfHxcbiAgICAgICFuZXh0Um93Q29sIHx8XG4gICAgICAhb3Bwb25lbnRCb2FyZC5hdHRhY2tBbGxvd2VkKG5leHRSb3dDb2xbMF0sIG5leHRSb3dDb2xbMV0pXG4gICAgKSB7XG4gICAgICAvLyBXZSBmaW5pc2hlZCB0aGlzIGRpcmVjdGlvblxuICAgICAgYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgKz0gMTtcbiAgICAgIGlmIChhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCA9PT0gMSkge1xuICAgICAgICAvLyBTdGlsbCBuZWVkIHRvIGdvIG90aGVyIGRpcmVjdGlvbi5cbiAgICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLnJvdyA9IGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5yb3c7XG4gICAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5jb2wgPSBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQuY29sO1xuICAgICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgLy8gQ2hlY2sgYWdhaW4gaWYgbmV4dFxuICAgICAgfSBlbHNlIGlmIChhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCA9PT0gMikge1xuICAgICAgICAvLyBGaW5pc2hlZCBib3RoIGRpcmVjdGlvbnNcbiAgICAgICAgbW9kZSA9IFwiTE9DQVRJTkdcIjtcbiAgICAgICAgcmVzZXRBdHRhY2tIaXN0b3J5KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gIH1cblxuICByZXR1cm4gY29tcHV0ZXI7XG59XG5cbi8vIFVUSUxJVFkgRlVOQ1NcbmZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgcmV0dXJuIGdldFJhbmRvbUludCgwLCAyKSA9PT0gMCA/IFwiaFwiIDogXCJ2XCI7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUFycmF5RW50cnkoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5W2dldFJhbmRvbUludCgwLCBhcnJheS5sZW5ndGgpXTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQXR0YWNrYWJsZVNwb3QoYm9hcmQpIHtcbiAgcmV0dXJuIGdldFJhbmRvbUFycmF5RW50cnkoYm9hcmQuYXR0YWNrYWJsZVNwb3RzKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21BdHRhY2thYmxlTmVpZ2hib3IoYm9hcmQsIHJvdywgY29sKSB7XG4gIGNvbnN0IGF0dGFja2FibGVOZWlnaGJvcnMgPSBib2FyZC5hdHRhY2thYmxlU3BvdHMoKS5maWx0ZXIoKFthUm93LCBhQ29sXSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAob25lQXdheShyb3csIGFSb3cpICYmIGNvbCA9PT0gYUNvbCkgfHxcbiAgICAgIChyb3cgPT09IGFSb3cgJiYgb25lQXdheShjb2wsIGFDb2wpKVxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gZ2V0UmFuZG9tQXJyYXlFbnRyeShhdHRhY2thYmxlTmVpZ2hib3JzKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dERpcmVjdGVkTmVpZ2hib3IoYm9hcmQsIHJvdywgY29sLCBvcmllbnRhdGlvbiwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IFtuZXdSb3csIG5ld0NvbF0gPVxuICAgIG9yaWVudGF0aW9uID09IFwiaFwiID8gW3JvdywgY29sICsgZGlyZWN0aW9uXSA6IFtyb3cgKyBkaXJlY3Rpb24sIGNvbF07XG4gIGNvbnN0IGF0dGFja1N0YXR1cyA9IGJvYXJkLmF0dGFja1N0YXR1cyhuZXdSb3csIG5ld0NvbCk7XG4gIGlmIChhdHRhY2tTdGF0dXMgPT0gXCJvdXRPZkJvdW5kc1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGF0dGFja1N0YXR1cyA9PSBcImhpdFwiKSB7XG4gICAgLy8gU2tpcCB0aGlzIG9uZVxuICAgIHJldHVybiBnZXROZXh0RGlyZWN0ZWROZWlnaGJvcihcbiAgICAgIGJvYXJkLFxuICAgICAgbmV3Um93LFxuICAgICAgbmV3Q29sLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBkaXJlY3Rpb25cbiAgICApO1xuICB9XG4gIHJldHVybiBbbmV3Um93LCBuZXdDb2xdO1xufVxuXG5mdW5jdGlvbiBvbmVBd2F5KGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA9PT0gMTtcbn1cbiIsImV4cG9ydCB7IFVJIH07XG5cbmNvbnN0IFVJID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSE9NRSBQQUdFIExPQURFUlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgLy8gQUREIEhPTUUgUEFHRSBFTEVNRU5UUyBUTyBUSEUgRE9NXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgPGgxPkJBVFRMRVNISVA8L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvbnMtY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkaWZmaWN1bHR5XCI+RGlmZmljdWx0eTwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImRpZmZpY3VsdHlcIiBpZD1cImRpZmZpY3VsdHlcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZWFzeVwiPkVhc3k8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInN0YXJ0LWdhbWVcIj5TdGFydCBHYW1lPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib2FyZHMtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgYDtcblxuICAgIC8vIFdBSVQgRk9SIFVTRVIgVE8gUFJFU1MgU1RBUlQgR0FNRSBCVVRUT05cbiAgICBhc3luYyBmdW5jdGlvbiBzb2xpY2l0U3RhcnRHYW1lKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0R2FtZVByZXNzZWQoKSB7XG4gICAgICAgICAgY29uc3QgZGlmZmljdWx0eSA9IGdldERpZmZpY3VsdHlTZWxlY3Rpb24oKTtcbiAgICAgICAgICByZW1vdmVTdGFydEdhbWVPcHRpb25zKCk7XG4gICAgICAgICAgLy8gUmV0dXJuIHRoZSBkaWZmaWN1bHR5IGNob3NlblxuICAgICAgICAgIHJlc29sdmUoZGlmZmljdWx0eSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGlzdGVuIGZvciBTdGFydCBHYW1lIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jc3RhcnQtZ2FtZVwiKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lUHJlc3NlZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBIRUxQRVJTXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RhcnRHYW1lT3B0aW9ucygpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9ucy1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlmZmljdWx0eVNlbGVjdGlvbigpIHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlmZmljdWx0eVwiKTtcbiAgICAgIHJldHVybiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc29saWNpdFN0YXJ0R2FtZSB9O1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQk9BUkQgVUkgRkFDVE9SWSBGVU5DVElPTlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBmdW5jdGlvbiBjcmVhdGVCb2FyZFVJKGJvYXJkKSB7XG4gICAgLy8gQUREIEJPQVJEIFVJIFRPIERPTVxuXG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgYm9hcmQgYW5kIHRpdGxlXG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gICAgLy8gQWRkIHRpdGxlXG4gICAgY29uc3QgdGl0bGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlRWxlbS5pbm5lclRleHQgPSBib2FyZC5uYW1lID09PSBcInBsYXllclwiID8gXCJZT1VcIiA6IFwiQUlcIjtcbiAgICB0aXRsZUVsZW0uY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbSk7XG4gICAgLy8gQWRkIGJvYXJkXG4gICAgY29uc3QgYm9hcmRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZEVsZW0uY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICAgIGJvYXJkRWxlbS5pZCA9IGJvYXJkLm5hbWU7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQuc2l6ZTsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkLnNpemU7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGNvbDtcbiAgICAgICAgYm9hcmRFbGVtLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZEVsZW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRzLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChib2FyZENvbnRhaW5lcik7XG5cbiAgICAvLyBSRUZSRVNIRVMgVEhFIEJPQVJEIFVJXG4gICAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkLnNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkLmhhc1NoaXAocm93LCBjb2wpKSB7XG4gICAgICAgICAgICBhZGRTaGlwKHJvdywgY29sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoIChib2FyZC5hdHRhY2tTdGF0dXMocm93LCBjb2wpKSB7XG4gICAgICAgICAgICBjYXNlIFwiaGl0XCI6XG4gICAgICAgICAgICAgIGFkZEhpdChyb3csIGNvbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pc3NcIjpcbiAgICAgICAgICAgICAgYWRkTWlzcyhyb3csIGNvbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICAgICAgLy8gTm90IGF0dGFja2VkXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiQm9hcmQgYXR0YWNrU3RhdHVzKCkgbWV0aG9kIHJldHVybmVkIGFuIHVuZXhwZWN0ZWQgdmFsdWUhXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTT0xJQ0lUUyBQTEFZRVIgVE8gUExBQ0UgQSBTSElQIFVTSU5HIFRIRSBVSVxuICAgIGFzeW5jIGZ1bmN0aW9uIHNvbGljaXRQbGFjZVNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gICAgICAvLyBSZXR1cm4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc2hpcCBzdWNjZXNzZnVsbHkgcGxhY2VkXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gXCJoXCI7IC8vIHdpbGwgdG9nZ2xlIHRoaXMgd2l0aCBrZXlkb3duIGxpc3RlbmVyIG9uIFwiclwiXG5cbiAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIG1vdXNlb3ZlciB0aGF0IGFkZHMgc2hhZGluZyB0byBjZWxscyB3aGVyZSBzaGlwIHdpbGwgYmVcbiAgICAgICAgLy8gcGxhY2VkIGlmIHRhcmdldCBjZWxsIGlzIGNsaWNrZWRcbiAgICAgICAgZnVuY3Rpb24gYWRkR2hvc3RTaGlwKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFldmVudC50YXJnZXQgfHwgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJncmlkLXNxdWFyZVwiKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpO1xuICAgICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpO1xuICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGRjb2wgPSAwOyBkY29sIDwgbGVuZ3RoOyBkY29sKyspIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBnZXRDZWxsKHJvdywgY29sICsgZGNvbCkuY2xhc3NMaXN0LmFkZChcImdob3N0LXNoaXBcIik7XG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIC8vIEludmFsaWQgKHJvdyxjb2wpIC0+IGlnbm9yZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGRyb3cgPSAwOyBkcm93IDwgbGVuZ3RoOyBkcm93KyspIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBnZXRDZWxsKHJvdyArIGRyb3csIGNvbCkuY2xhc3NMaXN0LmFkZChcImdob3N0LXNoaXBcIik7XG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIC8vIEludmFsaWQgKHJvdyxjb2wpIC0+IGlnbm9yZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIG1vdXNlb3V0IHRoYXQgY2xlYXJzIGFsbCBnaG9zdCBzaGlwcyBmcm9tIHRoZSBib2FyZFxuICAgICAgICBmdW5jdGlvbiBjbGVhckFsbEdob3N0U2hpcHMoKSB7XG4gICAgICAgICAgY29uc3QgZ2hvc3RTaGlwcyA9IGJvYXJkRWxlbS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgXCIuZ3JpZC1zcXVhcmUuZ2hvc3Qtc2hpcFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBnaG9zdFNoaXBzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImdob3N0LXNoaXBcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIGtleWRvd24gdGhhdCByb3RhdGVzIHRoZSBnaG9zdCBzaGlwIGlmIFwiclwiIGlzIHByZXNzZWRcbiAgICAgICAgZnVuY3Rpb24ga2V5UHJlc3NlZChldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSAhPT0gXCJyXCIpIHJldHVybjtcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uID09IFwiaFwiID8gXCJ2XCIgOiBcImhcIjtcbiAgICAgICAgICBjbGVhckFsbEdob3N0U2hpcHMoKTtcbiAgICAgICAgICAvLyBDYWxsIHRoZSBob3ZlciBjYWxsYmFjayB3aXRoIGEgZnVkZ2VkIGV2ZW50IHRhcmdldCB0byBnZW5lcmF0ZSB0aGUgcm90YXRlZCBnaG9zdCBzaGlwXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkLXNxdWFyZTpob3ZlclwiKTtcbiAgICAgICAgICBhZGRHaG9zdFNoaXAoeyB0YXJnZXQgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsYmFjayB3aGVuIGJvYXJkIGlzIGNsaWNrZWQgdGhhdCByZXR1cm5zIHRoZSBwbGFjZW1lbnQgY2hvc2VuXG4gICAgICAgIGZ1bmN0aW9uIGJvYXJkQ2xpY2tlZChldmVudCkge1xuICAgICAgICAgIC8vIERlc3Ryb3kgYWxsIGV2ZW50IGxpc3RlbmVycyBhbmQgY3VzdG9tIGhvdmVyIGVmZmVjdFxuICAgICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgICAgY2xlYXJBbGxHaG9zdFNoaXBzKCk7XG4gICAgICAgICAgLy8gUkVTT0xWRVxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgcm93OiBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5yb3cpLFxuICAgICAgICAgICAgY29sOiBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5jb2wpLFxuICAgICAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGRzIGFsbCBldmVudCBsaXN0ZW5lcnMgZm9yIHNoaXAgcGxhY2VtZW50IGludGVyYWN0aXZpdHlcbiAgICAgICAgZnVuY3Rpb24gYWRkQWxsRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgICAgYm9hcmRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgYWRkR2hvc3RTaGlwKTtcbiAgICAgICAgICBib2FyZEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGNsZWFyQWxsR2hvc3RTaGlwcyk7XG4gICAgICAgICAgYm9hcmRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib2FyZENsaWNrZWQpO1xuICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleVByZXNzZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlcyBhbGwgZXZlbnQgbGlzdGVuZXJzIGZvciBzaGlwIHBsYWNlbWVudCBpbnRlcmFjdGl2aXR5XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAgIGJvYXJkRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGFkZEdob3N0U2hpcCk7XG4gICAgICAgICAgYm9hcmRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjbGVhckFsbEdob3N0U2hpcHMpO1xuICAgICAgICAgIGJvYXJkRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDbGlja2VkKTtcbiAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBFdmVudCBsaXN0ZW5lcnNcbiAgICAgICAgYWRkQWxsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNvbGljaXQgYW4gYXR0YWNrIHVzaW5nIHRoZSBib2FyZCBVSVxuICAgIGFzeW5jIGZ1bmN0aW9uIHNvbGljaXRBdHRhY2soKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gYm9hcmRDbGlja2VkKGV2ZW50KSB7XG4gICAgICAgICAgYm9hcmRFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib2FyZENsaWNrZWQpO1xuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgcm93OiBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5yb3cpLFxuICAgICAgICAgICAgY29sOiBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5jb2wpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBib2FyZENsaWNrZWQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgLy8gR2V0IGNlbGwgRE9NIGVsZW1lbnQgYnkgKHJvdywgY29sKSBpbmRleFxuICAgIGZ1bmN0aW9uIGdldENlbGwocm93LCBjb2wpIHtcbiAgICAgIHJldHVybiBib2FyZEVsZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5ncmlkLXNxdWFyZVtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHNoaXAgdG8gY2VsbFxuICAgIGZ1bmN0aW9uIGFkZFNoaXAocm93LCBjb2wpIHtcbiAgICAgIGdldENlbGwocm93LCBjb2wpLmNsYXNzTGlzdC5hZGQoXCJoYXMtc2hpcFwiKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgaGl0IHRvIGNlbGxcbiAgICBmdW5jdGlvbiBhZGRIaXQocm93LCBjb2wpIHtcbiAgICAgIGdldENlbGwocm93LCBjb2wpLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgfVxuXG4gICAgLy8gQWRkIG1pc3MgdG8gY2VsbFxuICAgIGZ1bmN0aW9uIGFkZE1pc3Mocm93LCBjb2wpIHtcbiAgICAgIGdldENlbGwocm93LCBjb2wpLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlZnJlc2gsIHNvbGljaXRQbGFjZVNoaXAsIHNvbGljaXRBdHRhY2sgfTtcbiAgfVxuXG4gIC8vIEdBTUUgT1ZFUiBESVNQTEFZXG4gIGFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlHYW1lT3Zlcih3aW5uZXIpIHtcbiAgICAvLyBBZGQgZ2FtZSBvdmVyIGRpc3BsYXkgdG8gRE9NXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkcy1jb250YWluZXJcIilcbiAgICAgIC5hcHBlbmRDaGlsZChnZXRHYW1lT3ZlckVsZW1lbnQod2lubmVyKSk7XG4gICAgLy8gV2FpdCBmb3IgdXNlciB0byBjbGljayB0aGUgcmVzdGFydCBidXR0b25cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHBsYXlBZ2FpblByZXNzZWQoKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3BsYXktYWdhaW5cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5QWdhaW5QcmVzc2VkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdhbWVPdmVyRWxlbWVudCh3aW5uZXIpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwiZ2FtZS1vdmVyLWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgd2lubmVyID09PSBcInBsYXllclwiID8gXCJHYW1lIE92ZXIhIFlvdSB3b24hXCIgOiBcIkdhbWUgT3ZlciEgWW91IGxvc3QhXCI7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgaWQ9XCJnYW1lLW92ZXItbWVzc2FnZVwiPiR7bWVzc2FnZX08L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicGxheS1hZ2FpblwiPlBsYXkgQWdhaW48L2J1dHRvbj5cbiAgICBgO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICByZXR1cm4geyBsb2FkSG9tZVBhZ2UsIGNyZWF0ZUJvYXJkVUksIGRpc3BsYXlHYW1lT3ZlciB9O1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgd2VicGFja1F1ZXVlcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH0sIChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
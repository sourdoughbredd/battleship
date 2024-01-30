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
        function keyPressed() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUM7QUFDakMsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NoRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVPYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90aGluZytZb3UrQ291bGQrRG8mZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVBsYXlwZW4rU2Fuczp3Z2h0QDQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZmYW1pbHk9U29tZXR5cGUrTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFNIT1cgQ09NUFVURVIgU0hJUFMgKEZPUiBURVNUSU5HKSAqL1xuLyogLmJvYXJkIC5ncmlkLXNxdWFyZS5oYXMtc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4NiwgMTkwKTtcbn0gKi9cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlNvbWV0eXBlIE1vbm9cIiwgbW9ub3NwYWNlO1xufVxuXG5ib2R5LFxuaDEsXG5oMixcbmJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG5idXR0b24jc3RhcnQtZ2FtZSB7XG4gIHdpZHRoOiAxMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0MHB4O1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZ3JpZC1zcXVhcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5ncmlkLXNxdWFyZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTtcbn1cblxuLmJvYXJkI3BsYXllciAuZ3JpZC1zcXVhcmUuaGFzLXNoaXAsXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5naG9zdC1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg2LCAxOTApO1xufVxuXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5oYXMtc2hpcC5oaXQsXG4uYm9hcmQjY29tcHV0ZXIgLmdyaWQtc3F1YXJlLmhhcy1zaGlwLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDAsIDApO1xufVxuXG4uYm9hcmQgLmdyaWQtc3F1YXJlLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTMsIDIwMCk7XG59XG5cbiNnYW1lLW92ZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiAycHggNHB4IDhweCBncmF5O1xufVxuXG4jZ2FtZS1vdmVyLWNvbnRhaW5lciBidXR0b24jcGxheS1hZ2FpbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDggMjEwIDIxMik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxzQ0FBc0M7QUFDdEM7O0dBRUc7O0FBRUg7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7Ozs7RUFJRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdGhpbmcrWW91K0NvdWxkK0RvJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1QbGF5cGVuK1NhbnM6d2dodEA0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs3MDAmZmFtaWx5PVNvbWV0eXBlK01vbm8mZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuLyogU0hPVyBDT01QVVRFUiBTSElQUyAoRk9SIFRFU1RJTkcpICovXFxuLyogLmJvYXJkIC5ncmlkLXNxdWFyZS5oYXMtc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODYsIDE5MCk7XFxufSAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTb21ldHlwZSBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDI0cHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cXG5cXG5idXR0b24jc3RhcnQtZ2FtZSB7XFxuICB3aWR0aDogMTI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ncmlkLXNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uZ3JpZC1zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbn1cXG5cXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5oYXMtc2hpcCxcXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5naG9zdC1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4NiwgMTkwKTtcXG59XFxuXFxuLmJvYXJkI3BsYXllciAuZ3JpZC1zcXVhcmUuaGFzLXNoaXAuaGl0LFxcbi5ib2FyZCNjb21wdXRlciAuZ3JpZC1zcXVhcmUuaGFzLXNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDAsIDApO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQtc3F1YXJlLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUzLCAyMDApO1xcbn1cXG5cXG4jZ2FtZS1vdmVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggZ3JheTtcXG59XFxuXFxuI2dhbWUtb3Zlci1jb250YWluZXIgYnV0dG9uI3BsYXktYWdhaW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDEyNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDggMjEwIDIxMik7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lT2JqZWN0cy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyLCBjcmVhdGVDb21wdXRlclBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi91aS5qc1wiO1xuZXhwb3J0IHsgY3JlYXRlR2FtZSwgY3JlYXRlUmVwbGF5IH07XG5cbmNvbnN0IGNyZWF0ZUdhbWUgPSBmdW5jdGlvbiAoZGlmZmljdWx0eSkge1xuICBsZXQgcGxheWVyLCBjb21wdXRlcjtcbiAgbGV0IHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkO1xuICBsZXQgcGxheWVyQm9hcmRVSSwgY29tcHV0ZXJCb2FyZFVJO1xuICBjb25zdCBnYW1lTG9nID0ge1xuICAgIHBsYXllclNoaXBzOiBbXSxcbiAgICBjb21wdXRlclNoaXBzOiBbXSxcbiAgICBwbGF5ZXJBdHRhY2tzOiBbXSxcbiAgICBjb21wdXRlckF0dGFja3M6IFtdLFxuICB9O1xuICBsZXQgY3VyclBsYXllcjtcblxuICBjb25zdCBzaGlwcyA9IHtcbiAgICBDYXJyaWVyOiA1LFxuICAgIEJhdHRsZXNoaXA6IDQsXG4gICAgRGVzdHJveWVyOiAzLFxuICAgIFN1Ym1hcmluZTogMyxcbiAgICBcIlBhdHJvbCBCb2F0XCI6IDIsXG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBDcmVhdGUgYm9hcmRzXG4gICAgICBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllclwiKTtcbiAgICAgIGNvbXB1dGVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoXCJjb21wdXRlclwiKTtcblxuICAgICAgLy8gQ3JlYXRlIGJvYXJkIFVJc1xuICAgICAgcGxheWVyQm9hcmRVSSA9IFVJLmNyZWF0ZUJvYXJkVUkocGxheWVyQm9hcmQpO1xuICAgICAgY29tcHV0ZXJCb2FyZFVJID0gVUkuY3JlYXRlQm9hcmRVSShjb21wdXRlckJvYXJkKTtcblxuICAgICAgLy8gQ3JlYXRlIHBsYXllcnNcbiAgICAgIHBsYXllciA9IGNyZWF0ZVBsYXllcihwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCk7XG4gICAgICBjb21wdXRlciA9IGNyZWF0ZUNvbXB1dGVyUGxheWVyKGNvbXB1dGVyQm9hcmQsIHBsYXllckJvYXJkLCBkaWZmaWN1bHR5KTtcblxuICAgICAgLy8gTGV0IHBsYXllcnMgcGxhY2UgdGhlaXIgc2hpcHNcbiAgICAgIGF3YWl0IHBsYXllclBsYWNlU2hpcHMoKTtcbiAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgY29tcHV0ZXJQbGFjZVNoaXBzKCk7XG4gICAgICBjb21wdXRlckJvYXJkVUkucmVmcmVzaCgpO1xuXG4gICAgICAvLyBTdGFydCBnYW1lIGxvb3BcbiAgICAgIGF3YWl0IGdhbWVMb29wKCk7XG4gICAgICBjb25zdCBwbGF5QWdhaW4gPSB0cnVlO1xuICAgICAgc2F2ZUdhbWVMb2coKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZShwbGF5QWdhaW4pKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBTYXZlIGdhbWUgbG9nIHNvIGdhbWUgY2FuIGJlIHJlc3RpbXVsYXRlZCB0byBkZWJ1ZyBlcnJvclxuICAgICAgc2F2ZUdhbWVMb2coKTtcbiAgICAgIGFsZXJ0KFwiRkFUQUwgRVJST1I6IEdhbWUgbG9nIHNlbnQgdG8gZGV2ZWxvcGVycyBmb3IgdHJvdWJsZXNob290aW5nIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwbGF5ZXJQbGFjZVNoaXBzKCkge1xuICAgIC8vIFJFQUwgSU1QTEVNVEFUSU9OXG4gICAgZm9yIChjb25zdCBbc2hpcE5hbWUsIHNoaXBMZW5ndGhdIG9mIE9iamVjdC5lbnRyaWVzKHNoaXBzKSkge1xuICAgICAgLy8gU29saWNpdCBwbGF5ZXIgdG8gaW50ZXJhY3Qgd2l0aCBVSVxuICAgICAgYXdhaXQgc29saWNpdFBsYWNlU2hpcChzaGlwTmFtZSwgc2hpcExlbmd0aCk7XG4gICAgICAvLyBSZWZyZXNoIFVJXG4gICAgICBwbGF5ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzb2xpY2l0UGxhY2VTaGlwKG5hbWUsIGxlbmd0aCkge1xuICAgIGNvbnNvbGUubG9nKGB3YWl0aW5nIHRvIHBsYWNlICR7bmFtZX1gKTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBhd2FpdCBwbGF5ZXJCb2FyZFVJLnNvbGljaXRQbGFjZVNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICAvLyBHZXQgVUkgaW5wdXQgYW5kIHBsYWNlIG9uIGJvYXJkXG4gICAgdHJ5IHtcbiAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBwbGFjZW1lbnQucm93LFxuICAgICAgICBwbGFjZW1lbnQuY29sLFxuICAgICAgICBwbGFjZW1lbnQub3JpZW50YXRpb25cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBwbGF5ZXJCb2FyZC5JbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yKSB7XG4gICAgICAgIC8vIFRyeSBhZ2FpblxuICAgICAgICBhd2FpdCBzb2xpY2l0UGxhY2VTaGlwKG5hbWUsIGxlbmd0aCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFVuZXhwZWN0ZWQgZXJyb3JcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2FtZUxvZy5wbGF5ZXJTaGlwcy5wdXNoKHsgbmFtZSwgbGVuZ3RoLCAuLi5wbGFjZW1lbnQgfSk7XG4gIH1cblxuICAvLyAoRk9SIFRFU1RJTkcpIEF1dG9tYXRpY2FsbHkgcGxhY2VzIHBsYXllcnMgc2hpcHMgaW4gdG9wLWxlZnQgY29ybmVyXG4gIGFzeW5jIGZ1bmN0aW9uIHNvbGljaXRQbGFjZVNoaXBBdXRvKG5hbWUsIGxlbmd0aCkge1xuICAgIGNvbnN0IHBsYXllclBsYWNlbWVudCA9IHtcbiAgICAgIENhcnJpZXI6IHsgcm93OiAwLCBjb2w6IDAsIG9yaWVudGF0aW9uOiBcImhcIiB9LFxuICAgICAgQmF0dGxlc2hpcDogeyByb3c6IDEsIGNvbDogMCwgb3JpZW50YXRpb246IFwiaFwiIH0sXG4gICAgICBEZXN0cm95ZXI6IHsgcm93OiAyLCBjb2w6IDAsIG9yaWVudGF0aW9uOiBcImhcIiB9LFxuICAgICAgU3VibWFyaW5lOiB7IHJvdzogMywgY29sOiAwLCBvcmllbnRhdGlvbjogXCJoXCIgfSxcbiAgICAgIFwiUGF0cm9sIEJvYXRcIjogeyByb3c6IDQsIGNvbDogMCwgb3JpZW50YXRpb246IFwiaFwiIH0sXG4gICAgfTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBwbGF5ZXJQbGFjZW1lbnRbbmFtZV07XG4gICAgcGxheWVyLnBsYWNlU2hpcChcbiAgICAgIG5hbWUsXG4gICAgICBsZW5ndGgsXG4gICAgICBwbGFjZW1lbnQucm93LFxuICAgICAgcGxhY2VtZW50LmNvbCxcbiAgICAgIHBsYWNlbWVudC5vcmllbnRhdGlvblxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZXJQbGFjZVNoaXBzKCkge1xuICAgIGZvciAoY29uc3QgW25hbWUsIGxlbmd0aF0gb2YgT2JqZWN0LmVudHJpZXMoc2hpcHMpKSB7XG4gICAgICBjb25zdCBwbGFjZW1lbnQgPSBjb21wdXRlci5wbGFjZVNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICAgIGdhbWVMb2cuY29tcHV0ZXJTaGlwcy5wdXNoKHsgbmFtZSwgbGVuZ3RoLCAuLi5wbGFjZW1lbnQgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpIHx8IGNvbXB1dGVyQm9hcmQuYWxsU2hpcHNTdW5rKCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwcm9jZXNzR2FtZU92ZXIod2lubmluZ1BsYXllcikge1xuICAgIGF3YWl0IFVJLmRpc3BsYXlHYW1lT3Zlcih3aW5uaW5nUGxheWVyLm5hbWUpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIGxldCBjdXJyUGxheWVyID0gcGxheWVyO1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xuICAgICAgY3VyclBsYXllciA9IGN1cnJQbGF5ZXIgPT0gcGxheWVyID8gY29tcHV0ZXIgOiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgd2hpbGUgKCFnYW1lT3ZlcigpKSB7XG4gICAgICAvLyBXYWl0IGZvciBwbGF5ZXIgdG8gdGFrZSB0dXJuXG4gICAgICBpZiAoY3VyclBsYXllciA9PT0gcGxheWVyKSB7XG4gICAgICAgIC8vIFNvbGljaXQgYXR0YWNrIHNwb3QgZnJvbSBVSVxuICAgICAgICBjb25zdCBsb2MgPSBhd2FpdCBzb2xpY2l0UGxheWVyQXR0YWNrKCk7XG4gICAgICAgIGdhbWVMb2cucGxheWVyQXR0YWNrcy5wdXNoKGxvYyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb21wdXRlciBhdHRhY2tzXG4gICAgICAgIGNvbnN0IGxvYyA9IGNvbXB1dGVyLmF0dGFjaygpO1xuICAgICAgICBnYW1lTG9nLmNvbXB1dGVyQXR0YWNrcy5wdXNoKGxvYyk7XG4gICAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgfVxuICAgICAgLy8gTmV4dCBwbGF5ZXIncyB0dXJuXG4gICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hQbGF5ZXIoKTsgLy8gc3dpdGNoIHNvIGN1cnJQbGF5ZXIgaXMgd2lubmVyXG4gICAgYXdhaXQgcHJvY2Vzc0dhbWVPdmVyKGN1cnJQbGF5ZXIpO1xuXG4gICAgLy8gR2FtZSBpcyBvdmVyLiBSZXNvbHZlIHRoZSBwcm9taXNlLlxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc29saWNpdFBsYXllckF0dGFjaygpIHtcbiAgICBjb25zdCBsb2MgPSBhd2FpdCBjb21wdXRlckJvYXJkVUkuc29saWNpdEF0dGFjaygpO1xuICAgIHRyeSB7XG4gICAgICBwbGF5ZXIuYXR0YWNrKGxvYy5yb3csIGxvYy5jb2wpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGF3YWl0IHNvbGljaXRQbGF5ZXJBdHRhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKGxvYykpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZUdhbWVMb2coKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lTG9nXCIsIEpTT04uc3RyaW5naWZ5KGdhbWVMb2cpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRHYW1lLFxuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUmVwbGF5KCkge1xuICBhc3luYyBmdW5jdGlvbiByZXBsYXlHYW1lKGRlbGF5KSB7XG4gICAgLy8gSU5JVElBTElaRSBHQU1FXG4gICAgY29uc3QgZ2FtZUxvZyA9IGxvYWRHYW1lTG9nKCk7XG5cbiAgICAvLyBMb2FkIHRoZSBnYW1lTG9nXG4gICAgZnVuY3Rpb24gbG9hZEdhbWVMb2coKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdhbWVMb2dcIikpO1xuICAgIH1cblxuICAgIC8vIFNsZWVwXG4gICAgYXN5bmMgZnVuY3Rpb24gc2xlZXAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBwbGF5ZXJQbGFjZVNoaXBzKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBnYW1lTG9nLnBsYXllclNoaXBzKSB7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBzaGlwLm5hbWUsXG4gICAgICAgICAgc2hpcC5sZW5ndGgsXG4gICAgICAgICAgc2hpcC5yb3csXG4gICAgICAgICAgc2hpcC5jb2wsXG4gICAgICAgICAgc2hpcC5vcmllbnRhdGlvblxuICAgICAgICApO1xuICAgICAgICBwbGF5ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgICAgYXdhaXQgc2xlZXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcHMoKSB7XG4gICAgICBmb3IgKGxldCBzaGlwIG9mIGdhbWVMb2cuY29tcHV0ZXJTaGlwcykge1xuICAgICAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBzaGlwLm5hbWUsXG4gICAgICAgICAgc2hpcC5sZW5ndGgsXG4gICAgICAgICAgc2hpcC5yb3csXG4gICAgICAgICAgc2hpcC5jb2wsXG4gICAgICAgICAgc2hpcC5vcmllbnRhdGlvblxuICAgICAgICApO1xuICAgICAgICBjb21wdXRlckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgICBhd2FpdCBzbGVlcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBib2FyZHNcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcInBsYXllclwiKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwiY29tcHV0ZXJcIik7XG5cbiAgICAvLyBDcmVhdGUgYm9hcmQgVUlzXG4gICAgY29uc3QgcGxheWVyQm9hcmRVSSA9IFVJLmNyZWF0ZUJvYXJkVUkocGxheWVyQm9hcmQpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRVSSA9IFVJLmNyZWF0ZUJvYXJkVUkoY29tcHV0ZXJCb2FyZCk7XG5cbiAgICAvLyBMZXQgcGxheWVycyBwbGFjZSB0aGVpciBzaGlwc1xuICAgIGF3YWl0IHBsYXllclBsYWNlU2hpcHMoKTtcbiAgICBwbGF5ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICBhd2FpdCBjb21wdXRlclBsYWNlU2hpcHMoKTtcbiAgICBjb21wdXRlckJvYXJkVUkucmVmcmVzaCgpO1xuXG4gICAgLy8gR0FNRSBMT09QXG5cbiAgICBhc3luYyBmdW5jdGlvbiBwbGF5ZXJBdHRhY2soKSB7XG4gICAgICBjb25zdCBhdHRhY2sgPSBnYW1lTG9nLnBsYXllckF0dGFja3Muc2hpZnQoKTtcbiAgICAgIGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2sucm93LCBhdHRhY2suY29sKTtcbiAgICAgIGF3YWl0IHNsZWVwKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgICBjb25zdCBhdHRhY2sgPSBnYW1lTG9nLmNvbXB1dGVyQXR0YWNrcy5zaGlmdCgpO1xuICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2sucm93LCBhdHRhY2suY29sKTtcbiAgICAgIGF3YWl0IHNsZWVwKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGdhbWVMb2cucGxheWVyQXR0YWNrcy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgZ2FtZUxvZy5jb21wdXRlckF0dGFja3MubGVuZ3RoID09PSAwXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IGdhbWUgbG9vcFxuICAgIHdoaWxlICghZG9uZSgpKSB7XG4gICAgICBpZiAoZ2FtZUxvZy5wbGF5ZXJBdHRhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgcGxheWVyQXR0YWNrKCk7XG4gICAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgfVxuICAgICAgaWYgKGdhbWVMb2cuY29tcHV0ZXJBdHRhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIHByb21pc2Ugc2luY2Ugd2UgYXJlIGRvbmVcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgY29tcHV0ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHJlcGxheUdhbWUgfTtcbn1cbiIsImV4cG9ydCB7IGNyZWF0ZVNoaXAsIGNyZWF0ZUdhbWVib2FyZCB9O1xuXG5mdW5jdGlvbiBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCkge1xuICAvLyBFcnJvciBjaGVja2luZ1xuICBpZiAobGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBDYW5ub3QgY3JlYXRlIGEgc2hpcCB3aXRoIGxlbmd0aCAoJHtsZW5ndGh9KSBsZXNzIHRoYW4gMSFgXG4gICAgKTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgdmFyaWFibGVzXG4gIGNvbnN0IF9sZW5ndGggPSBsZW5ndGg7XG4gIGNvbnN0IF9uYW1lID0gbmFtZTtcbiAgbGV0IF9oaXRDb3VudCA9IDA7XG5cbiAgLy8gSW5jcmVtZW50cyBoaXQgY291bnQgb24gc2hpcCBpZiBpdCBpcyBub3Qgc3Vuay4gRXJyb3JzIGlmIHNoaXAgaXMgc3Vuay5cbiAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc1N1bmsoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGhpdCBhIHNoaXAgdGhhdCBpcyBhbHJlYWR5IHN1bmshXCIpO1xuICAgIH1cbiAgICBfaGl0Q291bnQgKz0gMTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRydWUgaWYgc2hpcCBpcyBzdW5rLCBmYWxzZSBvdGhlcndpc2VcbiAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaGl0Q291bnQgPT0gX2xlbmd0aDtcbiAgfTtcblxuICAvLyBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBzaGlwXG4gIGNvbnN0IGdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9uYW1lO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBnZXROYW1lLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoYm9hcmROYW1lKSB7XG4gIGNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcblxuICBmdW5jdGlvbiBnZXRCb2FyZFdpdGhGaWxsKGZpbGxWYWx1ZSkge1xuICAgIHJldHVybiBbLi4uQXJyYXkoQk9BUkRfU0laRSldLm1hcCgoZSkgPT4gQXJyYXkoQk9BUkRfU0laRSkuZmlsbChmaWxsVmFsdWUpKTtcbiAgfVxuXG4gIGNvbnN0IF9zaGlwcyA9IGdldEJvYXJkV2l0aEZpbGwobnVsbCk7XG4gIGNvbnN0IF9hdHRhY2tzID0gZ2V0Qm9hcmRXaXRoRmlsbChudWxsKTtcbiAgbGV0IF9udW1TaGlwc0xlZnQgPSAwO1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUm93Q29sKHJvdywgY29sKSB7XG4gICAgaWYgKHJvdyA8IDAgfHwgY29sIDwgMCB8fCByb3cgPj0gQk9BUkRfU0laRSB8fCBjb2wgPj0gQk9BUkRfU0laRSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW52YWxpZCAocm93LCBjb2wpIHBhaXIgKCR7cm93fSwgJHtjb2x9KSBmb3IgYm9hcmQgZGltZW5zaW9ucyFgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlU2hpcFBsYWNlbWVudChsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xuICAgIC8vIENoZWNrIGZvciB2aW9sYXRpb25zIG9mIGJvYXJkIGJvdW5kYXJpZXNcbiAgICB0cnkge1xuICAgICAgdmFsaWRhdGVSb3dDb2wocm93LCBjb2wpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiAhPT0gXCJoXCIgJiYgb3JpZW50YXRpb24gIT09IFwidlwiKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcihcbiAgICAgICAgYE9yaWVudGF0aW9uIG11c3QgYmUgJ2gnIG9yICd2JyEgVmFsdWUgcHJvdmlkZWQ6ICR7b3JpZW50YXRpb259YFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhcIiAmJiBjb2wgKyBsZW5ndGggPiBCT0FSRF9TSVpFKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcihcbiAgICAgICAgYEhvcml6b250YWxseSBwbGFjaW5nIHNoaXAgb2YgbGVuZ3RoICR7bGVuZ3RofSBhdCByb3cgJHtyb3d9LCBjb2wgJHtjb2x9IHdvdWxkIHZpb2xhdGUgYm9hcmQgYm91bmRzIWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2XCIgJiYgcm93ICsgbGVuZ3RoID4gQk9BUkRfU0laRSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IoXG4gICAgICAgIGBWZXJ0aWNhbGx5IHBsYWNpbmcgc2hpcCBvZiBsZW5ndGggJHtsZW5ndGh9IGF0IHJvdyAke3Jvd30sIGNvbCAke2NvbH0gd291bGQgdmlvbGF0ZSBib2FyZCBib3VuZHMhYFxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgaW50ZXJzZWN0cyBleGlzdGluZyBzaGlwc1xuICAgIGNvbnN0IHNoaXBMZW5ndGhSYW5nZSA9IFsuLi5BcnJheShsZW5ndGgpLmtleXMoKV07XG4gICAgZm9yIChsZXQgZGVsdGEgb2Ygc2hpcExlbmd0aFJhbmdlKSB7XG4gICAgICBjb25zdCBpbnRlcnNlY3RpbmcgPVxuICAgICAgICBvcmllbnRhdGlvbiA9PT0gXCJoXCJcbiAgICAgICAgICA/IGhhc1NoaXAocm93LCBjb2wgKyBkZWx0YSlcbiAgICAgICAgICA6IGhhc1NoaXAocm93ICsgZGVsdGEsIGNvbCk7XG4gICAgICBpZiAoaW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yKFxuICAgICAgICAgIGBTaGlwIHBsYWNlbWVudCBpbnRlcnNlY3RzIGEgc2hpcCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIGJvYXJkIWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGFzcyBJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5uYW1lID0gXCJJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yXCI7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gZnVuY3Rpb24gKG5hbWUsIGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKSB7XG4gICAgdmFsaWRhdGVTaGlwUGxhY2VtZW50KGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKTtcblxuICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCk7XG4gICAgY29uc3QgbG9jYXRpb25zID0gW107XG4gICAgZm9yIChsZXQgZGVsdGEgPSAwOyBkZWx0YSA8IGxlbmd0aDsgZGVsdGErKykge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09IFwiaFwiKSB7XG4gICAgICAgIF9zaGlwc1tyb3ddW2NvbCArIGRlbHRhXSA9IHNoaXA7XG4gICAgICAgIGxvY2F0aW9ucy5wdXNoKHsgcm93LCBjb2w6IGNvbCArIGRlbHRhIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3NoaXBzW3JvdyArIGRlbHRhXVtjb2xdID0gc2hpcDtcbiAgICAgICAgbG9jYXRpb25zLnB1c2goeyByb3c6IHJvdyArIGRlbHRhLCBjb2wgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIF9udW1TaGlwc0xlZnQgKz0gMTtcbiAgfTtcblxuICBjb25zdCBoYXNTaGlwID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gICAgdmFsaWRhdGVSb3dDb2wocm93LCBjb2wpO1xuICAgIHJldHVybiBfc2hpcHNbcm93XVtjb2xdID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX251bVNoaXBzTGVmdCA9PT0gMDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gICAgdmFsaWRhdGVSb3dDb2wocm93LCBjb2wpO1xuICAgIGlmICghYXR0YWNrQWxsb3dlZChyb3csIGNvbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU3F1YXJlIGF0ICgke3Jvd30sICR7Y29sfSkgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCFgKTtcbiAgICB9XG4gICAgY29uc3QgaGl0U2hpcCA9IGhhc1NoaXAocm93LCBjb2wpO1xuICAgIF9hdHRhY2tzW3Jvd11bY29sXSA9IGhpdFNoaXAgPyB0cnVlIDogZmFsc2U7XG4gICAgaWYgKGhpdFNoaXApIHtcbiAgICAgIF9zaGlwc1tyb3ddW2NvbF0uaGl0KCk7XG4gICAgICBfbnVtU2hpcHNMZWZ0IC09IF9zaGlwc1tyb3ddW2NvbF0uaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiBoaXRTaGlwO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1N0YXR1cyA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICAgIHRyeSB7XG4gICAgICB2YWxpZGF0ZVJvd0NvbChyb3csIGNvbCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gXCJvdXRPZkJvdW5kc1wiO1xuICAgIH1cbiAgICBjb25zdCBzdGF0dXMgPSBfYXR0YWNrc1tyb3ddW2NvbF07XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNob3VsZCBub3QgcmVhY2ggdGhpcyBsaW5lIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQWxsb3dlZCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICAgIHRyeSB7XG4gICAgICB2YWxpZGF0ZVJvd0NvbChyb3csIGNvbCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBhdHRhY2tTdGF0dXMocm93LCBjb2wpID09IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja2FibGVTcG90cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhdHRhY2thYmxlID0gW107XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBCT0FSRF9TSVpFOyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgQk9BUkRfU0laRTsgYysrKSB7XG4gICAgICAgIGlmIChhdHRhY2tBbGxvd2VkKHIsIGMpKSB7XG4gICAgICAgICAgYXR0YWNrYWJsZS5wdXNoKFtyLCBjXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dGFja2FibGU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBib2FyZE5hbWUsXG4gICAgc2l6ZTogQk9BUkRfU0laRSxcbiAgICBwbGFjZVNoaXAsXG4gICAgaGFzU2hpcCxcbiAgICBhbGxTaGlwc1N1bmssXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhdHRhY2tTdGF0dXMsXG4gICAgYXR0YWNrQWxsb3dlZCxcbiAgICBhdHRhY2thYmxlU3BvdHMsXG4gICAgSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcixcbiAgfTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVHYW1lLCBjcmVhdGVSZXBsYXkgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpLmpzXCI7XG5cbndoaWxlICh0cnVlKSB7XG4gIC8vIEluaXRpYWxpemUgVUlcbiAgY29uc3QgaG9tZSA9IFVJLmxvYWRIb21lUGFnZSgpO1xuICBjb25zdCBkaWZmaWN1bHR5ID0gYXdhaXQgaG9tZS5zb2xpY2l0U3RhcnRHYW1lKCk7XG4gIC8vIENyZWF0ZSBuZXcgZ2FtZSBhbmQgc3RhcnRcbiAgY29uc3QgZ2FtZSA9IGNyZWF0ZUdhbWUoZGlmZmljdWx0eSk7XG4gIGF3YWl0IGdhbWUuc3RhcnRHYW1lKCk7XG59XG5cbi8vIFJFUExBWSBTQVZFRCBHQU1FXG4vLyBjb25zdCByZXBsYXkgPSBjcmVhdGVSZXBsYXkoKTtcbi8vIGF3YWl0IHJlcGxheS5yZXBsYXlHYW1lKDEyNSk7XG4iLCJleHBvcnQgeyBjcmVhdGVQbGF5ZXIsIGNyZWF0ZUNvbXB1dGVyUGxheWVyIH07XG5cbi8vIEhVTUFOIFBMQVlFUlxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKGJvYXJkLCBvcHBvbmVudEJvYXJkKSB7XG4gIGNvbnN0IG5hbWUgPSBcInBsYXllclwiO1xuXG4gIGZ1bmN0aW9uIGF0dGFjayhyb3csIGNvbCkge1xuICAgIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pIHtcbiAgICBib2FyZC5wbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBib2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgYXR0YWNrLFxuICB9O1xufVxuXG4vLyBDT01QVVRFUiBQTEFZRVIgQUlcbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyUGxheWVyKGJvYXJkLCBvcHBvbmVudEJvYXJkLCBkaWZmaWN1bHR5KSB7XG4gIC8vIFN0YXJ0IHdpdGggcmVndWxhciBwbGF5ZXIgYXMgdGVtcGxhdGUsIHRoZW4gb3ZlcnJpZGUgbWV0aG9kc1xuICBjb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcihib2FyZCwgb3Bwb25lbnRCb2FyZCk7XG5cbiAgLy8gT3ZlcnJpZGVzXG4gIGNvbXB1dGVyLm5hbWUgPSBcImNvbXB1dGVyXCI7XG5cbiAgLy8gUmVwZWF0ZWRseSB0cmllcyB0byBwbGFjZSB0aGUgc2hpcCBhdCByYW5kb20gdW50aWwgYSBzdWNjZXNzLlxuICAvLyBSZXR1cm5zIHRoZSBmaW5hbCBwbGFjZW1lbnQuXG4gIGNvbXB1dGVyLnBsYWNlU2hpcCA9IGZ1bmN0aW9uIChuYW1lLCBsZW5ndGgpIHtcbiAgICBjb25zdCByb3cgPSBnZXRSYW5kb21JbnQoMCwgYm9hcmQuc2l6ZSk7XG4gICAgY29uc3QgY29sID0gZ2V0UmFuZG9tSW50KDAsIGJvYXJkLnNpemUpO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgYm9hcmQuSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcikpIHRocm93IGU7XG4gICAgICByZXR1cm4gY29tcHV0ZXIucGxhY2VTaGlwKG5hbWUsIGxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiB7IHJvdywgY29sLCBvcmllbnRhdGlvbiB9O1xuICB9O1xuXG4gIC8vIEF0dGFjayBhIHJhbmRvbSBzcG90IGZyb20gdGhlIHNldCBvZiBhbGwgYWxsb3dhYmxlIHNwb3RzXG4gIGNvbXB1dGVyLmF0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGlmZmljdWx0eSA9PT0gXCJlYXN5XCIpIHtcbiAgICAgIHJldHVybiBjb21wdXRlckF0dGFja0xvZ2ljRWFzeSgpO1xuICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgcmV0dXJuIGNvbXB1dGVyQXR0YWNrTG9naWNNZWRpdW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEaWZmaWN1bHR5IGxldmVsIHJlcXVlc3RlZCAoJHtkaWZmaWN1bHR5fSkgaXMgaW52YWxpZCFgKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRUFTWSBESUZGSUNVTFRZIEFJIExPR0lDXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrTG9naWNFYXN5KCkge1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBnZXRSYW5kb21BdHRhY2thYmxlU3BvdChvcHBvbmVudEJvYXJkKTtcbiAgICBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gIH1cblxuICAvLyBNRURJVU0gRElGRklDVUxUWSBBSSBMT0dJQ1xuICBsZXQgbW9kZSA9IFwiTE9DQVRJTkdcIjsgLy8gTE9DQVRJTkcsIE9SSUVOVElORywgREVTVFJPWUlOR1xuXG4gIGNvbnN0IGF0dGFja0hpc3RvcnkgPSB7fTtcbiAgcmVzZXRBdHRhY2tIaXN0b3J5KCk7XG5cbiAgZnVuY3Rpb24gcmVzZXRBdHRhY2tIaXN0b3J5KCkge1xuICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjayA9IHsgcm93OiBudWxsLCBjb2w6IG51bGwgfTtcbiAgICAvLyBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2tIaXQgPSBmYWxzZTtcbiAgICBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQgPSB7IHJvdzogbnVsbCwgY29sOiBudWxsIH07XG4gICAgYXR0YWNrSGlzdG9yeS5vcmllbnRhdGlvbiA9IG51bGw7IC8vIFwiaFwiIG9yIFwidlwiXG4gICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb24gPSBudWxsOyAvLyArLy0gMVxuICAgIGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkID0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrTG9naWNNZWRpdW0oKSB7XG4gICAgbGV0IHJvdywgY29sO1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBcIkxPQ0FUSU5HXCI6IHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW5nTG9naWMoKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJPUklFTlRJTkdcIjoge1xuICAgICAgICAvLyBMYXN0IGF0dGFjayB3YXMgYSBoaXQuIE5vdyB0cnlpbmcgdG8gZGV0ZXJtaW5lIG9yaWVudGF0aW9uIG9mIHNoaXBcbiAgICAgICAgcmV0dXJuIG9yaWVudGluZ0xvZ2ljKCk7XG4gICAgICB9XG4gICAgICBjYXNlIFwiREVTVFJPWUlOR1wiOiB7XG4gICAgICAgIC8vIE9yaWVudGF0aW9uIGRldGVybWluZWQuIERlc3Ryb3kgc2hpcCBpbiBvbmUgZGlyZWN0aW9uLCB0aGVuIHRoZSBvdGhlciFcbiAgICAgICAgcmV0dXJuIGRlc3Ryb3lpbmdMb2dpYygpO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gTE9DQVRJTkcgbG9naWNcbiAgZnVuY3Rpb24gbG9jYXRpbmdMb2dpYygpIHtcbiAgICAvLyBDaG9vc2UgYSByYW5kb20gc3BvdFxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBnZXRSYW5kb21BdHRhY2thYmxlU3BvdChvcHBvbmVudEJvYXJkKTtcbiAgICBjb25zdCBoaXQgPSBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIC8vIFVwZGF0ZSBhdHRhY2sgaGlzdG9yeVxuICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5yb3cgPSByb3c7XG4gICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLmNvbCA9IGNvbDtcbiAgICAvLyBDaGFuZ2Ugc3RhdGVzIGlmIGF0dGFjayB3YXMgYSBoaXRcbiAgICBpZiAoaGl0KSB7XG4gICAgICBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQgPSB7IHJvdywgY29sIH07XG4gICAgICBtb2RlID0gXCJPUklFTlRJTkdcIjtcbiAgICB9XG4gICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgfVxuXG4gIC8vIE9SSUVOVElORyBMT0dJQ1xuICBmdW5jdGlvbiBvcmllbnRpbmdMb2dpYygpIHtcbiAgICAvLyBBdHRhY2sgYSByYW5kb20gbmVpZ2hib3Igb2YgaW5pdGlhbCBoaXQgbG9jYXRpb25cbiAgICBjb25zdCByb3dDb2wgPSBnZXRSYW5kb21BdHRhY2thYmxlTmVpZ2hib3IoXG4gICAgICBvcHBvbmVudEJvYXJkLFxuICAgICAgYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LnJvdyxcbiAgICAgIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5jb2xcbiAgICApO1xuICAgIGlmICghcm93Q29sKSB7XG4gICAgICAvLyBObyBuZWlnaGJvcnMgYXJlIGF0dGFja2FibGUuIEdvIGJhY2sgdG8gTE9DQVRJTkdcbiAgICAgIG1vZGUgPSBcIkxPQ0FUSU5HXCI7XG4gICAgICByZXNldEF0dGFja0hpc3RvcnkoKTtcbiAgICAgIHJldHVybiBsb2NhdGluZ0xvZ2ljKCk7XG4gICAgfVxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSByb3dDb2w7XG4gICAgY29uc3QgaGl0ID0gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAvLyBVcGRhdGUgYXR0YWNrIGhpc3RvcnlcbiAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sucm93ID0gcm93O1xuICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5jb2wgPSBjb2w7XG4gICAgLy8gQ2hhbmdlIHN0YXRlcyBpZiBhdHRhY2sgd2FzIGEgaGl0XG4gICAgaWYgKGhpdCkge1xuICAgICAgbW9kZSA9IFwiREVTVFJPWUlOR1wiO1xuICAgICAgYXR0YWNrSGlzdG9yeS5vcmllbnRhdGlvbiA9XG4gICAgICAgIHJvdyA9PSBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQucm93ID8gXCJoXCIgOiBcInZcIjtcbiAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uID1cbiAgICAgICAgYXR0YWNrSGlzdG9yeS5vcmllbnRhdGlvbiA9PT0gXCJoXCJcbiAgICAgICAgICA/IE1hdGguc2lnbihjb2wgLSBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQuY29sKVxuICAgICAgICAgIDogTWF0aC5zaWduKHJvdyAtIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5yb3cpO1xuICAgICAgLy8gTG9vayBhcm91bmQgdG8gc2VlIGlmIHdlIGFyZSBmaW5pc2hlZCB3aXRoIGFueSBkaXJlY3Rpb25zIHlldFxuICAgICAgY29uc3QgbmV4dFJvd0NvbCA9IGdldE5leHREaXJlY3RlZE5laWdoYm9yKFxuICAgICAgICBvcHBvbmVudEJvYXJkLFxuICAgICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sucm93LFxuICAgICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2suY29sLFxuICAgICAgICBhdHRhY2tIaXN0b3J5Lm9yaWVudGF0aW9uLFxuICAgICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvblxuICAgICAgKTtcbiAgICAgIGNvbnN0IG9wcG9Sb3dDb2wgPSBnZXROZXh0RGlyZWN0ZWROZWlnaGJvcihcbiAgICAgICAgb3Bwb25lbnRCb2FyZCxcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LnJvdyxcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LmNvbCxcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5vcmllbnRhdGlvbixcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb24gKiAtMVxuICAgICAgKTtcbiAgICAgIGlmIChcbiAgICAgICAgIW5leHRSb3dDb2wgfHxcbiAgICAgICAgIW9wcG9uZW50Qm9hcmQuYXR0YWNrQWxsb3dlZChuZXh0Um93Q29sWzBdLCBuZXh0Um93Q29sWzFdKVxuICAgICAgKSB7XG4gICAgICAgIGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkICs9IDE7XG4gICAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uICo9IC0xO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhb3Bwb1Jvd0NvbCB8fFxuICAgICAgICAhb3Bwb25lbnRCb2FyZC5hdHRhY2tBbGxvd2VkKG9wcG9Sb3dDb2xbMF0sIG9wcG9Sb3dDb2xbMV0pXG4gICAgICApIHtcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCA9PT0gMikge1xuICAgICAgICAvLyBHbyBiYWNrIHRvIExPQ0FUSU5HIGZvciBuZXh0IHR1cm5cbiAgICAgICAgbW9kZSA9IFwiTE9DQVRJTkdcIjtcbiAgICAgICAgcmVzZXRBdHRhY2tIaXN0b3J5KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gIH1cblxuICAvLyBERVNUUk9ZSU5HIGxvZ2ljXG4gIGZ1bmN0aW9uIGRlc3Ryb3lpbmdMb2dpYygpIHtcbiAgICAvLyBHZXQgbmV4dCBhdHRhY2sgbG9jYXRpb25cbiAgICBjb25zdCByb3dDb2wgPSBnZXROZXh0RGlyZWN0ZWROZWlnaGJvcihcbiAgICAgIG9wcG9uZW50Qm9hcmQsXG4gICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sucm93LFxuICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLmNvbCxcbiAgICAgIGF0dGFja0hpc3Rvcnkub3JpZW50YXRpb24sXG4gICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvblxuICAgICk7XG5cbiAgICAvLyBJZiBhdHRhY2sgaXMgbm90IGFsbG93ZWQsIG5lZWQgdG8gaW5jcmVtZW50IG51bWJlciBvZiBmaW5pc2hlZCBkaXJlY3Rpb25zXG4gICAgaWYgKCFyb3dDb2wgfHwgIW9wcG9uZW50Qm9hcmQuYXR0YWNrQWxsb3dlZChyb3dDb2xbMF0sIHJvd0NvbFsxXSkpIHtcbiAgICAgIC8vIFdlIGZpbmlzaGVkIHRoaXMgZGlyZWN0aW9uXG4gICAgICBhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCArPSAxO1xuICAgICAgaWYgKGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkID09PSAxKSB7XG4gICAgICAgIC8vIFN0aWxsIG5lZWQgdG8gZ28gb3RoZXIgZGlyZWN0aW9uLlxuICAgICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sucm93ID0gYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LnJvdztcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLmNvbCA9IGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5jb2w7XG4gICAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uICo9IC0xO1xuICAgICAgfSBlbHNlIGlmIChhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCA9PT0gMikge1xuICAgICAgICAvLyBGaW5pc2hlZCBib3RoIGRpcmVjdGlvbnNcbiAgICAgICAgbW9kZSA9IFwiTE9DQVRJTkdcIjtcbiAgICAgICAgcmVzZXRBdHRhY2tIaXN0b3J5KCk7XG4gICAgICAgIHJldHVybiBsb2NhdGluZ0xvZ2ljKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW3JvdywgY29sXSA9IHJvd0NvbDtcbiAgICAvLyBBdHRhY2tcbiAgICBjb25zdCBoaXQgPSBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIC8vIFVwZGF0ZSBhdHRhY2sgaGlzdG9yeVxuICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5yb3cgPSByb3c7XG4gICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLmNvbCA9IGNvbDtcblxuICAgIC8vIExvb2sgYWhlYWQgdG8gbmV4dCB0dXJuIHRvIHNlZSBpZiB3ZSBuZWVkIHRvIHN3aXRjaCBvdXIgZGlyZWN0aW9uLlxuICAgIC8vIElmIHRoaXMgdHVybiB3YXNuJ3QgYSBoaXQgb3IgbmV4dCBuZWlnaGJvciAobmV4dCB0dXJuKSBub3QgYXR0YWNrYWJsZSwgd2UgZmluaXNoZWQgaW4gdGhpcyBkaXJlY3Rpb25cbiAgICBjb25zdCBuZXh0Um93Q29sID0gZ2V0TmV4dERpcmVjdGVkTmVpZ2hib3IoXG4gICAgICBvcHBvbmVudEJvYXJkLFxuICAgICAgcm93LFxuICAgICAgY29sLFxuICAgICAgYXR0YWNrSGlzdG9yeS5vcmllbnRhdGlvbixcbiAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICAhaGl0IHx8XG4gICAgICAhbmV4dFJvd0NvbCB8fFxuICAgICAgIW9wcG9uZW50Qm9hcmQuYXR0YWNrQWxsb3dlZChuZXh0Um93Q29sWzBdLCBuZXh0Um93Q29sWzFdKVxuICAgICkge1xuICAgICAgLy8gV2UgZmluaXNoZWQgdGhpcyBkaXJlY3Rpb25cbiAgICAgIGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkICs9IDE7XG4gICAgICBpZiAoYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgPT09IDEpIHtcbiAgICAgICAgLy8gU3RpbGwgbmVlZCB0byBnbyBvdGhlciBkaXJlY3Rpb24uXG4gICAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5yb3cgPSBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQucm93O1xuICAgICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2suY29sID0gYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LmNvbDtcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIC8vIENoZWNrIGFnYWluIGlmIG5leHRcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgPT09IDIpIHtcbiAgICAgICAgLy8gRmluaXNoZWQgYm90aCBkaXJlY3Rpb25zXG4gICAgICAgIG1vZGUgPSBcIkxPQ0FUSU5HXCI7XG4gICAgICAgIHJlc2V0QXR0YWNrSGlzdG9yeSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVyO1xufVxuXG4vLyBVVElMSVRZIEZVTkNTXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tT3JpZW50YXRpb24oKSB7XG4gIHJldHVybiBnZXRSYW5kb21JbnQoMCwgMikgPT09IDAgPyBcImhcIiA6IFwidlwiO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21BcnJheUVudHJ5KGFycmF5KSB7XG4gIHJldHVybiBhcnJheVtnZXRSYW5kb21JbnQoMCwgYXJyYXkubGVuZ3RoKV07XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUF0dGFja2FibGVTcG90KGJvYXJkKSB7XG4gIHJldHVybiBnZXRSYW5kb21BcnJheUVudHJ5KGJvYXJkLmF0dGFja2FibGVTcG90cygpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQXR0YWNrYWJsZU5laWdoYm9yKGJvYXJkLCByb3csIGNvbCkge1xuICBjb25zdCBhdHRhY2thYmxlTmVpZ2hib3JzID0gYm9hcmQuYXR0YWNrYWJsZVNwb3RzKCkuZmlsdGVyKChbYVJvdywgYUNvbF0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgKG9uZUF3YXkocm93LCBhUm93KSAmJiBjb2wgPT09IGFDb2wpIHx8XG4gICAgICAocm93ID09PSBhUm93ICYmIG9uZUF3YXkoY29sLCBhQ29sKSlcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGdldFJhbmRvbUFycmF5RW50cnkoYXR0YWNrYWJsZU5laWdoYm9ycyk7XG59XG5cbmZ1bmN0aW9uIGdldE5leHREaXJlY3RlZE5laWdoYm9yKGJvYXJkLCByb3csIGNvbCwgb3JpZW50YXRpb24sIGRpcmVjdGlvbikge1xuICBjb25zdCBbbmV3Um93LCBuZXdDb2xdID1cbiAgICBvcmllbnRhdGlvbiA9PSBcImhcIiA/IFtyb3csIGNvbCArIGRpcmVjdGlvbl0gOiBbcm93ICsgZGlyZWN0aW9uLCBjb2xdO1xuICBjb25zdCBhdHRhY2tTdGF0dXMgPSBib2FyZC5hdHRhY2tTdGF0dXMobmV3Um93LCBuZXdDb2wpO1xuICBpZiAoYXR0YWNrU3RhdHVzID09IFwib3V0T2ZCb3VuZHNcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChhdHRhY2tTdGF0dXMgPT0gXCJoaXRcIikge1xuICAgIC8vIFNraXAgdGhpcyBvbmVcbiAgICByZXR1cm4gZ2V0TmV4dERpcmVjdGVkTmVpZ2hib3IoXG4gICAgICBib2FyZCxcbiAgICAgIG5ld1JvdyxcbiAgICAgIG5ld0NvbCxcbiAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgZGlyZWN0aW9uXG4gICAgKTtcbiAgfVxuICByZXR1cm4gW25ld1JvdywgbmV3Q29sXTtcbn1cblxuZnVuY3Rpb24gb25lQXdheShhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPT09IDE7XG59XG4iLCJleHBvcnQgeyBVSSB9O1xuXG5jb25zdCBVSSA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEhPTUUgUEFHRSBMT0FERVJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICAgIC8vIEFERCBIT01FIFBBR0UgRUxFTUVOVFMgVE8gVEhFIERPTVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmlubmVySFRNTCA9IGBcbiAgICAgIDxoMT5CQVRUTEVTSElQPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25zLWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGlmZmljdWx0eVwiPkRpZmZpY3VsdHk8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJkaWZmaWN1bHR5XCIgaWQ9XCJkaWZmaWN1bHR5XCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVhc3lcIj5FYXN5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzdGFydC1nYW1lXCI+U3RhcnQgR2FtZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYm9hcmRzLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIGA7XG5cbiAgICAvLyBXQUlUIEZPUiBVU0VSIFRPIFBSRVNTIFNUQVJUIEdBTUUgQlVUVE9OXG4gICAgYXN5bmMgZnVuY3Rpb24gc29saWNpdFN0YXJ0R2FtZSgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBzdGFydEdhbWVQcmVzc2VkKCkge1xuICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBnZXREaWZmaWN1bHR5U2VsZWN0aW9uKCk7XG4gICAgICAgICAgcmVtb3ZlU3RhcnRHYW1lT3B0aW9ucygpO1xuICAgICAgICAgIC8vIFJldHVybiB0aGUgZGlmZmljdWx0eSBjaG9zZW5cbiAgICAgICAgICByZXNvbHZlKGRpZmZpY3VsdHkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExpc3RlbiBmb3IgU3RhcnQgR2FtZSBidXR0b24gY2xpY2tlZFxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3N0YXJ0LWdhbWVcIilcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZVByZXNzZWQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSEVMUEVSU1xuICAgIGZ1bmN0aW9uIHJlbW92ZVN0YXJ0R2FtZU9wdGlvbnMoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnMtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERpZmZpY3VsdHlTZWxlY3Rpb24oKSB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpZmZpY3VsdHlcIik7XG4gICAgICByZXR1cm4gc2VsZWN0Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNvbGljaXRTdGFydEdhbWUgfTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEJPQVJEIFVJIEZBQ1RPUlkgRlVOQ1RJT05cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZnVuY3Rpb24gY3JlYXRlQm9hcmRVSShib2FyZCkge1xuICAgIC8vIEFERCBCT0FSRCBVSSBUTyBET01cblxuICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIGJvYXJkIGFuZCB0aXRsZVxuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICAgIC8vIEFkZCB0aXRsZVxuICAgIGNvbnN0IHRpdGxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZUVsZW0uaW5uZXJUZXh0ID0gYm9hcmQubmFtZSA9PT0gXCJwbGF5ZXJcIiA/IFwiWU9VXCIgOiBcIkFJXCI7XG4gICAgdGl0bGVFbGVtLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW0pO1xuICAgIC8vIEFkZCBib2FyZFxuICAgIGNvbnN0IGJvYXJkRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRFbGVtLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgICBib2FyZEVsZW0uaWQgPSBib2FyZC5uYW1lO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZC5zaXplOyBjb2wrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgIGJvYXJkRWxlbS5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRFbGVtKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkcy1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuXG4gICAgLy8gUkVGUkVTSEVTIFRIRSBCT0FSRCBVSVxuICAgIGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZC5zaXplOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZC5zaXplOyBjb2wrKykge1xuICAgICAgICAgIGlmIChib2FyZC5oYXNTaGlwKHJvdywgY29sKSkge1xuICAgICAgICAgICAgYWRkU2hpcChyb3csIGNvbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3aXRjaCAoYm9hcmQuYXR0YWNrU3RhdHVzKHJvdywgY29sKSkge1xuICAgICAgICAgICAgY2FzZSBcImhpdFwiOlxuICAgICAgICAgICAgICBhZGRIaXQocm93LCBjb2wpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaXNzXCI6XG4gICAgICAgICAgICAgIGFkZE1pc3Mocm93LCBjb2wpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgICAgICAgIC8vIE5vdCBhdHRhY2tlZFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIkJvYXJkIGF0dGFja1N0YXR1cygpIG1ldGhvZCByZXR1cm5lZCBhbiB1bmV4cGVjdGVkIHZhbHVlIVwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU09MSUNJVFMgUExBWUVSIFRPIFBMQUNFIEEgU0hJUCBVU0lORyBUSEUgVUlcbiAgICBhc3luYyBmdW5jdGlvbiBzb2xpY2l0UGxhY2VTaGlwKG5hbWUsIGxlbmd0aCkge1xuICAgICAgLy8gUmV0dXJuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNoaXAgc3VjY2Vzc2Z1bGx5IHBsYWNlZFxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IFwiaFwiOyAvLyB3aWxsIHRvZ2dsZSB0aGlzIHdpdGgga2V5ZG93biBsaXN0ZW5lciBvbiBcInJcIlxuXG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBtb3VzZW92ZXIgdGhhdCBhZGRzIHNoYWRpbmcgdG8gY2VsbHMgd2hlcmUgc2hpcCB3aWxsIGJlXG4gICAgICAgIC8vIHBsYWNlZCBpZiB0YXJnZXQgY2VsbCBpcyBjbGlja2VkXG4gICAgICAgIGZ1bmN0aW9uIGFkZEdob3N0U2hpcChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0IHx8ICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZC1zcXVhcmVcIikpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KTtcbiAgICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKTtcbiAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkY29sID0gMDsgZGNvbCA8IGxlbmd0aDsgZGNvbCsrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZ2V0Q2VsbChyb3csIGNvbCArIGRjb2wpLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1zaGlwXCIpO1xuICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIChyb3csY29sKSAtPiBpZ25vcmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkcm93ID0gMDsgZHJvdyA8IGxlbmd0aDsgZHJvdysrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZ2V0Q2VsbChyb3cgKyBkcm93LCBjb2wpLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1zaGlwXCIpO1xuICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICAvLyBJbnZhbGlkIChyb3csY29sKSAtPiBpZ25vcmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBtb3VzZW91dCB0aGF0IGNsZWFycyBhbGwgZ2hvc3Qgc2hpcHMgZnJvbSB0aGUgYm9hcmRcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJBbGxHaG9zdFNoaXBzKCkge1xuICAgICAgICAgIGNvbnN0IGdob3N0U2hpcHMgPSBib2FyZEVsZW0ucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIFwiLmdyaWQtc3F1YXJlLmdob3N0LXNoaXBcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgZ2hvc3RTaGlwcy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJnaG9zdC1zaGlwXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBrZXlkb3duIHRoYXQgcm90YXRlcyB0aGUgZ2hvc3Qgc2hpcCBpZiBcInJcIiBpcyBwcmVzc2VkXG4gICAgICAgIGZ1bmN0aW9uIGtleVByZXNzZWQoKSB7XG4gICAgICAgICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbiA9PSBcImhcIiA/IFwidlwiIDogXCJoXCI7XG4gICAgICAgICAgY2xlYXJBbGxHaG9zdFNoaXBzKCk7XG4gICAgICAgICAgLy8gQ2FsbCB0aGUgaG92ZXIgY2FsbGJhY2sgd2l0aCBhIGZ1ZGdlZCBldmVudCB0YXJnZXQgdG8gZ2VuZXJhdGUgdGhlIHJvdGF0ZWQgZ2hvc3Qgc2hpcFxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1zcXVhcmU6aG92ZXJcIik7XG4gICAgICAgICAgYWRkR2hvc3RTaGlwKHsgdGFyZ2V0IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbGJhY2sgd2hlbiBib2FyZCBpcyBjbGlja2VkIHRoYXQgcmV0dXJucyB0aGUgcGxhY2VtZW50IGNob3NlblxuICAgICAgICBmdW5jdGlvbiBib2FyZENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgICAvLyBEZXN0cm95IGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBob3ZlciBlZmZlY3RcbiAgICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgIGNsZWFyQWxsR2hvc3RTaGlwcygpO1xuICAgICAgICAgIC8vIFJFU09MVkVcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIHJvdzogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93KSxcbiAgICAgICAgICAgIGNvbDogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkcyBhbGwgZXZlbnQgbGlzdGVuZXJzIGZvciBzaGlwIHBsYWNlbWVudCBpbnRlcmFjdGl2aXR5XG4gICAgICAgIGZ1bmN0aW9uIGFkZEFsbEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAgIGJvYXJkRWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGFkZEdob3N0U2hpcCk7XG4gICAgICAgICAgYm9hcmRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjbGVhckFsbEdob3N0U2hpcHMpO1xuICAgICAgICAgIGJvYXJkRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDbGlja2VkKTtcbiAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycyBmb3Igc2hpcCBwbGFjZW1lbnQgaW50ZXJhY3Rpdml0eVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbGxFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgICBib2FyZEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBhZGRHaG9zdFNoaXApO1xuICAgICAgICAgIGJvYXJkRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgY2xlYXJBbGxHaG9zdFNoaXBzKTtcbiAgICAgICAgICBib2FyZEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvYXJkQ2xpY2tlZCk7XG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHJlc3NlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgRXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGFkZEFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb2xpY2l0IGFuIGF0dGFjayB1c2luZyB0aGUgYm9hcmQgVUlcbiAgICBhc3luYyBmdW5jdGlvbiBzb2xpY2l0QXR0YWNrKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGJvYXJkQ2xpY2tlZChldmVudCkge1xuICAgICAgICAgIGJvYXJkRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDbGlja2VkKTtcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIHJvdzogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93KSxcbiAgICAgICAgICAgIGNvbDogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDbGlja2VkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIEdldCBjZWxsIERPTSBlbGVtZW50IGJ5IChyb3csIGNvbCkgaW5kZXhcbiAgICBmdW5jdGlvbiBnZXRDZWxsKHJvdywgY29sKSB7XG4gICAgICByZXR1cm4gYm9hcmRFbGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuZ3JpZC1zcXVhcmVbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEFkZCBzaGlwIHRvIGNlbGxcbiAgICBmdW5jdGlvbiBhZGRTaGlwKHJvdywgY29sKSB7XG4gICAgICBnZXRDZWxsKHJvdywgY29sKS5jbGFzc0xpc3QuYWRkKFwiaGFzLXNoaXBcIik7XG4gICAgfVxuXG4gICAgLy8gQWRkIGhpdCB0byBjZWxsXG4gICAgZnVuY3Rpb24gYWRkSGl0KHJvdywgY29sKSB7XG4gICAgICBnZXRDZWxsKHJvdywgY29sKS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH1cblxuICAgIC8vIEFkZCBtaXNzIHRvIGNlbGxcbiAgICBmdW5jdGlvbiBhZGRNaXNzKHJvdywgY29sKSB7XG4gICAgICBnZXRDZWxsKHJvdywgY29sKS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZWZyZXNoLCBzb2xpY2l0UGxhY2VTaGlwLCBzb2xpY2l0QXR0YWNrIH07XG4gIH1cblxuICAvLyBHQU1FIE9WRVIgRElTUExBWVxuICBhc3luYyBmdW5jdGlvbiBkaXNwbGF5R2FtZU92ZXIod2lubmVyKSB7XG4gICAgLy8gQWRkIGdhbWUgb3ZlciBkaXNwbGF5IHRvIERPTVxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5ib2FyZHMtY29udGFpbmVyXCIpXG4gICAgICAuYXBwZW5kQ2hpbGQoZ2V0R2FtZU92ZXJFbGVtZW50KHdpbm5lcikpO1xuICAgIC8vIFdhaXQgZm9yIHVzZXIgdG8gY2xpY2sgdGhlIHJlc3RhcnQgYnV0dG9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBmdW5jdGlvbiBwbGF5QWdhaW5QcmVzc2VkKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNwbGF5LWFnYWluXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheUFnYWluUHJlc3NlZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRHYW1lT3ZlckVsZW1lbnQod2lubmVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuaWQgPSBcImdhbWUtb3Zlci1jb250YWluZXJcIjtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgIHdpbm5lciA9PT0gXCJwbGF5ZXJcIiA/IFwiR2FtZSBPdmVyISBZb3Ugd29uIVwiIDogXCJHYW1lIE92ZXIhIFlvdSBsb3N0IVwiO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGlkPVwiZ2FtZS1vdmVyLW1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInBsYXktYWdhaW5cIj5QbGF5IEFnYWluPC9idXR0b24+XG4gICAgYDtcbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgcmV0dXJuIHsgbG9hZEhvbWVQYWdlLCBjcmVhdGVCb2FyZFVJLCBkaXNwbGF5R2FtZU92ZXIgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
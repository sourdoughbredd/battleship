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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.boards-container {
  display: flex;
  gap: 40px;
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

/* SHOW COMPUTER SHIPS (FOR TESTING) */
.board .grid-square.has-ship {
  background-color: rgb(185, 186, 190);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA,sCAAsC;AACtC;EACE,oCAAoC;AACtC","sourcesContent":[".boards-container {\n  display: flex;\n  gap: 40px;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  width: 500px;\n  height: 500px;\n  border: 1px solid black;\n}\n\n.grid-square {\n  border: 1px solid black;\n  box-sizing: content-box;\n}\n\n.grid-square:hover {\n  background-color: rgb(219, 219, 219);\n}\n\n.board#player .grid-square.has-ship,\n.board#player .grid-square.ghost-ship {\n  background-color: rgb(185, 186, 190);\n}\n\n.board#player .grid-square.has-ship.hit,\n.board#computer .grid-square.has-ship.hit {\n  background-color: rgb(214, 0, 0);\n}\n\n.board .grid-square.miss {\n  background-color: rgb(0, 53, 200);\n}\n\n/* SHOW COMPUTER SHIPS (FOR TESTING) */\n.board .grid-square.has-ship {\n  background-color: rgb(185, 186, 190);\n}\n"],"sourceRoot":""}]);
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





const createGame = function () {
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
      computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.createComputerPlayer)(computerBoard, playerBoard);

      // Let players place their ships
      await playerPlaceShips();
      playerBoardUI.refresh();
      computerPlaceShips();
      computerBoardUI.refresh();

      // Start game loop
      await gameLoop();
      saveGameLog();
    } catch {
      // Save game log so game can be restimulated
      saveGameLog();
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

  function processGameOver(winningPlayer) {
    alert(
      `Game Over! Winner is ${
        winningPlayer === player ? "Player" : "Computer"
      }!`
    );
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

    // Game is over. Resolve the promise.
    return new Promise((resolve, reject) => {
      switchPlayer(); // switch so currPlayer is winner
      processGameOver(currPlayer);
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



// NEW GAME
const game = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.createGame)();
await game.startGame();

// RESTIM
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
  function attack(row, col) {
    opponentBoard.receiveAttack(row, col);
  }

  async function placeShip(name, length, row, col, orientation) {
    board.placeShip(name, length, row, col, orientation);
    return new Promise((resolve) => resolve());
  }

  return {
    board,
    placeShip,
    attack,
  };
}

// COMPUTER PLAYER AI
function createComputerPlayer(board, opponentBoard) {
  // Start with regular player as template, then override methods
  const computer = createPlayer(board, opponentBoard);

  // Override methods

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
    return computerAttackLogicMedium();
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
  function createBoardUI(board) {
    // Create the board UI DOM element and append to DOM
    const boardElem = document.createElement("div");
    boardElem.classList.add("board");
    boardElem.id = board.name;
    for (let row = 0; row < board.size; row++) {
      for (let col = 0; col < board.size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-square");
        cell.dataset.row = row;
        cell.dataset.col = col;
        // cellsArray[row][col] = cell;
        boardElem.appendChild(cell);
      }
    }
    document.querySelector(".boards-container").appendChild(boardElem);

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

    // Refreshes the board UI
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

    // Solicits the player to place a ship using the UI
    async function solicitPlaceShip(name, length) {
      return new Promise((resolve) => {
        let orientation = "h"; // will toggle this with keydown listener

        // Callback for mouseover that adds shading to cells where ship will be placed if target cell is clicked
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
                break;
              }
            }
          } else {
            for (let drow = 0; drow < length; drow++) {
              try {
                getCell(row + drow, col).classList.add("ghost-ship");
              } catch {
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

    return { refresh, solicitPlaceShip, solicitAttack };
  }

  return { createBoardUI };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqU2M7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4Qyx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsSUFBSSxlQUFlLElBQUk7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQywwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWiwrQkFBK0IsZUFBZTtBQUM5QztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsYUFBYTtBQUNiOztBQUVBLFdBQVc7QUFDWCxDQUFDOzs7Ozs7O1VDMUtEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQSxzR0FBc0c7V0FDdEc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ2hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZU9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0MHB4O1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ncmlkLXNxdWFyZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLmdyaWQtc3F1YXJlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xufVxuXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5oYXMtc2hpcCxcbi5ib2FyZCNwbGF5ZXIgLmdyaWQtc3F1YXJlLmdob3N0LXNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODYsIDE5MCk7XG59XG5cbi5ib2FyZCNwbGF5ZXIgLmdyaWQtc3F1YXJlLmhhcy1zaGlwLmhpdCxcbi5ib2FyZCNjb21wdXRlciAuZ3JpZC1zcXVhcmUuaGFzLXNoaXAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMCwgMCk7XG59XG5cbi5ib2FyZCAuZ3JpZC1zcXVhcmUubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA1MywgMjAwKTtcbn1cblxuLyogU0hPVyBDT01QVVRFUiBTSElQUyAoRk9SIFRFU1RJTkcpICovXG4uYm9hcmQgLmdyaWQtc3F1YXJlLmhhcy1zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTg2LCAxOTApO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLHNDQUFzQztBQUN0QztFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ncmlkLXNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4uZ3JpZC1zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xcbn1cXG5cXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5oYXMtc2hpcCxcXG4uYm9hcmQjcGxheWVyIC5ncmlkLXNxdWFyZS5naG9zdC1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4NiwgMTkwKTtcXG59XFxuXFxuLmJvYXJkI3BsYXllciAuZ3JpZC1zcXVhcmUuaGFzLXNoaXAuaGl0LFxcbi5ib2FyZCNjb21wdXRlciAuZ3JpZC1zcXVhcmUuaGFzLXNoaXAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDAsIDApO1xcbn1cXG5cXG4uYm9hcmQgLmdyaWQtc3F1YXJlLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDUzLCAyMDApO1xcbn1cXG5cXG4vKiBTSE9XIENPTVBVVEVSIFNISVBTIChGT1IgVEVTVElORykgKi9cXG4uYm9hcmQgLmdyaWQtc3F1YXJlLmhhcy1zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4NiwgMTkwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVPYmplY3RzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIsIGNyZWF0ZUNvbXB1dGVyUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL3VpLmpzXCI7XG5leHBvcnQgeyBjcmVhdGVHYW1lLCBjcmVhdGVSZXBsYXkgfTtcblxuY29uc3QgY3JlYXRlR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHBsYXllciwgY29tcHV0ZXI7XG4gIGxldCBwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZDtcbiAgbGV0IHBsYXllckJvYXJkVUksIGNvbXB1dGVyQm9hcmRVSTtcbiAgY29uc3QgZ2FtZUxvZyA9IHtcbiAgICBwbGF5ZXJTaGlwczogW10sXG4gICAgY29tcHV0ZXJTaGlwczogW10sXG4gICAgcGxheWVyQXR0YWNrczogW10sXG4gICAgY29tcHV0ZXJBdHRhY2tzOiBbXSxcbiAgfTtcbiAgbGV0IGN1cnJQbGF5ZXI7XG5cbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgQ2FycmllcjogNSxcbiAgICBCYXR0bGVzaGlwOiA0LFxuICAgIERlc3Ryb3llcjogMyxcbiAgICBTdWJtYXJpbmU6IDMsXG4gICAgXCJQYXRyb2wgQm9hdFwiOiAyLFxuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICB0cnkge1xuICAgICAgLy8gQ3JlYXRlIGJvYXJkc1xuICAgICAgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXJcIik7XG4gICAgICBjb21wdXRlckJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKFwiY29tcHV0ZXJcIik7XG5cbiAgICAgIC8vIENyZWF0ZSBib2FyZCBVSXNcbiAgICAgIHBsYXllckJvYXJkVUkgPSBVSS5jcmVhdGVCb2FyZFVJKHBsYXllckJvYXJkKTtcbiAgICAgIGNvbXB1dGVyQm9hcmRVSSA9IFVJLmNyZWF0ZUJvYXJkVUkoY29tcHV0ZXJCb2FyZCk7XG5cbiAgICAgIC8vIENyZWF0ZSBwbGF5ZXJzXG4gICAgICBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpO1xuICAgICAgY29tcHV0ZXIgPSBjcmVhdGVDb21wdXRlclBsYXllcihjb21wdXRlckJvYXJkLCBwbGF5ZXJCb2FyZCk7XG5cbiAgICAgIC8vIExldCBwbGF5ZXJzIHBsYWNlIHRoZWlyIHNoaXBzXG4gICAgICBhd2FpdCBwbGF5ZXJQbGFjZVNoaXBzKCk7XG4gICAgICBwbGF5ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgIGNvbXB1dGVyUGxhY2VTaGlwcygpO1xuICAgICAgY29tcHV0ZXJCb2FyZFVJLnJlZnJlc2goKTtcblxuICAgICAgLy8gU3RhcnQgZ2FtZSBsb29wXG4gICAgICBhd2FpdCBnYW1lTG9vcCgpO1xuICAgICAgc2F2ZUdhbWVMb2coKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIFNhdmUgZ2FtZSBsb2cgc28gZ2FtZSBjYW4gYmUgcmVzdGltdWxhdGVkXG4gICAgICBzYXZlR2FtZUxvZygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHBsYXllclBsYWNlU2hpcHMoKSB7XG4gICAgLy8gUkVBTCBJTVBMRU1UQVRJT05cbiAgICBmb3IgKGNvbnN0IFtzaGlwTmFtZSwgc2hpcExlbmd0aF0gb2YgT2JqZWN0LmVudHJpZXMoc2hpcHMpKSB7XG4gICAgICAvLyBTb2xpY2l0IHBsYXllciB0byBpbnRlcmFjdCB3aXRoIFVJXG4gICAgICBhd2FpdCBzb2xpY2l0UGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoKTtcbiAgICAgIC8vIFJlZnJlc2ggVUlcbiAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNvbGljaXRQbGFjZVNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gICAgY29uc29sZS5sb2coYHdhaXRpbmcgdG8gcGxhY2UgJHtuYW1lfWApO1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IGF3YWl0IHBsYXllckJvYXJkVUkuc29saWNpdFBsYWNlU2hpcChuYW1lLCBsZW5ndGgpO1xuICAgIC8vIEdldCBVSSBpbnB1dCBhbmQgcGxhY2Ugb24gYm9hcmRcbiAgICB0cnkge1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBuYW1lLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIHBsYWNlbWVudC5yb3csXG4gICAgICAgIHBsYWNlbWVudC5jb2wsXG4gICAgICAgIHBsYWNlbWVudC5vcmllbnRhdGlvblxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIHBsYXllckJvYXJkLkludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IpIHtcbiAgICAgICAgLy8gVHJ5IGFnYWluXG4gICAgICAgIGF3YWl0IHNvbGljaXRQbGFjZVNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVW5leHBlY3RlZCBlcnJvclxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lTG9nLnBsYXllclNoaXBzLnB1c2goeyBuYW1lLCBsZW5ndGgsIC4uLnBsYWNlbWVudCB9KTtcbiAgfVxuXG4gIC8vIChGT1IgVEVTVElORykgQXV0b21hdGljYWxseSBwbGFjZXMgcGxheWVycyBzaGlwcyBpbiB0b3AtbGVmdCBjb3JuZXJcbiAgYXN5bmMgZnVuY3Rpb24gc29saWNpdFBsYWNlU2hpcEF1dG8obmFtZSwgbGVuZ3RoKSB7XG4gICAgY29uc3QgcGxheWVyUGxhY2VtZW50ID0ge1xuICAgICAgQ2FycmllcjogeyByb3c6IDAsIGNvbDogMCwgb3JpZW50YXRpb246IFwiaFwiIH0sXG4gICAgICBCYXR0bGVzaGlwOiB7IHJvdzogMSwgY29sOiAwLCBvcmllbnRhdGlvbjogXCJoXCIgfSxcbiAgICAgIERlc3Ryb3llcjogeyByb3c6IDIsIGNvbDogMCwgb3JpZW50YXRpb246IFwiaFwiIH0sXG4gICAgICBTdWJtYXJpbmU6IHsgcm93OiAzLCBjb2w6IDAsIG9yaWVudGF0aW9uOiBcImhcIiB9LFxuICAgICAgXCJQYXRyb2wgQm9hdFwiOiB7IHJvdzogNCwgY29sOiAwLCBvcmllbnRhdGlvbjogXCJoXCIgfSxcbiAgICB9O1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHBsYXllclBsYWNlbWVudFtuYW1lXTtcbiAgICBwbGF5ZXIucGxhY2VTaGlwKFxuICAgICAgbmFtZSxcbiAgICAgIGxlbmd0aCxcbiAgICAgIHBsYWNlbWVudC5yb3csXG4gICAgICBwbGFjZW1lbnQuY29sLFxuICAgICAgcGxhY2VtZW50Lm9yaWVudGF0aW9uXG4gICAgKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlclBsYWNlU2hpcHMoKSB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbGVuZ3RoXSBvZiBPYmplY3QuZW50cmllcyhzaGlwcykpIHtcbiAgICAgIGNvbnN0IHBsYWNlbWVudCA9IGNvbXB1dGVyLnBsYWNlU2hpcChuYW1lLCBsZW5ndGgpO1xuICAgICAgZ2FtZUxvZy5jb21wdXRlclNoaXBzLnB1c2goeyBuYW1lLCBsZW5ndGgsIC4uLnBsYWNlbWVudCB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gcGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgY29tcHV0ZXJCb2FyZC5hbGxTaGlwc1N1bmsoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NHYW1lT3Zlcih3aW5uaW5nUGxheWVyKSB7XG4gICAgYWxlcnQoXG4gICAgICBgR2FtZSBPdmVyISBXaW5uZXIgaXMgJHtcbiAgICAgICAgd2lubmluZ1BsYXllciA9PT0gcGxheWVyID8gXCJQbGF5ZXJcIiA6IFwiQ29tcHV0ZXJcIlxuICAgICAgfSFgXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIGxldCBjdXJyUGxheWVyID0gcGxheWVyO1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xuICAgICAgY3VyclBsYXllciA9IGN1cnJQbGF5ZXIgPT0gcGxheWVyID8gY29tcHV0ZXIgOiBwbGF5ZXI7XG4gICAgfVxuXG4gICAgd2hpbGUgKCFnYW1lT3ZlcigpKSB7XG4gICAgICAvLyBXYWl0IGZvciBwbGF5ZXIgdG8gdGFrZSB0dXJuXG4gICAgICBpZiAoY3VyclBsYXllciA9PT0gcGxheWVyKSB7XG4gICAgICAgIC8vIFNvbGljaXQgYXR0YWNrIHNwb3QgZnJvbSBVSVxuICAgICAgICBjb25zdCBsb2MgPSBhd2FpdCBzb2xpY2l0UGxheWVyQXR0YWNrKCk7XG4gICAgICAgIGdhbWVMb2cucGxheWVyQXR0YWNrcy5wdXNoKGxvYyk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb21wdXRlciBhdHRhY2tzXG4gICAgICAgIGNvbnN0IGxvYyA9IGNvbXB1dGVyLmF0dGFjaygpO1xuICAgICAgICBnYW1lTG9nLmNvbXB1dGVyQXR0YWNrcy5wdXNoKGxvYyk7XG4gICAgICAgIHBsYXllckJvYXJkVUkucmVmcmVzaCgpO1xuICAgICAgfVxuICAgICAgLy8gTmV4dCBwbGF5ZXIncyB0dXJuXG4gICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBHYW1lIGlzIG92ZXIuIFJlc29sdmUgdGhlIHByb21pc2UuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHN3aXRjaFBsYXllcigpOyAvLyBzd2l0Y2ggc28gY3VyclBsYXllciBpcyB3aW5uZXJcbiAgICAgIHByb2Nlc3NHYW1lT3ZlcihjdXJyUGxheWVyKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNvbGljaXRQbGF5ZXJBdHRhY2soKSB7XG4gICAgY29uc3QgbG9jID0gYXdhaXQgY29tcHV0ZXJCb2FyZFVJLnNvbGljaXRBdHRhY2soKTtcbiAgICB0cnkge1xuICAgICAgcGxheWVyLmF0dGFjayhsb2Mucm93LCBsb2MuY29sKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBhd2FpdCBzb2xpY2l0UGxheWVyQXR0YWNrKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZShsb2MpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVHYW1lTG9nKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZUxvZ1wiLCBKU09OLnN0cmluZ2lmeShnYW1lTG9nKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0R2FtZSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcGxheSgpIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVwbGF5R2FtZShkZWxheSkge1xuICAgIC8vIElOSVRJQUxJWkUgR0FNRVxuICAgIGNvbnN0IGdhbWVMb2cgPSBsb2FkR2FtZUxvZygpO1xuXG4gICAgLy8gTG9hZCB0aGUgZ2FtZUxvZ1xuICAgIGZ1bmN0aW9uIGxvYWRHYW1lTG9nKCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lTG9nXCIpKTtcbiAgICB9XG5cbiAgICAvLyBTbGVlcFxuICAgIGFzeW5jIGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcGxheWVyUGxhY2VTaGlwcygpIHtcbiAgICAgIGZvciAobGV0IHNoaXAgb2YgZ2FtZUxvZy5wbGF5ZXJTaGlwcykge1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgc2hpcC5uYW1lLFxuICAgICAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgICAgIHNoaXAucm93LFxuICAgICAgICAgIHNoaXAuY29sLFxuICAgICAgICAgIHNoaXAub3JpZW50YXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgcGxheWVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICAgIGF3YWl0IHNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY29tcHV0ZXJQbGFjZVNoaXBzKCkge1xuICAgICAgZm9yIChsZXQgc2hpcCBvZiBnYW1lTG9nLmNvbXB1dGVyU2hpcHMpIHtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgc2hpcC5uYW1lLFxuICAgICAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgICAgIHNoaXAucm93LFxuICAgICAgICAgIHNoaXAuY29sLFxuICAgICAgICAgIHNoaXAub3JpZW50YXRpb25cbiAgICAgICAgKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgICAgYXdhaXQgc2xlZXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYm9hcmRzXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoXCJwbGF5ZXJcIik7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGNyZWF0ZUdhbWVib2FyZChcImNvbXB1dGVyXCIpO1xuXG4gICAgLy8gQ3JlYXRlIGJvYXJkIFVJc1xuICAgIGNvbnN0IHBsYXllckJvYXJkVUkgPSBVSS5jcmVhdGVCb2FyZFVJKHBsYXllckJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkVUkgPSBVSS5jcmVhdGVCb2FyZFVJKGNvbXB1dGVyQm9hcmQpO1xuXG4gICAgLy8gTGV0IHBsYXllcnMgcGxhY2UgdGhlaXIgc2hpcHNcbiAgICBhd2FpdCBwbGF5ZXJQbGFjZVNoaXBzKCk7XG4gICAgcGxheWVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgYXdhaXQgY29tcHV0ZXJQbGFjZVNoaXBzKCk7XG4gICAgY29tcHV0ZXJCb2FyZFVJLnJlZnJlc2goKTtcblxuICAgIC8vIEdBTUUgTE9PUFxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcGxheWVyQXR0YWNrKCkge1xuICAgICAgY29uc3QgYXR0YWNrID0gZ2FtZUxvZy5wbGF5ZXJBdHRhY2tzLnNoaWZ0KCk7XG4gICAgICBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrLnJvdywgYXR0YWNrLmNvbCk7XG4gICAgICBhd2FpdCBzbGVlcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xuICAgICAgY29uc3QgYXR0YWNrID0gZ2FtZUxvZy5jb21wdXRlckF0dGFja3Muc2hpZnQoKTtcbiAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrLnJvdywgYXR0YWNrLmNvbCk7XG4gICAgICBhd2FpdCBzbGVlcCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBnYW1lTG9nLnBsYXllckF0dGFja3MubGVuZ3RoID09PSAwICYmXG4gICAgICAgIGdhbWVMb2cuY29tcHV0ZXJBdHRhY2tzLmxlbmd0aCA9PT0gMFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCBnYW1lIGxvb3BcbiAgICB3aGlsZSAoIWRvbmUoKSkge1xuICAgICAgaWYgKGdhbWVMb2cucGxheWVyQXR0YWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHBsYXllckF0dGFjaygpO1xuICAgICAgICBwbGF5ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICAgIGlmIChnYW1lTG9nLmNvbXB1dGVyQXR0YWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IGNvbXB1dGVyQXR0YWNrKCk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBwcm9taXNlIHNpbmNlIHdlIGFyZSBkb25lXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBwbGF5ZXJCb2FyZFVJLnJlZnJlc2goKTtcbiAgICAgIGNvbXB1dGVyQm9hcmRVSS5yZWZyZXNoKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyByZXBsYXlHYW1lIH07XG59XG4iLCJleHBvcnQgeyBjcmVhdGVTaGlwLCBjcmVhdGVHYW1lYm9hcmQgfTtcblxuZnVuY3Rpb24gY3JlYXRlU2hpcChuYW1lLCBsZW5ndGgpIHtcbiAgLy8gRXJyb3IgY2hlY2tpbmdcbiAgaWYgKGxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgQ2Fubm90IGNyZWF0ZSBhIHNoaXAgd2l0aCBsZW5ndGggKCR7bGVuZ3RofSkgbGVzcyB0aGFuIDEhYFxuICAgICk7XG4gIH1cblxuICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICBjb25zdCBfbGVuZ3RoID0gbGVuZ3RoO1xuICBjb25zdCBfbmFtZSA9IG5hbWU7XG4gIGxldCBfaGl0Q291bnQgPSAwO1xuXG4gIC8vIEluY3JlbWVudHMgaGl0IGNvdW50IG9uIHNoaXAgaWYgaXQgaXMgbm90IHN1bmsuIEVycm9ycyBpZiBzaGlwIGlzIHN1bmsuXG4gIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNTdW5rKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBoaXQgYSBzaGlwIHRoYXQgaXMgYWxyZWFkeSBzdW5rIVwiKTtcbiAgICB9XG4gICAgX2hpdENvdW50ICs9IDE7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIHNoaXAgaXMgc3VuaywgZmFsc2Ugb3RoZXJ3aXNlXG4gIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2hpdENvdW50ID09IF9sZW5ndGg7XG4gIH07XG5cbiAgLy8gUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgc2hpcFxuICBjb25zdCBnZXROYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfbmFtZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gICAgZ2V0TmFtZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkKGJvYXJkTmFtZSkge1xuICBjb25zdCBCT0FSRF9TSVpFID0gMTA7XG5cbiAgZnVuY3Rpb24gZ2V0Qm9hcmRXaXRoRmlsbChmaWxsVmFsdWUpIHtcbiAgICByZXR1cm4gWy4uLkFycmF5KEJPQVJEX1NJWkUpXS5tYXAoKGUpID0+IEFycmF5KEJPQVJEX1NJWkUpLmZpbGwoZmlsbFZhbHVlKSk7XG4gIH1cblxuICBjb25zdCBfc2hpcHMgPSBnZXRCb2FyZFdpdGhGaWxsKG51bGwpO1xuICBjb25zdCBfYXR0YWNrcyA9IGdldEJvYXJkV2l0aEZpbGwobnVsbCk7XG4gIGxldCBfbnVtU2hpcHNMZWZ0ID0gMDtcblxuICBmdW5jdGlvbiB2YWxpZGF0ZVJvd0NvbChyb3csIGNvbCkge1xuICAgIGlmIChyb3cgPCAwIHx8IGNvbCA8IDAgfHwgcm93ID49IEJPQVJEX1NJWkUgfHwgY29sID49IEJPQVJEX1NJWkUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgKHJvdywgY29sKSBwYWlyICgke3Jvd30sICR7Y29sfSkgZm9yIGJvYXJkIGRpbWVuc2lvbnMhYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVNoaXBQbGFjZW1lbnQobGVuZ3RoLCByb3csIGNvbCwgb3JpZW50YXRpb24pIHtcbiAgICAvLyBDaGVjayBmb3IgdmlvbGF0aW9ucyBvZiBib2FyZCBib3VuZGFyaWVzXG4gICAgdHJ5IHtcbiAgICAgIHZhbGlkYXRlUm93Q29sKHJvdywgY29sKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gIT09IFwiaFwiICYmIG9yaWVudGF0aW9uICE9PSBcInZcIikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IoXG4gICAgICAgIGBPcmllbnRhdGlvbiBtdXN0IGJlICdoJyBvciAndichIFZhbHVlIHByb3ZpZGVkOiAke29yaWVudGF0aW9ufWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJoXCIgJiYgY29sICsgbGVuZ3RoID4gQk9BUkRfU0laRSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IoXG4gICAgICAgIGBIb3Jpem9udGFsbHkgcGxhY2luZyBzaGlwIG9mIGxlbmd0aCAke2xlbmd0aH0gYXQgcm93ICR7cm93fSwgY29sICR7Y29sfSB3b3VsZCB2aW9sYXRlIGJvYXJkIGJvdW5kcyFgXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidlwiICYmIHJvdyArIGxlbmd0aCA+IEJPQVJEX1NJWkUpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkU2hpcFBsYWNlbWVudEVycm9yKFxuICAgICAgICBgVmVydGljYWxseSBwbGFjaW5nIHNoaXAgb2YgbGVuZ3RoICR7bGVuZ3RofSBhdCByb3cgJHtyb3d9LCBjb2wgJHtjb2x9IHdvdWxkIHZpb2xhdGUgYm9hcmQgYm91bmRzIWBcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGludGVyc2VjdHMgZXhpc3Rpbmcgc2hpcHNcbiAgICBjb25zdCBzaGlwTGVuZ3RoUmFuZ2UgPSBbLi4uQXJyYXkobGVuZ3RoKS5rZXlzKCldO1xuICAgIGZvciAobGV0IGRlbHRhIG9mIHNoaXBMZW5ndGhSYW5nZSkge1xuICAgICAgY29uc3QgaW50ZXJzZWN0aW5nID1cbiAgICAgICAgb3JpZW50YXRpb24gPT09IFwiaFwiXG4gICAgICAgICAgPyBoYXNTaGlwKHJvdywgY29sICsgZGVsdGEpXG4gICAgICAgICAgOiBoYXNTaGlwKHJvdyArIGRlbHRhLCBjb2wpO1xuICAgICAgaWYgKGludGVyc2VjdGluZykge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcihcbiAgICAgICAgICBgU2hpcCBwbGFjZW1lbnQgaW50ZXJzZWN0cyBhIHNoaXAgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBib2FyZCFgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgIHRoaXMubmFtZSA9IFwiSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvclwiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChuYW1lLCBsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbikge1xuICAgIHZhbGlkYXRlU2hpcFBsYWNlbWVudChsZW5ndGgsIHJvdywgY29sLCBvcmllbnRhdGlvbik7XG5cbiAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChuYW1lLCBsZW5ndGgpO1xuICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xuICAgIGZvciAobGV0IGRlbHRhID0gMDsgZGVsdGEgPCBsZW5ndGg7IGRlbHRhKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PSBcImhcIikge1xuICAgICAgICBfc2hpcHNbcm93XVtjb2wgKyBkZWx0YV0gPSBzaGlwO1xuICAgICAgICBsb2NhdGlvbnMucHVzaCh7IHJvdywgY29sOiBjb2wgKyBkZWx0YSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9zaGlwc1tyb3cgKyBkZWx0YV1bY29sXSA9IHNoaXA7XG4gICAgICAgIGxvY2F0aW9ucy5wdXNoKHsgcm93OiByb3cgKyBkZWx0YSwgY29sIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBfbnVtU2hpcHNMZWZ0ICs9IDE7XG4gIH07XG5cbiAgY29uc3QgaGFzU2hpcCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICAgIHZhbGlkYXRlUm93Q29sKHJvdywgY29sKTtcbiAgICByZXR1cm4gX3NoaXBzW3Jvd11bY29sXSA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9udW1TaGlwc0xlZnQgPT09IDA7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICAgIHZhbGlkYXRlUm93Q29sKHJvdywgY29sKTtcbiAgICBpZiAoIWF0dGFja0FsbG93ZWQocm93LCBjb2wpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFNxdWFyZSBhdCAoJHtyb3d9LCAke2NvbH0pIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQhYCk7XG4gICAgfVxuICAgIGNvbnN0IGhpdFNoaXAgPSBoYXNTaGlwKHJvdywgY29sKTtcbiAgICBfYXR0YWNrc1tyb3ddW2NvbF0gPSBoaXRTaGlwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGlmIChoaXRTaGlwKSB7XG4gICAgICBfc2hpcHNbcm93XVtjb2xdLmhpdCgpO1xuICAgICAgX251bVNoaXBzTGVmdCAtPSBfc2hpcHNbcm93XVtjb2xdLmlzU3VuaygpO1xuICAgIH1cbiAgICByZXR1cm4gaGl0U2hpcDtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tTdGF0dXMgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgICB0cnkge1xuICAgICAgdmFsaWRhdGVSb3dDb2wocm93LCBjb2wpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIFwib3V0T2ZCb3VuZHNcIjtcbiAgICB9XG4gICAgY29uc3Qgc3RhdHVzID0gX2F0dGFja3Nbcm93XVtjb2xdO1xuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIHJldHVybiBcIm5vbmVcIjtcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaG91bGQgbm90IHJlYWNoIHRoaXMgbGluZSFcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGF0dGFja0FsbG93ZWQgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgICB0cnkge1xuICAgICAgdmFsaWRhdGVSb3dDb2wocm93LCBjb2wpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYXR0YWNrU3RhdHVzKHJvdywgY29sKSA9PSBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBhdHRhY2thYmxlU3BvdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXR0YWNrYWJsZSA9IFtdO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgQk9BUkRfU0laRTsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IEJPQVJEX1NJWkU7IGMrKykge1xuICAgICAgICBpZiAoYXR0YWNrQWxsb3dlZChyLCBjKSkge1xuICAgICAgICAgIGF0dGFja2FibGUucHVzaChbciwgY10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhdHRhY2thYmxlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogYm9hcmROYW1lLFxuICAgIHNpemU6IEJPQVJEX1NJWkUsXG4gICAgcGxhY2VTaGlwLFxuICAgIGhhc1NoaXAsXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXR0YWNrU3RhdHVzLFxuICAgIGF0dGFja0FsbG93ZWQsXG4gICAgYXR0YWNrYWJsZVNwb3RzLFxuICAgIEludmFsaWRTaGlwUGxhY2VtZW50RXJyb3IsXG4gIH07XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZSwgY3JlYXRlUmVwbGF5IH0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuXG4vLyBORVcgR0FNRVxuY29uc3QgZ2FtZSA9IGNyZWF0ZUdhbWUoKTtcbmF3YWl0IGdhbWUuc3RhcnRHYW1lKCk7XG5cbi8vIFJFU1RJTVxuLy8gY29uc3QgcmVwbGF5ID0gY3JlYXRlUmVwbGF5KCk7XG4vLyBhd2FpdCByZXBsYXkucmVwbGF5R2FtZSgxMjUpO1xuIiwiZXhwb3J0IHsgY3JlYXRlUGxheWVyLCBjcmVhdGVDb21wdXRlclBsYXllciB9O1xuXG4vLyBIVU1BTiBQTEFZRVJcbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcihib2FyZCwgb3Bwb25lbnRCb2FyZCkge1xuICBmdW5jdGlvbiBhdHRhY2socm93LCBjb2wpIHtcbiAgICBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICBhdHRhY2ssXG4gIH07XG59XG5cbi8vIENPTVBVVEVSIFBMQVlFUiBBSVxuZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJQbGF5ZXIoYm9hcmQsIG9wcG9uZW50Qm9hcmQpIHtcbiAgLy8gU3RhcnQgd2l0aCByZWd1bGFyIHBsYXllciBhcyB0ZW1wbGF0ZSwgdGhlbiBvdmVycmlkZSBtZXRob2RzXG4gIGNvbnN0IGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKGJvYXJkLCBvcHBvbmVudEJvYXJkKTtcblxuICAvLyBPdmVycmlkZSBtZXRob2RzXG5cbiAgLy8gUmVwZWF0ZWRseSB0cmllcyB0byBwbGFjZSB0aGUgc2hpcCBhdCByYW5kb20gdW50aWwgYSBzdWNjZXNzLlxuICAvLyBSZXR1cm5zIHRoZSBmaW5hbCBwbGFjZW1lbnQuXG4gIGNvbXB1dGVyLnBsYWNlU2hpcCA9IGZ1bmN0aW9uIChuYW1lLCBsZW5ndGgpIHtcbiAgICBjb25zdCByb3cgPSBnZXRSYW5kb21JbnQoMCwgYm9hcmQuc2l6ZSk7XG4gICAgY29uc3QgY29sID0gZ2V0UmFuZG9tSW50KDAsIGJvYXJkLnNpemUpO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgcm93LCBjb2wsIG9yaWVudGF0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgYm9hcmQuSW52YWxpZFNoaXBQbGFjZW1lbnRFcnJvcikpIHRocm93IGU7XG4gICAgICByZXR1cm4gY29tcHV0ZXIucGxhY2VTaGlwKG5hbWUsIGxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiB7IHJvdywgY29sLCBvcmllbnRhdGlvbiB9O1xuICB9O1xuXG4gIC8vIEF0dGFjayBhIHJhbmRvbSBzcG90IGZyb20gdGhlIHNldCBvZiBhbGwgYWxsb3dhYmxlIHNwb3RzXG4gIGNvbXB1dGVyLmF0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29tcHV0ZXJBdHRhY2tMb2dpY01lZGl1bSgpO1xuICB9O1xuXG4gIC8vIEVBU1kgRElGRklDVUxUWSBBSSBMT0dJQ1xuICBmdW5jdGlvbiBjb21wdXRlckF0dGFja0xvZ2ljRWFzeSgpIHtcbiAgICBjb25zdCBbcm93LCBjb2xdID0gZ2V0UmFuZG9tQXR0YWNrYWJsZVNwb3Qob3Bwb25lbnRCb2FyZCk7XG4gICAgb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICB9XG5cbiAgLy8gTUVESVVNIERJRkZJQ1VMVFkgQUkgTE9HSUNcbiAgbGV0IG1vZGUgPSBcIkxPQ0FUSU5HXCI7IC8vIExPQ0FUSU5HLCBPUklFTlRJTkcsIERFU1RST1lJTkdcblxuICBjb25zdCBhdHRhY2tIaXN0b3J5ID0ge307XG4gIHJlc2V0QXR0YWNrSGlzdG9yeSgpO1xuXG4gIGZ1bmN0aW9uIHJlc2V0QXR0YWNrSGlzdG9yeSgpIHtcbiAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sgPSB7IHJvdzogbnVsbCwgY29sOiBudWxsIH07XG4gICAgLy8gYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrSGl0ID0gZmFsc2U7XG4gICAgYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0ID0geyByb3c6IG51bGwsIGNvbDogbnVsbCB9O1xuICAgIGF0dGFja0hpc3Rvcnkub3JpZW50YXRpb24gPSBudWxsOyAvLyBcImhcIiBvciBcInZcIlxuICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uID0gbnVsbDsgLy8gKy8tIDFcbiAgICBhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCA9IDA7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlckF0dGFja0xvZ2ljTWVkaXVtKCkge1xuICAgIGxldCByb3csIGNvbDtcbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgXCJMT0NBVElOR1wiOiB7XG4gICAgICAgIHJldHVybiBsb2NhdGluZ0xvZ2ljKCk7XG4gICAgICB9XG4gICAgICBjYXNlIFwiT1JJRU5USU5HXCI6IHtcbiAgICAgICAgLy8gTGFzdCBhdHRhY2sgd2FzIGEgaGl0LiBOb3cgdHJ5aW5nIHRvIGRldGVybWluZSBvcmllbnRhdGlvbiBvZiBzaGlwXG4gICAgICAgIHJldHVybiBvcmllbnRpbmdMb2dpYygpO1xuICAgICAgfVxuICAgICAgY2FzZSBcIkRFU1RST1lJTkdcIjoge1xuICAgICAgICAvLyBPcmllbnRhdGlvbiBkZXRlcm1pbmVkLiBEZXN0cm95IHNoaXAgaW4gb25lIGRpcmVjdGlvbiwgdGhlbiB0aGUgb3RoZXIhXG4gICAgICAgIHJldHVybiBkZXN0cm95aW5nTG9naWMoKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIExPQ0FUSU5HIGxvZ2ljXG4gIGZ1bmN0aW9uIGxvY2F0aW5nTG9naWMoKSB7XG4gICAgLy8gQ2hvb3NlIGEgcmFuZG9tIHNwb3RcbiAgICBjb25zdCBbcm93LCBjb2xdID0gZ2V0UmFuZG9tQXR0YWNrYWJsZVNwb3Qob3Bwb25lbnRCb2FyZCk7XG4gICAgY29uc3QgaGl0ID0gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAvLyBVcGRhdGUgYXR0YWNrIGhpc3RvcnlcbiAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sucm93ID0gcm93O1xuICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5jb2wgPSBjb2w7XG4gICAgLy8gQ2hhbmdlIHN0YXRlcyBpZiBhdHRhY2sgd2FzIGEgaGl0XG4gICAgaWYgKGhpdCkge1xuICAgICAgYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0ID0geyByb3csIGNvbCB9O1xuICAgICAgbW9kZSA9IFwiT1JJRU5USU5HXCI7XG4gICAgfVxuICAgIHJldHVybiB7IHJvdywgY29sIH07XG4gIH1cblxuICAvLyBPUklFTlRJTkcgTE9HSUNcbiAgZnVuY3Rpb24gb3JpZW50aW5nTG9naWMoKSB7XG4gICAgLy8gQXR0YWNrIGEgcmFuZG9tIG5laWdoYm9yIG9mIGluaXRpYWwgaGl0IGxvY2F0aW9uXG4gICAgY29uc3Qgcm93Q29sID0gZ2V0UmFuZG9tQXR0YWNrYWJsZU5laWdoYm9yKFxuICAgICAgb3Bwb25lbnRCb2FyZCxcbiAgICAgIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5yb3csXG4gICAgICBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQuY29sXG4gICAgKTtcbiAgICBpZiAoIXJvd0NvbCkge1xuICAgICAgLy8gTm8gbmVpZ2hib3JzIGFyZSBhdHRhY2thYmxlLiBHbyBiYWNrIHRvIExPQ0FUSU5HXG4gICAgICBtb2RlID0gXCJMT0NBVElOR1wiO1xuICAgICAgcmVzZXRBdHRhY2tIaXN0b3J5KCk7XG4gICAgICByZXR1cm4gbG9jYXRpbmdMb2dpYygpO1xuICAgIH1cbiAgICBjb25zdCBbcm93LCBjb2xdID0gcm93Q29sO1xuICAgIGNvbnN0IGhpdCA9IG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgLy8gVXBkYXRlIGF0dGFjayBoaXN0b3J5XG4gICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLnJvdyA9IHJvdztcbiAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2suY29sID0gY29sO1xuICAgIC8vIENoYW5nZSBzdGF0ZXMgaWYgYXR0YWNrIHdhcyBhIGhpdFxuICAgIGlmIChoaXQpIHtcbiAgICAgIG1vZGUgPSBcIkRFU1RST1lJTkdcIjtcbiAgICAgIGF0dGFja0hpc3Rvcnkub3JpZW50YXRpb24gPVxuICAgICAgICByb3cgPT0gYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LnJvdyA/IFwiaFwiIDogXCJ2XCI7XG4gICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvbiA9XG4gICAgICAgIGF0dGFja0hpc3Rvcnkub3JpZW50YXRpb24gPT09IFwiaFwiXG4gICAgICAgICAgPyBNYXRoLnNpZ24oY29sIC0gYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LmNvbClcbiAgICAgICAgICA6IE1hdGguc2lnbihyb3cgLSBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQucm93KTtcbiAgICAgIC8vIExvb2sgYXJvdW5kIHRvIHNlZSBpZiB3ZSBhcmUgZmluaXNoZWQgd2l0aCBhbnkgZGlyZWN0aW9ucyB5ZXRcbiAgICAgIGNvbnN0IG5leHRSb3dDb2wgPSBnZXROZXh0RGlyZWN0ZWROZWlnaGJvcihcbiAgICAgICAgb3Bwb25lbnRCb2FyZCxcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLnJvdyxcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLmNvbCxcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5vcmllbnRhdGlvbixcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb25cbiAgICAgICk7XG4gICAgICBjb25zdCBvcHBvUm93Q29sID0gZ2V0TmV4dERpcmVjdGVkTmVpZ2hib3IoXG4gICAgICAgIG9wcG9uZW50Qm9hcmQsXG4gICAgICAgIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5yb3csXG4gICAgICAgIGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5jb2wsXG4gICAgICAgIGF0dGFja0hpc3Rvcnkub3JpZW50YXRpb24sXG4gICAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uICogLTFcbiAgICAgICk7XG4gICAgICBpZiAoXG4gICAgICAgICFuZXh0Um93Q29sIHx8XG4gICAgICAgICFvcHBvbmVudEJvYXJkLmF0dGFja0FsbG93ZWQobmV4dFJvd0NvbFswXSwgbmV4dFJvd0NvbFsxXSlcbiAgICAgICkge1xuICAgICAgICBhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCArPSAxO1xuICAgICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvbiAqPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIW9wcG9Sb3dDb2wgfHxcbiAgICAgICAgIW9wcG9uZW50Qm9hcmQuYXR0YWNrQWxsb3dlZChvcHBvUm93Q29sWzBdLCBvcHBvUm93Q29sWzFdKVxuICAgICAgKSB7XG4gICAgICAgIGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAoYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgPT09IDIpIHtcbiAgICAgICAgLy8gR28gYmFjayB0byBMT0NBVElORyBmb3IgbmV4dCB0dXJuXG4gICAgICAgIG1vZGUgPSBcIkxPQ0FUSU5HXCI7XG4gICAgICAgIHJlc2V0QXR0YWNrSGlzdG9yeSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyByb3csIGNvbCB9O1xuICB9XG5cbiAgLy8gREVTVFJPWUlORyBsb2dpY1xuICBmdW5jdGlvbiBkZXN0cm95aW5nTG9naWMoKSB7XG4gICAgLy8gR2V0IG5leHQgYXR0YWNrIGxvY2F0aW9uXG4gICAgY29uc3Qgcm93Q29sID0gZ2V0TmV4dERpcmVjdGVkTmVpZ2hib3IoXG4gICAgICBvcHBvbmVudEJvYXJkLFxuICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLnJvdyxcbiAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5jb2wsXG4gICAgICBhdHRhY2tIaXN0b3J5Lm9yaWVudGF0aW9uLFxuICAgICAgYXR0YWNrSGlzdG9yeS5kaXJlY3Rpb25cbiAgICApO1xuXG4gICAgLy8gSWYgYXR0YWNrIGlzIG5vdCBhbGxvd2VkLCBuZWVkIHRvIGluY3JlbWVudCBudW1iZXIgb2YgZmluaXNoZWQgZGlyZWN0aW9uc1xuICAgIGlmICghcm93Q29sIHx8ICFvcHBvbmVudEJvYXJkLmF0dGFja0FsbG93ZWQocm93Q29sWzBdLCByb3dDb2xbMV0pKSB7XG4gICAgICAvLyBXZSBmaW5pc2hlZCB0aGlzIGRpcmVjdGlvblxuICAgICAgYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgKz0gMTtcbiAgICAgIGlmIChhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCA9PT0gMSkge1xuICAgICAgICAvLyBTdGlsbCBuZWVkIHRvIGdvIG90aGVyIGRpcmVjdGlvbi5cbiAgICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLnJvdyA9IGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5yb3c7XG4gICAgICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5jb2wgPSBhdHRhY2tIaXN0b3J5LmluaXRpYWxIaXQuY29sO1xuICAgICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvbiAqPSAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrSGlzdG9yeS5udW1EaXJlY3Rpb25zRmluaXNoZWQgPT09IDIpIHtcbiAgICAgICAgLy8gRmluaXNoZWQgYm90aCBkaXJlY3Rpb25zXG4gICAgICAgIG1vZGUgPSBcIkxPQ0FUSU5HXCI7XG4gICAgICAgIHJlc2V0QXR0YWNrSGlzdG9yeSgpO1xuICAgICAgICByZXR1cm4gbG9jYXRpbmdMb2dpYygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSByb3dDb2w7XG4gICAgLy8gQXR0YWNrXG4gICAgY29uc3QgaGl0ID0gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICAvLyBVcGRhdGUgYXR0YWNrIGhpc3RvcnlcbiAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sucm93ID0gcm93O1xuICAgIGF0dGFja0hpc3RvcnkubGFzdEF0dGFjay5jb2wgPSBjb2w7XG5cbiAgICAvLyBMb29rIGFoZWFkIHRvIG5leHQgdHVybiB0byBzZWUgaWYgd2UgbmVlZCB0byBzd2l0Y2ggb3VyIGRpcmVjdGlvbi5cbiAgICAvLyBJZiB0aGlzIHR1cm4gd2Fzbid0IGEgaGl0IG9yIG5leHQgbmVpZ2hib3IgKG5leHQgdHVybikgbm90IGF0dGFja2FibGUsIHdlIGZpbmlzaGVkIGluIHRoaXMgZGlyZWN0aW9uXG4gICAgY29uc3QgbmV4dFJvd0NvbCA9IGdldE5leHREaXJlY3RlZE5laWdoYm9yKFxuICAgICAgb3Bwb25lbnRCb2FyZCxcbiAgICAgIHJvdyxcbiAgICAgIGNvbCxcbiAgICAgIGF0dGFja0hpc3Rvcnkub3JpZW50YXRpb24sXG4gICAgICBhdHRhY2tIaXN0b3J5LmRpcmVjdGlvblxuICAgICk7XG4gICAgaWYgKFxuICAgICAgIWhpdCB8fFxuICAgICAgIW5leHRSb3dDb2wgfHxcbiAgICAgICFvcHBvbmVudEJvYXJkLmF0dGFja0FsbG93ZWQobmV4dFJvd0NvbFswXSwgbmV4dFJvd0NvbFsxXSlcbiAgICApIHtcbiAgICAgIC8vIFdlIGZpbmlzaGVkIHRoaXMgZGlyZWN0aW9uXG4gICAgICBhdHRhY2tIaXN0b3J5Lm51bURpcmVjdGlvbnNGaW5pc2hlZCArPSAxO1xuICAgICAgaWYgKGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkID09PSAxKSB7XG4gICAgICAgIC8vIFN0aWxsIG5lZWQgdG8gZ28gb3RoZXIgZGlyZWN0aW9uLlxuICAgICAgICBhdHRhY2tIaXN0b3J5Lmxhc3RBdHRhY2sucm93ID0gYXR0YWNrSGlzdG9yeS5pbml0aWFsSGl0LnJvdztcbiAgICAgICAgYXR0YWNrSGlzdG9yeS5sYXN0QXR0YWNrLmNvbCA9IGF0dGFja0hpc3RvcnkuaW5pdGlhbEhpdC5jb2w7XG4gICAgICAgIGF0dGFja0hpc3RvcnkuZGlyZWN0aW9uICo9IC0xO1xuICAgICAgICAvLyBDaGVjayBhZ2FpbiBpZiBuZXh0XG4gICAgICB9IGVsc2UgaWYgKGF0dGFja0hpc3RvcnkubnVtRGlyZWN0aW9uc0ZpbmlzaGVkID09PSAyKSB7XG4gICAgICAgIC8vIEZpbmlzaGVkIGJvdGggZGlyZWN0aW9uc1xuICAgICAgICBtb2RlID0gXCJMT0NBVElOR1wiO1xuICAgICAgICByZXNldEF0dGFja0hpc3RvcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbiAgfVxuXG4gIHJldHVybiBjb21wdXRlcjtcbn1cblxuLy8gVVRJTElUWSBGVU5DU1xuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbU9yaWVudGF0aW9uKCkge1xuICByZXR1cm4gZ2V0UmFuZG9tSW50KDAsIDIpID09PSAwID8gXCJoXCIgOiBcInZcIjtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQXJyYXlFbnRyeShhcnJheSkge1xuICByZXR1cm4gYXJyYXlbZ2V0UmFuZG9tSW50KDAsIGFycmF5Lmxlbmd0aCldO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21BdHRhY2thYmxlU3BvdChib2FyZCkge1xuICByZXR1cm4gZ2V0UmFuZG9tQXJyYXlFbnRyeShib2FyZC5hdHRhY2thYmxlU3BvdHMoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUF0dGFja2FibGVOZWlnaGJvcihib2FyZCwgcm93LCBjb2wpIHtcbiAgY29uc3QgYXR0YWNrYWJsZU5laWdoYm9ycyA9IGJvYXJkLmF0dGFja2FibGVTcG90cygpLmZpbHRlcigoW2FSb3csIGFDb2xdKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIChvbmVBd2F5KHJvdywgYVJvdykgJiYgY29sID09PSBhQ29sKSB8fFxuICAgICAgKHJvdyA9PT0gYVJvdyAmJiBvbmVBd2F5KGNvbCwgYUNvbCkpXG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBnZXRSYW5kb21BcnJheUVudHJ5KGF0dGFja2FibGVOZWlnaGJvcnMpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0RGlyZWN0ZWROZWlnaGJvcihib2FyZCwgcm93LCBjb2wsIG9yaWVudGF0aW9uLCBkaXJlY3Rpb24pIHtcbiAgY29uc3QgW25ld1JvdywgbmV3Q29sXSA9XG4gICAgb3JpZW50YXRpb24gPT0gXCJoXCIgPyBbcm93LCBjb2wgKyBkaXJlY3Rpb25dIDogW3JvdyArIGRpcmVjdGlvbiwgY29sXTtcbiAgY29uc3QgYXR0YWNrU3RhdHVzID0gYm9hcmQuYXR0YWNrU3RhdHVzKG5ld1JvdywgbmV3Q29sKTtcbiAgaWYgKGF0dGFja1N0YXR1cyA9PSBcIm91dE9mQm91bmRzXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoYXR0YWNrU3RhdHVzID09IFwiaGl0XCIpIHtcbiAgICAvLyBTa2lwIHRoaXMgb25lXG4gICAgcmV0dXJuIGdldE5leHREaXJlY3RlZE5laWdoYm9yKFxuICAgICAgYm9hcmQsXG4gICAgICBuZXdSb3csXG4gICAgICBuZXdDb2wsXG4gICAgICBvcmllbnRhdGlvbixcbiAgICAgIGRpcmVjdGlvblxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFtuZXdSb3csIG5ld0NvbF07XG59XG5cbmZ1bmN0aW9uIG9uZUF3YXkoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpID09PSAxO1xufVxuIiwiZXhwb3J0IHsgVUkgfTtcblxuY29uc3QgVUkgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBjcmVhdGVCb2FyZFVJKGJvYXJkKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBib2FyZCBVSSBET00gZWxlbWVudCBhbmQgYXBwZW5kIHRvIERPTVxuICAgIGNvbnN0IGJvYXJkRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9hcmRFbGVtLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgICBib2FyZEVsZW0uaWQgPSBib2FyZC5uYW1lO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZC5zaXplOyBjb2wrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG4gICAgICAgIC8vIGNlbGxzQXJyYXlbcm93XVtjb2xdID0gY2VsbDtcbiAgICAgICAgYm9hcmRFbGVtLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkcy1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoYm9hcmRFbGVtKTtcblxuICAgIC8vIEdldCBjZWxsIERPTSBlbGVtZW50IGJ5IChyb3csIGNvbCkgaW5kZXhcbiAgICBmdW5jdGlvbiBnZXRDZWxsKHJvdywgY29sKSB7XG4gICAgICByZXR1cm4gYm9hcmRFbGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuZ3JpZC1zcXVhcmVbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEFkZCBzaGlwIHRvIGNlbGxcbiAgICBmdW5jdGlvbiBhZGRTaGlwKHJvdywgY29sKSB7XG4gICAgICBnZXRDZWxsKHJvdywgY29sKS5jbGFzc0xpc3QuYWRkKFwiaGFzLXNoaXBcIik7XG4gICAgfVxuXG4gICAgLy8gQWRkIGhpdCB0byBjZWxsXG4gICAgZnVuY3Rpb24gYWRkSGl0KHJvdywgY29sKSB7XG4gICAgICBnZXRDZWxsKHJvdywgY29sKS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIH1cblxuICAgIC8vIEFkZCBtaXNzIHRvIGNlbGxcbiAgICBmdW5jdGlvbiBhZGRNaXNzKHJvdywgY29sKSB7XG4gICAgICBnZXRDZWxsKHJvdywgY29sKS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG5cbiAgICAvLyBSZWZyZXNoZXMgdGhlIGJvYXJkIFVJXG4gICAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkLnNpemU7IHJvdysrKSB7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkLnNpemU7IGNvbCsrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkLmhhc1NoaXAocm93LCBjb2wpKSB7XG4gICAgICAgICAgICBhZGRTaGlwKHJvdywgY29sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoIChib2FyZC5hdHRhY2tTdGF0dXMocm93LCBjb2wpKSB7XG4gICAgICAgICAgICBjYXNlIFwiaGl0XCI6XG4gICAgICAgICAgICAgIGFkZEhpdChyb3csIGNvbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pc3NcIjpcbiAgICAgICAgICAgICAgYWRkTWlzcyhyb3csIGNvbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgICAgICAgLy8gTm90IGF0dGFja2VkXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiQm9hcmQgYXR0YWNrU3RhdHVzKCkgbWV0aG9kIHJldHVybmVkIGFuIHVuZXhwZWN0ZWQgdmFsdWUhXCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTb2xpY2l0cyB0aGUgcGxheWVyIHRvIHBsYWNlIGEgc2hpcCB1c2luZyB0aGUgVUlcbiAgICBhc3luYyBmdW5jdGlvbiBzb2xpY2l0UGxhY2VTaGlwKG5hbWUsIGxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGxldCBvcmllbnRhdGlvbiA9IFwiaFwiOyAvLyB3aWxsIHRvZ2dsZSB0aGlzIHdpdGgga2V5ZG93biBsaXN0ZW5lclxuXG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBtb3VzZW92ZXIgdGhhdCBhZGRzIHNoYWRpbmcgdG8gY2VsbHMgd2hlcmUgc2hpcCB3aWxsIGJlIHBsYWNlZCBpZiB0YXJnZXQgY2VsbCBpcyBjbGlja2VkXG4gICAgICAgIGZ1bmN0aW9uIGFkZEdob3N0U2hpcChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0IHx8ICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ3JpZC1zcXVhcmVcIikpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KTtcbiAgICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKTtcbiAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkY29sID0gMDsgZGNvbCA8IGxlbmd0aDsgZGNvbCsrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZ2V0Q2VsbChyb3csIGNvbCArIGRjb2wpLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1zaGlwXCIpO1xuICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkcm93ID0gMDsgZHJvdyA8IGxlbmd0aDsgZHJvdysrKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZ2V0Q2VsbChyb3cgKyBkcm93LCBjb2wpLmNsYXNzTGlzdC5hZGQoXCJnaG9zdC1zaGlwXCIpO1xuICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBtb3VzZW91dCB0aGF0IGNsZWFycyBhbGwgZ2hvc3Qgc2hpcHMgZnJvbSB0aGUgYm9hcmRcbiAgICAgICAgZnVuY3Rpb24gY2xlYXJBbGxHaG9zdFNoaXBzKCkge1xuICAgICAgICAgIGNvbnN0IGdob3N0U2hpcHMgPSBib2FyZEVsZW0ucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIFwiLmdyaWQtc3F1YXJlLmdob3N0LXNoaXBcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgZ2hvc3RTaGlwcy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJnaG9zdC1zaGlwXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGxiYWNrIGZvciBrZXlkb3duIHRoYXQgcm90YXRlcyB0aGUgZ2hvc3Qgc2hpcCBpZiBcInJcIiBpcyBwcmVzc2VkXG4gICAgICAgIGZ1bmN0aW9uIGtleVByZXNzZWQoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgIT09IFwiclwiKSByZXR1cm47XG4gICAgICAgICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbiA9PSBcImhcIiA/IFwidlwiIDogXCJoXCI7XG4gICAgICAgICAgY2xlYXJBbGxHaG9zdFNoaXBzKCk7XG4gICAgICAgICAgLy8gQ2FsbCB0aGUgaG92ZXIgY2FsbGJhY2sgd2l0aCBhIGZ1ZGdlZCBldmVudCB0YXJnZXQgdG8gZ2VuZXJhdGUgdGhlIHJvdGF0ZWQgZ2hvc3Qgc2hpcFxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZC1zcXVhcmU6aG92ZXJcIik7XG4gICAgICAgICAgYWRkR2hvc3RTaGlwKHsgdGFyZ2V0IH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbGJhY2sgd2hlbiBib2FyZCBpcyBjbGlja2VkIHRoYXQgcmV0dXJucyB0aGUgcGxhY2VtZW50IGNob3NlblxuICAgICAgICBmdW5jdGlvbiBib2FyZENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgICAvLyBEZXN0cm95IGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBob3ZlciBlZmZlY3RcbiAgICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgIGNsZWFyQWxsR2hvc3RTaGlwcygpO1xuICAgICAgICAgIC8vIFJFU09MVkVcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIHJvdzogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93KSxcbiAgICAgICAgICAgIGNvbDogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkcyBhbGwgZXZlbnQgbGlzdGVuZXJzIGZvciBzaGlwIHBsYWNlbWVudCBpbnRlcmFjdGl2aXR5XG4gICAgICAgIGZ1bmN0aW9uIGFkZEFsbEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAgIGJvYXJkRWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGFkZEdob3N0U2hpcCk7XG4gICAgICAgICAgYm9hcmRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjbGVhckFsbEdob3N0U2hpcHMpO1xuICAgICAgICAgIGJvYXJkRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDbGlja2VkKTtcbiAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlQcmVzc2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycyBmb3Igc2hpcCBwbGFjZW1lbnQgaW50ZXJhY3Rpdml0eVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbGxFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgICBib2FyZEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBhZGRHaG9zdFNoaXApO1xuICAgICAgICAgIGJvYXJkRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgY2xlYXJBbGxHaG9zdFNoaXBzKTtcbiAgICAgICAgICBib2FyZEVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJvYXJkQ2xpY2tlZCk7XG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5UHJlc3NlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgRXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGFkZEFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTb2xpY2l0IGFuIGF0dGFjayB1c2luZyB0aGUgYm9hcmQgVUlcbiAgICBhc3luYyBmdW5jdGlvbiBzb2xpY2l0QXR0YWNrKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGJvYXJkQ2xpY2tlZChldmVudCkge1xuICAgICAgICAgIGJvYXJkRWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDbGlja2VkKTtcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIHJvdzogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQucm93KSxcbiAgICAgICAgICAgIGNvbDogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvYXJkRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm9hcmRDbGlja2VkKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHJlZnJlc2gsIHNvbGljaXRQbGFjZVNoaXAsIHNvbGljaXRBdHRhY2sgfTtcbiAgfVxuXG4gIHJldHVybiB7IGNyZWF0ZUJvYXJkVUkgfTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
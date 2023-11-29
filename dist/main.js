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
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html,
body{
    height: 100%;
    width: 100%;
    background-color: grey;
    /* position: relative; */
}

body * {
    /* border: 3px solid red; */
}

.main-container{
    display: grid;
    /* gap: 10px; */
    height: 100%;
    grid-template-rows: 30px 70px 1fr 35px;
}

.loading-screen{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.548);
    width: 100%;
    height: 100%;
    z-index: 1;
    /* display: grid; */
    display: none;
    align-items: center;
    justify-items: center;
    
}

.loading-screen * {
    /* border: 2px solid red; */
}

.enable-loading-screen{
    display: grid;
}

.loading-div{
    display: grid;
    gap: 15px;
}

.loading-gif-container{
    display: grid;
    align-items: center;
    justify-items: center;
}

.loading-gif-container>img{
    width: 50px;
}

.loading-text {

    text-align: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;

}

#search-location{
    border: 2px solid black;
    height: 30px;
}

/* height is 70px */
#search-form{
    display: grid;
    /* align-items: center; */
    align-items: center;
    /* position: relative; */
    border: 3px solid aqua;
    
}

.search-container{
    display: grid;
    column-gap: 10px;
    grid-template-columns: 1fr 150px;
    position: relative;
    border: 1px solid red;
    align-self: end;
}

.drop-down-container{
    border: 1px solid greenyellow;
    height: 0px;
    position: relative;
    width: 100%;
    align-self: start;

}

.search-drop-down{
    position: absolute;
    /* border: 3px solid navy; */
    /* height: 300px; */
    width: 100%;
    z-index: 1;
    background-color: blueviolet;
}

.drop-down-item{
    padding: 5px;
}

.drop-down-item:hover{

    background-color: yellow;
}

.status-display {
    display: grid;
    align-items: end;
    justify-items: center;
}

.logo-container{
    /* text-align: center; */
    border: 2px solid gold;
    display: grid;
    justify-items: center;
    align-items: end;

}

.logo-div{
    border: 2px solid red;
    width: 300px;
    text-align: center;
}

.display-container{
    /* align-content: space-between; */
    display: grid;

    position: relative;
    gap: 15px;
    justify-items: center;

}

.current-weather-container{
    height: 260px;
    display: grid;
    align-items: center;
    justify-items: center;

}

.current-weather-display{
    border-radius: 100%;
    height: 250px;
    width: 250px;
    border: 3px solid purple;
    display: grid;
    align-items: center;
    text-align: center;
}

.temp-display{
    /* border: 2px solid fuchsia; */
    font-size: 40px;
    align-self: flex-end;
}

.weather-desc{
    font-size: 20px;
    /* align-self: start; */
}

.uv-index{
    align-self: start;
}

.toggle-container{
    display: grid;
}

.three-day-average{
    display: grid;

    justify-items: center;
    align-items: center;
    overflow: auto;
    width: 90%;

}


.three-day-average-container{
    display: grid;
    /* height: 100%; */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    justify-items: center;
    height: 200px;
    align-items: center;
    /* overflow: auto; */
}


.daily {

    display: grid;
    grid-template-rows: repeat(5, 1fr);
    border: 2px solid blue;
    height: 100%;
    height: 170px;
    width: 170px;
    text-align: center;
    justify-items: center;
    padding: 10px;

    border-radius: 15px;

}

.selected-daily{
    background-color: lightgreen;
}
.daily *{

    /* border: 2px solid navy; */
}

.hourly-average{
    height: 200px;
    overflow: auto;
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    align-items: center;

    border: 3px solid violet;
    width: 90%;

}

.hourly{

    width: 150px;
    height: 150px;
    border: 3px solid pink;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    text-align: center;
    justify-items: center;
    padding: 10px;
    font-size: 14px;
    border-radius: 15px;
}

.footer-container{
    border: 3px solid greenyellow;
    display: grid;
    justify-items: center;
    display: grid;
    align-items: end;
}

.footer{
    border: 2px solid gold;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: grey;\n    /* position: relative; */\n}\n\nbody * {\n    /* border: 3px solid red; */\n}\n\n.main-container{\n    display: grid;\n    /* gap: 10px; */\n    height: 100%;\n    grid-template-rows: 30px 70px 1fr 35px;\n}\n\n.loading-screen{\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.548);\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    /* display: grid; */\n    display: none;\n    align-items: center;\n    justify-items: center;\n    \n}\n\n.loading-screen * {\n    /* border: 2px solid red; */\n}\n\n.enable-loading-screen{\n    display: grid;\n}\n\n.loading-div{\n    display: grid;\n    gap: 15px;\n}\n\n.loading-gif-container{\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.loading-gif-container>img{\n    width: 50px;\n}\n\n.loading-text {\n\n    text-align: center;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n\n}\n\n#search-location{\n    border: 2px solid black;\n    height: 30px;\n}\n\n/* height is 70px */\n#search-form{\n    display: grid;\n    /* align-items: center; */\n    align-items: center;\n    /* position: relative; */\n    border: 3px solid aqua;\n    \n}\n\n.search-container{\n    display: grid;\n    column-gap: 10px;\n    grid-template-columns: 1fr 150px;\n    position: relative;\n    border: 1px solid red;\n    align-self: end;\n}\n\n.drop-down-container{\n    border: 1px solid greenyellow;\n    height: 0px;\n    position: relative;\n    width: 100%;\n    align-self: start;\n\n}\n\n.search-drop-down{\n    position: absolute;\n    /* border: 3px solid navy; */\n    /* height: 300px; */\n    width: 100%;\n    z-index: 1;\n    background-color: blueviolet;\n}\n\n.drop-down-item{\n    padding: 5px;\n}\n\n.drop-down-item:hover{\n\n    background-color: yellow;\n}\n\n.status-display {\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.logo-container{\n    /* text-align: center; */\n    border: 2px solid gold;\n    display: grid;\n    justify-items: center;\n    align-items: end;\n\n}\n\n.logo-div{\n    border: 2px solid red;\n    width: 300px;\n    text-align: center;\n}\n\n.display-container{\n    /* align-content: space-between; */\n    display: grid;\n\n    position: relative;\n    gap: 15px;\n    justify-items: center;\n\n}\n\n.current-weather-container{\n    height: 260px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.current-weather-display{\n    border-radius: 100%;\n    height: 250px;\n    width: 250px;\n    border: 3px solid purple;\n    display: grid;\n    align-items: center;\n    text-align: center;\n}\n\n.temp-display{\n    /* border: 2px solid fuchsia; */\n    font-size: 40px;\n    align-self: flex-end;\n}\n\n.weather-desc{\n    font-size: 20px;\n    /* align-self: start; */\n}\n\n.uv-index{\n    align-self: start;\n}\n\n.toggle-container{\n    display: grid;\n}\n\n.three-day-average{\n    display: grid;\n\n    justify-items: center;\n    align-items: center;\n    overflow: auto;\n    width: 90%;\n\n}\n\n\n.three-day-average-container{\n    display: grid;\n    /* height: 100%; */\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n    height: 200px;\n    align-items: center;\n    /* overflow: auto; */\n}\n\n\n.daily {\n\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    border: 2px solid blue;\n    height: 100%;\n    height: 170px;\n    width: 170px;\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n\n    border-radius: 15px;\n\n}\n\n.selected-daily{\n    background-color: lightgreen;\n}\n.daily *{\n\n    /* border: 2px solid navy; */\n}\n\n.hourly-average{\n    height: 200px;\n    overflow: auto;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-items: center;\n\n    border: 3px solid violet;\n    width: 90%;\n\n}\n\n.hourly{\n\n    width: 150px;\n    height: 150px;\n    border: 3px solid pink;\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n    font-size: 14px;\n    border-radius: 15px;\n}\n\n.footer-container{\n    border: 3px solid greenyellow;\n    display: grid;\n    justify-items: center;\n    display: grid;\n    align-items: end;\n}\n\n.footer{\n    border: 2px solid gold;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/domAction.js":
/*!**************************!*\
  !*** ./src/domAction.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dailyDivsEventListener: () => (/* binding */ dailyDivsEventListener),
/* harmony export */   displayHourlyDOM: () => (/* binding */ displayHourlyDOM),
/* harmony export */   hourlyArray: () => (/* binding */ hourlyArray),
/* harmony export */   toggleTemps: () => (/* binding */ toggleTemps),
/* harmony export */   updateDOMWithData: () => (/* binding */ updateDOMWithData)
/* harmony export */ });
/* harmony import */ var _dropDownCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDownCreation */ "./src/dropDownCreation.js");


let hourlyArray;

const tempDisplay = document.querySelector(".temp-display");

const tempToggle = document.querySelector("#temp-toggle");

const weatherDesc = document.querySelector(".weather-desc");
const uvIndex = document.querySelector(".uv-index");

const dailyDivs = document.querySelectorAll(".daily");

function toggleTemps() {
  let chosenTemp = tempToggle.textContent;

  tempToggle.addEventListener("click", async function () {
    if (tempToggle.textContent === "Celsius") {
      tempToggle.textContent = "Fahrenheit";
      chosenTemp = "Fahrenheit";

      // functionise this?
      updateDOMWithData(_dropDownCreation__WEBPACK_IMPORTED_MODULE_0__.weatherResult);
      if (!hourlyArray) {
        displayHourlyDOM(_dropDownCreation__WEBPACK_IMPORTED_MODULE_0__.todayHourlyData);
        return;
      }
      displayHourlyDOM(hourlyArray);
      console.log("HELI");
      return;
    }

    if (tempToggle.textContent === "Fahrenheit") {
      tempToggle.textContent = "Celsius";
      chosenTemp = "Celsius";
      updateDOMWithData(_dropDownCreation__WEBPACK_IMPORTED_MODULE_0__.weatherResult);

      if (!hourlyArray) {
        displayHourlyDOM(_dropDownCreation__WEBPACK_IMPORTED_MODULE_0__.todayHourlyData);
        return;
      }
      displayHourlyDOM(hourlyArray);

      console.log("COPTER");
      return;
    }
    console.log("TESTTTTT");

    return;
  });
}

function updateDOMWithData(weatherData) {
  if (!weatherData) {
    console.log(weatherData);
    return;
  }

  const currentWeatherData = weatherData.finalData.currentWeatherData;
  const avgDayTemp = weatherData.finalData.avgDayTemp;

  if (tempToggle.textContent === "Celsius") {
    console.log("HSHSHSHHSHSHS");
    // console.log(weatherData);

    console.log(currentWeatherData);
    console.log(avgDayTemp);

    tempDisplay.textContent = currentWeatherData.actualCelsius + " *c";
    weatherDesc.textContent = currentWeatherData.currentDescription;
    uvIndex.textContent = "UV Index: " + currentWeatherData.currentUV;

    displayDailyDOM(avgDayTemp);

    return;
  }

  if (tempToggle.textContent === "Fahrenheit") {
    console.log("YEP");
    // console.log(weatherData);

    tempDisplay.textContent = currentWeatherData.actualFahrenheit + " *F";
    weatherDesc.textContent = currentWeatherData.currentDescription;
    uvIndex.textContent = "UV Index: " + currentWeatherData.currentUV;

    displayDailyDOM(avgDayTemp);

    return;
  }
}

function displayDailyDOM(dailyArray) {
  console.log("WORKSSSS");

  for (let index = 0; index < dailyDivs.length; index++) {
    const dateDiv = dailyDivs[index].querySelector(".date-daily");
    const avgTempDiv = dailyDivs[index].querySelector(".avg-temp-daily");
    const iconDiv = dailyDivs[index].querySelector(".icon-daily");
    const conditionDiv = dailyDivs[index].querySelector(".condition-daily");
    const uvDiv = dailyDivs[index].querySelector(".uv-daily");

    dateDiv.textContent = dailyArray[index].date;

    if (tempToggle.textContent === "Celsius") {
      avgTempDiv.textContent = dailyArray[index].day.avgtemp_c + "*c";
    }

    if (tempToggle.textContent === "Fahrenheit") {
      avgTempDiv.textContent = dailyArray[index].day.avgtemp_f + "*F";
    }

    if (iconDiv.hasChildNodes) {
      iconDiv.querySelectorAll("*").forEach(function (child) {
        child.remove();
      });
    }

    const icon = new Image();

    icon.src = dailyArray[index].day.condition.icon;

    iconDiv.append(icon);

    conditionDiv.textContent = dailyArray[index].day.condition.text;

    uvDiv.textContent = "Avg. UV Index: " + dailyArray[index].day.uv;
  }
}

function dailyDivsEventListener() {
  dailyDivs;

  for (let index = 0; index < dailyDivs.length; index++) {
    // const element = array[index];
    dailyDivs[index].addEventListener("click", function () {
      dailyDivs.forEach((div) => {
        div.classList.remove("selected-daily");
      });
      console.log("BAMBALAMMMM");
      // console.log(weatherResult.finalData.avgDayTemp[index].hour);
      hourlyArray = _dropDownCreation__WEBPACK_IMPORTED_MODULE_0__.weatherResult.finalData.avgDayTemp[index].hour;

      // add and remove background colour of divs here
      dailyDivs[index].classList.add("selected-daily");

      displayHourlyDOM(hourlyArray);
    });
  }
}

function displayHourlyDOM(hourlyArray) {
  if (!hourlyArray) {
    return;
  }
  const hourlyDivs = document.querySelectorAll(".hourly");

  //   console.log(hourlyArray);

  for (let index = 0; index < hourlyDivs.length; index++) {
    //   const element = array[index];
    //   const dateDiv = hourlyDivs[index].querySelector(".date-daily");
    const timeDiv = hourlyDivs[index].querySelector(".time-hourly");

    const iconDiv = hourlyDivs[index].querySelector(".icon-hourly");
    const conditionDiv = hourlyDivs[index].querySelector(".condition-hourly");
    const avgTempDiv = hourlyDivs[index].querySelector(".avg-temp-hourly");
    const uvDiv = hourlyDivs[index].querySelector(".uv-hourly");

    if (iconDiv.hasChildNodes) {
      iconDiv.querySelectorAll("*").forEach(function (child) {
        child.remove();
      });
    }

    timeDiv.textContent = hourlyArray[index].time.slice(-5);

    const icon = new Image();

    icon.src = hourlyArray[index].condition.icon;

    iconDiv.append(icon);

    conditionDiv.textContent = hourlyArray[index].condition.text;

    if (tempToggle.textContent === "Celsius") {
      avgTempDiv.textContent = hourlyArray[index].temp_c + "*c";
    }

    if (tempToggle.textContent === "Fahrenheit") {
      avgTempDiv.textContent = hourlyArray[index].temp_f + "*F";
    }

    uvDiv.textContent = "UV Index: " + hourlyArray[index].uv;
  }
}



/***/ }),

/***/ "./src/dropDownCreation.js":
/*!*********************************!*\
  !*** ./src/dropDownCreation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDropDown: () => (/* binding */ createDropDown),
/* harmony export */   displayLoadingScreen: () => (/* binding */ displayLoadingScreen),
/* harmony export */   initialDOMData: () => (/* binding */ initialDOMData),
/* harmony export */   removeDropDown: () => (/* binding */ removeDropDown),
/* harmony export */   removeLoadingScreen: () => (/* binding */ removeLoadingScreen),
/* harmony export */   searchEvents: () => (/* binding */ searchEvents),
/* harmony export */   statusDisplay: () => (/* binding */ statusDisplay),
/* harmony export */   todayHourlyData: () => (/* binding */ todayHourlyData),
/* harmony export */   weatherResult: () => (/* binding */ weatherResult)
/* harmony export */ });
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/getData.js");
/* harmony import */ var _initialiser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialiser.js */ "./src/initialiser.js");
/* harmony import */ var _domAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domAction.js */ "./src/domAction.js");
/* harmony import */ var _assets_loading_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/loading.gif */ "./src/assets/loading.gif");








const searchInput = document.querySelector("#search-location");

const searchButton = document.querySelector("#search-button");

const searchDropDown = document.querySelector(".search-drop-down");

const mainContainer = document.querySelector(".main-container");

const dailyDivs = document.querySelectorAll(".daily");

let weatherResult;

let todayHourlyData;

// Create one module for DOM Creation and another for DOM action

// Add Event Listener for search events
function searchEvents() {
  // searchInput.addEventListener("keyup", autocomplete);

  searchInput.addEventListener("keyup", async function () {
    if (!searchInput.value) {
      return;
    }
    const searchInputValue = searchInput.value;
    const autocompleteArray = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.autocomplete)(searchInputValue);
    createDropDown(autocompleteArray);
  });

  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    if (!searchInput.value) {
      return;
    }

    displayLoadingScreen();

    const searchInputValue = searchInput.value;

    weatherResult = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.retrieveInfo)(searchInputValue);

    if (!weatherResult) {
      console.log("NOT FOUND");

      statusDisplay(false);

      // display location not found on DOM

      console.log(weatherResult);
      removeLoadingScreen();
      return;
    }

    searchInput.value = weatherResult.searchResult;

    (0,_initialiser_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(weatherResult.searchResult);

    statusDisplay(weatherResult.searchResult);

    searchDropDown.querySelectorAll("*").forEach(function (child) {
      child.remove();
    });

    // updateDOMWithData(weatherResult);
    initialDOMData(weatherResult);

    // setTimeout(removeLoadingScreen, 5000);

    removeLoadingScreen();
  });

  console.log("module-works");
}

function createDropDown(autocompleteArray) {
  searchDropDown.querySelectorAll("*").forEach(function (child) {
    child.remove();
  });

  // console.log(autocompleteArray);

  for (const each of autocompleteArray) {
    const dropDownItem = document.createElement("div");
    dropDownItem.classList.add("drop-down-item");
    // console.log(each);
    dropDownItem.textContent = each.name + ", " + each.country;
    dropDownItem.url = each.url;
    console.log(each.url);
    searchDropDown.append(dropDownItem);
  }

  if (searchDropDown.querySelector(".drop-down-item")) {
    // console.log("drop-down-works");
    // console.log(searchDropDown.querySelector(".drop-down-item"));

    dropDownClickEvent();
  }
}

function dropDownClickEvent() {
  const dropDownItemNodeList = document.querySelectorAll(".drop-down-item");

  // console.log("what");

  dropDownItemNodeList.forEach((dropDownItem) => {
    // console.log(dropDownItem);
    dropDownItem.addEventListener("click", async function () {
      displayLoadingScreen();
      // console.log("test-click");

      searchInput.value = dropDownItem.textContent;

      (0,_initialiser_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)(dropDownItem.textContent);

      // use await for this?
      weatherResult = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.retrieveInfo)(
        dropDownItem.textContent,
        dropDownItem.url
      );

      statusDisplay(dropDownItem.textContent);
      // toggleTemps(newSearchResult);

      // Put these in a function
      initialDOMData(weatherResult);
      // Add displayHourlyDOM

      // Until here.

      removeLoadingScreen();
    });
  });
}

function initialDOMData(weatherData) {
  (0,_domAction_js__WEBPACK_IMPORTED_MODULE_2__.updateDOMWithData)(weatherData);

  if (!weatherResult) {
    weatherResult = _initialiser_js__WEBPACK_IMPORTED_MODULE_1__.initialData;
    console.log(_initialiser_js__WEBPACK_IMPORTED_MODULE_1__.initialData);
    console.log("INITIAL DATA USED");
  }

  todayHourlyData = weatherData.finalData.avgDayTemp[0].hour;

  // console.log(weatherData.finalData.avgDayTemp[0].hour);

  dailyDivs.forEach((div) => {
    div.classList.remove("selected-daily");
  });

  dailyDivs[0].classList.add("selected-daily");

  (0,_domAction_js__WEBPACK_IMPORTED_MODULE_2__.displayHourlyDOM)(todayHourlyData);
}

function removeDropDown() {
  mainContainer.addEventListener("click", function () {
    searchDropDown.querySelectorAll("*").forEach(function (child) {
      child.remove();
    });
  });
}

function displayLoadingScreen() {
  // const loadingScreen = document.createElement('div');
  // loadingScreen.classList.add('loading-screen')

  // mainContainer.append(loadingScreen);

  const loadingGIFContainer = document.querySelector(".loading-gif-container");

  const loadingGIF = new Image();

  loadingGIF.src = _assets_loading_gif__WEBPACK_IMPORTED_MODULE_3__;

  loadingGIFContainer.append(loadingGIF);

  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.classList.add("enable-loading-screen");
}

function removeLoadingScreen() {
  const loadingGIFContainer = document.querySelector(".loading-gif-container");

  loadingGIFContainer.querySelector("img").remove();
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.classList.remove("enable-loading-screen");
}

function statusDisplay(location) {
  const statusMessage = document.querySelector(".status-message");

  if (!location) {
    const previousData = (0,_initialiser_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)();

    statusMessage.textContent =
      "Location not found, still displaying: " + previousData;
    return;
  }
  statusMessage.textContent = "Currently displaying: " + location;
}




/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autocomplete: () => (/* binding */ autocomplete),
/* harmony export */   retrieveInfo: () => (/* binding */ retrieveInfo)
/* harmony export */ });
const searchButton = document.querySelector("#search-button");

//remove all DOM elements from here, only functions that accept parameters are allowed

const API_KEY = "5b3224af0fde4bb9928205228232210";

async function getWeatherData(locationData) {
  // convert to async await

  try {
    let location;

    if (locationData.url === true) {
      location = locationData.url;
    } else {
      location = locationData.location;
    }
    const days = "3";

    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;

    const weatherData = await fetch(URL, { mode: "cors" });

    if (!weatherData.ok) {
      console.log("getWeatherData doesn't work!");

      return;
    }

    const parsedWeatherData = await weatherData.json();

    return parsedWeatherData;
  } catch (error) {
    console.log(error);
    console.log("works!!!!");
  }
}

async function sortData(weatherData) {
  try {
    if (!weatherData) {
      console.log("location not found");
      return;
    }
    console.log(weatherData);

    console.log("TTTTTTTTTTT");

    const location = weatherData.location.name;
    const country = weatherData.location.country;
    // const url = ;
    console.log(location);

    // ----Current weather------
    const currentWeather = weatherData.current;

    const actualCelsius = currentWeather.temp_c;
    const actualFahrenheit = currentWeather.temp_f;
    const feelsLikeCelsius = currentWeather.feelslike_c;
    const feelsLikeFahrenheit = currentWeather.feelslike_f;

    const currentDescription = currentWeather.condition.text;

    const currentUV = currentWeather.uv;

    // Log current data
    // console.log(currentWeather);

    console.log("------CURRENT DATA------");
    console.log(`Actual Temp(C*): ${actualCelsius}`);
    console.log(`Actual Temp(F*): ${actualFahrenheit}`);
    console.log(`Feels Like (C*): ${feelsLikeCelsius}`);
    console.log(`Feels Like (F*): ${feelsLikeFahrenheit}`);
    console.log(`Description: ` + currentDescription);
    console.log("UV: " + currentUV);
    // add UV levels

    // -----Forecast weather-----

    const forecastData = weatherData.forecast;
    const avgDayTemp = forecastData.forecastday;

    // console.log(forecastData);
    console.log("-------FORECAST DATA (DAY)--------");

    for (const each of avgDayTemp) {
      // console.log(each);
      // console.log(each.day);
      // temps displayed in f or c depending on which option is chosen
      // day average temp
      // day max temp
      // day min temp
      // description/icon
    }
    console.log("-------FORECAST DATA (HOUR)--------");

    for (const each of avgDayTemp) {
      // console.log(each.hour);
      const hourlyForecastArray = each.hour;

      console.log("-----PER HOUR-----");

      for (const iterator of hourlyForecastArray) {
        // console.log(iterator);
        // console.log(iterator.time + ": " + " " + iterator.condition.text);
      }
      // temps f and c - displays depending on which option is chosen
      // description or icon
    }

    return {
      location,
      country,
      currentWeatherData: {
        actualCelsius,
        actualFahrenheit,
        feelsLikeCelsius,
        feelsLikeFahrenheit,
        currentDescription,
        currentUV,
      },
      avgDayTemp,
      // dailyWeatherData: {
      //   avgDayTempCelsius,
      // },
    };
  } catch (error) {
    console.log("sort data fn");
    console.log(error);
  }
}

// sortData();

async function autocomplete(searchInputValue) {
  try {
    const location = searchInputValue;
    if (!location) {
      return;
    }

    console.log(location);

    const autocompleteURL = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`;

    const autoCompleteResults = await fetch(autocompleteURL, { mode: "cors" });

    const parsedAutocompleteResult = await autoCompleteResults.json();

    return parsedAutocompleteResult;
  } catch (error) {
    console.log(error);
  }
}

// Send location data to server
async function retrieveInfo(location, url) {
  // increases coupling, find an alternative later

  console.log(url);

  try {
    const locationData = {
      location: location,
      url: url,
    };
    if (!locationData.location) {
      return;
    }
    // console.log(location);

    const weatherData = await getWeatherData(locationData);

    const sortedData = await sortData(weatherData);

    if (!weatherData) {
      return;
    }

    const finalData = {
      searchResult: sortedData.location + ", " + sortedData.country,
      finalData: sortedData,
    };

    console.log(finalData);

    return finalData;
  } catch (error) {
    console.log(error);
  }
}




/***/ }),

/***/ "./src/initialiser.js":
/*!****************************!*\
  !*** ./src/initialiser.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocalStorage: () => (/* binding */ getLocalStorage),
/* harmony export */   initialData: () => (/* binding */ initialData),
/* harmony export */   initialise: () => (/* binding */ initialise),
/* harmony export */   setLocalStorage: () => (/* binding */ setLocalStorage)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _dropDownCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropDownCreation */ "./src/dropDownCreation.js");



// function initialise(){
// Check if there is local storage data
//If yes, use localstorage data
// If no, request Geolocation data
//If no, use default-kuala-lumpur

//Add loading css

let initialData;

const searchInput = document.querySelector("#search-location");

async function initialise() {
  (0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_1__.displayLoadingScreen)();

  const kickoffData = getLocalStorage();

  // if localStorage is empty
  if (!kickoffData) {
    const kualaLumpur = "Kuala Lumpur, Malaysia";
    searchInput.value = kualaLumpur;

    setLocalStorage(kualaLumpur);

    console.log("NONE");

    initialise();

    return;
  }

  searchInput.value = kickoffData;

  initialData = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.retrieveInfo)(kickoffData);

  (0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_1__.statusDisplay)(kickoffData);

  (0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_1__.initialDOMData)(initialData);

  (0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_1__.removeLoadingScreen)();
}

function setLocalStorage(newData) {
  localStorage.removeItem("risshiWeatherLocationData");

  localStorage.setItem("risshiWeatherLocationData", newData);
}

function getLocalStorage() {
  return localStorage.getItem("risshiWeatherLocationData");
}




/***/ }),

/***/ "./src/assets/loading.gif":
/*!********************************!*\
  !*** ./src/assets/loading.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a17d64354373bd0968b.gif";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initialiser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialiser */ "./src/initialiser.js");
/* harmony import */ var _domAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domAction */ "./src/domAction.js");
/* harmony import */ var _dropDownCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropDownCreation */ "./src/dropDownCreation.js");





console.log("webpack works!");

(0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_3__.searchEvents)();
// Uncomment later
(0,_initialiser__WEBPACK_IMPORTED_MODULE_1__.initialise)();

// Add eventListeners
(0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_3__.removeDropDown)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_2__.toggleTemps)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_2__.dailyDivsEventListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0I7QUFDdUI7QUFDQTs7QUFFbEU7O0FBRUEsK0RBQVk7QUFDWjtBQUNBLHdEQUFVOztBQUVWO0FBQ0EsaUVBQWM7QUFDZCx1REFBVztBQUNYLGtFQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUFjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kcm9wRG93bkNyZWF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5pdGlhbGlzZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFxufVxuXG5odG1sLFxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG59XG5cbmJvZHkgKiB7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xufVxuXG4ubWFpbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBnYXA6IDEwcHg7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCA3MHB4IDFmciAzNXB4O1xufVxuXG4ubG9hZGluZy1zY3JlZW57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cblxuLmxvYWRpbmctc2NyZWVuICoge1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbn1cblxuLmVuYWJsZS1sb2FkaW5nLXNjcmVlbntcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubG9hZGluZy1kaXZ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5sb2FkaW5nLWdpZi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvYWRpbmctZ2lmLWNvbnRhaW5lcj5pbWd7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5sb2FkaW5nLXRleHQge1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cblxuI3NlYXJjaC1sb2NhdGlvbntcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi8qIGhlaWdodCBpcyA3MHB4ICovXG4jc2VhcmNoLWZvcm17XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGFxdWE7XG4gICAgXG59XG5cbi5zZWFyY2gtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLmRyb3AtZG93bi1jb250YWluZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuXG59XG5cbi5zZWFyY2gtZHJvcC1kb3due1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBuYXZ5OyAqL1xuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuXG4uZHJvcC1kb3duLWl0ZW17XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uZHJvcC1kb3duLWl0ZW06aG92ZXJ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5zdGF0dXMtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVye1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG5cbn1cblxuLmxvZ28tZGl2e1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzcGxheS1jb250YWluZXJ7XG4gICAgLyogYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGdhcDogMTVweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG59XG5cbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheXtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHB1cnBsZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVtcC1kaXNwbGF5e1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ud2VhdGhlci1kZXNje1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiBhbGlnbi1zZWxmOiBzdGFydDsgKi9cbn1cblxuLnV2LWluZGV4e1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4udG9nZ2xlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udGhyZWUtZGF5LWF2ZXJhZ2V7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG5cbn1cblxuXG4udGhyZWUtZGF5LWF2ZXJhZ2UtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG59XG5cblxuLmRhaWx5IHtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cbi5zZWxlY3RlZC1kYWlseXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuLmRhaWx5ICp7XG5cbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBuYXZ5OyAqL1xufVxuXG4uaG91cmx5LWF2ZXJhZ2V7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3JkZXI6IDNweCBzb2xpZCB2aW9sZXQ7XG4gICAgd2lkdGg6IDkwJTtcblxufVxuXG4uaG91cmx5e1xuXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbnllbGxvdztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbi5mb290ZXJ7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7O0FBRTFCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhOztJQUViLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVOztBQUVkOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7OztBQUdBOztJQUVJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTs7SUFFYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixVQUFVOztBQUVkOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbmJvZHkgKiB7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBnYXA6IDEwcHg7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDcwcHggMWZyIDM1cHg7XFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmxvYWRpbmctc2NyZWVuICoge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5lbmFibGUtbG9hZGluZy1zY3JlZW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5sb2FkaW5nLWRpdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubG9hZGluZy1naWYtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2FkaW5nLWdpZi1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmxvYWRpbmctdGV4dCB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG59XFxuXFxuI3NlYXJjaC1sb2NhdGlvbntcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLyogaGVpZ2h0IGlzIDcwcHggKi9cXG4jc2VhcmNoLWZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgYm9yZGVyOiAzcHggc29saWQgYXF1YTtcXG4gICAgXFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmRyb3AtZG93bi1jb250YWluZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcblxcbi5zZWFyY2gtZHJvcC1kb3due1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIG5hdnk7ICovXFxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uZHJvcC1kb3duLWl0ZW17XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRyb3AtZG93bi1pdGVtOmhvdmVye1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5zdGF0dXMtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVye1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG5cXG59XFxuXFxuLmxvZ28tZGl2e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheS1jb250YWluZXJ7XFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheXtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwdXJwbGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRlbXAtZGlzcGxheXtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLndlYXRoZXItZGVzY3tcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAvKiBhbGlnbi1zZWxmOiBzdGFydDsgKi9cXG59XFxuXFxuLnV2LWluZGV4e1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLnRvZ2dsZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi50aHJlZS1kYXktYXZlcmFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgd2lkdGg6IDkwJTtcXG5cXG59XFxuXFxuXFxuLnRocmVlLWRheS1hdmVyYWdlLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxufVxcblxcblxcbi5kYWlseSB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG5cXG59XFxuXFxuLnNlbGVjdGVkLWRhaWx5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uZGFpbHkgKntcXG5cXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgbmF2eTsgKi9cXG59XFxuXFxuLmhvdXJseS1hdmVyYWdle1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2aW9sZXQ7XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxufVxcblxcbi5ob3VybHl7XFxuXFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXJ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVueWVsbG93O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB3ZWF0aGVyUmVzdWx0LCB0b2RheUhvdXJseURhdGEgfSBmcm9tIFwiLi9kcm9wRG93bkNyZWF0aW9uXCI7XG5cbmxldCBob3VybHlBcnJheTtcblxuY29uc3QgdGVtcERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtZGlzcGxheVwiKTtcblxuY29uc3QgdGVtcFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcC10b2dnbGVcIik7XG5cbmNvbnN0IHdlYXRoZXJEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWRlc2NcIik7XG5jb25zdCB1dkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51di1pbmRleFwiKTtcblxuY29uc3QgZGFpbHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseVwiKTtcblxuZnVuY3Rpb24gdG9nZ2xlVGVtcHMoKSB7XG4gIGxldCBjaG9zZW5UZW1wID0gdGVtcFRvZ2dsZS50ZXh0Q29udGVudDtcblxuICB0ZW1wVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICB0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID0gXCJGYWhyZW5oZWl0XCI7XG4gICAgICBjaG9zZW5UZW1wID0gXCJGYWhyZW5oZWl0XCI7XG5cbiAgICAgIC8vIGZ1bmN0aW9uaXNlIHRoaXM/XG4gICAgICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyUmVzdWx0KTtcbiAgICAgIGlmICghaG91cmx5QXJyYXkpIHtcbiAgICAgICAgZGlzcGxheUhvdXJseURPTSh0b2RheUhvdXJseURhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSEVMSVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJGYWhyZW5oZWl0XCIpIHtcbiAgICAgIHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPSBcIkNlbHNpdXNcIjtcbiAgICAgIGNob3NlblRlbXAgPSBcIkNlbHNpdXNcIjtcbiAgICAgIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJSZXN1bHQpO1xuXG4gICAgICBpZiAoIWhvdXJseUFycmF5KSB7XG4gICAgICAgIGRpc3BsYXlIb3VybHlET00odG9kYXlIb3VybHlEYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGlzcGxheUhvdXJseURPTShob3VybHlBcnJheSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiQ09QVEVSXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIlRFU1RUVFRUXCIpO1xuXG4gICAgcmV0dXJuO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRE9NV2l0aERhdGEod2VhdGhlckRhdGEpIHtcbiAgaWYgKCF3ZWF0aGVyRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YS5maW5hbERhdGEuY3VycmVudFdlYXRoZXJEYXRhO1xuICBjb25zdCBhdmdEYXlUZW1wID0gd2VhdGhlckRhdGEuZmluYWxEYXRhLmF2Z0RheVRlbXA7XG5cbiAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgY29uc29sZS5sb2coXCJIU0hTSFNISFNIU0hTXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyRGF0YSk7XG4gICAgY29uc29sZS5sb2coYXZnRGF5VGVtcCk7XG5cbiAgICB0ZW1wRGlzcGxheS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5hY3R1YWxDZWxzaXVzICsgXCIgKmNcIjtcbiAgICB3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50RGVzY3JpcHRpb247XG4gICAgdXZJbmRleC50ZXh0Q29udGVudCA9IFwiVVYgSW5kZXg6IFwiICsgY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnRVVjtcblxuICAgIGRpc3BsYXlEYWlseURPTShhdmdEYXlUZW1wKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkZhaHJlbmhlaXRcIikge1xuICAgIGNvbnNvbGUubG9nKFwiWUVQXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIHRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmFjdHVhbEZhaHJlbmhlaXQgKyBcIiAqRlwiO1xuICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnREZXNjcmlwdGlvbjtcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gXCJVViBJbmRleDogXCIgKyBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudFVWO1xuXG4gICAgZGlzcGxheURhaWx5RE9NKGF2Z0RheVRlbXApO1xuXG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYWlseURPTShkYWlseUFycmF5KSB7XG4gIGNvbnNvbGUubG9nKFwiV09SS1NTU1NcIik7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhaWx5RGl2cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkYXRlRGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtZGFpbHlcIik7XG4gICAgY29uc3QgYXZnVGVtcERpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5hdmctdGVtcC1kYWlseVwiKTtcbiAgICBjb25zdCBpY29uRGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmljb24tZGFpbHlcIik7XG4gICAgY29uc3QgY29uZGl0aW9uRGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvbi1kYWlseVwiKTtcbiAgICBjb25zdCB1dkRpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi51di1kYWlseVwiKTtcblxuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBkYWlseUFycmF5W2luZGV4XS5kYXRlO1xuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICBhdmdUZW1wRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF5LmF2Z3RlbXBfYyArIFwiKmNcIjtcbiAgICB9XG5cbiAgICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJGYWhyZW5oZWl0XCIpIHtcbiAgICAgIGF2Z1RlbXBEaXYudGV4dENvbnRlbnQgPSBkYWlseUFycmF5W2luZGV4XS5kYXkuYXZndGVtcF9mICsgXCIqRlwiO1xuICAgIH1cblxuICAgIGlmIChpY29uRGl2Lmhhc0NoaWxkTm9kZXMpIHtcbiAgICAgIGljb25EaXYucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBpY29uLnNyYyA9IGRhaWx5QXJyYXlbaW5kZXhdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGljb25EaXYuYXBwZW5kKGljb24pO1xuXG4gICAgY29uZGl0aW9uRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgdXZEaXYudGV4dENvbnRlbnQgPSBcIkF2Zy4gVVYgSW5kZXg6IFwiICsgZGFpbHlBcnJheVtpbmRleF0uZGF5LnV2O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhaWx5RGl2c0V2ZW50TGlzdGVuZXIoKSB7XG4gIGRhaWx5RGl2cztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGFpbHlEaXZzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgZGFpbHlEaXZzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWRhaWx5XCIpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkJBTUJBTEFNTU1NXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlclJlc3VsdC5maW5hbERhdGEuYXZnRGF5VGVtcFtpbmRleF0uaG91cik7XG4gICAgICBob3VybHlBcnJheSA9IHdlYXRoZXJSZXN1bHQuZmluYWxEYXRhLmF2Z0RheVRlbXBbaW5kZXhdLmhvdXI7XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGJhY2tncm91bmQgY29sb3VyIG9mIGRpdnMgaGVyZVxuICAgICAgZGFpbHlEaXZzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtZGFpbHlcIik7XG5cbiAgICAgIGRpc3BsYXlIb3VybHlET00oaG91cmx5QXJyYXkpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb3VybHlET00oaG91cmx5QXJyYXkpIHtcbiAgaWYgKCFob3VybHlBcnJheSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBob3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHlcIik7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhob3VybHlBcnJheSk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhvdXJseURpdnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgLy8gICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuICAgIC8vICAgY29uc3QgZGF0ZURpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1kYWlseVwiKTtcbiAgICBjb25zdCB0aW1lRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi50aW1lLWhvdXJseVwiKTtcblxuICAgIGNvbnN0IGljb25EaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmljb24taG91cmx5XCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uLWhvdXJseVwiKTtcbiAgICBjb25zdCBhdmdUZW1wRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5hdmctdGVtcC1ob3VybHlcIik7XG4gICAgY29uc3QgdXZEaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLnV2LWhvdXJseVwiKTtcblxuICAgIGlmIChpY29uRGl2Lmhhc0NoaWxkTm9kZXMpIHtcbiAgICAgIGljb25EaXYucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aW1lRGl2LnRleHRDb250ZW50ID0gaG91cmx5QXJyYXlbaW5kZXhdLnRpbWUuc2xpY2UoLTUpO1xuXG4gICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaWNvbi5zcmMgPSBob3VybHlBcnJheVtpbmRleF0uY29uZGl0aW9uLmljb247XG5cbiAgICBpY29uRGl2LmFwcGVuZChpY29uKTtcblxuICAgIGNvbmRpdGlvbkRpdi50ZXh0Q29udGVudCA9IGhvdXJseUFycmF5W2luZGV4XS5jb25kaXRpb24udGV4dDtcblxuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgYXZnVGVtcERpdi50ZXh0Q29udGVudCA9IGhvdXJseUFycmF5W2luZGV4XS50ZW1wX2MgKyBcIipjXCI7XG4gICAgfVxuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgICBhdmdUZW1wRGl2LnRleHRDb250ZW50ID0gaG91cmx5QXJyYXlbaW5kZXhdLnRlbXBfZiArIFwiKkZcIjtcbiAgICB9XG5cbiAgICB1dkRpdi50ZXh0Q29udGVudCA9IFwiVVYgSW5kZXg6IFwiICsgaG91cmx5QXJyYXlbaW5kZXhdLnV2O1xuICB9XG59XG5leHBvcnQge1xuICBob3VybHlBcnJheSxcbiAgdG9nZ2xlVGVtcHMsXG4gIHVwZGF0ZURPTVdpdGhEYXRhLFxuICBkYWlseURpdnNFdmVudExpc3RlbmVyLFxuICBkaXNwbGF5SG91cmx5RE9NLFxufTtcbiIsImltcG9ydCB7IGF1dG9jb21wbGV0ZSwgcmV0cmlldmVJbmZvIH0gZnJvbSBcIi4vZ2V0RGF0YS5qc1wiO1xuXG5pbXBvcnQge1xuICBpbml0aWFsRGF0YSxcbiAgc2V0TG9jYWxTdG9yYWdlLFxuICBnZXRMb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuL2luaXRpYWxpc2VyLmpzXCI7XG5cbmltcG9ydCB7XG4gIGhvdXJseUFycmF5LFxuICB1cGRhdGVET01XaXRoRGF0YSxcbiAgZGlzcGxheUhvdXJseURPTSxcbn0gZnJvbSBcIi4vZG9tQWN0aW9uLmpzXCI7XG5cbmltcG9ydCBub3dMb2FkaW5nIGZyb20gXCIuL2Fzc2V0cy9sb2FkaW5nLmdpZlwiO1xuXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWxvY2F0aW9uXCIpO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5cbmNvbnN0IHNlYXJjaERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZHJvcC1kb3duXCIpO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblxuY29uc3QgZGFpbHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseVwiKTtcblxubGV0IHdlYXRoZXJSZXN1bHQ7XG5cbmxldCB0b2RheUhvdXJseURhdGE7XG5cbi8vIENyZWF0ZSBvbmUgbW9kdWxlIGZvciBET00gQ3JlYXRpb24gYW5kIGFub3RoZXIgZm9yIERPTSBhY3Rpb25cblxuLy8gQWRkIEV2ZW50IExpc3RlbmVyIGZvciBzZWFyY2ggZXZlbnRzXG5mdW5jdGlvbiBzZWFyY2hFdmVudHMoKSB7XG4gIC8vIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBhdXRvY29tcGxldGUpO1xuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgY29uc3QgYXV0b2NvbXBsZXRlQXJyYXkgPSBhd2FpdCBhdXRvY29tcGxldGUoc2VhcmNoSW5wdXRWYWx1ZSk7XG4gICAgY3JlYXRlRHJvcERvd24oYXV0b2NvbXBsZXRlQXJyYXkpO1xuICB9KTtcblxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCk7XG5cbiAgICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgICB3ZWF0aGVyUmVzdWx0ID0gYXdhaXQgcmV0cmlldmVJbmZvKHNlYXJjaElucHV0VmFsdWUpO1xuXG4gICAgaWYgKCF3ZWF0aGVyUmVzdWx0KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5PVCBGT1VORFwiKTtcblxuICAgICAgc3RhdHVzRGlzcGxheShmYWxzZSk7XG5cbiAgICAgIC8vIGRpc3BsYXkgbG9jYXRpb24gbm90IGZvdW5kIG9uIERPTVxuXG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzdWx0KTtcbiAgICAgIHJlbW92ZUxvYWRpbmdTY3JlZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IHdlYXRoZXJSZXN1bHQuc2VhcmNoUmVzdWx0O1xuXG4gICAgc2V0TG9jYWxTdG9yYWdlKHdlYXRoZXJSZXN1bHQuc2VhcmNoUmVzdWx0KTtcblxuICAgIHN0YXR1c0Rpc3BsYXkod2VhdGhlclJlc3VsdC5zZWFyY2hSZXN1bHQpO1xuXG4gICAgc2VhcmNoRHJvcERvd24ucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlRE9NV2l0aERhdGEod2VhdGhlclJlc3VsdCk7XG4gICAgaW5pdGlhbERPTURhdGEod2VhdGhlclJlc3VsdCk7XG5cbiAgICAvLyBzZXRUaW1lb3V0KHJlbW92ZUxvYWRpbmdTY3JlZW4sIDUwMDApO1xuXG4gICAgcmVtb3ZlTG9hZGluZ1NjcmVlbigpO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhcIm1vZHVsZS13b3Jrc1wiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJvcERvd24oYXV0b2NvbXBsZXRlQXJyYXkpIHtcbiAgc2VhcmNoRHJvcERvd24ucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBjaGlsZC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2coYXV0b2NvbXBsZXRlQXJyYXkpO1xuXG4gIGZvciAoY29uc3QgZWFjaCBvZiBhdXRvY29tcGxldGVBcnJheSkge1xuICAgIGNvbnN0IGRyb3BEb3duSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHJvcERvd25JdGVtLmNsYXNzTGlzdC5hZGQoXCJkcm9wLWRvd24taXRlbVwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhlYWNoKTtcbiAgICBkcm9wRG93bkl0ZW0udGV4dENvbnRlbnQgPSBlYWNoLm5hbWUgKyBcIiwgXCIgKyBlYWNoLmNvdW50cnk7XG4gICAgZHJvcERvd25JdGVtLnVybCA9IGVhY2gudXJsO1xuICAgIGNvbnNvbGUubG9nKGVhY2gudXJsKTtcbiAgICBzZWFyY2hEcm9wRG93bi5hcHBlbmQoZHJvcERvd25JdGVtKTtcbiAgfVxuXG4gIGlmIChzZWFyY2hEcm9wRG93bi5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtZG93bi1pdGVtXCIpKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJkcm9wLWRvd24td29ya3NcIik7XG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoRHJvcERvd24ucXVlcnlTZWxlY3RvcihcIi5kcm9wLWRvd24taXRlbVwiKSk7XG5cbiAgICBkcm9wRG93bkNsaWNrRXZlbnQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcm9wRG93bkNsaWNrRXZlbnQoKSB7XG4gIGNvbnN0IGRyb3BEb3duSXRlbU5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wLWRvd24taXRlbVwiKTtcblxuICAvLyBjb25zb2xlLmxvZyhcIndoYXRcIik7XG5cbiAgZHJvcERvd25JdGVtTm9kZUxpc3QuZm9yRWFjaCgoZHJvcERvd25JdGVtKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZHJvcERvd25JdGVtKTtcbiAgICBkcm9wRG93bkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3QtY2xpY2tcIik7XG5cbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gZHJvcERvd25JdGVtLnRleHRDb250ZW50O1xuXG4gICAgICBzZXRMb2NhbFN0b3JhZ2UoZHJvcERvd25JdGVtLnRleHRDb250ZW50KTtcblxuICAgICAgLy8gdXNlIGF3YWl0IGZvciB0aGlzP1xuICAgICAgd2VhdGhlclJlc3VsdCA9IGF3YWl0IHJldHJpZXZlSW5mbyhcbiAgICAgICAgZHJvcERvd25JdGVtLnRleHRDb250ZW50LFxuICAgICAgICBkcm9wRG93bkl0ZW0udXJsXG4gICAgICApO1xuXG4gICAgICBzdGF0dXNEaXNwbGF5KGRyb3BEb3duSXRlbS50ZXh0Q29udGVudCk7XG4gICAgICAvLyB0b2dnbGVUZW1wcyhuZXdTZWFyY2hSZXN1bHQpO1xuXG4gICAgICAvLyBQdXQgdGhlc2UgaW4gYSBmdW5jdGlvblxuICAgICAgaW5pdGlhbERPTURhdGEod2VhdGhlclJlc3VsdCk7XG4gICAgICAvLyBBZGQgZGlzcGxheUhvdXJseURPTVxuXG4gICAgICAvLyBVbnRpbCBoZXJlLlxuXG4gICAgICByZW1vdmVMb2FkaW5nU2NyZWVuKCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsRE9NRGF0YSh3ZWF0aGVyRGF0YSkge1xuICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyRGF0YSk7XG5cbiAgaWYgKCF3ZWF0aGVyUmVzdWx0KSB7XG4gICAgd2VhdGhlclJlc3VsdCA9IGluaXRpYWxEYXRhO1xuICAgIGNvbnNvbGUubG9nKGluaXRpYWxEYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcIklOSVRJQUwgREFUQSBVU0VEXCIpO1xuICB9XG5cbiAgdG9kYXlIb3VybHlEYXRhID0gd2VhdGhlckRhdGEuZmluYWxEYXRhLmF2Z0RheVRlbXBbMF0uaG91cjtcblxuICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5maW5hbERhdGEuYXZnRGF5VGVtcFswXS5ob3VyKTtcblxuICBkYWlseURpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1kYWlseVwiKTtcbiAgfSk7XG5cbiAgZGFpbHlEaXZzWzBdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1kYWlseVwiKTtcblxuICBkaXNwbGF5SG91cmx5RE9NKHRvZGF5SG91cmx5RGF0YSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURyb3BEb3duKCkge1xuICBtYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VhcmNoRHJvcERvd24ucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUxvYWRpbmdTY3JlZW4oKSB7XG4gIC8vIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gbG9hZGluZ1NjcmVlbi5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nLXNjcmVlbicpXG5cbiAgLy8gbWFpbkNvbnRhaW5lci5hcHBlbmQobG9hZGluZ1NjcmVlbik7XG5cbiAgY29uc3QgbG9hZGluZ0dJRkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1naWYtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxvYWRpbmdHSUYgPSBuZXcgSW1hZ2UoKTtcblxuICBsb2FkaW5nR0lGLnNyYyA9IG5vd0xvYWRpbmc7XG5cbiAgbG9hZGluZ0dJRkNvbnRhaW5lci5hcHBlbmQobG9hZGluZ0dJRik7XG5cbiAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1zY3JlZW5cIik7XG4gIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LmFkZChcImVuYWJsZS1sb2FkaW5nLXNjcmVlblwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTG9hZGluZ1NjcmVlbigpIHtcbiAgY29uc3QgbG9hZGluZ0dJRkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1naWYtY29udGFpbmVyXCIpO1xuXG4gIGxvYWRpbmdHSUZDb250YWluZXIucXVlcnlTZWxlY3RvcihcImltZ1wiKS5yZW1vdmUoKTtcbiAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1zY3JlZW5cIik7XG4gIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZS1sb2FkaW5nLXNjcmVlblwiKTtcbn1cblxuZnVuY3Rpb24gc3RhdHVzRGlzcGxheShsb2NhdGlvbikge1xuICBjb25zdCBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXMtbWVzc2FnZVwiKTtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgY29uc3QgcHJldmlvdXNEYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG5cbiAgICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAgIFwiTG9jYXRpb24gbm90IGZvdW5kLCBzdGlsbCBkaXNwbGF5aW5nOiBcIiArIHByZXZpb3VzRGF0YTtcbiAgICByZXR1cm47XG4gIH1cbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQ3VycmVudGx5IGRpc3BsYXlpbmc6IFwiICsgbG9jYXRpb247XG59XG5cbmV4cG9ydCB7XG4gIHdlYXRoZXJSZXN1bHQsXG4gIHRvZGF5SG91cmx5RGF0YSxcbiAgc2VhcmNoRXZlbnRzLFxuICBjcmVhdGVEcm9wRG93bixcbiAgcmVtb3ZlRHJvcERvd24sXG4gIGluaXRpYWxET01EYXRhLFxuICBkaXNwbGF5TG9hZGluZ1NjcmVlbixcbiAgcmVtb3ZlTG9hZGluZ1NjcmVlbixcbiAgc3RhdHVzRGlzcGxheSxcbn07XG4iLCJjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5cbi8vcmVtb3ZlIGFsbCBET00gZWxlbWVudHMgZnJvbSBoZXJlLCBvbmx5IGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBwYXJhbWV0ZXJzIGFyZSBhbGxvd2VkXG5cbmNvbnN0IEFQSV9LRVkgPSBcIjViMzIyNGFmMGZkZTRiYjk5MjgyMDUyMjgyMzIyMTBcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb25EYXRhKSB7XG4gIC8vIGNvbnZlcnQgdG8gYXN5bmMgYXdhaXRcblxuICB0cnkge1xuICAgIGxldCBsb2NhdGlvbjtcblxuICAgIGlmIChsb2NhdGlvbkRhdGEudXJsID09PSB0cnVlKSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRGF0YS51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gbG9jYXRpb25EYXRhLmxvY2F0aW9uO1xuICAgIH1cbiAgICBjb25zdCBkYXlzID0gXCIzXCI7XG5cbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259JmRheXM9JHtkYXlzfSZhcWk9bm8mYWxlcnRzPW5vYDtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuXG4gICAgaWYgKCF3ZWF0aGVyRGF0YS5vaykge1xuICAgICAgY29uc29sZS5sb2coXCJnZXRXZWF0aGVyRGF0YSBkb2Vzbid0IHdvcmshXCIpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkV2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YS5qc29uKCk7XG5cbiAgICByZXR1cm4gcGFyc2VkV2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKFwid29ya3MhISEhXCIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNvcnREYXRhKHdlYXRoZXJEYXRhKSB7XG4gIHRyeSB7XG4gICAgaWYgKCF3ZWF0aGVyRGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJsb2NhdGlvbiBub3QgZm91bmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKFwiVFRUVFRUVFRUVFRcIik7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgY29uc3QgY291bnRyeSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgLy8gY29uc3QgdXJsID0gO1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcblxuICAgIC8vIC0tLS1DdXJyZW50IHdlYXRoZXItLS0tLS1cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG5cbiAgICBjb25zdCBhY3R1YWxDZWxzaXVzID0gY3VycmVudFdlYXRoZXIudGVtcF9jO1xuICAgIGNvbnN0IGFjdHVhbEZhaHJlbmhlaXQgPSBjdXJyZW50V2VhdGhlci50ZW1wX2Y7XG4gICAgY29uc3QgZmVlbHNMaWtlQ2Vsc2l1cyA9IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9jO1xuICAgIGNvbnN0IGZlZWxzTGlrZUZhaHJlbmhlaXQgPSBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfZjtcblxuICAgIGNvbnN0IGN1cnJlbnREZXNjcmlwdGlvbiA9IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgY29uc3QgY3VycmVudFVWID0gY3VycmVudFdlYXRoZXIudXY7XG5cbiAgICAvLyBMb2cgY3VycmVudCBkYXRhXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xuXG4gICAgY29uc29sZS5sb2coXCItLS0tLS1DVVJSRU5UIERBVEEtLS0tLS1cIik7XG4gICAgY29uc29sZS5sb2coYEFjdHVhbCBUZW1wKEMqKTogJHthY3R1YWxDZWxzaXVzfWApO1xuICAgIGNvbnNvbGUubG9nKGBBY3R1YWwgVGVtcChGKik6ICR7YWN0dWFsRmFocmVuaGVpdH1gKTtcbiAgICBjb25zb2xlLmxvZyhgRmVlbHMgTGlrZSAoQyopOiAke2ZlZWxzTGlrZUNlbHNpdXN9YCk7XG4gICAgY29uc29sZS5sb2coYEZlZWxzIExpa2UgKEYqKTogJHtmZWVsc0xpa2VGYWhyZW5oZWl0fWApO1xuICAgIGNvbnNvbGUubG9nKGBEZXNjcmlwdGlvbjogYCArIGN1cnJlbnREZXNjcmlwdGlvbik7XG4gICAgY29uc29sZS5sb2coXCJVVjogXCIgKyBjdXJyZW50VVYpO1xuICAgIC8vIGFkZCBVViBsZXZlbHNcblxuICAgIC8vIC0tLS0tRm9yZWNhc3Qgd2VhdGhlci0tLS0tXG5cbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdDtcbiAgICBjb25zdCBhdmdEYXlUZW1wID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0ZGF5O1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS1GT1JFQ0FTVCBEQVRBIChEQVkpLS0tLS0tLS1cIik7XG5cbiAgICBmb3IgKGNvbnN0IGVhY2ggb2YgYXZnRGF5VGVtcCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZWFjaCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlYWNoLmRheSk7XG4gICAgICAvLyB0ZW1wcyBkaXNwbGF5ZWQgaW4gZiBvciBjIGRlcGVuZGluZyBvbiB3aGljaCBvcHRpb24gaXMgY2hvc2VuXG4gICAgICAvLyBkYXkgYXZlcmFnZSB0ZW1wXG4gICAgICAvLyBkYXkgbWF4IHRlbXBcbiAgICAgIC8vIGRheSBtaW4gdGVtcFxuICAgICAgLy8gZGVzY3JpcHRpb24vaWNvblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS1GT1JFQ0FTVCBEQVRBIChIT1VSKS0tLS0tLS0tXCIpO1xuXG4gICAgZm9yIChjb25zdCBlYWNoIG9mIGF2Z0RheVRlbXApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVhY2guaG91cik7XG4gICAgICBjb25zdCBob3VybHlGb3JlY2FzdEFycmF5ID0gZWFjaC5ob3VyO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tUEVSIEhPVVItLS0tLVwiKTtcblxuICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBob3VybHlGb3JlY2FzdEFycmF5KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZXJhdG9yKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlcmF0b3IudGltZSArIFwiOiBcIiArIFwiIFwiICsgaXRlcmF0b3IuY29uZGl0aW9uLnRleHQpO1xuICAgICAgfVxuICAgICAgLy8gdGVtcHMgZiBhbmQgYyAtIGRpc3BsYXlzIGRlcGVuZGluZyBvbiB3aGljaCBvcHRpb24gaXMgY2hvc2VuXG4gICAgICAvLyBkZXNjcmlwdGlvbiBvciBpY29uXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgY291bnRyeSxcbiAgICAgIGN1cnJlbnRXZWF0aGVyRGF0YToge1xuICAgICAgICBhY3R1YWxDZWxzaXVzLFxuICAgICAgICBhY3R1YWxGYWhyZW5oZWl0LFxuICAgICAgICBmZWVsc0xpa2VDZWxzaXVzLFxuICAgICAgICBmZWVsc0xpa2VGYWhyZW5oZWl0LFxuICAgICAgICBjdXJyZW50RGVzY3JpcHRpb24sXG4gICAgICAgIGN1cnJlbnRVVixcbiAgICAgIH0sXG4gICAgICBhdmdEYXlUZW1wLFxuICAgICAgLy8gZGFpbHlXZWF0aGVyRGF0YToge1xuICAgICAgLy8gICBhdmdEYXlUZW1wQ2Vsc2l1cyxcbiAgICAgIC8vIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcInNvcnQgZGF0YSBmblwiKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuLy8gc29ydERhdGEoKTtcblxuYXN5bmMgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKHNlYXJjaElucHV0VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHNlYXJjaElucHV0VmFsdWU7XG4gICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IGF1dG9jb21wbGV0ZVVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259YDtcblxuICAgIGNvbnN0IGF1dG9Db21wbGV0ZVJlc3VsdHMgPSBhd2FpdCBmZXRjaChhdXRvY29tcGxldGVVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG5cbiAgICBjb25zdCBwYXJzZWRBdXRvY29tcGxldGVSZXN1bHQgPSBhd2FpdCBhdXRvQ29tcGxldGVSZXN1bHRzLmpzb24oKTtcblxuICAgIHJldHVybiBwYXJzZWRBdXRvY29tcGxldGVSZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbi8vIFNlbmQgbG9jYXRpb24gZGF0YSB0byBzZXJ2ZXJcbmFzeW5jIGZ1bmN0aW9uIHJldHJpZXZlSW5mbyhsb2NhdGlvbiwgdXJsKSB7XG4gIC8vIGluY3JlYXNlcyBjb3VwbGluZywgZmluZCBhbiBhbHRlcm5hdGl2ZSBsYXRlclxuXG4gIGNvbnNvbGUubG9nKHVybCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSB7XG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICB1cmw6IHVybCxcbiAgICB9O1xuICAgIGlmICghbG9jYXRpb25EYXRhLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb25EYXRhKTtcblxuICAgIGNvbnN0IHNvcnRlZERhdGEgPSBhd2FpdCBzb3J0RGF0YSh3ZWF0aGVyRGF0YSk7XG5cbiAgICBpZiAoIXdlYXRoZXJEYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmluYWxEYXRhID0ge1xuICAgICAgc2VhcmNoUmVzdWx0OiBzb3J0ZWREYXRhLmxvY2F0aW9uICsgXCIsIFwiICsgc29ydGVkRGF0YS5jb3VudHJ5LFxuICAgICAgZmluYWxEYXRhOiBzb3J0ZWREYXRhLFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhmaW5hbERhdGEpO1xuXG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgYXV0b2NvbXBsZXRlLCByZXRyaWV2ZUluZm8gfTtcbiIsImltcG9ydCB7IHJldHJpZXZlSW5mbyB9IGZyb20gXCIuL2dldERhdGFcIjtcbmltcG9ydCB7XG4gIGluaXRpYWxET01EYXRhLFxuICBkaXNwbGF5TG9hZGluZ1NjcmVlbixcbiAgcmVtb3ZlTG9hZGluZ1NjcmVlbixcbiAgc3RhdHVzRGlzcGxheSxcbn0gZnJvbSBcIi4vZHJvcERvd25DcmVhdGlvblwiO1xuXG4vLyBmdW5jdGlvbiBpbml0aWFsaXNlKCl7XG4vLyBDaGVjayBpZiB0aGVyZSBpcyBsb2NhbCBzdG9yYWdlIGRhdGFcbi8vSWYgeWVzLCB1c2UgbG9jYWxzdG9yYWdlIGRhdGFcbi8vIElmIG5vLCByZXF1ZXN0IEdlb2xvY2F0aW9uIGRhdGFcbi8vSWYgbm8sIHVzZSBkZWZhdWx0LWt1YWxhLWx1bXB1clxuXG4vL0FkZCBsb2FkaW5nIGNzc1xuXG5sZXQgaW5pdGlhbERhdGE7XG5cbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtbG9jYXRpb25cIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCk7XG5cbiAgY29uc3Qga2lja29mZkRhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcblxuICAvLyBpZiBsb2NhbFN0b3JhZ2UgaXMgZW1wdHlcbiAgaWYgKCFraWNrb2ZmRGF0YSkge1xuICAgIGNvbnN0IGt1YWxhTHVtcHVyID0gXCJLdWFsYSBMdW1wdXIsIE1hbGF5c2lhXCI7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSBrdWFsYUx1bXB1cjtcblxuICAgIHNldExvY2FsU3RvcmFnZShrdWFsYUx1bXB1cik7XG5cbiAgICBjb25zb2xlLmxvZyhcIk5PTkVcIik7XG5cbiAgICBpbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzZWFyY2hJbnB1dC52YWx1ZSA9IGtpY2tvZmZEYXRhO1xuXG4gIGluaXRpYWxEYXRhID0gYXdhaXQgcmV0cmlldmVJbmZvKGtpY2tvZmZEYXRhKTtcblxuICBzdGF0dXNEaXNwbGF5KGtpY2tvZmZEYXRhKTtcblxuICBpbml0aWFsRE9NRGF0YShpbml0aWFsRGF0YSk7XG5cbiAgcmVtb3ZlTG9hZGluZ1NjcmVlbigpO1xufVxuXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UobmV3RGF0YSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInJpc3NoaVdlYXRoZXJMb2NhdGlvbkRhdGFcIik7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyaXNzaGlXZWF0aGVyTG9jYXRpb25EYXRhXCIsIG5ld0RhdGEpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJpc3NoaVdlYXRoZXJMb2NhdGlvbkRhdGFcIik7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxEYXRhLCBpbml0aWFsaXNlLCBzZXRMb2NhbFN0b3JhZ2UsIGdldExvY2FsU3RvcmFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgaW5pdGlhbGlzZSB9IGZyb20gXCIuL2luaXRpYWxpc2VyXCI7XG5pbXBvcnQgeyB0b2dnbGVUZW1wcywgZGFpbHlEaXZzRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL2RvbUFjdGlvblwiO1xuaW1wb3J0IHsgc2VhcmNoRXZlbnRzLCByZW1vdmVEcm9wRG93biB9IGZyb20gXCIuL2Ryb3BEb3duQ3JlYXRpb25cIjtcblxuY29uc29sZS5sb2coXCJ3ZWJwYWNrIHdvcmtzIVwiKTtcblxuc2VhcmNoRXZlbnRzKCk7XG4vLyBVbmNvbW1lbnQgbGF0ZXJcbmluaXRpYWxpc2UoKTtcblxuLy8gQWRkIGV2ZW50TGlzdGVuZXJzXG5yZW1vdmVEcm9wRG93bigpO1xudG9nZ2xlVGVtcHMoKTtcbmRhaWx5RGl2c0V2ZW50TGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
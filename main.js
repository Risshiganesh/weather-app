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
    grid-template-columns: 1fr 50px 100px;
    /* grid-template-columns: 1fr 1fr 1fr; */
    position: relative;
    border: 1px solid red;
    align-self: end;
}

#search-location {
    appearance: none;
    border: 2px solid black;
    height: 30px;
    /* width: 100px; */
    min-width: 100px;

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
    width: 200px;
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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: grey;\n    /* position: relative; */\n}\n\nbody * {\n    /* border: 3px solid red; */\n}\n\n.main-container{\n    display: grid;\n    /* gap: 10px; */\n    height: 100%;\n    grid-template-rows: 30px 70px 1fr 35px;\n}\n\n.loading-screen{\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.548);\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    /* display: grid; */\n    display: none;\n    align-items: center;\n    justify-items: center;\n    \n}\n\n.loading-screen * {\n    /* border: 2px solid red; */\n}\n\n.enable-loading-screen{\n    display: grid;\n}\n\n.loading-div{\n    display: grid;\n    gap: 15px;\n}\n\n.loading-gif-container{\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.loading-gif-container>img{\n    width: 50px;\n}\n\n.loading-text {\n\n    text-align: center;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n\n}\n\n\n\n\n\n/* height is 70px */\n#search-form{\n    display: grid;\n    /* align-items: center; */\n    align-items: center;\n    /* position: relative; */\n    border: 3px solid aqua;\n    \n}\n\n.search-container{\n    display: grid;\n    column-gap: 10px;\n    grid-template-columns: 1fr 50px 100px;\n    /* grid-template-columns: 1fr 1fr 1fr; */\n    position: relative;\n    border: 1px solid red;\n    align-self: end;\n}\n\n#search-location {\n    appearance: none;\n    border: 2px solid black;\n    height: 30px;\n    /* width: 100px; */\n    min-width: 100px;\n\n}\n\n.drop-down-container{\n    border: 1px solid greenyellow;\n    height: 0px;\n    position: relative;\n    width: 100%;\n    align-self: start;\n\n}\n\n.search-drop-down{\n    position: absolute;\n    /* border: 3px solid navy; */\n    /* height: 300px; */\n    width: 100%;\n    z-index: 1;\n    background-color: blueviolet;\n}\n\n.drop-down-item{\n    padding: 5px;\n}\n\n.drop-down-item:hover{\n\n    background-color: yellow;\n}\n\n.status-display {\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.logo-container{\n    /* text-align: center; */\n    border: 2px solid gold;\n    display: grid;\n    justify-items: center;\n    align-items: end;\n\n}\n\n.logo-div{\n    border: 2px solid red;\n    width: 200px;\n    text-align: center;\n}\n\n.display-container{\n    /* align-content: space-between; */\n    display: grid;\n\n    position: relative;\n    gap: 15px;\n    justify-items: center;\n\n}\n\n.current-weather-container{\n    height: 260px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.current-weather-display{\n    border-radius: 100%;\n    height: 250px;\n    width: 250px;\n    border: 3px solid purple;\n    display: grid;\n    align-items: center;\n    text-align: center;\n}\n\n.temp-display{\n    /* border: 2px solid fuchsia; */\n    font-size: 40px;\n    align-self: flex-end;\n}\n\n.weather-desc{\n    font-size: 20px;\n    /* align-self: start; */\n}\n\n.uv-index{\n    align-self: start;\n}\n\n.toggle-container{\n    display: grid;\n}\n\n.three-day-average{\n    display: grid;\n\n    justify-items: center;\n    align-items: center;\n    overflow: auto;\n    width: 90%;\n\n}\n\n\n.three-day-average-container{\n    display: grid;\n    /* height: 100%; */\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n    height: 200px;\n    align-items: center;\n    /* overflow: auto; */\n}\n\n\n.daily {\n\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    border: 2px solid blue;\n    height: 100%;\n    height: 170px;\n    width: 170px;\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n\n    border-radius: 15px;\n\n}\n\n.selected-daily{\n    background-color: lightgreen;\n}\n.daily *{\n\n    /* border: 2px solid navy; */\n}\n\n.hourly-average{\n    height: 200px;\n    overflow: auto;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-items: center;\n\n    border: 3px solid violet;\n    width: 90%;\n\n}\n\n.hourly{\n\n    width: 150px;\n    height: 150px;\n    border: 3px solid pink;\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n    font-size: 14px;\n    border-radius: 15px;\n}\n\n.footer-container{\n    border: 3px solid greenyellow;\n    display: grid;\n    justify-items: center;\n    display: grid;\n    align-items: end;\n}\n\n.footer{\n    border: 2px solid gold;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _searchAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchAction */ "./src/searchAction.js");


let hourlyArray;

const tempDisplay = document.querySelector(".temp-display");
const currentIcon = document.querySelector(".icon-current");
const weatherDesc = document.querySelector(".weather-desc");
const uvIndex = document.querySelector(".uv-index");

const tempToggle = document.querySelector("#temp-toggle");

const dailyDivs = document.querySelectorAll(".daily");

function toggleTemps() {
  let chosenTemp = tempToggle.textContent;

  tempToggle.addEventListener("click", async function () {
    try {
      if (tempToggle.textContent === "Celsius") {
        tempToggle.textContent = "Fahrenheit";
        chosenTemp = "Fahrenheit";

        // functionise this?
        updateDOMWithData(_searchAction__WEBPACK_IMPORTED_MODULE_0__.weatherResult);
        if (!hourlyArray) {
          displayHourlyDOM(_searchAction__WEBPACK_IMPORTED_MODULE_0__.todayHourlyData);
          return;
        }
        displayHourlyDOM(hourlyArray);
        console.log("HELI");
        return;
      }

      if (tempToggle.textContent === "Fahrenheit") {
        tempToggle.textContent = "Celsius";
        chosenTemp = "Celsius";
        updateDOMWithData(_searchAction__WEBPACK_IMPORTED_MODULE_0__.weatherResult);

        if (!hourlyArray) {
          displayHourlyDOM(_searchAction__WEBPACK_IMPORTED_MODULE_0__.todayHourlyData);
          return;
        }
        displayHourlyDOM(hourlyArray);

        console.log("COPTER");
        return;
      }
      console.log("TESTTTTT");

      return;
    } catch (error) {
      console.error("Error in toggleTemps: " + error);
    }
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

    tempDisplay.textContent = currentWeatherData.actualCelsius + "°C";

    const iconsrc = currentWeatherData.currentIcon;

    appendIcon(currentIcon, iconsrc);
    weatherDesc.textContent = currentWeatherData.currentDescription;
    uvIndex.textContent = "UV Index: " + currentWeatherData.currentUV;

    displayDailyDOM(avgDayTemp);

    return;
  }

  if (tempToggle.textContent === "Fahrenheit") {
    console.log("YEP");
    // console.log(weatherData);

    tempDisplay.textContent = currentWeatherData.actualFahrenheit + "°F";
    weatherDesc.textContent = currentWeatherData.currentDescription;
    uvIndex.textContent = "UV Index: " + currentWeatherData.currentUV;

    displayDailyDOM(avgDayTemp);

    return;
  }
}
// INCOMPLETE
function appendIcon(iconDiv, iconsrc) {
  if (iconDiv.hasChildNodes) {
    iconDiv.querySelectorAll("*").forEach(function (child) {
      child.remove();
    });
  }
  const icon = new Image();

  icon.src = iconsrc;

  iconDiv.append(icon);

  // COMPLETE THIS
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
      avgTempDiv.textContent = dailyArray[index].day.avgtemp_c + "°C";
    }

    if (tempToggle.textContent === "Fahrenheit") {
      avgTempDiv.textContent = dailyArray[index].day.avgtemp_f + "°F";
    }

    // if (iconDiv.hasChildNodes) {
    //   iconDiv.querySelectorAll("*").forEach(function (child) {
    //     child.remove();
    //   });
    // }

    // const icon = new Image();

    const iconsrc = dailyArray[index].day.condition.icon;

    //   iconDiv.append(icon);

    appendIcon(iconDiv, iconsrc);

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
      hourlyArray = _searchAction__WEBPACK_IMPORTED_MODULE_0__.weatherResult.finalData.avgDayTemp[index].hour;

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

    timeDiv.textContent = hourlyArray[index].time.slice(-5);

    // if (iconDiv.hasChildNodes) {
    //   iconDiv.querySelectorAll("*").forEach(function (child) {
    //     child.remove();
    //   });
    // }

    // const icon = new Image();

    //   icon.src = hourlyArray[index].condition.icon;

    const iconsrc = hourlyArray[index].condition.icon;

    //   iconDiv.append(icon);

    appendIcon(iconDiv, iconsrc);

    conditionDiv.textContent = hourlyArray[index].condition.text;

    if (tempToggle.textContent === "Celsius") {
      avgTempDiv.textContent = hourlyArray[index].temp_c + "°C";
    }

    if (tempToggle.textContent === "Fahrenheit") {
      avgTempDiv.textContent = hourlyArray[index].temp_f + "°F";
    }

    uvDiv.textContent = "UV Index: " + hourlyArray[index].uv;
  }
}



/***/ }),

/***/ "./src/geolocation.js":
/*!****************************!*\
  !*** ./src/geolocation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGeolocationData: () => (/* binding */ getGeolocationData)
/* harmony export */ });
async function getGeolocationData() {
  try {
    if ("geolocation" in navigator) {
      const options = {
        enableHighAccuracy: true,
        maximumAge: 0,
      };

      async function useNavigator() {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      }

      const coordinates = await useNavigator();

      const latitude = coordinates.coords.latitude.toFixed(4);
      const longitude = coordinates.coords.longitude.toFixed(4);

      const latitudeString = latitude.toString();
      const longitudeString = longitude.toString();

      const latitudeLongitudeQuery = latitudeString + "," + longitudeString;

      return latitudeLongitudeQuery;
    } else {
      console.log("Geolocation not supported");
    }
  } catch (error) {
    console.error("Error in getGeolocationData: " + error);
  }
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

// let previousData;

async function getWeatherData(locationData) {
  // convert to async await

  try {
    // let location;

    // if (locationData.url === true) {
    //   location = locationData.url;
    // } else {
    //   location = locationData.location;
    // }
    const days = "3";

    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${locationData}&days=${days}&aqi=no&alerts=no`;

    const weatherData = await fetch(URL, { mode: "cors" });

    if (!weatherData.ok) {
      console.log("getWeatherData doesn't work!");

      // console.log(previousData);

      return;
    }

    const parsedWeatherData = await weatherData.json();

    // previousData = parsedWeatherData;

    return parsedWeatherData;
  } catch (error) {
    console.error("getWeatherData: " + error);
    // console.log("works!!!!");
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
    const currentIcon = currentWeather.condition.icon;

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

    return {
      location,
      country,
      currentWeatherData: {
        actualCelsius,
        actualFahrenheit,
        feelsLikeCelsius,
        feelsLikeFahrenheit,
        currentIcon,
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
    console.error(error);
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
    console.error(error);
  }
}

// Send location data to server
async function retrieveInfo(location) {
  // increases coupling, find an alternative later

  // console.log(url);

  try {
    // const locationData = {
    //   location: location,
    //   url: url,
    // };
    if (!location) {
      return;
    }
    // console.log(location);

    console.log("Location used: " + location);

    const weatherData = await getWeatherData(location);

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
    console.error(error);
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
/* harmony import */ var _searchAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchAction */ "./src/searchAction.js");



// function initialise(){
// Check if there is local storage data
//If yes, use localstorage data
// If no, request Geolocation data
//If no, use default-kuala-lumpur

//Add loading css

let initialData;

const searchInput = document.querySelector("#search-location");

async function initialise() {
  try {
    (0,_searchAction__WEBPACK_IMPORTED_MODULE_1__.displayLoadingScreen)();

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

    (0,_searchAction__WEBPACK_IMPORTED_MODULE_1__.statusDisplay)(kickoffData);

    (0,_searchAction__WEBPACK_IMPORTED_MODULE_1__.initialDOMData)(initialData);

    (0,_searchAction__WEBPACK_IMPORTED_MODULE_1__.removeLoadingScreen)();
  } catch (error) {
    console.error("Error in initialise: " + error);
  }
}

function setLocalStorage(newData) {
  localStorage.removeItem("risshWeatherLocationData");

  localStorage.setItem("risshWeatherLocationData", newData);
}

function getLocalStorage() {
  return localStorage.getItem("risshWeatherLocationData");
}




/***/ }),

/***/ "./src/searchAction.js":
/*!*****************************!*\
  !*** ./src/searchAction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDropDown: () => (/* binding */ createDropDown),
/* harmony export */   displayLoadingScreen: () => (/* binding */ displayLoadingScreen),
/* harmony export */   geolocationBtnEvent: () => (/* binding */ geolocationBtnEvent),
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
/* harmony import */ var _geolocation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation.js */ "./src/geolocation.js");
/* harmony import */ var _assets_loading_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/loading.gif */ "./src/assets/loading.gif");










const searchInput = document.querySelector("#search-location");

const searchButton = document.querySelector("#search-button");

const searchDropDown = document.querySelector(".search-drop-down");

const mainContainer = document.querySelector(".main-container");

const dailyDivs = document.querySelectorAll(".daily");

let weatherResult;

let searchSuccess;

let todayHourlyData;

// Create one module for DOM Creation and another for DOM action

// Add Event Listener for search events
function searchEvents() {
  // searchInput.addEventListener("keyup", autocomplete);

  searchInput.addEventListener("keyup", async function () {
    try {
      if (!searchInput.value) {
        return;
      }
      const searchInputValue = searchInput.value;
      const autocompleteArray = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.autocomplete)(searchInputValue);
      createDropDown(autocompleteArray);
    } catch (error) {
      console.error("Error in searchEvents(searchInput): " + error);
    }
  });

  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    try {
      if (!searchInput.value) {
        return;
      }

      const searchInputValue = searchInput.value;

      populateDOM(searchInputValue);
    } catch (error) {
      console.error("Error in searchEvents(searchButton): " + error);
    }
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
    // dropDownItem.url = each.url;
    // console.log(each.url);
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
      try {
        searchInput.value = dropDownItem.textContent;

        populateDOM(dropDownItem.textContent);
      } catch (error) {
        console.error("Error in dropDownClickEvent: " + error);
      }
    });
  });
}

function initialDOMData(weatherData) {
  // so that it can be used by tempToggle
  weatherResult = weatherData;

  (0,_domAction_js__WEBPACK_IMPORTED_MODULE_2__.updateDOMWithData)(weatherData);
  console.log("weather result");
  console.log(weatherData);
  console.log("--------------END-----------------");

  todayHourlyData = weatherData.finalData.avgDayTemp[0].hour;

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
  const loadingGIFContainer = document.querySelector(".loading-gif-container");

  if (loadingGIFContainer.querySelector("img")) {
    console.log("LOADING GIF PRESENT");
    return;
  }

  const loadingGIF = new Image();

  loadingGIF.src = _assets_loading_gif__WEBPACK_IMPORTED_MODULE_4__;

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

function geolocationBtnEvent() {
  const geolocationButton = document.querySelector("#geolocation-button");
  const searchDropDown = document.querySelector(".search-drop-down");
  geolocationButton.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
      const geolocationData = await (0,_geolocation_js__WEBPACK_IMPORTED_MODULE_3__.getGeolocationData)();
      console.log(geolocationData);

      //
      //

      // const searchInputValue = searchInput.value;

      populateDOM(geolocationData);
    } catch (error) {
      console.error(
        "Error in geolocationBtnListener(geolocationButton): " + error
      );
    }
  });
}

async function populateDOM(inputData) {
  displayLoadingScreen();

  weatherResult = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.retrieveInfo)(inputData);

  // if search fails - use previously successful data
  if (!weatherResult) {
    console.log("NOT FOUND");

    statusDisplay(false);

    // display location not found on DOM

    console.log(weatherResult);
    // uses previous data
    console.log("USING SEARCH SUCCESS");
    // if no data in searchSuccess use initialData
    if (!searchSuccess) {
      searchSuccess = _initialiser_js__WEBPACK_IMPORTED_MODULE_1__.initialData;
    }
    console.log(searchSuccess);
    initialDOMData(searchSuccess);
    removeLoadingScreen();
    return;
  }

  // if search is a success

  if (weatherResult == true) {
  }

  console.log("search success works");
  searchSuccess = weatherResult;
  console.log(weatherResult);

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
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocation */ "./src/geolocation.js");
/* harmony import */ var _domAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domAction */ "./src/domAction.js");
/* harmony import */ var _searchAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchAction */ "./src/searchAction.js");






console.log("webpack works!");

(0,_searchAction__WEBPACK_IMPORTED_MODULE_4__.searchEvents)();
// Uncomment later
(0,_initialiser__WEBPACK_IMPORTED_MODULE_1__.initialise)();
// TEST

function locationButton() {
  const coordinates = (0,_geolocation__WEBPACK_IMPORTED_MODULE_2__.getGeolocationData)().then(function (data) {
    console.log("coordinates");
    console.log(data);

    return data;
  });
}

// Add eventListeners
(0,_searchAction__WEBPACK_IMPORTED_MODULE_4__.geolocationBtnEvent)();
(0,_searchAction__WEBPACK_IMPORTED_MODULE_4__.removeDropDown)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_3__.toggleTemps)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_3__.dailyDivsEventListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZTs7QUFFakI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQWFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlRRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0I7QUFDUTtBQUNlO0FBSzFDOztBQUV4Qjs7QUFFQSwyREFBWTtBQUNaO0FBQ0Esd0RBQVU7QUFDVjs7QUFFQTtBQUNBLHNCQUFzQixnRUFBa0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLGtFQUFtQjtBQUNuQiw2REFBYztBQUNkLHVEQUFXO0FBQ1gsa0VBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tQWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dlb2xvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5pdGlhbGlzZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VhcmNoQWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBcbn1cblxuaHRtbCxcbmJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xufVxuXG5ib2R5ICoge1xuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cbn1cblxuLm1haW4tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ2FwOiAxMHB4OyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggNzBweCAxZnIgMzVweDtcbn1cblxuLmxvYWRpbmctc2NyZWVue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG5cbi5sb2FkaW5nLXNjcmVlbiAqIHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXG59XG5cbi5lbmFibGUtbG9hZGluZy1zY3JlZW57XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvYWRpbmctZGl2e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4ubG9hZGluZy1naWYtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLWdpZi1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ubG9hZGluZy10ZXh0IHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cblxuXG5cblxuLyogaGVpZ2h0IGlzIDcwcHggKi9cbiNzZWFyY2gtZm9ybXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgYm9yZGVyOiAzcHggc29saWQgYXF1YTtcbiAgICBcbn1cblxuLnNlYXJjaC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwcHggMTAwcHg7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuI3NlYXJjaC1sb2NhdGlvbiB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLyogd2lkdGg6IDEwMHB4OyAqL1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG5cbn1cblxuLmRyb3AtZG93bi1jb250YWluZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuXG59XG5cbi5zZWFyY2gtZHJvcC1kb3due1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBuYXZ5OyAqL1xuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuXG4uZHJvcC1kb3duLWl0ZW17XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uZHJvcC1kb3duLWl0ZW06aG92ZXJ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5zdGF0dXMtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28tY29udGFpbmVye1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG5cbn1cblxuLmxvZ28tZGl2e1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzcGxheS1jb250YWluZXJ7XG4gICAgLyogYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGdhcDogMTVweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG59XG5cbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheXtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHB1cnBsZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVtcC1kaXNwbGF5e1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ud2VhdGhlci1kZXNje1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiBhbGlnbi1zZWxmOiBzdGFydDsgKi9cbn1cblxuLnV2LWluZGV4e1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xufVxuXG4udG9nZ2xlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4udGhyZWUtZGF5LWF2ZXJhZ2V7XG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiA5MCU7XG5cbn1cblxuXG4udGhyZWUtZGF5LWF2ZXJhZ2UtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG59XG5cblxuLmRhaWx5IHtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG59XG5cbi5zZWxlY3RlZC1kYWlseXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuLmRhaWx5ICp7XG5cbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBuYXZ5OyAqL1xufVxuXG4uaG91cmx5LWF2ZXJhZ2V7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3JkZXI6IDNweCBzb2xpZCB2aW9sZXQ7XG4gICAgd2lkdGg6IDkwJTtcblxufVxuXG4uaG91cmx5e1xuXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbnllbGxvdztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbi5mb290ZXJ7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7O0FBRTFCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7Ozs7OztBQU1BLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhOztJQUViLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7O0FBRWQ7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhOztJQUViLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjs7SUFFbkIsd0JBQXdCO0lBQ3hCLFVBQVU7O0FBRWQ7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIFxcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuYm9keSAqIHtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggNzBweCAxZnIgMzVweDtcXG59XFxuXFxuLmxvYWRpbmctc2NyZWVue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW4gKiB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmVuYWJsZS1sb2FkaW5nLXNjcmVlbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmxvYWRpbmctZGl2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5sb2FkaW5nLWdpZi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvYWRpbmctZ2lmLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4ubG9hZGluZy10ZXh0IHtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBoZWlnaHQgaXMgNzBweCAqL1xcbiNzZWFyY2gtZm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBhcXVhO1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwcHggMTAwcHg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbiNzZWFyY2gtbG9jYXRpb24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiB3aWR0aDogMTAwcHg7ICovXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuXFxufVxcblxcbi5kcm9wLWRvd24tY29udGFpbmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbn1cXG5cXG4uc2VhcmNoLWRyb3AtZG93bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBuYXZ5OyAqL1xcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLmRyb3AtZG93bi1pdGVte1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kcm9wLWRvd24taXRlbTpob3ZlcntcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uc3RhdHVzLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lcntcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFxufVxcblxcbi5sb2dvLWRpdntcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVye1xcbiAgICAvKiBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWRpc3BsYXl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcHVycGxlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wLWRpc3BsYXl7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi53ZWF0aGVyLWRlc2N7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgLyogYWxpZ24tc2VsZjogc3RhcnQ7ICovXFxufVxcblxcbi51di1pbmRleHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi50b2dnbGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGhyZWUtZGF5LWF2ZXJhZ2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxufVxcblxcblxcbi50aHJlZS1kYXktYXZlcmFnZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbn1cXG5cXG5cXG4uZGFpbHkge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxufVxcblxcbi5zZWxlY3RlZC1kYWlseXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuLmRhaWx5ICp7XFxuXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIG5hdnk7ICovXFxufVxcblxcbi5ob3VybHktYXZlcmFnZXtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmlvbGV0O1xcbiAgICB3aWR0aDogOTAlO1xcblxcbn1cXG5cXG4uaG91cmx5e1xcblxcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVye1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbnllbGxvdztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgd2VhdGhlclJlc3VsdCwgdG9kYXlIb3VybHlEYXRhIH0gZnJvbSBcIi4vc2VhcmNoQWN0aW9uXCI7XG5cbmxldCBob3VybHlBcnJheTtcblxuY29uc3QgdGVtcERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtZGlzcGxheVwiKTtcbmNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLWN1cnJlbnRcIik7XG5jb25zdCB3ZWF0aGVyRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kZXNjXCIpO1xuY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXYtaW5kZXhcIik7XG5cbmNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAtdG9nZ2xlXCIpO1xuXG5jb25zdCBkYWlseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5XCIpO1xuXG5mdW5jdGlvbiB0b2dnbGVUZW1wcygpIHtcbiAgbGV0IGNob3NlblRlbXAgPSB0ZW1wVG9nZ2xlLnRleHRDb250ZW50O1xuXG4gIHRlbXBUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICAgIHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPSBcIkZhaHJlbmhlaXRcIjtcbiAgICAgICAgY2hvc2VuVGVtcCA9IFwiRmFocmVuaGVpdFwiO1xuXG4gICAgICAgIC8vIGZ1bmN0aW9uaXNlIHRoaXM/XG4gICAgICAgIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJSZXN1bHQpO1xuICAgICAgICBpZiAoIWhvdXJseUFycmF5KSB7XG4gICAgICAgICAgZGlzcGxheUhvdXJseURPTSh0b2RheUhvdXJseURhdGEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIRUxJXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkZhaHJlbmhlaXRcIikge1xuICAgICAgICB0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID0gXCJDZWxzaXVzXCI7XG4gICAgICAgIGNob3NlblRlbXAgPSBcIkNlbHNpdXNcIjtcbiAgICAgICAgdXBkYXRlRE9NV2l0aERhdGEod2VhdGhlclJlc3VsdCk7XG5cbiAgICAgICAgaWYgKCFob3VybHlBcnJheSkge1xuICAgICAgICAgIGRpc3BsYXlIb3VybHlET00odG9kYXlIb3VybHlEYXRhKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUhvdXJseURPTShob3VybHlBcnJheSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJDT1BURVJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFRUVFRcIik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIHRvZ2dsZVRlbXBzOiBcIiArIGVycm9yKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyRGF0YSkge1xuICBpZiAoIXdlYXRoZXJEYXRhKSB7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhLmZpbmFsRGF0YS5jdXJyZW50V2VhdGhlckRhdGE7XG4gIGNvbnN0IGF2Z0RheVRlbXAgPSB3ZWF0aGVyRGF0YS5maW5hbERhdGEuYXZnRGF5VGVtcDtcblxuICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJDZWxzaXVzXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhTSFNIU0hIU0hTSFNcIik7XG4gICAgLy8gY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgY29uc29sZS5sb2coY3VycmVudFdlYXRoZXJEYXRhKTtcbiAgICBjb25zb2xlLmxvZyhhdmdEYXlUZW1wKTtcblxuICAgIHRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmFjdHVhbENlbHNpdXMgKyBcIsKwQ1wiO1xuXG4gICAgY29uc3QgaWNvbnNyYyA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50SWNvbjtcblxuICAgIGFwcGVuZEljb24oY3VycmVudEljb24sIGljb25zcmMpO1xuICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnREZXNjcmlwdGlvbjtcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gXCJVViBJbmRleDogXCIgKyBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudFVWO1xuXG4gICAgZGlzcGxheURhaWx5RE9NKGF2Z0RheVRlbXApO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgY29uc29sZS5sb2coXCJZRVBcIik7XG4gICAgLy8gY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgdGVtcERpc3BsYXkudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEuYWN0dWFsRmFocmVuaGVpdCArIFwiwrBGXCI7XG4gICAgd2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudERlc2NyaXB0aW9uO1xuICAgIHV2SW5kZXgudGV4dENvbnRlbnQgPSBcIlVWIEluZGV4OiBcIiArIGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50VVY7XG5cbiAgICBkaXNwbGF5RGFpbHlET00oYXZnRGF5VGVtcCk7XG5cbiAgICByZXR1cm47XG4gIH1cbn1cbi8vIElOQ09NUExFVEVcbmZ1bmN0aW9uIGFwcGVuZEljb24oaWNvbkRpdiwgaWNvbnNyYykge1xuICBpZiAoaWNvbkRpdi5oYXNDaGlsZE5vZGVzKSB7XG4gICAgaWNvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIGljb24uc3JjID0gaWNvbnNyYztcblxuICBpY29uRGl2LmFwcGVuZChpY29uKTtcblxuICAvLyBDT01QTEVURSBUSElTXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYWlseURPTShkYWlseUFycmF5KSB7XG4gIGNvbnNvbGUubG9nKFwiV09SS1NTU1NcIik7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhaWx5RGl2cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkYXRlRGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtZGFpbHlcIik7XG4gICAgY29uc3QgYXZnVGVtcERpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5hdmctdGVtcC1kYWlseVwiKTtcbiAgICBjb25zdCBpY29uRGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmljb24tZGFpbHlcIik7XG4gICAgY29uc3QgY29uZGl0aW9uRGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvbi1kYWlseVwiKTtcbiAgICBjb25zdCB1dkRpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi51di1kYWlseVwiKTtcblxuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSBkYWlseUFycmF5W2luZGV4XS5kYXRlO1xuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICBhdmdUZW1wRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF5LmF2Z3RlbXBfYyArIFwiwrBDXCI7XG4gICAgfVxuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgICBhdmdUZW1wRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF5LmF2Z3RlbXBfZiArIFwiwrBGXCI7XG4gICAgfVxuXG4gICAgLy8gaWYgKGljb25EaXYuaGFzQ2hpbGROb2Rlcykge1xuICAgIC8vICAgaWNvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIC8vICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnN0IGljb25zcmMgPSBkYWlseUFycmF5W2luZGV4XS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICAvLyAgIGljb25EaXYuYXBwZW5kKGljb24pO1xuXG4gICAgYXBwZW5kSWNvbihpY29uRGl2LCBpY29uc3JjKTtcblxuICAgIGNvbmRpdGlvbkRpdi50ZXh0Q29udGVudCA9IGRhaWx5QXJyYXlbaW5kZXhdLmRheS5jb25kaXRpb24udGV4dDtcblxuICAgIHV2RGl2LnRleHRDb250ZW50ID0gXCJBdmcuIFVWIEluZGV4OiBcIiArIGRhaWx5QXJyYXlbaW5kZXhdLmRheS51djtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYWlseURpdnNFdmVudExpc3RlbmVyKCkge1xuICBkYWlseURpdnM7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhaWx5RGl2cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvLyBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuICAgIGRhaWx5RGl2c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRhaWx5RGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1kYWlseVwiKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJCQU1CQUxBTU1NTVwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJSZXN1bHQuZmluYWxEYXRhLmF2Z0RheVRlbXBbaW5kZXhdLmhvdXIpO1xuICAgICAgaG91cmx5QXJyYXkgPSB3ZWF0aGVyUmVzdWx0LmZpbmFsRGF0YS5hdmdEYXlUZW1wW2luZGV4XS5ob3VyO1xuXG4gICAgICAvLyBhZGQgYW5kIHJlbW92ZSBiYWNrZ3JvdW5kIGNvbG91ciBvZiBkaXZzIGhlcmVcbiAgICAgIGRhaWx5RGl2c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWRhaWx5XCIpO1xuXG4gICAgICBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KSB7XG4gIGlmICghaG91cmx5QXJyYXkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5XCIpO1xuXG4gIC8vICAgY29uc29sZS5sb2coaG91cmx5QXJyYXkpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBob3VybHlEaXZzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIC8vICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcbiAgICAvLyAgIGNvbnN0IGRhdGVEaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtZGFpbHlcIik7XG4gICAgY29uc3QgdGltZURpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1ob3VybHlcIik7XG5cbiAgICBjb25zdCBpY29uRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5pY29uLWhvdXJseVwiKTtcbiAgICBjb25zdCBjb25kaXRpb25EaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvbi1ob3VybHlcIik7XG4gICAgY29uc3QgYXZnVGVtcERpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuYXZnLXRlbXAtaG91cmx5XCIpO1xuICAgIGNvbnN0IHV2RGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi51di1ob3VybHlcIik7XG5cbiAgICB0aW1lRGl2LnRleHRDb250ZW50ID0gaG91cmx5QXJyYXlbaW5kZXhdLnRpbWUuc2xpY2UoLTUpO1xuXG4gICAgLy8gaWYgKGljb25EaXYuaGFzQ2hpbGROb2Rlcykge1xuICAgIC8vICAgaWNvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIC8vICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIC8vICAgaWNvbi5zcmMgPSBob3VybHlBcnJheVtpbmRleF0uY29uZGl0aW9uLmljb247XG5cbiAgICBjb25zdCBpY29uc3JjID0gaG91cmx5QXJyYXlbaW5kZXhdLmNvbmRpdGlvbi5pY29uO1xuXG4gICAgLy8gICBpY29uRGl2LmFwcGVuZChpY29uKTtcblxuICAgIGFwcGVuZEljb24oaWNvbkRpdiwgaWNvbnNyYyk7XG5cbiAgICBjb25kaXRpb25EaXYudGV4dENvbnRlbnQgPSBob3VybHlBcnJheVtpbmRleF0uY29uZGl0aW9uLnRleHQ7XG5cbiAgICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJDZWxzaXVzXCIpIHtcbiAgICAgIGF2Z1RlbXBEaXYudGV4dENvbnRlbnQgPSBob3VybHlBcnJheVtpbmRleF0udGVtcF9jICsgXCLCsENcIjtcbiAgICB9XG5cbiAgICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJGYWhyZW5oZWl0XCIpIHtcbiAgICAgIGF2Z1RlbXBEaXYudGV4dENvbnRlbnQgPSBob3VybHlBcnJheVtpbmRleF0udGVtcF9mICsgXCLCsEZcIjtcbiAgICB9XG5cbiAgICB1dkRpdi50ZXh0Q29udGVudCA9IFwiVVYgSW5kZXg6IFwiICsgaG91cmx5QXJyYXlbaW5kZXhdLnV2O1xuICB9XG59XG5leHBvcnQge1xuICBob3VybHlBcnJheSxcbiAgdG9nZ2xlVGVtcHMsXG4gIHVwZGF0ZURPTVdpdGhEYXRhLFxuICBkYWlseURpdnNFdmVudExpc3RlbmVyLFxuICBkaXNwbGF5SG91cmx5RE9NLFxufTtcbiIsImFzeW5jIGZ1bmN0aW9uIGdldEdlb2xvY2F0aW9uRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgICBtYXhpbXVtQWdlOiAwLFxuICAgICAgfTtcblxuICAgICAgYXN5bmMgZnVuY3Rpb24gdXNlTmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgdXNlTmF2aWdhdG9yKCk7XG5cbiAgICAgIGNvbnN0IGxhdGl0dWRlID0gY29vcmRpbmF0ZXMuY29vcmRzLmxhdGl0dWRlLnRvRml4ZWQoNCk7XG4gICAgICBjb25zdCBsb25naXR1ZGUgPSBjb29yZGluYXRlcy5jb29yZHMubG9uZ2l0dWRlLnRvRml4ZWQoNCk7XG5cbiAgICAgIGNvbnN0IGxhdGl0dWRlU3RyaW5nID0gbGF0aXR1ZGUudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IGxvbmdpdHVkZVN0cmluZyA9IGxvbmdpdHVkZS50b1N0cmluZygpO1xuXG4gICAgICBjb25zdCBsYXRpdHVkZUxvbmdpdHVkZVF1ZXJ5ID0gbGF0aXR1ZGVTdHJpbmcgKyBcIixcIiArIGxvbmdpdHVkZVN0cmluZztcblxuICAgICAgcmV0dXJuIGxhdGl0dWRlTG9uZ2l0dWRlUXVlcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiR2VvbG9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGdldEdlb2xvY2F0aW9uRGF0YTogXCIgKyBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0R2VvbG9jYXRpb25EYXRhIH07XG4iLCJjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5cbi8vcmVtb3ZlIGFsbCBET00gZWxlbWVudHMgZnJvbSBoZXJlLCBvbmx5IGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBwYXJhbWV0ZXJzIGFyZSBhbGxvd2VkXG5cbmNvbnN0IEFQSV9LRVkgPSBcIjViMzIyNGFmMGZkZTRiYjk5MjgyMDUyMjgyMzIyMTBcIjtcblxuLy8gbGV0IHByZXZpb3VzRGF0YTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb25EYXRhKSB7XG4gIC8vIGNvbnZlcnQgdG8gYXN5bmMgYXdhaXRcblxuICB0cnkge1xuICAgIC8vIGxldCBsb2NhdGlvbjtcblxuICAgIC8vIGlmIChsb2NhdGlvbkRhdGEudXJsID09PSB0cnVlKSB7XG4gICAgLy8gICBsb2NhdGlvbiA9IGxvY2F0aW9uRGF0YS51cmw7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGxvY2F0aW9uID0gbG9jYXRpb25EYXRhLmxvY2F0aW9uO1xuICAgIC8vIH1cbiAgICBjb25zdCBkYXlzID0gXCIzXCI7XG5cbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb25EYXRhfSZkYXlzPSR7ZGF5c30mYXFpPW5vJmFsZXJ0cz1ub2A7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKFVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcblxuICAgIGlmICghd2VhdGhlckRhdGEub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2V0V2VhdGhlckRhdGEgZG9lc24ndCB3b3JrIVwiKTtcblxuICAgICAgLy8gY29uc29sZS5sb2cocHJldmlvdXNEYXRhKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZFdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckRhdGEuanNvbigpO1xuXG4gICAgLy8gcHJldmlvdXNEYXRhID0gcGFyc2VkV2VhdGhlckRhdGE7XG5cbiAgICByZXR1cm4gcGFyc2VkV2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcImdldFdlYXRoZXJEYXRhOiBcIiArIGVycm9yKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIndvcmtzISEhIVwiKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzb3J0RGF0YSh3ZWF0aGVyRGF0YSkge1xuICB0cnkge1xuICAgIGlmICghd2VhdGhlckRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9jYXRpb24gbm90IGZvdW5kXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIlRUVFRUVFRUVFRUXCIpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgIGNvbnN0IGNvdW50cnkgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgIC8vIGNvbnN0IHVybCA9IDtcbiAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG5cbiAgICAvLyAtLS0tQ3VycmVudCB3ZWF0aGVyLS0tLS0tXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSB3ZWF0aGVyRGF0YS5jdXJyZW50O1xuXG4gICAgY29uc3QgYWN0dWFsQ2Vsc2l1cyA9IGN1cnJlbnRXZWF0aGVyLnRlbXBfYztcbiAgICBjb25zdCBhY3R1YWxGYWhyZW5oZWl0ID0gY3VycmVudFdlYXRoZXIudGVtcF9mO1xuICAgIGNvbnN0IGZlZWxzTGlrZUNlbHNpdXMgPSBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfYztcbiAgICBjb25zdCBmZWVsc0xpa2VGYWhyZW5oZWl0ID0gY3VycmVudFdlYXRoZXIuZmVlbHNsaWtlX2Y7XG4gICAgY29uc3QgY3VycmVudEljb24gPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24uaWNvbjtcblxuICAgIGNvbnN0IGN1cnJlbnREZXNjcmlwdGlvbiA9IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgY29uc3QgY3VycmVudFVWID0gY3VycmVudFdlYXRoZXIudXY7XG5cbiAgICAvLyBMb2cgY3VycmVudCBkYXRhXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFdlYXRoZXIpO1xuXG4gICAgY29uc29sZS5sb2coXCItLS0tLS1DVVJSRU5UIERBVEEtLS0tLS1cIik7XG4gICAgY29uc29sZS5sb2coYEFjdHVhbCBUZW1wKEMqKTogJHthY3R1YWxDZWxzaXVzfWApO1xuICAgIGNvbnNvbGUubG9nKGBBY3R1YWwgVGVtcChGKik6ICR7YWN0dWFsRmFocmVuaGVpdH1gKTtcbiAgICBjb25zb2xlLmxvZyhgRmVlbHMgTGlrZSAoQyopOiAke2ZlZWxzTGlrZUNlbHNpdXN9YCk7XG4gICAgY29uc29sZS5sb2coYEZlZWxzIExpa2UgKEYqKTogJHtmZWVsc0xpa2VGYWhyZW5oZWl0fWApO1xuICAgIGNvbnNvbGUubG9nKGBEZXNjcmlwdGlvbjogYCArIGN1cnJlbnREZXNjcmlwdGlvbik7XG4gICAgY29uc29sZS5sb2coXCJVVjogXCIgKyBjdXJyZW50VVYpO1xuICAgIC8vIGFkZCBVViBsZXZlbHNcblxuICAgIC8vIC0tLS0tRm9yZWNhc3Qgd2VhdGhlci0tLS0tXG5cbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdDtcbiAgICBjb25zdCBhdmdEYXlUZW1wID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0ZGF5O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgY291bnRyeSxcbiAgICAgIGN1cnJlbnRXZWF0aGVyRGF0YToge1xuICAgICAgICBhY3R1YWxDZWxzaXVzLFxuICAgICAgICBhY3R1YWxGYWhyZW5oZWl0LFxuICAgICAgICBmZWVsc0xpa2VDZWxzaXVzLFxuICAgICAgICBmZWVsc0xpa2VGYWhyZW5oZWl0LFxuICAgICAgICBjdXJyZW50SWNvbixcbiAgICAgICAgY3VycmVudERlc2NyaXB0aW9uLFxuICAgICAgICBjdXJyZW50VVYsXG4gICAgICB9LFxuICAgICAgYXZnRGF5VGVtcCxcbiAgICAgIC8vIGRhaWx5V2VhdGhlckRhdGE6IHtcbiAgICAgIC8vICAgYXZnRGF5VGVtcENlbHNpdXMsXG4gICAgICAvLyB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJzb3J0IGRhdGEgZm5cIik7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cblxuLy8gc29ydERhdGEoKTtcblxuYXN5bmMgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKHNlYXJjaElucHV0VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHNlYXJjaElucHV0VmFsdWU7XG4gICAgaWYgKCFsb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IGF1dG9jb21wbGV0ZVVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259YDtcblxuICAgIGNvbnN0IGF1dG9Db21wbGV0ZVJlc3VsdHMgPSBhd2FpdCBmZXRjaChhdXRvY29tcGxldGVVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG5cbiAgICBjb25zdCBwYXJzZWRBdXRvY29tcGxldGVSZXN1bHQgPSBhd2FpdCBhdXRvQ29tcGxldGVSZXN1bHRzLmpzb24oKTtcblxuICAgIHJldHVybiBwYXJzZWRBdXRvY29tcGxldGVSZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cblxuLy8gU2VuZCBsb2NhdGlvbiBkYXRhIHRvIHNlcnZlclxuYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVJbmZvKGxvY2F0aW9uKSB7XG4gIC8vIGluY3JlYXNlcyBjb3VwbGluZywgZmluZCBhbiBhbHRlcm5hdGl2ZSBsYXRlclxuXG4gIC8vIGNvbnNvbGUubG9nKHVybCk7XG5cbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBsb2NhdGlvbkRhdGEgPSB7XG4gICAgLy8gICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgLy8gICB1cmw6IHVybCxcbiAgICAvLyB9O1xuICAgIGlmICghbG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cobG9jYXRpb24pO1xuXG4gICAgY29uc29sZS5sb2coXCJMb2NhdGlvbiB1c2VkOiBcIiArIGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuXG4gICAgY29uc3Qgc29ydGVkRGF0YSA9IGF3YWl0IHNvcnREYXRhKHdlYXRoZXJEYXRhKTtcblxuICAgIGlmICghd2VhdGhlckRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5hbERhdGEgPSB7XG4gICAgICBzZWFyY2hSZXN1bHQ6IHNvcnRlZERhdGEubG9jYXRpb24gKyBcIiwgXCIgKyBzb3J0ZWREYXRhLmNvdW50cnksXG4gICAgICBmaW5hbERhdGE6IHNvcnRlZERhdGEsXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGZpbmFsRGF0YSk7XG5cbiAgICByZXR1cm4gZmluYWxEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCB7IGF1dG9jb21wbGV0ZSwgcmV0cmlldmVJbmZvIH07XG4iLCJpbXBvcnQgeyByZXRyaWV2ZUluZm8gfSBmcm9tIFwiLi9nZXREYXRhXCI7XG5pbXBvcnQge1xuICBpbml0aWFsRE9NRGF0YSxcbiAgZGlzcGxheUxvYWRpbmdTY3JlZW4sXG4gIHJlbW92ZUxvYWRpbmdTY3JlZW4sXG4gIHN0YXR1c0Rpc3BsYXksXG59IGZyb20gXCIuL3NlYXJjaEFjdGlvblwiO1xuXG4vLyBmdW5jdGlvbiBpbml0aWFsaXNlKCl7XG4vLyBDaGVjayBpZiB0aGVyZSBpcyBsb2NhbCBzdG9yYWdlIGRhdGFcbi8vSWYgeWVzLCB1c2UgbG9jYWxzdG9yYWdlIGRhdGFcbi8vIElmIG5vLCByZXF1ZXN0IEdlb2xvY2F0aW9uIGRhdGFcbi8vSWYgbm8sIHVzZSBkZWZhdWx0LWt1YWxhLWx1bXB1clxuXG4vL0FkZCBsb2FkaW5nIGNzc1xuXG5sZXQgaW5pdGlhbERhdGE7XG5cbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtbG9jYXRpb25cIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gIHRyeSB7XG4gICAgZGlzcGxheUxvYWRpbmdTY3JlZW4oKTtcblxuICAgIGNvbnN0IGtpY2tvZmZEYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG5cbiAgICAvLyBpZiBsb2NhbFN0b3JhZ2UgaXMgZW1wdHlcbiAgICBpZiAoIWtpY2tvZmZEYXRhKSB7XG4gICAgICBjb25zdCBrdWFsYUx1bXB1ciA9IFwiS3VhbGEgTHVtcHVyLCBNYWxheXNpYVwiO1xuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBrdWFsYUx1bXB1cjtcblxuICAgICAgc2V0TG9jYWxTdG9yYWdlKGt1YWxhTHVtcHVyKTtcblxuICAgICAgY29uc29sZS5sb2coXCJOT05FXCIpO1xuXG4gICAgICBpbml0aWFsaXNlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGtpY2tvZmZEYXRhO1xuXG4gICAgaW5pdGlhbERhdGEgPSBhd2FpdCByZXRyaWV2ZUluZm8oa2lja29mZkRhdGEpO1xuXG4gICAgc3RhdHVzRGlzcGxheShraWNrb2ZmRGF0YSk7XG5cbiAgICBpbml0aWFsRE9NRGF0YShpbml0aWFsRGF0YSk7XG5cbiAgICByZW1vdmVMb2FkaW5nU2NyZWVuKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGluaXRpYWxpc2U6IFwiICsgZXJyb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShuZXdEYXRhKSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicmlzc2hXZWF0aGVyTG9jYXRpb25EYXRhXCIpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlzc2hXZWF0aGVyTG9jYXRpb25EYXRhXCIsIG5ld0RhdGEpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJpc3NoV2VhdGhlckxvY2F0aW9uRGF0YVwiKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbERhdGEsIGluaXRpYWxpc2UsIHNldExvY2FsU3RvcmFnZSwgZ2V0TG9jYWxTdG9yYWdlIH07XG4iLCJpbXBvcnQgeyBhdXRvY29tcGxldGUsIHJldHJpZXZlSW5mbyB9IGZyb20gXCIuL2dldERhdGEuanNcIjtcblxuaW1wb3J0IHtcbiAgaW5pdGlhbERhdGEsXG4gIHNldExvY2FsU3RvcmFnZSxcbiAgZ2V0TG9jYWxTdG9yYWdlLFxufSBmcm9tIFwiLi9pbml0aWFsaXNlci5qc1wiO1xuXG5pbXBvcnQge1xuICBob3VybHlBcnJheSxcbiAgdXBkYXRlRE9NV2l0aERhdGEsXG4gIGRpc3BsYXlIb3VybHlET00sXG59IGZyb20gXCIuL2RvbUFjdGlvbi5qc1wiO1xuXG5pbXBvcnQgeyBnZXRHZW9sb2NhdGlvbkRhdGEgfSBmcm9tIFwiLi9nZW9sb2NhdGlvbi5qc1wiO1xuXG5pbXBvcnQgbm93TG9hZGluZyBmcm9tIFwiLi9hc3NldHMvbG9hZGluZy5naWZcIjtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1sb2NhdGlvblwiKTtcblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnV0dG9uXCIpO1xuXG5jb25zdCBzZWFyY2hEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWRyb3AtZG93blwiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlcIik7XG5cbmxldCB3ZWF0aGVyUmVzdWx0O1xuXG5sZXQgc2VhcmNoU3VjY2VzcztcblxubGV0IHRvZGF5SG91cmx5RGF0YTtcblxuLy8gQ3JlYXRlIG9uZSBtb2R1bGUgZm9yIERPTSBDcmVhdGlvbiBhbmQgYW5vdGhlciBmb3IgRE9NIGFjdGlvblxuXG4vLyBBZGQgRXZlbnQgTGlzdGVuZXIgZm9yIHNlYXJjaCBldmVudHNcbmZ1bmN0aW9uIHNlYXJjaEV2ZW50cygpIHtcbiAgLy8gc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGF1dG9jb21wbGV0ZSk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBhdXRvY29tcGxldGVBcnJheSA9IGF3YWl0IGF1dG9jb21wbGV0ZShzZWFyY2hJbnB1dFZhbHVlKTtcbiAgICAgIGNyZWF0ZURyb3BEb3duKGF1dG9jb21wbGV0ZUFycmF5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIHNlYXJjaEV2ZW50cyhzZWFyY2hJbnB1dCk6IFwiICsgZXJyb3IpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoIXNlYXJjaElucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VhcmNoSW5wdXRWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuXG4gICAgICBwb3B1bGF0ZURPTShzZWFyY2hJbnB1dFZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIHNlYXJjaEV2ZW50cyhzZWFyY2hCdXR0b24pOiBcIiArIGVycm9yKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwibW9kdWxlLXdvcmtzXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wRG93bihhdXRvY29tcGxldGVBcnJheSkge1xuICBzZWFyY2hEcm9wRG93bi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhhdXRvY29tcGxldGVBcnJheSk7XG5cbiAgZm9yIChjb25zdCBlYWNoIG9mIGF1dG9jb21wbGV0ZUFycmF5KSB7XG4gICAgY29uc3QgZHJvcERvd25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcm9wRG93bkl0ZW0uY2xhc3NMaXN0LmFkZChcImRyb3AtZG93bi1pdGVtXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGVhY2gpO1xuICAgIGRyb3BEb3duSXRlbS50ZXh0Q29udGVudCA9IGVhY2gubmFtZSArIFwiLCBcIiArIGVhY2guY291bnRyeTtcbiAgICAvLyBkcm9wRG93bkl0ZW0udXJsID0gZWFjaC51cmw7XG4gICAgLy8gY29uc29sZS5sb2coZWFjaC51cmwpO1xuICAgIHNlYXJjaERyb3BEb3duLmFwcGVuZChkcm9wRG93bkl0ZW0pO1xuICB9XG5cbiAgaWYgKHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1kb3duLWl0ZW1cIikpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRyb3AtZG93bi13b3Jrc1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hEcm9wRG93bi5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtZG93bi1pdGVtXCIpKTtcblxuICAgIGRyb3BEb3duQ2xpY2tFdmVudCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyb3BEb3duQ2xpY2tFdmVudCgpIHtcbiAgY29uc3QgZHJvcERvd25JdGVtTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3AtZG93bi1pdGVtXCIpO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwid2hhdFwiKTtcblxuICBkcm9wRG93bkl0ZW1Ob2RlTGlzdC5mb3JFYWNoKChkcm9wRG93bkl0ZW0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhkcm9wRG93bkl0ZW0pO1xuICAgIGRyb3BEb3duSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBkcm9wRG93bkl0ZW0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgcG9wdWxhdGVET00oZHJvcERvd25JdGVtLnRleHRDb250ZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBkcm9wRG93bkNsaWNrRXZlbnQ6IFwiICsgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbERPTURhdGEod2VhdGhlckRhdGEpIHtcbiAgLy8gc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBieSB0ZW1wVG9nZ2xlXG4gIHdlYXRoZXJSZXN1bHQgPSB3ZWF0aGVyRGF0YTtcblxuICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKFwid2VhdGhlciByZXN1bHRcIik7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLUVORC0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuXG4gIHRvZGF5SG91cmx5RGF0YSA9IHdlYXRoZXJEYXRhLmZpbmFsRGF0YS5hdmdEYXlUZW1wWzBdLmhvdXI7XG5cbiAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtZGFpbHlcIik7XG4gIH0pO1xuXG4gIGRhaWx5RGl2c1swXS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtZGFpbHlcIik7XG5cbiAgZGlzcGxheUhvdXJseURPTSh0b2RheUhvdXJseURhdGEpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEcm9wRG93bigpIHtcbiAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCkge1xuICBjb25zdCBsb2FkaW5nR0lGQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWdpZi1jb250YWluZXJcIik7XG5cbiAgaWYgKGxvYWRpbmdHSUZDb250YWluZXIucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgIGNvbnNvbGUubG9nKFwiTE9BRElORyBHSUYgUFJFU0VOVFwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsb2FkaW5nR0lGID0gbmV3IEltYWdlKCk7XG5cbiAgbG9hZGluZ0dJRi5zcmMgPSBub3dMb2FkaW5nO1xuXG4gIGxvYWRpbmdHSUZDb250YWluZXIuYXBwZW5kKGxvYWRpbmdHSUYpO1xuXG4gIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc2NyZWVuXCIpO1xuICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtbG9hZGluZy1zY3JlZW5cIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRpbmdTY3JlZW4oKSB7XG4gIGNvbnN0IGxvYWRpbmdHSUZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctZ2lmLWNvbnRhaW5lclwiKTtcblxuICBsb2FkaW5nR0lGQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikucmVtb3ZlKCk7XG4gIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc2NyZWVuXCIpO1xuICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGUtbG9hZGluZy1zY3JlZW5cIik7XG59XG5cbmZ1bmN0aW9uIHN0YXR1c0Rpc3BsYXkobG9jYXRpb24pIHtcbiAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzLW1lc3NhZ2VcIik7XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIGNvbnN0IHByZXZpb3VzRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuXG4gICAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgICBcIkxvY2F0aW9uIG5vdCBmb3VuZCwgc3RpbGwgZGlzcGxheWluZzogXCIgKyBwcmV2aW91c0RhdGE7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkN1cnJlbnRseSBkaXNwbGF5aW5nOiBcIiArIGxvY2F0aW9uO1xufVxuXG5mdW5jdGlvbiBnZW9sb2NhdGlvbkJ0bkV2ZW50KCkge1xuICBjb25zdCBnZW9sb2NhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VvbG9jYXRpb24tYnV0dG9uXCIpO1xuICBjb25zdCBzZWFyY2hEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWRyb3AtZG93blwiKTtcbiAgZ2VvbG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBnZW9sb2NhdGlvbkRhdGEgPSBhd2FpdCBnZXRHZW9sb2NhdGlvbkRhdGEoKTtcbiAgICAgIGNvbnNvbGUubG9nKGdlb2xvY2F0aW9uRGF0YSk7XG5cbiAgICAgIC8vXG4gICAgICAvL1xuXG4gICAgICAvLyBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgICAgIHBvcHVsYXRlRE9NKGdlb2xvY2F0aW9uRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiRXJyb3IgaW4gZ2VvbG9jYXRpb25CdG5MaXN0ZW5lcihnZW9sb2NhdGlvbkJ1dHRvbik6IFwiICsgZXJyb3JcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVET00oaW5wdXREYXRhKSB7XG4gIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCk7XG5cbiAgd2VhdGhlclJlc3VsdCA9IGF3YWl0IHJldHJpZXZlSW5mbyhpbnB1dERhdGEpO1xuXG4gIC8vIGlmIHNlYXJjaCBmYWlscyAtIHVzZSBwcmV2aW91c2x5IHN1Y2Nlc3NmdWwgZGF0YVxuICBpZiAoIXdlYXRoZXJSZXN1bHQpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5PVCBGT1VORFwiKTtcblxuICAgIHN0YXR1c0Rpc3BsYXkoZmFsc2UpO1xuXG4gICAgLy8gZGlzcGxheSBsb2NhdGlvbiBub3QgZm91bmQgb24gRE9NXG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzdWx0KTtcbiAgICAvLyB1c2VzIHByZXZpb3VzIGRhdGFcbiAgICBjb25zb2xlLmxvZyhcIlVTSU5HIFNFQVJDSCBTVUNDRVNTXCIpO1xuICAgIC8vIGlmIG5vIGRhdGEgaW4gc2VhcmNoU3VjY2VzcyB1c2UgaW5pdGlhbERhdGFcbiAgICBpZiAoIXNlYXJjaFN1Y2Nlc3MpIHtcbiAgICAgIHNlYXJjaFN1Y2Nlc3MgPSBpbml0aWFsRGF0YTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc2VhcmNoU3VjY2Vzcyk7XG4gICAgaW5pdGlhbERPTURhdGEoc2VhcmNoU3VjY2Vzcyk7XG4gICAgcmVtb3ZlTG9hZGluZ1NjcmVlbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGlmIHNlYXJjaCBpcyBhIHN1Y2Nlc3NcblxuICBpZiAod2VhdGhlclJlc3VsdCA9PSB0cnVlKSB7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcInNlYXJjaCBzdWNjZXNzIHdvcmtzXCIpO1xuICBzZWFyY2hTdWNjZXNzID0gd2VhdGhlclJlc3VsdDtcbiAgY29uc29sZS5sb2cod2VhdGhlclJlc3VsdCk7XG5cbiAgc2VhcmNoSW5wdXQudmFsdWUgPSB3ZWF0aGVyUmVzdWx0LnNlYXJjaFJlc3VsdDtcblxuICBzZXRMb2NhbFN0b3JhZ2Uod2VhdGhlclJlc3VsdC5zZWFyY2hSZXN1bHQpO1xuXG4gIHN0YXR1c0Rpc3BsYXkod2VhdGhlclJlc3VsdC5zZWFyY2hSZXN1bHQpO1xuXG4gIHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgY2hpbGQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIC8vIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJSZXN1bHQpO1xuICBpbml0aWFsRE9NRGF0YSh3ZWF0aGVyUmVzdWx0KTtcblxuICAvLyBzZXRUaW1lb3V0KHJlbW92ZUxvYWRpbmdTY3JlZW4sIDUwMDApO1xuXG4gIHJlbW92ZUxvYWRpbmdTY3JlZW4oKTtcbn1cblxuZXhwb3J0IHtcbiAgd2VhdGhlclJlc3VsdCxcbiAgdG9kYXlIb3VybHlEYXRhLFxuICBzZWFyY2hFdmVudHMsXG4gIGdlb2xvY2F0aW9uQnRuRXZlbnQsXG4gIGNyZWF0ZURyb3BEb3duLFxuICByZW1vdmVEcm9wRG93bixcbiAgaW5pdGlhbERPTURhdGEsXG4gIGRpc3BsYXlMb2FkaW5nU2NyZWVuLFxuICByZW1vdmVMb2FkaW5nU2NyZWVuLFxuICBzdGF0dXNEaXNwbGF5LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGluaXRpYWxpc2UgfSBmcm9tIFwiLi9pbml0aWFsaXNlclwiO1xuaW1wb3J0IHsgZ2V0R2VvbG9jYXRpb25EYXRhIH0gZnJvbSBcIi4vZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IHRvZ2dsZVRlbXBzLCBkYWlseURpdnNFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vZG9tQWN0aW9uXCI7XG5pbXBvcnQge1xuICBzZWFyY2hFdmVudHMsXG4gIGdlb2xvY2F0aW9uQnRuRXZlbnQsXG4gIHJlbW92ZURyb3BEb3duLFxufSBmcm9tIFwiLi9zZWFyY2hBY3Rpb25cIjtcblxuY29uc29sZS5sb2coXCJ3ZWJwYWNrIHdvcmtzIVwiKTtcblxuc2VhcmNoRXZlbnRzKCk7XG4vLyBVbmNvbW1lbnQgbGF0ZXJcbmluaXRpYWxpc2UoKTtcbi8vIFRFU1RcblxuZnVuY3Rpb24gbG9jYXRpb25CdXR0b24oKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0R2VvbG9jYXRpb25EYXRhKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiY29vcmRpbmF0ZXNcIik7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSk7XG59XG5cbi8vIEFkZCBldmVudExpc3RlbmVyc1xuZ2VvbG9jYXRpb25CdG5FdmVudCgpO1xucmVtb3ZlRHJvcERvd24oKTtcbnRvZ2dsZVRlbXBzKCk7XG5kYWlseURpdnNFdmVudExpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
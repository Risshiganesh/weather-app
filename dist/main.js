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

#search-location{
    border: 2px solid black;
    height: 30px;
}

#search-form{
    /* display: grid; */
    /* align-items: center; */
    align-items: center;
    /* position: relative; */
    border: 3px solid aqua;
}

.search-container{
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 150px;
    position: relative;
}

.drop-down-container{
    border: 1px solid greenyellow;
    height: 0px;
    position: relative;
    width: 100%;

}

.search-drop-down{
    position: absolute;
    border: 3px solid navy;
    /* height: 300px; */
    width: 100%;
    z-index: 1;
    background-color: blueviolet;
}

.drop-down-item:hover{

    background-color: yellow;
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
    grid-template-rows: repeat(4, 1fr);
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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;;AAE1B;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,kBAAkB;IAClB,WAAW;;AAEf;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,4BAA4B;AAChC;;AAEA;;IAEI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;IAClC,aAAa;;IAEb,kBAAkB;IAClB,SAAS;IACT,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,qBAAqB;;AAEzB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;;IAEb,qBAAqB;IACrB,mBAAmB;IACnB,cAAc;IACd,UAAU;;AAEd;;;AAGA;IACI,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,SAAS;IACT,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;AACxB;;;AAGA;;IAEI,aAAa;IACb,kCAAkC;IAClC,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;;IAEb,mBAAmB;;AAEvB;;AAEA;IACI,4BAA4B;AAChC;AACA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;;IAEnB,wBAAwB;IACxB,UAAU;;AAEd;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,kCAAkC;IAClC,kBAAkB;IAClB,qBAAqB;IACrB,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,aAAa;IACb,qBAAqB;IACrB,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: grey;\n    /* position: relative; */\n}\n\nbody * {\n    /* border: 3px solid red; */\n}\n\n.main-container{\n    display: grid;\n    /* gap: 10px; */\n    height: 100%;\n    grid-template-rows: 30px 70px 1fr 35px;\n}\n\n#search-location{\n    border: 2px solid black;\n    height: 30px;\n}\n\n#search-form{\n    /* display: grid; */\n    /* align-items: center; */\n    align-items: center;\n    /* position: relative; */\n    border: 3px solid aqua;\n}\n\n.search-container{\n    display: grid;\n    gap: 10px;\n    grid-template-columns: 1fr 150px;\n    position: relative;\n}\n\n.drop-down-container{\n    border: 1px solid greenyellow;\n    height: 0px;\n    position: relative;\n    width: 100%;\n\n}\n\n.search-drop-down{\n    position: absolute;\n    border: 3px solid navy;\n    /* height: 300px; */\n    width: 100%;\n    z-index: 1;\n    background-color: blueviolet;\n}\n\n.drop-down-item:hover{\n\n    background-color: yellow;\n}\n\n.logo-container{\n    /* text-align: center; */\n    border: 2px solid gold;\n    display: grid;\n    justify-items: center;\n    align-items: end;\n\n}\n\n.logo-div{\n    border: 2px solid red;\n    width: 300px;\n    text-align: center;\n}\n\n.display-container{\n    /* align-content: space-between; */\n    display: grid;\n\n    position: relative;\n    gap: 15px;\n    justify-items: center;\n\n}\n\n.current-weather-container{\n    height: 260px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.current-weather-display{\n    border-radius: 100%;\n    height: 250px;\n    width: 250px;\n    border: 3px solid purple;\n    display: grid;\n    align-items: center;\n    text-align: center;\n}\n\n.temp-display{\n    /* border: 2px solid fuchsia; */\n    font-size: 40px;\n    align-self: flex-end;\n}\n\n.weather-desc{\n    font-size: 20px;\n    /* align-self: start; */\n}\n\n.uv-index{\n    align-self: start;\n}\n\n.toggle-container{\n    display: grid;\n}\n\n.three-day-average{\n    display: grid;\n\n    justify-items: center;\n    align-items: center;\n    overflow: auto;\n    width: 90%;\n\n}\n\n\n.three-day-average-container{\n    display: grid;\n    /* height: 100%; */\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n    height: 200px;\n    align-items: center;\n    /* overflow: auto; */\n}\n\n\n.daily {\n\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    border: 2px solid blue;\n    height: 100%;\n    height: 170px;\n    width: 170px;\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n\n    border-radius: 15px;\n\n}\n\n.selected-daily{\n    background-color: lightgreen;\n}\n.daily *{\n\n    /* border: 2px solid navy; */\n}\n\n.hourly-average{\n    height: 200px;\n    overflow: auto;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-items: center;\n\n    border: 3px solid violet;\n    width: 90%;\n\n}\n\n.hourly{\n\n    width: 150px;\n    height: 150px;\n    border: 3px solid pink;\n    display: grid;\n    grid-template-rows: repeat(4, 1fr);\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n    font-size: 14px;\n    border-radius: 15px;\n}\n\n.footer-container{\n    border: 3px solid greenyellow;\n    display: grid;\n    justify-items: center;\n    display: grid;\n    align-items: end;\n}\n\n.footer{\n    border: 2px solid gold;\n}\n\n"],"sourceRoot":""}]);
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

  console.log(hourlyArray);

  for (let index = 0; index < hourlyDivs.length; index++) {
    //   const element = array[index];
    //   const dateDiv = hourlyDivs[index].querySelector(".date-daily");

    const iconDiv = hourlyDivs[index].querySelector(".icon-hourly");
    const conditionDiv = hourlyDivs[index].querySelector(".condition-hourly");
    const avgTempDiv = hourlyDivs[index].querySelector(".avg-temp-hourly");
    const uvDiv = hourlyDivs[index].querySelector(".uv-hourly");

    if (iconDiv.hasChildNodes) {
      iconDiv.querySelectorAll("*").forEach(function (child) {
        child.remove();
      });
    }

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
/* harmony export */   removeDropDown: () => (/* binding */ removeDropDown),
/* harmony export */   searchEvents: () => (/* binding */ searchEvents),
/* harmony export */   todayHourlyData: () => (/* binding */ todayHourlyData),
/* harmony export */   weatherResult: () => (/* binding */ weatherResult)
/* harmony export */ });
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/getData.js");
/* harmony import */ var _domAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domAction.js */ "./src/domAction.js");




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

    const searchInputValue = searchInput.value;

    weatherResult = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.retrieveInfo)(searchInputValue);

    searchInput.value = weatherResult.searchResult;

    searchDropDown.querySelectorAll("*").forEach(function (child) {
      child.remove();
    });

    // updateDOMWithData(weatherResult);
    initialDOMData();
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
      // console.log("test-click");

      searchInput.value = dropDownItem.textContent;

      // use await for this?
      weatherResult = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.retrieveInfo)(
        dropDownItem.textContent,
        dropDownItem.url
      );

      // toggleTemps(newSearchResult);

      // Put these in a function
      initialDOMData();
      // Add displayHourlyDOM

      // Until here.
    });
  });
}

function initialDOMData() {
  (0,_domAction_js__WEBPACK_IMPORTED_MODULE_1__.updateDOMWithData)(weatherResult);

  todayHourlyData = weatherResult.finalData.avgDayTemp[0].hour;

  console.log(weatherResult.finalData.avgDayTemp[0].hour);

  dailyDivs.forEach((div) => {
    div.classList.remove("selected-daily");
  });

  dailyDivs[0].classList.add("selected-daily");

  (0,_domAction_js__WEBPACK_IMPORTED_MODULE_1__.displayHourlyDOM)(todayHourlyData);
}

function removeDropDown() {
  mainContainer.addEventListener("click", function () {
    searchDropDown.querySelectorAll("*").forEach(function (child) {
      child.remove();
    });
  });
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

    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;

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

    const autocompleteURL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`;

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

    return finalData;
  } catch (error) {
    console.log(error);
  }
}




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
/* harmony import */ var _domAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domAction */ "./src/domAction.js");
/* harmony import */ var _dropDownCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropDownCreation */ "./src/dropDownCreation.js");




console.log("webpack works!");

(0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_2__.searchEvents)();
// Uncomment later

// Add eventListeners
(0,_dropDownCreation__WEBPACK_IMPORTED_MODULE_2__.removeDropDown)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_1__.toggleTemps)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_1__.dailyDivsEventListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNkM7QUFDQTs7QUFFbEU7O0FBRUEsK0RBQVk7QUFDWjs7QUFFQTtBQUNBLGlFQUFjO0FBQ2QsdURBQVc7QUFDWCxrRUFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb21BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZHJvcERvd25DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgXG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbn1cblxuYm9keSAqIHtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCByZWQ7ICovXG59XG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdhcDogMTBweDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDcwcHggMWZyIDM1cHg7XG59XG5cbiNzZWFyY2gtbG9jYXRpb257XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jc2VhcmNoLWZvcm17XG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGFxdWE7XG59XG5cbi5zZWFyY2gtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3AtZG93bi1jb250YWluZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5zZWFyY2gtZHJvcC1kb3due1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBuYXZ5O1xuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuXG4uZHJvcC1kb3duLWl0ZW06aG92ZXJ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5sb2dvLWNvbnRhaW5lcntcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuXG59XG5cbi5sb2dvLWRpdntcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXktY29udGFpbmVye1xuICAgIC8qIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gICAgZGlzcGxheTogZ3JpZDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBnYXA6IDE1cHg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG59XG5cbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVye1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxufVxuXG4uY3VycmVudC13ZWF0aGVyLWRpc3BsYXl7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwdXJwbGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRlbXAtZGlzcGxheXtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhOyAqL1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLndlYXRoZXItZGVzY3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgLyogYWxpZ24tc2VsZjogc3RhcnQ7ICovXG59XG5cbi51di1pbmRleHtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuLnRvZ2dsZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnRocmVlLWRheS1hdmVyYWdle1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuXG59XG5cblxuLnRocmVlLWRheS1hdmVyYWdlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xufVxuXG5cbi5kYWlseSB7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4uc2VsZWN0ZWQtZGFpbHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cbi5kYWlseSAqe1xuXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgbmF2eTsgKi9cbn1cblxuLmhvdXJseS1hdmVyYWdle1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmlvbGV0O1xuICAgIHdpZHRoOiA5MCU7XG5cbn1cblxuLmhvdXJseXtcblxuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmZvb3Rlci1jb250YWluZXJ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW55ZWxsb3c7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xufVxuXG4uZm9vdGVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhOztJQUViLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVOztBQUVkOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7OztBQUdBOztJQUVJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsYUFBYTs7SUFFYixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7O0lBRUksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QixVQUFVOztBQUVkOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbmJvZHkgKiB7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBnYXA6IDEwcHg7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDcwcHggMWZyIDM1cHg7XFxufVxcblxcbiNzZWFyY2gtbG9jYXRpb257XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbiNzZWFyY2gtZm9ybXtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBhcXVhO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZHJvcC1kb3duLWNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4uc2VhcmNoLWRyb3AtZG93bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBuYXZ5O1xcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLmRyb3AtZG93bi1pdGVtOmhvdmVye1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lcntcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFxufVxcblxcbi5sb2dvLWRpdntcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktY29udGFpbmVye1xcbiAgICAvKiBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyLWRpc3BsYXl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcHVycGxlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wLWRpc3BsYXl7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi53ZWF0aGVyLWRlc2N7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgLyogYWxpZ24tc2VsZjogc3RhcnQ7ICovXFxufVxcblxcbi51di1pbmRleHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi50b2dnbGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4udGhyZWUtZGF5LWF2ZXJhZ2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxufVxcblxcblxcbi50aHJlZS1kYXktYXZlcmFnZS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbn1cXG5cXG5cXG4uZGFpbHkge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxufVxcblxcbi5zZWxlY3RlZC1kYWlseXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuLmRhaWx5ICp7XFxuXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIG5hdnk7ICovXFxufVxcblxcbi5ob3VybHktYXZlcmFnZXtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmlvbGV0O1xcbiAgICB3aWR0aDogOTAlO1xcblxcbn1cXG5cXG4uaG91cmx5e1xcblxcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5mb290ZXItY29udGFpbmVye1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbnllbGxvdztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgd2VhdGhlclJlc3VsdCwgdG9kYXlIb3VybHlEYXRhIH0gZnJvbSBcIi4vZHJvcERvd25DcmVhdGlvblwiO1xuXG5sZXQgaG91cmx5QXJyYXk7XG5cbmNvbnN0IHRlbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWRpc3BsYXlcIik7XG5cbmNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAtdG9nZ2xlXCIpO1xuXG5jb25zdCB3ZWF0aGVyRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kZXNjXCIpO1xuY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXYtaW5kZXhcIik7XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlcIik7XG5cbmZ1bmN0aW9uIHRvZ2dsZVRlbXBzKCkge1xuICBsZXQgY2hvc2VuVGVtcCA9IHRlbXBUb2dnbGUudGV4dENvbnRlbnQ7XG5cbiAgdGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgdGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9IFwiRmFocmVuaGVpdFwiO1xuICAgICAgY2hvc2VuVGVtcCA9IFwiRmFocmVuaGVpdFwiO1xuXG4gICAgICAvLyBmdW5jdGlvbmlzZSB0aGlzP1xuICAgICAgdXBkYXRlRE9NV2l0aERhdGEod2VhdGhlclJlc3VsdCk7XG4gICAgICBpZiAoIWhvdXJseUFycmF5KSB7XG4gICAgICAgIGRpc3BsYXlIb3VybHlET00odG9kYXlIb3VybHlEYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGlzcGxheUhvdXJseURPTShob3VybHlBcnJheSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkhFTElcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgICB0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID0gXCJDZWxzaXVzXCI7XG4gICAgICBjaG9zZW5UZW1wID0gXCJDZWxzaXVzXCI7XG4gICAgICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyUmVzdWx0KTtcblxuICAgICAgaWYgKCFob3VybHlBcnJheSkge1xuICAgICAgICBkaXNwbGF5SG91cmx5RE9NKHRvZGF5SG91cmx5RGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRpc3BsYXlIb3VybHlET00oaG91cmx5QXJyYXkpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkNPUFRFUlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJURVNUVFRUVFwiKTtcblxuICAgIHJldHVybjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGlmICghd2VhdGhlckRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGEuZmluYWxEYXRhLmN1cnJlbnRXZWF0aGVyRGF0YTtcbiAgY29uc3QgYXZnRGF5VGVtcCA9IHdlYXRoZXJEYXRhLmZpbmFsRGF0YS5hdmdEYXlUZW1wO1xuXG4gIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgIGNvbnNvbGUubG9nKFwiSFNIU0hTSEhTSFNIU1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGF2Z0RheVRlbXApO1xuXG4gICAgdGVtcERpc3BsYXkudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEuYWN0dWFsQ2Vsc2l1cyArIFwiICpjXCI7XG4gICAgd2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudERlc2NyaXB0aW9uO1xuICAgIHV2SW5kZXgudGV4dENvbnRlbnQgPSBcIlVWIEluZGV4OiBcIiArIGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50VVY7XG5cbiAgICBkaXNwbGF5RGFpbHlET00oYXZnRGF5VGVtcCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJGYWhyZW5oZWl0XCIpIHtcbiAgICBjb25zb2xlLmxvZyhcIllFUFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICB0ZW1wRGlzcGxheS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5hY3R1YWxGYWhyZW5oZWl0ICsgXCIgKkZcIjtcbiAgICB3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50RGVzY3JpcHRpb247XG4gICAgdXZJbmRleC50ZXh0Q29udGVudCA9IFwiVVYgSW5kZXg6IFwiICsgY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnRVVjtcblxuICAgIGRpc3BsYXlEYWlseURPTShhdmdEYXlUZW1wKTtcblxuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RGFpbHlET00oZGFpbHlBcnJheSkge1xuICBjb25zb2xlLmxvZyhcIldPUktTU1NTXCIpO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYWlseURpdnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGF0ZURpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5kYXRlLWRhaWx5XCIpO1xuICAgIGNvbnN0IGF2Z1RlbXBEaXYgPSBkYWlseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuYXZnLXRlbXAtZGFpbHlcIik7XG4gICAgY29uc3QgaWNvbkRpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5pY29uLWRhaWx5XCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24tZGFpbHlcIik7XG4gICAgY29uc3QgdXZEaXYgPSBkYWlseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIudXYtZGFpbHlcIik7XG5cbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF0ZTtcblxuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgYXZnVGVtcERpdi50ZXh0Q29udGVudCA9IGRhaWx5QXJyYXlbaW5kZXhdLmRheS5hdmd0ZW1wX2MgKyBcIipjXCI7XG4gICAgfVxuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgICBhdmdUZW1wRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF5LmF2Z3RlbXBfZiArIFwiKkZcIjtcbiAgICB9XG5cbiAgICBpZiAoaWNvbkRpdi5oYXNDaGlsZE5vZGVzKSB7XG4gICAgICBpY29uRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaWNvbi5zcmMgPSBkYWlseUFycmF5W2luZGV4XS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICBpY29uRGl2LmFwcGVuZChpY29uKTtcblxuICAgIGNvbmRpdGlvbkRpdi50ZXh0Q29udGVudCA9IGRhaWx5QXJyYXlbaW5kZXhdLmRheS5jb25kaXRpb24udGV4dDtcblxuICAgIHV2RGl2LnRleHRDb250ZW50ID0gXCJBdmcuIFVWIEluZGV4OiBcIiArIGRhaWx5QXJyYXlbaW5kZXhdLmRheS51djtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYWlseURpdnNFdmVudExpc3RlbmVyKCkge1xuICBkYWlseURpdnM7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhaWx5RGl2cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvLyBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuICAgIGRhaWx5RGl2c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRhaWx5RGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1kYWlseVwiKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJCQU1CQUxBTU1NTVwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJSZXN1bHQuZmluYWxEYXRhLmF2Z0RheVRlbXBbaW5kZXhdLmhvdXIpO1xuICAgICAgaG91cmx5QXJyYXkgPSB3ZWF0aGVyUmVzdWx0LmZpbmFsRGF0YS5hdmdEYXlUZW1wW2luZGV4XS5ob3VyO1xuXG4gICAgICAvLyBhZGQgYW5kIHJlbW92ZSBiYWNrZ3JvdW5kIGNvbG91ciBvZiBkaXZzIGhlcmVcbiAgICAgIGRhaWx5RGl2c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWRhaWx5XCIpO1xuXG4gICAgICBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KSB7XG4gIGlmICghaG91cmx5QXJyYXkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaG91cmx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG91cmx5XCIpO1xuXG4gIGNvbnNvbGUubG9nKGhvdXJseUFycmF5KTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaG91cmx5RGl2cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgLy8gICBjb25zdCBkYXRlRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5kYXRlLWRhaWx5XCIpO1xuXG4gICAgY29uc3QgaWNvbkRpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1ob3VybHlcIik7XG4gICAgY29uc3QgY29uZGl0aW9uRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24taG91cmx5XCIpO1xuICAgIGNvbnN0IGF2Z1RlbXBEaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmF2Zy10ZW1wLWhvdXJseVwiKTtcbiAgICBjb25zdCB1dkRpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIudXYtaG91cmx5XCIpO1xuXG4gICAgaWYgKGljb25EaXYuaGFzQ2hpbGROb2Rlcykge1xuICAgICAgaWNvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgIGljb24uc3JjID0gaG91cmx5QXJyYXlbaW5kZXhdLmNvbmRpdGlvbi5pY29uO1xuXG4gICAgaWNvbkRpdi5hcHBlbmQoaWNvbik7XG5cbiAgICBjb25kaXRpb25EaXYudGV4dENvbnRlbnQgPSBob3VybHlBcnJheVtpbmRleF0uY29uZGl0aW9uLnRleHQ7XG5cbiAgICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJDZWxzaXVzXCIpIHtcbiAgICAgIGF2Z1RlbXBEaXYudGV4dENvbnRlbnQgPSBob3VybHlBcnJheVtpbmRleF0udGVtcF9jICsgXCIqY1wiO1xuICAgIH1cblxuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkZhaHJlbmhlaXRcIikge1xuICAgICAgYXZnVGVtcERpdi50ZXh0Q29udGVudCA9IGhvdXJseUFycmF5W2luZGV4XS50ZW1wX2YgKyBcIipGXCI7XG4gICAgfVxuXG4gICAgdXZEaXYudGV4dENvbnRlbnQgPSBcIlVWIEluZGV4OiBcIiArIGhvdXJseUFycmF5W2luZGV4XS51djtcbiAgfVxufVxuZXhwb3J0IHtcbiAgaG91cmx5QXJyYXksXG4gIHRvZ2dsZVRlbXBzLFxuICB1cGRhdGVET01XaXRoRGF0YSxcbiAgZGFpbHlEaXZzRXZlbnRMaXN0ZW5lcixcbiAgZGlzcGxheUhvdXJseURPTSxcbn07XG4iLCJpbXBvcnQgeyBhdXRvY29tcGxldGUsIHJldHJpZXZlSW5mbyB9IGZyb20gXCIuL2dldERhdGEuanNcIjtcblxuaW1wb3J0IHtcbiAgaG91cmx5QXJyYXksXG4gIHVwZGF0ZURPTVdpdGhEYXRhLFxuICBkaXNwbGF5SG91cmx5RE9NLFxufSBmcm9tIFwiLi9kb21BY3Rpb24uanNcIjtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1sb2NhdGlvblwiKTtcblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnV0dG9uXCIpO1xuXG5jb25zdCBzZWFyY2hEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWRyb3AtZG93blwiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlcIik7XG5cbmxldCB3ZWF0aGVyUmVzdWx0O1xuXG5sZXQgdG9kYXlIb3VybHlEYXRhO1xuXG4vLyBDcmVhdGUgb25lIG1vZHVsZSBmb3IgRE9NIENyZWF0aW9uIGFuZCBhbm90aGVyIGZvciBET00gYWN0aW9uXG5cbi8vIEFkZCBFdmVudCBMaXN0ZW5lciBmb3Igc2VhcmNoIGV2ZW50c1xuZnVuY3Rpb24gc2VhcmNoRXZlbnRzKCkge1xuICAvLyBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYXV0b2NvbXBsZXRlKTtcblxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoSW5wdXRWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGNvbnN0IGF1dG9jb21wbGV0ZUFycmF5ID0gYXdhaXQgYXV0b2NvbXBsZXRlKHNlYXJjaElucHV0VmFsdWUpO1xuICAgIGNyZWF0ZURyb3BEb3duKGF1dG9jb21wbGV0ZUFycmF5KTtcbiAgfSk7XG5cbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgICB3ZWF0aGVyUmVzdWx0ID0gYXdhaXQgcmV0cmlldmVJbmZvKHNlYXJjaElucHV0VmFsdWUpO1xuXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSB3ZWF0aGVyUmVzdWx0LnNlYXJjaFJlc3VsdDtcblxuICAgIHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIC8vIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJSZXN1bHQpO1xuICAgIGluaXRpYWxET01EYXRhKCk7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwibW9kdWxlLXdvcmtzXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wRG93bihhdXRvY29tcGxldGVBcnJheSkge1xuICBzZWFyY2hEcm9wRG93bi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhhdXRvY29tcGxldGVBcnJheSk7XG5cbiAgZm9yIChjb25zdCBlYWNoIG9mIGF1dG9jb21wbGV0ZUFycmF5KSB7XG4gICAgY29uc3QgZHJvcERvd25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcm9wRG93bkl0ZW0uY2xhc3NMaXN0LmFkZChcImRyb3AtZG93bi1pdGVtXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGVhY2gpO1xuICAgIGRyb3BEb3duSXRlbS50ZXh0Q29udGVudCA9IGVhY2gubmFtZSArIFwiLCBcIiArIGVhY2guY291bnRyeTtcbiAgICBkcm9wRG93bkl0ZW0udXJsID0gZWFjaC51cmw7XG4gICAgc2VhcmNoRHJvcERvd24uYXBwZW5kKGRyb3BEb3duSXRlbSk7XG4gIH1cblxuICBpZiAoc2VhcmNoRHJvcERvd24ucXVlcnlTZWxlY3RvcihcIi5kcm9wLWRvd24taXRlbVwiKSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZHJvcC1kb3duLXdvcmtzXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1kb3duLWl0ZW1cIikpO1xuXG4gICAgZHJvcERvd25DbGlja0V2ZW50KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJvcERvd25DbGlja0V2ZW50KCkge1xuICBjb25zdCBkcm9wRG93bkl0ZW1Ob2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcC1kb3duLWl0ZW1cIik7XG5cbiAgLy8gY29uc29sZS5sb2coXCJ3aGF0XCIpO1xuXG4gIGRyb3BEb3duSXRlbU5vZGVMaXN0LmZvckVhY2goKGRyb3BEb3duSXRlbSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGRyb3BEb3duSXRlbSk7XG4gICAgZHJvcERvd25JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3QtY2xpY2tcIik7XG5cbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gZHJvcERvd25JdGVtLnRleHRDb250ZW50O1xuXG4gICAgICAvLyB1c2UgYXdhaXQgZm9yIHRoaXM/XG4gICAgICB3ZWF0aGVyUmVzdWx0ID0gYXdhaXQgcmV0cmlldmVJbmZvKFxuICAgICAgICBkcm9wRG93bkl0ZW0udGV4dENvbnRlbnQsXG4gICAgICAgIGRyb3BEb3duSXRlbS51cmxcbiAgICAgICk7XG5cbiAgICAgIC8vIHRvZ2dsZVRlbXBzKG5ld1NlYXJjaFJlc3VsdCk7XG5cbiAgICAgIC8vIFB1dCB0aGVzZSBpbiBhIGZ1bmN0aW9uXG4gICAgICBpbml0aWFsRE9NRGF0YSgpO1xuICAgICAgLy8gQWRkIGRpc3BsYXlIb3VybHlET01cblxuICAgICAgLy8gVW50aWwgaGVyZS5cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxET01EYXRhKCkge1xuICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyUmVzdWx0KTtcblxuICB0b2RheUhvdXJseURhdGEgPSB3ZWF0aGVyUmVzdWx0LmZpbmFsRGF0YS5hdmdEYXlUZW1wWzBdLmhvdXI7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlclJlc3VsdC5maW5hbERhdGEuYXZnRGF5VGVtcFswXS5ob3VyKTtcblxuICBkYWlseURpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1kYWlseVwiKTtcbiAgfSk7XG5cbiAgZGFpbHlEaXZzWzBdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1kYWlseVwiKTtcblxuICBkaXNwbGF5SG91cmx5RE9NKHRvZGF5SG91cmx5RGF0YSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURyb3BEb3duKCkge1xuICBtYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VhcmNoRHJvcERvd24ucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgd2VhdGhlclJlc3VsdCxcbiAgdG9kYXlIb3VybHlEYXRhLFxuICBzZWFyY2hFdmVudHMsXG4gIGNyZWF0ZURyb3BEb3duLFxuICByZW1vdmVEcm9wRG93bixcbn07XG4iLCJjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5cbi8vcmVtb3ZlIGFsbCBET00gZWxlbWVudHMgZnJvbSBoZXJlLCBvbmx5IGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBwYXJhbWV0ZXJzIGFyZSBhbGxvd2VkXG5cbmNvbnN0IEFQSV9LRVkgPSBcIjViMzIyNGFmMGZkZTRiYjk5MjgyMDUyMjgyMzIyMTBcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb25EYXRhKSB7XG4gIC8vIGNvbnZlcnQgdG8gYXN5bmMgYXdhaXRcblxuICB0cnkge1xuICAgIGxldCBsb2NhdGlvbjtcblxuICAgIGlmIChsb2NhdGlvbkRhdGEudXJsID09PSB0cnVlKSB7XG4gICAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRGF0YS51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gbG9jYXRpb25EYXRhLmxvY2F0aW9uO1xuICAgIH1cbiAgICBjb25zdCBkYXlzID0gXCIzXCI7XG5cbiAgICBjb25zdCBVUkwgPSBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn0mZGF5cz0ke2RheXN9JmFxaT1ubyZhbGVydHM9bm9gO1xuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaChVUkwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG5cbiAgICBpZiAoIXdlYXRoZXJEYXRhLm9rKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdldFdlYXRoZXJEYXRhIGRvZXNuJ3Qgd29yayFcIik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWRXZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhLmpzb24oKTtcblxuICAgIHJldHVybiBwYXJzZWRXZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgY29uc29sZS5sb2coXCJ3b3JrcyEhISFcIik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc29ydERhdGEod2VhdGhlckRhdGEpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIXdlYXRoZXJEYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvY2F0aW9uIG5vdCBmb3VuZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgY29uc29sZS5sb2coXCJUVFRUVFRUVFRUVFwiKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgICBjb25zdCBjb3VudHJ5ID0gd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgICAvLyBjb25zdCB1cmwgPSA7XG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuXG4gICAgLy8gLS0tLUN1cnJlbnQgd2VhdGhlci0tLS0tLVxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gd2VhdGhlckRhdGEuY3VycmVudDtcblxuICAgIGNvbnN0IGFjdHVhbENlbHNpdXMgPSBjdXJyZW50V2VhdGhlci50ZW1wX2M7XG4gICAgY29uc3QgYWN0dWFsRmFocmVuaGVpdCA9IGN1cnJlbnRXZWF0aGVyLnRlbXBfZjtcbiAgICBjb25zdCBmZWVsc0xpa2VDZWxzaXVzID0gY3VycmVudFdlYXRoZXIuZmVlbHNsaWtlX2M7XG4gICAgY29uc3QgZmVlbHNMaWtlRmFocmVuaGVpdCA9IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9mO1xuXG4gICAgY29uc3QgY3VycmVudERlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBjb25zdCBjdXJyZW50VVYgPSBjdXJyZW50V2VhdGhlci51djtcblxuICAgIC8vIExvZyBjdXJyZW50IGRhdGFcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcik7XG5cbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLUNVUlJFTlQgREFUQS0tLS0tLVwiKTtcbiAgICBjb25zb2xlLmxvZyhgQWN0dWFsIFRlbXAoQyopOiAke2FjdHVhbENlbHNpdXN9YCk7XG4gICAgY29uc29sZS5sb2coYEFjdHVhbCBUZW1wKEYqKTogJHthY3R1YWxGYWhyZW5oZWl0fWApO1xuICAgIGNvbnNvbGUubG9nKGBGZWVscyBMaWtlIChDKik6ICR7ZmVlbHNMaWtlQ2Vsc2l1c31gKTtcbiAgICBjb25zb2xlLmxvZyhgRmVlbHMgTGlrZSAoRiopOiAke2ZlZWxzTGlrZUZhaHJlbmhlaXR9YCk7XG4gICAgY29uc29sZS5sb2coYERlc2NyaXB0aW9uOiBgICsgY3VycmVudERlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhcIlVWOiBcIiArIGN1cnJlbnRVVik7XG4gICAgLy8gYWRkIFVWIGxldmVsc1xuXG4gICAgLy8gLS0tLS1Gb3JlY2FzdCB3ZWF0aGVyLS0tLS1cblxuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0O1xuICAgIGNvbnN0IGF2Z0RheVRlbXAgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3RkYXk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLUZPUkVDQVNUIERBVEEgKERBWSktLS0tLS0tLVwiKTtcblxuICAgIGZvciAoY29uc3QgZWFjaCBvZiBhdmdEYXlUZW1wKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlYWNoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVhY2guZGF5KTtcbiAgICAgIC8vIHRlbXBzIGRpc3BsYXllZCBpbiBmIG9yIGMgZGVwZW5kaW5nIG9uIHdoaWNoIG9wdGlvbiBpcyBjaG9zZW5cbiAgICAgIC8vIGRheSBhdmVyYWdlIHRlbXBcbiAgICAgIC8vIGRheSBtYXggdGVtcFxuICAgICAgLy8gZGF5IG1pbiB0ZW1wXG4gICAgICAvLyBkZXNjcmlwdGlvbi9pY29uXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLUZPUkVDQVNUIERBVEEgKEhPVVIpLS0tLS0tLS1cIik7XG5cbiAgICBmb3IgKGNvbnN0IGVhY2ggb2YgYXZnRGF5VGVtcCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZWFjaC5ob3VyKTtcbiAgICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0QXJyYXkgPSBlYWNoLmhvdXI7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS1QRVIgSE9VUi0tLS0tXCIpO1xuXG4gICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIGhvdXJseUZvcmVjYXN0QXJyYXkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlcmF0b3IpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVyYXRvci50aW1lICsgXCI6IFwiICsgXCIgXCIgKyBpdGVyYXRvci5jb25kaXRpb24udGV4dCk7XG4gICAgICB9XG4gICAgICAvLyB0ZW1wcyBmIGFuZCBjIC0gZGlzcGxheXMgZGVwZW5kaW5nIG9uIHdoaWNoIG9wdGlvbiBpcyBjaG9zZW5cbiAgICAgIC8vIGRlc2NyaXB0aW9uIG9yIGljb25cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBjb3VudHJ5LFxuICAgICAgY3VycmVudFdlYXRoZXJEYXRhOiB7XG4gICAgICAgIGFjdHVhbENlbHNpdXMsXG4gICAgICAgIGFjdHVhbEZhaHJlbmhlaXQsXG4gICAgICAgIGZlZWxzTGlrZUNlbHNpdXMsXG4gICAgICAgIGZlZWxzTGlrZUZhaHJlbmhlaXQsXG4gICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbixcbiAgICAgICAgY3VycmVudFVWLFxuICAgICAgfSxcbiAgICAgIGF2Z0RheVRlbXAsXG4gICAgICAvLyBkYWlseVdlYXRoZXJEYXRhOiB7XG4gICAgICAvLyAgIGF2Z0RheVRlbXBDZWxzaXVzLFxuICAgICAgLy8gfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwic29ydCBkYXRhIGZuXCIpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG4vLyBzb3J0RGF0YSgpO1xuXG5hc3luYyBmdW5jdGlvbiBhdXRvY29tcGxldGUoc2VhcmNoSW5wdXRWYWx1ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoSW5wdXRWYWx1ZTtcbiAgICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuXG4gICAgY29uc3QgYXV0b2NvbXBsZXRlVVJMID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufWA7XG5cbiAgICBjb25zdCBhdXRvQ29tcGxldGVSZXN1bHRzID0gYXdhaXQgZmV0Y2goYXV0b2NvbXBsZXRlVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuXG4gICAgY29uc3QgcGFyc2VkQXV0b2NvbXBsZXRlUmVzdWx0ID0gYXdhaXQgYXV0b0NvbXBsZXRlUmVzdWx0cy5qc29uKCk7XG5cbiAgICByZXR1cm4gcGFyc2VkQXV0b2NvbXBsZXRlUmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG4vLyBTZW5kIGxvY2F0aW9uIGRhdGEgdG8gc2VydmVyXG5hc3luYyBmdW5jdGlvbiByZXRyaWV2ZUluZm8obG9jYXRpb24sIHVybCkge1xuICAvLyBpbmNyZWFzZXMgY291cGxpbmcsIGZpbmQgYW4gYWx0ZXJuYXRpdmUgbGF0ZXJcblxuICBjb25zb2xlLmxvZyh1cmwpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0ge1xuICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgdXJsOiB1cmwsXG4gICAgfTtcbiAgICBpZiAoIWxvY2F0aW9uRGF0YS5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uRGF0YSk7XG5cbiAgICBjb25zdCBzb3J0ZWREYXRhID0gYXdhaXQgc29ydERhdGEod2VhdGhlckRhdGEpO1xuXG4gICAgaWYgKCF3ZWF0aGVyRGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmFsRGF0YSA9IHtcbiAgICAgIHNlYXJjaFJlc3VsdDogc29ydGVkRGF0YS5sb2NhdGlvbiArIFwiLCBcIiArIHNvcnRlZERhdGEuY291bnRyeSxcbiAgICAgIGZpbmFsRGF0YTogc29ydGVkRGF0YSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZpbmFsRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgYXV0b2NvbXBsZXRlLCByZXRyaWV2ZUluZm8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVUZW1wcywgZGFpbHlEaXZzRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL2RvbUFjdGlvblwiO1xuaW1wb3J0IHsgc2VhcmNoRXZlbnRzLCByZW1vdmVEcm9wRG93biB9IGZyb20gXCIuL2Ryb3BEb3duQ3JlYXRpb25cIjtcblxuY29uc29sZS5sb2coXCJ3ZWJwYWNrIHdvcmtzIVwiKTtcblxuc2VhcmNoRXZlbnRzKCk7XG4vLyBVbmNvbW1lbnQgbGF0ZXJcblxuLy8gQWRkIGV2ZW50TGlzdGVuZXJzXG5yZW1vdmVEcm9wRG93bigpO1xudG9nZ2xlVGVtcHMoKTtcbmRhaWx5RGl2c0V2ZW50TGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
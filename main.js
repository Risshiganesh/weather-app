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
    /* background-color: #800020; */
    background-color: black;
    /* position: relative; */
    

}

body * {
    /* border: 3px solid red; */
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

/* .primary-container{

} */

.background-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    /* border: 2px solid fuchsia; */
    display: grid;
    align-items: center;
    justify-items: center;
}

#background-video{
    width: 100vw;
    height: 100vh;
    /* border: 2px solid gold; */
    /* overflow: hidden; */
}

/* .background-container > video {
    overflow: hidden;
    margin: auto;
} */

.main-container{
    display: grid;
    position: absolute;
    /* gap: 10px; */
    height: 100%;
    grid-template-rows: 45px 70px 1fr 35px;
    overflow: auto;
    z-index: 1;
    gap: 10px;
}


.main-error-container{

    position: fixed;
    background-color: rgba(83, 7, 0, 0.514);
    width: 100%;
    height: 100%;
    z-index: 3;
    
    align-items: center;
    justify-items: center;
    grid-template-rows: 50px 1fr;
    padding: 5px;
    gap: 10px;
    display: none;
}

.error-title{
    align-self: end;
    font-weight: bold;
    padding: 5px;
    border-bottom: 2px solid red ;
}

.error-display-container{
    align-self: start;
    border: 2px solid rgb(151, 0, 0);
    border-radius: 5px;
    padding: 10px;
    width: 300px;
    /* height: 100%; */
    display: grid;
    /* grid-auto-flow: row; */
    gap: 10px;

    max-height: 100%;
    overflow: auto;

}

.error-message{
    border: 2px solid red;
    border-radius: 5px;
    padding: 10px;
    background-color: rgba(128, 0, 0, 0.651);
}

.display-error{
    display: grid;
}

.loading-screen{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.548);
    width: 100%;
    height: 100%;
    z-index: 2;
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


.logo-container {
    /* text-align: center; */
    /* border: 2px solid gold; */
    display: grid;
    justify-items: center;
    align-items: start;

}

.logo-div {
    /* border: 2px solid red; */
    width: 170px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    background-color: rgba(128, 128, 128, 0.425);
    border-radius: 0px 0px 10px 10px;
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-auto-flow: column;
    gap: 5px;
}

.logo-icon {
    display: grid;
    justify-items: end;
}

.logo-icon > img{
    width: 20px;
}

.logo-text{
    text-align: start;
}





/* height is 70px */
#search-form{
    display: grid;
    /* align-items: center; */
    align-items: center;
    /* position: relative; */
    /* border: 3px solid aqua; */
    padding: 5px;
    
}

.search-container{
    display: grid;
    column-gap: 10px;
    grid-template-columns: 1fr 50px 100px;
    /* grid-template-columns: 1fr 1fr 1fr; */
    position: relative;
    /* border: 1px solid red; */
    align-self: end;
}

#search-location {
    appearance: none;
    border: 1px solid grey;
    height: 30px;
    /* width: 100px; */
    min-width: 100px;
    color: black;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;

}

#geolocation-button{

    background-color: rgb(97, 97, 97);
    border: 1px solid grey;
    border-radius: 5px;
}

#search-button{

    background-color: rgb(97, 97, 97);
    border: 1px solid grey;
    border-radius: 5px;
}

.drop-down-container{
    /* border: 1px solid greenyellow; */
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

.status-message{
    font-weight: bold;
    padding: 5px;
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

.current-weather-display *{
    /* border: 2px solid purple; */
}

.current-weather-display{
    border-radius: 100%;
    height: 250px;
    width: 250px;
    border: 2px solid lightcoral;
    background-color: #80002067;
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
}

.temp-display{
    /* border: 2px solid fuchsia; */
    font-size: 30px;
    font-weight: bold;
    align-self: flex-end;
}

.icon-current{
    align-self: end;
    align-items: end;
    justify-items: center;
}

.icon-current > img {
    height: 55px;
}

.weather-desc{
    font-size: 14px;
    font-weight: bold;
    width: 150px;
    /* align-self: start; */
}

.uv-index{
    align-self: start;
    font-size: 14px;
    /* font-weight: bold; */
}

.toggle-container{
    display: grid;
    gap: 5px;
}

.toggle-container > label{
    font-size: 12px;
}

#temp-toggle{
    background-color: rgba(5, 67, 138, 0.514);
    border-radius: 5px;
    border: 2px solid rgba(0, 153, 255, 0.658);
    padding: 5px;
    height: 30px;

    font-weight: bold;
}

.three-day-average{
    display: grid;

    justify-items: center;
    align-items: center;
    overflow: auto;
    /* width: 90%; */
    height: 210px;

    border: 2px solid grey;
        padding: 15px;
        border-radius: 15px;
        background-color: rgba(56, 56, 56, 0.637);
    

}


.three-day-average-container{
    display: grid;
    /* height: 100%; */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    justify-items: center;
    /* height: 200px; */
    align-items: center;
    /* overflow: auto; */

    /* border: 2px solid grey; */
    /* padding: 10px; */
    border-radius: 15px;
    /* background-color: rgba(56, 56, 56, 0.637); */
}


.daily {

    display: grid;
    grid-template-rows: repeat(5, 1fr);
    border: 2px solid grey;
    height: 100%;
    height: 170px;
    width: 170px;
    text-align: center;
    justify-items: center;
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
    gap: 5px;

    border-radius: 15px;

}

.selected-daily{
    background-color: #085c0056;
    border: 2px solid rgb(2, 206, 2);
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

    border: 3px solid grey;
    width: 90%;
    padding: 10px;
    border-radius: 15px;
    background-color: rgba(56, 56, 56, 0.637);

}

.hourly{

    width: 150px;
    height: 150px;
    border: 3px solid grey;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    text-align: center;
    justify-items: center;
    padding: 10px;
    font-size: 14px;
    border-radius: 15px;
    font-weight: bold;

    font-size: 12px;
    gap: 3px;
}

.icon-hourly>img {
    width: 40px;
}

/* .condition-hourly{
    font-size: 12px;
}

.avg-temp-hourly{
    font-size: 12px;
}

.uv-hourly{
    font-size: 12px;
} */

.footer-container{
    border-top: 1px solid grey;
    display: grid;
    justify-items: center;
    display: grid;
    align-items: center;
}

.footer{
    /* border: 2px solid gold; */
    padding: 5px;
    font-size: 12px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    /* background-color: #800020; */\n    background-color: black;\n    /* position: relative; */\n    \n\n}\n\nbody * {\n    /* border: 3px solid red; */\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* .primary-container{\n\n} */\n\n.background-container {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    /* border: 2px solid fuchsia; */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n#background-video{\n    width: 100vw;\n    height: 100vh;\n    /* border: 2px solid gold; */\n    /* overflow: hidden; */\n}\n\n/* .background-container > video {\n    overflow: hidden;\n    margin: auto;\n} */\n\n.main-container{\n    display: grid;\n    position: absolute;\n    /* gap: 10px; */\n    height: 100%;\n    grid-template-rows: 45px 70px 1fr 35px;\n    overflow: auto;\n    z-index: 1;\n    gap: 10px;\n}\n\n\n.main-error-container{\n\n    position: fixed;\n    background-color: rgba(83, 7, 0, 0.514);\n    width: 100%;\n    height: 100%;\n    z-index: 3;\n    \n    align-items: center;\n    justify-items: center;\n    grid-template-rows: 50px 1fr;\n    padding: 5px;\n    gap: 10px;\n    display: none;\n}\n\n.error-title{\n    align-self: end;\n    font-weight: bold;\n    padding: 5px;\n    border-bottom: 2px solid red ;\n}\n\n.error-display-container{\n    align-self: start;\n    border: 2px solid rgb(151, 0, 0);\n    border-radius: 5px;\n    padding: 10px;\n    width: 300px;\n    /* height: 100%; */\n    display: grid;\n    /* grid-auto-flow: row; */\n    gap: 10px;\n\n    max-height: 100%;\n    overflow: auto;\n\n}\n\n.error-message{\n    border: 2px solid red;\n    border-radius: 5px;\n    padding: 10px;\n    background-color: rgba(128, 0, 0, 0.651);\n}\n\n.display-error{\n    display: grid;\n}\n\n.loading-screen{\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.548);\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    /* display: grid; */\n    display: none;\n    align-items: center;\n    justify-items: center;\n    \n}\n\n.loading-screen * {\n    /* border: 2px solid red; */\n}\n\n.enable-loading-screen{\n    display: grid;\n}\n\n.loading-div{\n    display: grid;\n    gap: 15px;\n}\n\n.loading-gif-container{\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.loading-gif-container>img{\n    width: 50px;\n}\n\n.loading-text {\n\n    text-align: center;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n\n}\n\n\n.logo-container {\n    /* text-align: center; */\n    /* border: 2px solid gold; */\n    display: grid;\n    justify-items: center;\n    align-items: start;\n\n}\n\n.logo-div {\n    /* border: 2px solid red; */\n    width: 170px;\n    text-align: center;\n    padding: 10px;\n    font-weight: bold;\n    font-size: 16px;\n    background-color: rgba(128, 128, 128, 0.425);\n    border-radius: 0px 0px 10px 10px;\n    display: grid;\n    grid-template-columns: 30px 1fr;\n    grid-auto-flow: column;\n    gap: 5px;\n}\n\n.logo-icon {\n    display: grid;\n    justify-items: end;\n}\n\n.logo-icon > img{\n    width: 20px;\n}\n\n.logo-text{\n    text-align: start;\n}\n\n\n\n\n\n/* height is 70px */\n#search-form{\n    display: grid;\n    /* align-items: center; */\n    align-items: center;\n    /* position: relative; */\n    /* border: 3px solid aqua; */\n    padding: 5px;\n    \n}\n\n.search-container{\n    display: grid;\n    column-gap: 10px;\n    grid-template-columns: 1fr 50px 100px;\n    /* grid-template-columns: 1fr 1fr 1fr; */\n    position: relative;\n    /* border: 1px solid red; */\n    align-self: end;\n}\n\n#search-location {\n    appearance: none;\n    border: 1px solid grey;\n    height: 30px;\n    /* width: 100px; */\n    min-width: 100px;\n    color: black;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: #fff;\n\n}\n\n#geolocation-button{\n\n    background-color: rgb(97, 97, 97);\n    border: 1px solid grey;\n    border-radius: 5px;\n}\n\n#search-button{\n\n    background-color: rgb(97, 97, 97);\n    border: 1px solid grey;\n    border-radius: 5px;\n}\n\n.drop-down-container{\n    /* border: 1px solid greenyellow; */\n    height: 0px;\n    position: relative;\n    width: 100%;\n    align-self: start;\n\n}\n\n.search-drop-down{\n    position: absolute;\n    /* border: 3px solid navy; */\n    /* height: 300px; */\n    width: 100%;\n    z-index: 1;\n    background-color: blueviolet;\n}\n\n.drop-down-item{\n    padding: 5px;\n}\n\n.drop-down-item:hover{\n\n    background-color: yellow;\n}\n\n.status-display {\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.status-message{\n    font-weight: bold;\n    padding: 5px;\n}\n\n\n\n.display-container{\n    /* align-content: space-between; */\n    display: grid;\n\n    position: relative;\n    gap: 15px;\n    justify-items: center;\n\n}\n\n.current-weather-container{\n    height: 260px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.current-weather-display *{\n    /* border: 2px solid purple; */\n}\n\n.current-weather-display{\n    border-radius: 100%;\n    height: 250px;\n    width: 250px;\n    border: 2px solid lightcoral;\n    background-color: #80002067;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.temp-display{\n    /* border: 2px solid fuchsia; */\n    font-size: 30px;\n    font-weight: bold;\n    align-self: flex-end;\n}\n\n.icon-current{\n    align-self: end;\n    align-items: end;\n    justify-items: center;\n}\n\n.icon-current > img {\n    height: 55px;\n}\n\n.weather-desc{\n    font-size: 14px;\n    font-weight: bold;\n    width: 150px;\n    /* align-self: start; */\n}\n\n.uv-index{\n    align-self: start;\n    font-size: 14px;\n    /* font-weight: bold; */\n}\n\n.toggle-container{\n    display: grid;\n    gap: 5px;\n}\n\n.toggle-container > label{\n    font-size: 12px;\n}\n\n#temp-toggle{\n    background-color: rgba(5, 67, 138, 0.514);\n    border-radius: 5px;\n    border: 2px solid rgba(0, 153, 255, 0.658);\n    padding: 5px;\n    height: 30px;\n\n    font-weight: bold;\n}\n\n.three-day-average{\n    display: grid;\n\n    justify-items: center;\n    align-items: center;\n    overflow: auto;\n    /* width: 90%; */\n    height: 210px;\n\n    border: 2px solid grey;\n        padding: 15px;\n        border-radius: 15px;\n        background-color: rgba(56, 56, 56, 0.637);\n    \n\n}\n\n\n.three-day-average-container{\n    display: grid;\n    /* height: 100%; */\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n    /* height: 200px; */\n    align-items: center;\n    /* overflow: auto; */\n\n    /* border: 2px solid grey; */\n    /* padding: 10px; */\n    border-radius: 15px;\n    /* background-color: rgba(56, 56, 56, 0.637); */\n}\n\n\n.daily {\n\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    border: 2px solid grey;\n    height: 100%;\n    height: 170px;\n    width: 170px;\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n    font-size: 12px;\n    font-weight: bold;\n    gap: 5px;\n\n    border-radius: 15px;\n\n}\n\n.selected-daily{\n    background-color: #085c0056;\n    border: 2px solid rgb(2, 206, 2);\n}\n.daily *{\n\n    /* border: 2px solid navy; */\n}\n\n.hourly-average{\n    height: 200px;\n    overflow: auto;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-items: center;\n\n    border: 3px solid grey;\n    width: 90%;\n    padding: 10px;\n    border-radius: 15px;\n    background-color: rgba(56, 56, 56, 0.637);\n\n}\n\n.hourly{\n\n    width: 150px;\n    height: 150px;\n    border: 3px solid grey;\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n    font-size: 14px;\n    border-radius: 15px;\n    font-weight: bold;\n\n    font-size: 12px;\n    gap: 3px;\n}\n\n.icon-hourly>img {\n    width: 40px;\n}\n\n/* .condition-hourly{\n    font-size: 12px;\n}\n\n.avg-temp-hourly{\n    font-size: 12px;\n}\n\n.uv-hourly{\n    font-size: 12px;\n} */\n\n.footer-container{\n    border-top: 1px solid grey;\n    display: grid;\n    justify-items: center;\n    display: grid;\n    align-items: center;\n}\n\n.footer{\n    /* border: 2px solid gold; */\n    padding: 5px;\n    font-size: 12px;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/background-video.mp4":
/*!*****************************************!*\
  !*** ./src/assets/background-video.mp4 ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "background-video.180cd1ef727f81cf5a7bbdfe3768b060.mp4");

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

/***/ "./src/createDOM.js":
/*!**************************!*\
  !*** ./src/createDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendDOM: () => (/* binding */ appendDOM)
/* harmony export */ });
/* harmony import */ var _assets_background_video_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/background-video.mp4 */ "./src/assets/background-video.mp4");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");




function appendBackgroundVideo() {
  const backgroundContainer = document.querySelector(".background-container");

  const createVideoElement = document.createElement("video");

  createVideoElement.setAttribute("autoplay", "");
  createVideoElement.setAttribute("muted", "");
  createVideoElement.setAttribute("loop", "");
  createVideoElement.setAttribute("id", "background-video");

  const videoSource = document.createElement("source");
  videoSource.src = _assets_background_video_mp4__WEBPACK_IMPORTED_MODULE_0__["default"];
  videoSource.setAttribute("type", "video/mp4");

  createVideoElement.append(videoSource);
  backgroundContainer.append(createVideoElement);
}

function appendIcons() {
  const logoIconDiv = document.querySelector(".logo-icon");
  const logoImg = new Image();
  logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  logoIconDiv.append(logoImg);
}

function appendDOM() {
  appendBackgroundVideo();
  appendIcons();
}




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
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorHandling */ "./src/errorHandling.js");

// import { errorDisplay } from "./searchAction";


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
      const errorMsg = "Error in toggleTemps: " + error;
      console.error(errorMsg);
      (0,_errorHandling__WEBPACK_IMPORTED_MODULE_1__.errorDisplay)(errorMsg);
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

/***/ "./src/errorHandling.js":
/*!******************************!*\
  !*** ./src/errorHandling.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorDisplay: () => (/* binding */ errorDisplay)
/* harmony export */ });
function errorDisplay(error) {
  const mainErrorContainer = document.querySelector(".main-error-container");

  console.log(mainErrorContainer);
  if (!mainErrorContainer.classList.contains("display-error")) {
    mainErrorContainer.classList.add("display-error");
    console.log("display error works");
  }

  //   mainErrorContainer.classList.add(".display-error");
  const errorDisplayContainer = document.querySelector(
    ".error-display-container"
  );

  //   let i = 0;

  //   while (i < 30) {
  //     const errorMessageDiv = document.createElement("div");
  //     errorMessageDiv.classList.add("error-message");
  //     errorMessageDiv.textContent = error;
  //     errorDisplayContainer.append(errorMessageDiv);

  //     i++;
  //   }

  const errorMessageDiv = document.createElement("div");
  errorMessageDiv.classList.add("error-message");
  errorMessageDiv.textContent = error;
  errorDisplayContainer.append(errorMessageDiv);
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
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandling */ "./src/errorHandling.js");
// import { errorDisplay } from "./searchAction";

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
    const errorMsg = "Error in getGeolocationData: " + error;
    console.error(errorMsg);
    (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.errorDisplay)(errorMsg);
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
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorHandling */ "./src/errorHandling.js");
// import { errorDisplay } from "./searchAction";


// const searchButton = document.querySelector("#search-button");

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
      throw new Error("getWeatherData doesn't work!");

      // console.log(previousData);

      return;
    }

    const parsedWeatherData = await weatherData.json();

    // previousData = parsedWeatherData;

    return parsedWeatherData;
  } catch (error) {
    const errorMsg = "Error in getWeatherData: " + error;
    console.error(errorMsg);
    (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.errorDisplay)(errorMsg);
  }
}

async function sortData(weatherData) {
  try {
    if (!weatherData) {
      console.log("location not found");
      return;
    }
    console.log(weatherData);

    console.log("SORTING DATA");

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
    const errorMsg = "Error in sortData: " + error;
    console.error(errorMsg);
    (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.errorDisplay)(errorMsg);
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
    const errorMsg = "Error in autocomplete: " + error;
    console.error(errorMsg);
    (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.errorDisplay)(errorMsg);
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
    const errorMsg = "Error in retrieveInfo: " + error;
    console.error(errorMsg);
    (0,_errorHandling__WEBPACK_IMPORTED_MODULE_0__.errorDisplay)(errorMsg);
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
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorHandling */ "./src/errorHandling.js");



// import { errorDisplay } from "./searchAction";


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
    const errorMsg = "Error in initialise: " + error;
    console.error(errorMsg);
    (0,_errorHandling__WEBPACK_IMPORTED_MODULE_2__.errorDisplay)(errorMsg);
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
/* harmony import */ var _errorHandling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorHandling.js */ "./src/errorHandling.js");












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
      const errorMsg = "Error in searchEvents(searchInput): " + error;
      console.error(errorMsg);
      (0,_errorHandling_js__WEBPACK_IMPORTED_MODULE_5__.errorDisplay)(errorMsg);
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
      const errorMsg = "Error in searchEvents(searchButton): " + error;
      console.error(errorMsg);
      (0,_errorHandling_js__WEBPACK_IMPORTED_MODULE_5__.errorDisplay)(errorMsg);
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
        const errorMsg = "Error in dropDownClickEvent: " + error;
        console.error(errorMsg);
        (0,_errorHandling_js__WEBPACK_IMPORTED_MODULE_5__.errorDisplay)(errorMsg);
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
      const errorMsg =
        "Error in geolocationBtnListener(geolocationButton): " + error;
      console.error(errorMsg);
      (0,_errorHandling_js__WEBPACK_IMPORTED_MODULE_5__.errorDisplay)(errorMsg);
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

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23981178e51e0062f190.png";

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
/* harmony import */ var _createDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createDOM */ "./src/createDOM.js");
/* harmony import */ var _initialiser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialiser */ "./src/initialiser.js");
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation */ "./src/geolocation.js");
/* harmony import */ var _domAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domAction */ "./src/domAction.js");
/* harmony import */ var _searchAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchAction */ "./src/searchAction.js");







console.log("webpack works!");

(0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.appendDOM)();

(0,_searchAction__WEBPACK_IMPORTED_MODULE_5__.searchEvents)();
// Uncomment later
(0,_initialiser__WEBPACK_IMPORTED_MODULE_2__.initialise)();
// TEST

function locationButton() {
  const coordinates = (0,_geolocation__WEBPACK_IMPORTED_MODULE_3__.getGeolocationData)().then(function (data) {
    console.log("coordinates");
    console.log(data);

    return data;
  });
}

// Add eventListeners
(0,_searchAction__WEBPACK_IMPORTED_MODULE_5__.geolocationBtnEvent)();
(0,_searchAction__WEBPACK_IMPORTED_MODULE_5__.removeDropDown)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_4__.toggleTemps)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_4__.dailyDivsEventListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFB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IjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2JhY2tncm91bmQtdmlkZW8ubXA0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3JlYXRlRE9NLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUFjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9lcnJvckhhbmRsaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dlb2xvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5pdGlhbGlzZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VhcmNoQWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBcbn1cblxuaHRtbCxcbmJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM4MDAwMjA7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIFxuXG59XG5cbmJvZHkgKiB7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyogLnByaW1hcnktY29udGFpbmVye1xuXG59ICovXG5cbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuI2JhY2tncm91bmQtdmlkZW97XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ29sZDsgKi9cbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xufVxuXG4vKiAuYmFja2dyb3VuZC1jb250YWluZXIgPiB2aWRlbyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IGF1dG87XG59ICovXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBnYXA6IDEwcHg7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCA3MHB4IDFmciAzNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5cbi5tYWluLWVycm9yLWNvbnRhaW5lcntcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCA3LCAwLCAwLjUxNCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lcnJvci10aXRsZXtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQgO1xufVxuXG4uZXJyb3ItZGlzcGxheS1jb250YWluZXJ7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1MSwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdyaWQtYXV0by1mbG93OiByb3c7ICovXG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcblxufVxuXG4uZXJyb3ItbWVzc2FnZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDAsIDAsIDAuNjUxKTtcbn1cblxuLmRpc3BsYXktZXJyb3J7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvYWRpbmctc2NyZWVue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG5cbi5sb2FkaW5nLXNjcmVlbiAqIHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXG59XG5cbi5lbmFibGUtbG9hZGluZy1zY3JlZW57XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvYWRpbmctZGl2e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4ubG9hZGluZy1naWYtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLWdpZi1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ubG9hZGluZy10ZXh0IHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ29sZDsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG5cbn1cblxuLmxvZ28tZGl2IHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbn1cblxuLmxvZ28taWNvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG59XG5cbi5sb2dvLWljb24gPiBpbWd7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sb2dvLXRleHR7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cblxuXG5cblxuLyogaGVpZ2h0IGlzIDcwcHggKi9cbiNzZWFyY2gtZm9ybXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgYXF1YTsgKi9cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgXG59XG5cbi5zZWFyY2gtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1MHB4IDEwMHB4O1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG59XG5cbiNzZWFyY2gtbG9jYXRpb24ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLyogd2lkdGg6IDEwMHB4OyAqL1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbn1cblxuI2dlb2xvY2F0aW9uLWJ1dHRvbntcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgOTcsIDk3KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3NlYXJjaC1idXR0b257XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kcm9wLWRvd24tY29udGFpbmVye1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xuICAgIGhlaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcblxufVxuXG4uc2VhcmNoLWRyb3AtZG93bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgbmF2eTsgKi9cbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbn1cblxuLmRyb3AtZG93bi1pdGVte1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmRyb3AtZG93bi1pdGVtOmhvdmVye1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uc3RhdHVzLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGF0dXMtbWVzc2FnZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cblxuXG4uZGlzcGxheS1jb250YWluZXJ7XG4gICAgLyogYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGdhcDogMTVweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG59XG5cbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheSAqe1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTsgKi9cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1kaXNwbGF5e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRjb3JhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwNjc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZW1wLWRpc3BsYXl7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5pY29uLWN1cnJlbnR7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbi1jdXJyZW50ID4gaW1nIHtcbiAgICBoZWlnaHQ6IDU1cHg7XG59XG5cbi53ZWF0aGVyLWRlc2N7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICAvKiBhbGlnbi1zZWxmOiBzdGFydDsgKi9cbn1cblxuLnV2LWluZGV4e1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbn1cblxuLnRvZ2dsZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbn1cblxuLnRvZ2dsZS1jb250YWluZXIgPiBsYWJlbHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbiN0ZW1wLXRvZ2dsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDY3LCAxMzgsIDAuNTE0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAxNTMsIDI1NSwgMC42NTgpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRocmVlLWRheS1hdmVyYWdle1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvKiB3aWR0aDogOTAlOyAqL1xuICAgIGhlaWdodDogMjEwcHg7XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNjM3KTtcbiAgICBcblxufVxuXG5cbi50aHJlZS1kYXktYXZlcmFnZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cblxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICovXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC42MzcpOyAqL1xufVxuXG5cbi5kYWlseSB7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBnYXA6IDVweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLnNlbGVjdGVkLWRhaWx5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODVjMDA1NjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMiwgMjA2LCAyKTtcbn1cbi5kYWlseSAqe1xuXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgbmF2eTsgKi9cbn1cblxuLmhvdXJseS1hdmVyYWdle1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNjM3KTtcblxufVxuXG4uaG91cmx5e1xuXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGdhcDogM3B4O1xufVxuXG4uaWNvbi1ob3VybHk+aW1nIHtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLyogLmNvbmRpdGlvbi1ob3VybHl7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYXZnLXRlbXAtaG91cmx5e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnV2LWhvdXJseXtcbiAgICBmb250LXNpemU6IDEycHg7XG59ICovXG5cbi5mb290ZXItY29udGFpbmVye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvb3RlcntcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBnb2xkOyAqL1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsd0JBQXdCOzs7QUFHNUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Is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O0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBcXG5cXG59XFxuXFxuYm9keSAqIHtcXG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4vKiAucHJpbWFyeS1jb250YWluZXJ7XFxuXFxufSAqL1xcblxcbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYmFja2dyb3VuZC12aWRlb3tcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBnb2xkOyAqL1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbn1cXG5cXG4vKiAuYmFja2dyb3VuZC1jb250YWluZXIgPiB2aWRlbyB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbjogYXV0bztcXG59ICovXFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggNzBweCAxZnIgMzVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuLm1haW4tZXJyb3ItY29udGFpbmVye1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODMsIDcsIDAsIDAuNTE0KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMztcXG4gICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lcnJvci10aXRsZXtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkIDtcXG59XFxuXFxuLmVycm9yLWRpc3BsYXktY29udGFpbmVye1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1MSwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtYXV0by1mbG93OiByb3c7ICovXFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuXFxufVxcblxcbi5lcnJvci1tZXNzYWdle1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDAsIDAsIDAuNjUxKTtcXG59XFxuXFxuLmRpc3BsYXktZXJyb3J7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5sb2FkaW5nLXNjcmVlbntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmxvYWRpbmctc2NyZWVuICoge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5lbmFibGUtbG9hZGluZy1zY3JlZW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5sb2FkaW5nLWRpdntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubG9hZGluZy1naWYtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2FkaW5nLWdpZi1jb250YWluZXI+aW1ne1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmxvYWRpbmctdGV4dCB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG59XFxuXFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBnb2xkOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXG59XFxuXFxuLmxvZ28tZGl2IHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQyNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmxvZ28taWNvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuLmxvZ28taWNvbiA+IGltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5sb2dvLXRleHR7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBoZWlnaHQgaXMgNzBweCAqL1xcbiNzZWFyY2gtZm9ybXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBhcXVhOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweCAxMDBweDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuI3NlYXJjaC1sb2NhdGlvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLyogd2lkdGg6IDEwMHB4OyAqL1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG59XFxuXFxuI2dlb2xvY2F0aW9uLWJ1dHRvbntcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9ue1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRyb3AtZG93bi1jb250YWluZXJ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuXFxufVxcblxcbi5zZWFyY2gtZHJvcC1kb3due1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIG5hdnk7ICovXFxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uZHJvcC1kb3duLWl0ZW17XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmRyb3AtZG93bi1pdGVtOmhvdmVye1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5zdGF0dXMtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN0YXR1cy1tZXNzYWdle1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5cXG5cXG4uZGlzcGxheS1jb250YWluZXJ7XFxuICAgIC8qIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheSAqe1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7ICovXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheXtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwNjc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGVtcC1kaXNwbGF5e1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhOyAqL1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmljb24tY3VycmVudHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWN1cnJlbnQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxufVxcblxcbi53ZWF0aGVyLWRlc2N7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgLyogYWxpZ24tc2VsZjogc3RhcnQ7ICovXFxufVxcblxcbi51di1pbmRleHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxufVxcblxcbi50b2dnbGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZ2dsZS1jb250YWluZXIgPiBsYWJlbHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jdGVtcC10b2dnbGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgNjcsIDEzOCwgMC41MTQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMTUzLCAyNTUsIDAuNjU4KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGhyZWUtZGF5LWF2ZXJhZ2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIHdpZHRoOiA5MCU7ICovXFxuICAgIGhlaWdodDogMjEwcHg7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC42MzcpO1xcbiAgICBcXG5cXG59XFxuXFxuXFxuLnRocmVlLWRheS1hdmVyYWdlLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICovXFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC42MzcpOyAqL1xcbn1cXG5cXG5cXG4uZGFpbHkge1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbn1cXG5cXG4uc2VsZWN0ZWQtZGFpbHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODVjMDA1NjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIsIDIwNiwgMik7XFxufVxcbi5kYWlseSAqe1xcblxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBuYXZ5OyAqL1xcbn1cXG5cXG4uaG91cmx5LWF2ZXJhZ2V7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC42MzcpO1xcblxcbn1cXG5cXG4uaG91cmx5e1xcblxcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4uaWNvbi1ob3VybHk+aW1nIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi8qIC5jb25kaXRpb24taG91cmx5e1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5hdmctdGVtcC1ob3VybHl7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnV2LWhvdXJseXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn0gKi9cXG5cXG4uZm9vdGVyLWNvbnRhaW5lcntcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ29sZDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJhY2tncm91bmQtdmlkZW8uMTgwY2QxZWY3MjdmODFjZjVhN2JiZGZlMzc2OGIwNjAubXA0XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYmFja2dyb3VuZFZpZGVvIGZyb20gXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLXZpZGVvLm1wNFwiO1xuXG5pbXBvcnQgbG9nb0ljb24gZnJvbSBcIi4vYXNzZXRzL2xvZ28ucG5nXCI7XG5cbmZ1bmN0aW9uIGFwcGVuZEJhY2tncm91bmRWaWRlbygpIHtcbiAgY29uc3QgYmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgY3JlYXRlVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuXG4gIGNyZWF0ZVZpZGVvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBcIlwiKTtcbiAgY3JlYXRlVmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcIm11dGVkXCIsIFwiXCIpO1xuICBjcmVhdGVWaWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwibG9vcFwiLCBcIlwiKTtcbiAgY3JlYXRlVmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFja2dyb3VuZC12aWRlb1wiKTtcblxuICBjb25zdCB2aWRlb1NvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG4gIHZpZGVvU291cmNlLnNyYyA9IGJhY2tncm91bmRWaWRlbztcbiAgdmlkZW9Tb3VyY2Uuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInZpZGVvL21wNFwiKTtcblxuICBjcmVhdGVWaWRlb0VsZW1lbnQuYXBwZW5kKHZpZGVvU291cmNlKTtcbiAgYmFja2dyb3VuZENvbnRhaW5lci5hcHBlbmQoY3JlYXRlVmlkZW9FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kSWNvbnMoKSB7XG4gIGNvbnN0IGxvZ29JY29uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvLWljb25cIik7XG4gIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ltZy5zcmMgPSBsb2dvSWNvbjtcbiAgbG9nb0ljb25EaXYuYXBwZW5kKGxvZ29JbWcpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRET00oKSB7XG4gIGFwcGVuZEJhY2tncm91bmRWaWRlbygpO1xuICBhcHBlbmRJY29ucygpO1xufVxuXG5leHBvcnQgeyBhcHBlbmRET00gfTtcbiIsImltcG9ydCB7IHdlYXRoZXJSZXN1bHQsIHRvZGF5SG91cmx5RGF0YSB9IGZyb20gXCIuL3NlYXJjaEFjdGlvblwiO1xuLy8gaW1wb3J0IHsgZXJyb3JEaXNwbGF5IH0gZnJvbSBcIi4vc2VhcmNoQWN0aW9uXCI7XG5pbXBvcnQgeyBlcnJvckRpc3BsYXkgfSBmcm9tIFwiLi9lcnJvckhhbmRsaW5nXCI7XG5cbmxldCBob3VybHlBcnJheTtcblxuY29uc3QgdGVtcERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtZGlzcGxheVwiKTtcbmNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLWN1cnJlbnRcIik7XG5jb25zdCB3ZWF0aGVyRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kZXNjXCIpO1xuY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXYtaW5kZXhcIik7XG5cbmNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAtdG9nZ2xlXCIpO1xuXG5jb25zdCBkYWlseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhaWx5XCIpO1xuXG5mdW5jdGlvbiB0b2dnbGVUZW1wcygpIHtcbiAgbGV0IGNob3NlblRlbXAgPSB0ZW1wVG9nZ2xlLnRleHRDb250ZW50O1xuXG4gIHRlbXBUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICAgIHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPSBcIkZhaHJlbmhlaXRcIjtcbiAgICAgICAgY2hvc2VuVGVtcCA9IFwiRmFocmVuaGVpdFwiO1xuXG4gICAgICAgIC8vIGZ1bmN0aW9uaXNlIHRoaXM/XG4gICAgICAgIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJSZXN1bHQpO1xuICAgICAgICBpZiAoIWhvdXJseUFycmF5KSB7XG4gICAgICAgICAgZGlzcGxheUhvdXJseURPTSh0b2RheUhvdXJseURhdGEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIRUxJXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkZhaHJlbmhlaXRcIikge1xuICAgICAgICB0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID0gXCJDZWxzaXVzXCI7XG4gICAgICAgIGNob3NlblRlbXAgPSBcIkNlbHNpdXNcIjtcbiAgICAgICAgdXBkYXRlRE9NV2l0aERhdGEod2VhdGhlclJlc3VsdCk7XG5cbiAgICAgICAgaWYgKCFob3VybHlBcnJheSkge1xuICAgICAgICAgIGRpc3BsYXlIb3VybHlET00odG9kYXlIb3VybHlEYXRhKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUhvdXJseURPTShob3VybHlBcnJheSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJDT1BURVJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiVEVTVFRUVFRcIik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSBcIkVycm9yIGluIHRvZ2dsZVRlbXBzOiBcIiArIGVycm9yO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgICBlcnJvckRpc3BsYXkoZXJyb3JNc2cpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGlmICghd2VhdGhlckRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gd2VhdGhlckRhdGEuZmluYWxEYXRhLmN1cnJlbnRXZWF0aGVyRGF0YTtcbiAgY29uc3QgYXZnRGF5VGVtcCA9IHdlYXRoZXJEYXRhLmZpbmFsRGF0YS5hdmdEYXlUZW1wO1xuXG4gIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgIGNvbnNvbGUubG9nKFwiSFNIU0hTSEhTSFNIU1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlckRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGF2Z0RheVRlbXApO1xuXG4gICAgdGVtcERpc3BsYXkudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEuYWN0dWFsQ2Vsc2l1cyArIFwiwrBDXCI7XG5cbiAgICBjb25zdCBpY29uc3JjID0gY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnRJY29uO1xuXG4gICAgYXBwZW5kSWNvbihjdXJyZW50SWNvbiwgaWNvbnNyYyk7XG4gICAgd2VhdGhlckRlc2MudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudERlc2NyaXB0aW9uO1xuICAgIHV2SW5kZXgudGV4dENvbnRlbnQgPSBcIlVWIEluZGV4OiBcIiArIGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50VVY7XG5cbiAgICBkaXNwbGF5RGFpbHlET00oYXZnRGF5VGVtcCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJGYWhyZW5oZWl0XCIpIHtcbiAgICBjb25zb2xlLmxvZyhcIllFUFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cbiAgICB0ZW1wRGlzcGxheS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5hY3R1YWxGYWhyZW5oZWl0ICsgXCLCsEZcIjtcbiAgICB3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50RGVzY3JpcHRpb247XG4gICAgdXZJbmRleC50ZXh0Q29udGVudCA9IFwiVVYgSW5kZXg6IFwiICsgY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnRVVjtcblxuICAgIGRpc3BsYXlEYWlseURPTShhdmdEYXlUZW1wKTtcblxuICAgIHJldHVybjtcbiAgfVxufVxuLy8gSU5DT01QTEVURVxuZnVuY3Rpb24gYXBwZW5kSWNvbihpY29uRGl2LCBpY29uc3JjKSB7XG4gIGlmIChpY29uRGl2Lmhhc0NoaWxkTm9kZXMpIHtcbiAgICBpY29uRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG5cbiAgaWNvbi5zcmMgPSBpY29uc3JjO1xuXG4gIGljb25EaXYuYXBwZW5kKGljb24pO1xuXG4gIC8vIENPTVBMRVRFIFRISVNcbn1cblxuZnVuY3Rpb24gZGlzcGxheURhaWx5RE9NKGRhaWx5QXJyYXkpIHtcbiAgY29uc29sZS5sb2coXCJXT1JLU1NTU1wiKTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGFpbHlEaXZzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRhdGVEaXYgPSBkYWlseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1kYWlseVwiKTtcbiAgICBjb25zdCBhdmdUZW1wRGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmF2Zy10ZW1wLWRhaWx5XCIpO1xuICAgIGNvbnN0IGljb25EaXYgPSBkYWlseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1kYWlseVwiKTtcbiAgICBjb25zdCBjb25kaXRpb25EaXYgPSBkYWlseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uLWRhaWx5XCIpO1xuICAgIGNvbnN0IHV2RGl2ID0gZGFpbHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLnV2LWRhaWx5XCIpO1xuXG4gICAgZGF0ZURpdi50ZXh0Q29udGVudCA9IGRhaWx5QXJyYXlbaW5kZXhdLmRhdGU7XG5cbiAgICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJDZWxzaXVzXCIpIHtcbiAgICAgIGF2Z1RlbXBEaXYudGV4dENvbnRlbnQgPSBkYWlseUFycmF5W2luZGV4XS5kYXkuYXZndGVtcF9jICsgXCLCsENcIjtcbiAgICB9XG5cbiAgICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJGYWhyZW5oZWl0XCIpIHtcbiAgICAgIGF2Z1RlbXBEaXYudGV4dENvbnRlbnQgPSBkYWlseUFycmF5W2luZGV4XS5kYXkuYXZndGVtcF9mICsgXCLCsEZcIjtcbiAgICB9XG5cbiAgICAvLyBpZiAoaWNvbkRpdi5oYXNDaGlsZE5vZGVzKSB7XG4gICAgLy8gICBpY29uRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29uc3QgaWNvbnNyYyA9IGRhaWx5QXJyYXlbaW5kZXhdLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIC8vICAgaWNvbkRpdi5hcHBlbmQoaWNvbik7XG5cbiAgICBhcHBlbmRJY29uKGljb25EaXYsIGljb25zcmMpO1xuXG4gICAgY29uZGl0aW9uRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgdXZEaXYudGV4dENvbnRlbnQgPSBcIkF2Zy4gVVYgSW5kZXg6IFwiICsgZGFpbHlBcnJheVtpbmRleF0uZGF5LnV2O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhaWx5RGl2c0V2ZW50TGlzdGVuZXIoKSB7XG4gIGRhaWx5RGl2cztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGFpbHlEaXZzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgZGFpbHlEaXZzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLWRhaWx5XCIpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkJBTUJBTEFNTU1NXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2cod2VhdGhlclJlc3VsdC5maW5hbERhdGEuYXZnRGF5VGVtcFtpbmRleF0uaG91cik7XG4gICAgICBob3VybHlBcnJheSA9IHdlYXRoZXJSZXN1bHQuZmluYWxEYXRhLmF2Z0RheVRlbXBbaW5kZXhdLmhvdXI7XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGJhY2tncm91bmQgY29sb3VyIG9mIGRpdnMgaGVyZVxuICAgICAgZGFpbHlEaXZzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtZGFpbHlcIik7XG5cbiAgICAgIGRpc3BsYXlIb3VybHlET00oaG91cmx5QXJyYXkpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb3VybHlET00oaG91cmx5QXJyYXkpIHtcbiAgaWYgKCFob3VybHlBcnJheSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBob3VybHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob3VybHlcIik7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhob3VybHlBcnJheSk7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhvdXJseURpdnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgLy8gICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuICAgIC8vICAgY29uc3QgZGF0ZURpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1kYWlseVwiKTtcbiAgICBjb25zdCB0aW1lRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi50aW1lLWhvdXJseVwiKTtcblxuICAgIGNvbnN0IGljb25EaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmljb24taG91cmx5XCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uLWhvdXJseVwiKTtcbiAgICBjb25zdCBhdmdUZW1wRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5hdmctdGVtcC1ob3VybHlcIik7XG4gICAgY29uc3QgdXZEaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLnV2LWhvdXJseVwiKTtcblxuICAgIHRpbWVEaXYudGV4dENvbnRlbnQgPSBob3VybHlBcnJheVtpbmRleF0udGltZS5zbGljZSgtNSk7XG5cbiAgICAvLyBpZiAoaWNvbkRpdi5oYXNDaGlsZE5vZGVzKSB7XG4gICAgLy8gICBpY29uRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgLy8gICBpY29uLnNyYyA9IGhvdXJseUFycmF5W2luZGV4XS5jb25kaXRpb24uaWNvbjtcblxuICAgIGNvbnN0IGljb25zcmMgPSBob3VybHlBcnJheVtpbmRleF0uY29uZGl0aW9uLmljb247XG5cbiAgICAvLyAgIGljb25EaXYuYXBwZW5kKGljb24pO1xuXG4gICAgYXBwZW5kSWNvbihpY29uRGl2LCBpY29uc3JjKTtcblxuICAgIGNvbmRpdGlvbkRpdi50ZXh0Q29udGVudCA9IGhvdXJseUFycmF5W2luZGV4XS5jb25kaXRpb24udGV4dDtcblxuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgYXZnVGVtcERpdi50ZXh0Q29udGVudCA9IGhvdXJseUFycmF5W2luZGV4XS50ZW1wX2MgKyBcIsKwQ1wiO1xuICAgIH1cblxuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkZhaHJlbmhlaXRcIikge1xuICAgICAgYXZnVGVtcERpdi50ZXh0Q29udGVudCA9IGhvdXJseUFycmF5W2luZGV4XS50ZW1wX2YgKyBcIsKwRlwiO1xuICAgIH1cblxuICAgIHV2RGl2LnRleHRDb250ZW50ID0gXCJVViBJbmRleDogXCIgKyBob3VybHlBcnJheVtpbmRleF0udXY7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIGhvdXJseUFycmF5LFxuICB0b2dnbGVUZW1wcyxcbiAgdXBkYXRlRE9NV2l0aERhdGEsXG4gIGRhaWx5RGl2c0V2ZW50TGlzdGVuZXIsXG4gIGRpc3BsYXlIb3VybHlET00sXG59O1xuIiwiZnVuY3Rpb24gZXJyb3JEaXNwbGF5KGVycm9yKSB7XG4gIGNvbnN0IG1haW5FcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1lcnJvci1jb250YWluZXJcIik7XG5cbiAgY29uc29sZS5sb2cobWFpbkVycm9yQ29udGFpbmVyKTtcbiAgaWYgKCFtYWluRXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheS1lcnJvclwiKSkge1xuICAgIG1haW5FcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1lcnJvclwiKTtcbiAgICBjb25zb2xlLmxvZyhcImRpc3BsYXkgZXJyb3Igd29ya3NcIik7XG4gIH1cblxuICAvLyAgIG1haW5FcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiLmRpc3BsYXktZXJyb3JcIik7XG4gIGNvbnN0IGVycm9yRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuZXJyb3ItZGlzcGxheS1jb250YWluZXJcIlxuICApO1xuXG4gIC8vICAgbGV0IGkgPSAwO1xuXG4gIC8vICAgd2hpbGUgKGkgPCAzMCkge1xuICAvLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICAgIGVycm9yTWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbWVzc2FnZVwiKTtcbiAgLy8gICAgIGVycm9yTWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICAvLyAgICAgZXJyb3JEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChlcnJvck1lc3NhZ2VEaXYpO1xuXG4gIC8vICAgICBpKys7XG4gIC8vICAgfVxuXG4gIGNvbnN0IGVycm9yTWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVycm9yTWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbWVzc2FnZVwiKTtcbiAgZXJyb3JNZXNzYWdlRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gIGVycm9yRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZXJyb3JNZXNzYWdlRGl2KTtcbn1cblxuZXhwb3J0IHsgZXJyb3JEaXNwbGF5IH07XG4iLCIvLyBpbXBvcnQgeyBlcnJvckRpc3BsYXkgfSBmcm9tIFwiLi9zZWFyY2hBY3Rpb25cIjtcbmltcG9ydCB7IGVycm9yRGlzcGxheSB9IGZyb20gXCIuL2Vycm9ySGFuZGxpbmdcIjtcbmFzeW5jIGZ1bmN0aW9uIGdldEdlb2xvY2F0aW9uRGF0YSgpIHtcbiAgdHJ5IHtcbiAgICBpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLFxuICAgICAgICBtYXhpbXVtQWdlOiAwLFxuICAgICAgfTtcblxuICAgICAgYXN5bmMgZnVuY3Rpb24gdXNlTmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgdXNlTmF2aWdhdG9yKCk7XG5cbiAgICAgIGNvbnN0IGxhdGl0dWRlID0gY29vcmRpbmF0ZXMuY29vcmRzLmxhdGl0dWRlLnRvRml4ZWQoNCk7XG4gICAgICBjb25zdCBsb25naXR1ZGUgPSBjb29yZGluYXRlcy5jb29yZHMubG9uZ2l0dWRlLnRvRml4ZWQoNCk7XG5cbiAgICAgIGNvbnN0IGxhdGl0dWRlU3RyaW5nID0gbGF0aXR1ZGUudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IGxvbmdpdHVkZVN0cmluZyA9IGxvbmdpdHVkZS50b1N0cmluZygpO1xuXG4gICAgICBjb25zdCBsYXRpdHVkZUxvbmdpdHVkZVF1ZXJ5ID0gbGF0aXR1ZGVTdHJpbmcgKyBcIixcIiArIGxvbmdpdHVkZVN0cmluZztcblxuICAgICAgcmV0dXJuIGxhdGl0dWRlTG9uZ2l0dWRlUXVlcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiR2VvbG9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSBcIkVycm9yIGluIGdldEdlb2xvY2F0aW9uRGF0YTogXCIgKyBlcnJvcjtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgICBlcnJvckRpc3BsYXkoZXJyb3JNc2cpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldEdlb2xvY2F0aW9uRGF0YSB9O1xuIiwiLy8gaW1wb3J0IHsgZXJyb3JEaXNwbGF5IH0gZnJvbSBcIi4vc2VhcmNoQWN0aW9uXCI7XG5cbmltcG9ydCB7IGVycm9yRGlzcGxheSB9IGZyb20gXCIuL2Vycm9ySGFuZGxpbmdcIjtcbi8vIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWJ1dHRvblwiKTtcblxuLy9yZW1vdmUgYWxsIERPTSBlbGVtZW50cyBmcm9tIGhlcmUsIG9ubHkgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IHBhcmFtZXRlcnMgYXJlIGFsbG93ZWRcblxuY29uc3QgQVBJX0tFWSA9IFwiNWIzMjI0YWYwZmRlNGJiOTkyODIwNTIyODIzMjIxMFwiO1xuXG4vLyBsZXQgcHJldmlvdXNEYXRhO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbkRhdGEpIHtcbiAgLy8gY29udmVydCB0byBhc3luYyBhd2FpdFxuXG4gIHRyeSB7XG4gICAgLy8gbGV0IGxvY2F0aW9uO1xuXG4gICAgLy8gaWYgKGxvY2F0aW9uRGF0YS51cmwgPT09IHRydWUpIHtcbiAgICAvLyAgIGxvY2F0aW9uID0gbG9jYXRpb25EYXRhLnVybDtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgbG9jYXRpb24gPSBsb2NhdGlvbkRhdGEubG9jYXRpb247XG4gICAgLy8gfVxuICAgIGNvbnN0IGRheXMgPSBcIjNcIjtcblxuICAgIGNvbnN0IFVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbkRhdGF9JmRheXM9JHtkYXlzfSZhcWk9bm8mYWxlcnRzPW5vYDtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2goVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuXG4gICAgaWYgKCF3ZWF0aGVyRGF0YS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0V2VhdGhlckRhdGEgZG9lc24ndCB3b3JrIVwiKTtcblxuICAgICAgLy8gY29uc29sZS5sb2cocHJldmlvdXNEYXRhKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZFdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlckRhdGEuanNvbigpO1xuXG4gICAgLy8gcHJldmlvdXNEYXRhID0gcGFyc2VkV2VhdGhlckRhdGE7XG5cbiAgICByZXR1cm4gcGFyc2VkV2VhdGhlckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSBcIkVycm9yIGluIGdldFdlYXRoZXJEYXRhOiBcIiArIGVycm9yO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICAgIGVycm9yRGlzcGxheShlcnJvck1zZyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc29ydERhdGEod2VhdGhlckRhdGEpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIXdlYXRoZXJEYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImxvY2F0aW9uIG5vdCBmb3VuZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gICAgY29uc29sZS5sb2coXCJTT1JUSU5HIERBVEFcIik7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgY29uc3QgY291bnRyeSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgLy8gY29uc3QgdXJsID0gO1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcblxuICAgIC8vIC0tLS1DdXJyZW50IHdlYXRoZXItLS0tLS1cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJEYXRhLmN1cnJlbnQ7XG5cbiAgICBjb25zdCBhY3R1YWxDZWxzaXVzID0gY3VycmVudFdlYXRoZXIudGVtcF9jO1xuICAgIGNvbnN0IGFjdHVhbEZhaHJlbmhlaXQgPSBjdXJyZW50V2VhdGhlci50ZW1wX2Y7XG4gICAgY29uc3QgZmVlbHNMaWtlQ2Vsc2l1cyA9IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9jO1xuICAgIGNvbnN0IGZlZWxzTGlrZUZhaHJlbmhlaXQgPSBjdXJyZW50V2VhdGhlci5mZWVsc2xpa2VfZjtcbiAgICBjb25zdCBjdXJyZW50SWNvbiA9IGN1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi5pY29uO1xuXG4gICAgY29uc3QgY3VycmVudERlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBjb25zdCBjdXJyZW50VVYgPSBjdXJyZW50V2VhdGhlci51djtcblxuICAgIC8vIExvZyBjdXJyZW50IGRhdGFcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50V2VhdGhlcik7XG5cbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLUNVUlJFTlQgREFUQS0tLS0tLVwiKTtcbiAgICBjb25zb2xlLmxvZyhgQWN0dWFsIFRlbXAoQyopOiAke2FjdHVhbENlbHNpdXN9YCk7XG4gICAgY29uc29sZS5sb2coYEFjdHVhbCBUZW1wKEYqKTogJHthY3R1YWxGYWhyZW5oZWl0fWApO1xuICAgIGNvbnNvbGUubG9nKGBGZWVscyBMaWtlIChDKik6ICR7ZmVlbHNMaWtlQ2Vsc2l1c31gKTtcbiAgICBjb25zb2xlLmxvZyhgRmVlbHMgTGlrZSAoRiopOiAke2ZlZWxzTGlrZUZhaHJlbmhlaXR9YCk7XG4gICAgY29uc29sZS5sb2coYERlc2NyaXB0aW9uOiBgICsgY3VycmVudERlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhcIlVWOiBcIiArIGN1cnJlbnRVVik7XG4gICAgLy8gYWRkIFVWIGxldmVsc1xuXG4gICAgLy8gLS0tLS1Gb3JlY2FzdCB3ZWF0aGVyLS0tLS1cblxuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0O1xuICAgIGNvbnN0IGF2Z0RheVRlbXAgPSBmb3JlY2FzdERhdGEuZm9yZWNhc3RkYXk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBjb3VudHJ5LFxuICAgICAgY3VycmVudFdlYXRoZXJEYXRhOiB7XG4gICAgICAgIGFjdHVhbENlbHNpdXMsXG4gICAgICAgIGFjdHVhbEZhaHJlbmhlaXQsXG4gICAgICAgIGZlZWxzTGlrZUNlbHNpdXMsXG4gICAgICAgIGZlZWxzTGlrZUZhaHJlbmhlaXQsXG4gICAgICAgIGN1cnJlbnRJY29uLFxuICAgICAgICBjdXJyZW50RGVzY3JpcHRpb24sXG4gICAgICAgIGN1cnJlbnRVVixcbiAgICAgIH0sXG4gICAgICBhdmdEYXlUZW1wLFxuICAgICAgLy8gZGFpbHlXZWF0aGVyRGF0YToge1xuICAgICAgLy8gICBhdmdEYXlUZW1wQ2Vsc2l1cyxcbiAgICAgIC8vIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gc29ydERhdGE6IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG4vLyBzb3J0RGF0YSgpO1xuXG5hc3luYyBmdW5jdGlvbiBhdXRvY29tcGxldGUoc2VhcmNoSW5wdXRWYWx1ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoSW5wdXRWYWx1ZTtcbiAgICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuXG4gICAgY29uc3QgYXV0b2NvbXBsZXRlVVJMID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn1gO1xuXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlUmVzdWx0cyA9IGF3YWl0IGZldGNoKGF1dG9jb21wbGV0ZVVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcblxuICAgIGNvbnN0IHBhcnNlZEF1dG9jb21wbGV0ZVJlc3VsdCA9IGF3YWl0IGF1dG9Db21wbGV0ZVJlc3VsdHMuanNvbigpO1xuXG4gICAgcmV0dXJuIHBhcnNlZEF1dG9jb21wbGV0ZVJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gYXV0b2NvbXBsZXRlOiBcIiArIGVycm9yO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICAgIGVycm9yRGlzcGxheShlcnJvck1zZyk7XG4gIH1cbn1cblxuLy8gU2VuZCBsb2NhdGlvbiBkYXRhIHRvIHNlcnZlclxuYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVJbmZvKGxvY2F0aW9uKSB7XG4gIC8vIGluY3JlYXNlcyBjb3VwbGluZywgZmluZCBhbiBhbHRlcm5hdGl2ZSBsYXRlclxuXG4gIC8vIGNvbnNvbGUubG9nKHVybCk7XG5cbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBsb2NhdGlvbkRhdGEgPSB7XG4gICAgLy8gICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgLy8gICB1cmw6IHVybCxcbiAgICAvLyB9O1xuICAgIGlmICghbG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cobG9jYXRpb24pO1xuXG4gICAgY29uc29sZS5sb2coXCJMb2NhdGlvbiB1c2VkOiBcIiArIGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuXG4gICAgY29uc3Qgc29ydGVkRGF0YSA9IGF3YWl0IHNvcnREYXRhKHdlYXRoZXJEYXRhKTtcblxuICAgIGlmICghd2VhdGhlckRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5hbERhdGEgPSB7XG4gICAgICBzZWFyY2hSZXN1bHQ6IHNvcnRlZERhdGEubG9jYXRpb24gKyBcIiwgXCIgKyBzb3J0ZWREYXRhLmNvdW50cnksXG4gICAgICBmaW5hbERhdGE6IHNvcnRlZERhdGEsXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGZpbmFsRGF0YSk7XG5cbiAgICByZXR1cm4gZmluYWxEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gXCJFcnJvciBpbiByZXRyaWV2ZUluZm86IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG5leHBvcnQgeyBhdXRvY29tcGxldGUsIHJldHJpZXZlSW5mbyB9O1xuIiwiaW1wb3J0IHsgcmV0cmlldmVJbmZvIH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuaW1wb3J0IHtcbiAgaW5pdGlhbERPTURhdGEsXG4gIGRpc3BsYXlMb2FkaW5nU2NyZWVuLFxuICByZW1vdmVMb2FkaW5nU2NyZWVuLFxuICBzdGF0dXNEaXNwbGF5LFxufSBmcm9tIFwiLi9zZWFyY2hBY3Rpb25cIjtcblxuLy8gaW1wb3J0IHsgZXJyb3JEaXNwbGF5IH0gZnJvbSBcIi4vc2VhcmNoQWN0aW9uXCI7XG5pbXBvcnQgeyBlcnJvckRpc3BsYXkgfSBmcm9tIFwiLi9lcnJvckhhbmRsaW5nXCI7XG5cbi8vIGZ1bmN0aW9uIGluaXRpYWxpc2UoKXtcbi8vIENoZWNrIGlmIHRoZXJlIGlzIGxvY2FsIHN0b3JhZ2UgZGF0YVxuLy9JZiB5ZXMsIHVzZSBsb2NhbHN0b3JhZ2UgZGF0YVxuLy8gSWYgbm8sIHJlcXVlc3QgR2VvbG9jYXRpb24gZGF0YVxuLy9JZiBubywgdXNlIGRlZmF1bHQta3VhbGEtbHVtcHVyXG5cbi8vQWRkIGxvYWRpbmcgY3NzXG5cbmxldCBpbml0aWFsRGF0YTtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1sb2NhdGlvblwiKTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgdHJ5IHtcbiAgICBkaXNwbGF5TG9hZGluZ1NjcmVlbigpO1xuXG4gICAgY29uc3Qga2lja29mZkRhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIC8vIGlmIGxvY2FsU3RvcmFnZSBpcyBlbXB0eVxuICAgIGlmICgha2lja29mZkRhdGEpIHtcbiAgICAgIGNvbnN0IGt1YWxhTHVtcHVyID0gXCJLdWFsYSBMdW1wdXIsIE1hbGF5c2lhXCI7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGt1YWxhTHVtcHVyO1xuXG4gICAgICBzZXRMb2NhbFN0b3JhZ2Uoa3VhbGFMdW1wdXIpO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIk5PTkVcIik7XG5cbiAgICAgIGluaXRpYWxpc2UoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlYXJjaElucHV0LnZhbHVlID0ga2lja29mZkRhdGE7XG5cbiAgICBpbml0aWFsRGF0YSA9IGF3YWl0IHJldHJpZXZlSW5mbyhraWNrb2ZmRGF0YSk7XG5cbiAgICBzdGF0dXNEaXNwbGF5KGtpY2tvZmZEYXRhKTtcblxuICAgIGluaXRpYWxET01EYXRhKGluaXRpYWxEYXRhKTtcblxuICAgIHJlbW92ZUxvYWRpbmdTY3JlZW4oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gaW5pdGlhbGlzZTogXCIgKyBlcnJvcjtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgICBlcnJvckRpc3BsYXkoZXJyb3JNc2cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShuZXdEYXRhKSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicmlzc2hXZWF0aGVyTG9jYXRpb25EYXRhXCIpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmlzc2hXZWF0aGVyTG9jYXRpb25EYXRhXCIsIG5ld0RhdGEpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJpc3NoV2VhdGhlckxvY2F0aW9uRGF0YVwiKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbERhdGEsIGluaXRpYWxpc2UsIHNldExvY2FsU3RvcmFnZSwgZ2V0TG9jYWxTdG9yYWdlIH07XG4iLCJpbXBvcnQgeyBhdXRvY29tcGxldGUsIHJldHJpZXZlSW5mbyB9IGZyb20gXCIuL2dldERhdGEuanNcIjtcblxuaW1wb3J0IHtcbiAgaW5pdGlhbERhdGEsXG4gIHNldExvY2FsU3RvcmFnZSxcbiAgZ2V0TG9jYWxTdG9yYWdlLFxufSBmcm9tIFwiLi9pbml0aWFsaXNlci5qc1wiO1xuXG5pbXBvcnQge1xuICBob3VybHlBcnJheSxcbiAgdXBkYXRlRE9NV2l0aERhdGEsXG4gIGRpc3BsYXlIb3VybHlET00sXG59IGZyb20gXCIuL2RvbUFjdGlvbi5qc1wiO1xuXG5pbXBvcnQgeyBnZXRHZW9sb2NhdGlvbkRhdGEgfSBmcm9tIFwiLi9nZW9sb2NhdGlvbi5qc1wiO1xuXG5pbXBvcnQgbm93TG9hZGluZyBmcm9tIFwiLi9hc3NldHMvbG9hZGluZy5naWZcIjtcblxuaW1wb3J0IHsgZXJyb3JEaXNwbGF5IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGluZy5qc1wiO1xuXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWxvY2F0aW9uXCIpO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5cbmNvbnN0IHNlYXJjaERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZHJvcC1kb3duXCIpO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblxuY29uc3QgZGFpbHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseVwiKTtcblxubGV0IHdlYXRoZXJSZXN1bHQ7XG5cbmxldCBzZWFyY2hTdWNjZXNzO1xuXG5sZXQgdG9kYXlIb3VybHlEYXRhO1xuXG4vLyBDcmVhdGUgb25lIG1vZHVsZSBmb3IgRE9NIENyZWF0aW9uIGFuZCBhbm90aGVyIGZvciBET00gYWN0aW9uXG5cbi8vIEFkZCBFdmVudCBMaXN0ZW5lciBmb3Igc2VhcmNoIGV2ZW50c1xuZnVuY3Rpb24gc2VhcmNoRXZlbnRzKCkge1xuICAvLyBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYXV0b2NvbXBsZXRlKTtcblxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXNlYXJjaElucHV0LnZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlYXJjaElucHV0VmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGF1dG9jb21wbGV0ZUFycmF5ID0gYXdhaXQgYXV0b2NvbXBsZXRlKHNlYXJjaElucHV0VmFsdWUpO1xuICAgICAgY3JlYXRlRHJvcERvd24oYXV0b2NvbXBsZXRlQXJyYXkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gc2VhcmNoRXZlbnRzKHNlYXJjaElucHV0KTogXCIgKyBlcnJvcjtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICAgICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlYXJjaElucHV0VmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcblxuICAgICAgcG9wdWxhdGVET00oc2VhcmNoSW5wdXRWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGVycm9yTXNnID0gXCJFcnJvciBpbiBzZWFyY2hFdmVudHMoc2VhcmNoQnV0dG9uKTogXCIgKyBlcnJvcjtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICAgICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwibW9kdWxlLXdvcmtzXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wRG93bihhdXRvY29tcGxldGVBcnJheSkge1xuICBzZWFyY2hEcm9wRG93bi5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGNoaWxkLnJlbW92ZSgpO1xuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhhdXRvY29tcGxldGVBcnJheSk7XG5cbiAgZm9yIChjb25zdCBlYWNoIG9mIGF1dG9jb21wbGV0ZUFycmF5KSB7XG4gICAgY29uc3QgZHJvcERvd25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkcm9wRG93bkl0ZW0uY2xhc3NMaXN0LmFkZChcImRyb3AtZG93bi1pdGVtXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGVhY2gpO1xuICAgIGRyb3BEb3duSXRlbS50ZXh0Q29udGVudCA9IGVhY2gubmFtZSArIFwiLCBcIiArIGVhY2guY291bnRyeTtcbiAgICAvLyBkcm9wRG93bkl0ZW0udXJsID0gZWFjaC51cmw7XG4gICAgLy8gY29uc29sZS5sb2coZWFjaC51cmwpO1xuICAgIHNlYXJjaERyb3BEb3duLmFwcGVuZChkcm9wRG93bkl0ZW0pO1xuICB9XG5cbiAgaWYgKHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1kb3duLWl0ZW1cIikpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRyb3AtZG93bi13b3Jrc1wiKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hEcm9wRG93bi5xdWVyeVNlbGVjdG9yKFwiLmRyb3AtZG93bi1pdGVtXCIpKTtcblxuICAgIGRyb3BEb3duQ2xpY2tFdmVudCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyb3BEb3duQ2xpY2tFdmVudCgpIHtcbiAgY29uc3QgZHJvcERvd25JdGVtTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3AtZG93bi1pdGVtXCIpO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwid2hhdFwiKTtcblxuICBkcm9wRG93bkl0ZW1Ob2RlTGlzdC5mb3JFYWNoKChkcm9wRG93bkl0ZW0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhkcm9wRG93bkl0ZW0pO1xuICAgIGRyb3BEb3duSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBkcm9wRG93bkl0ZW0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgcG9wdWxhdGVET00oZHJvcERvd25JdGVtLnRleHRDb250ZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTXNnID0gXCJFcnJvciBpbiBkcm9wRG93bkNsaWNrRXZlbnQ6IFwiICsgZXJyb3I7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICAgICAgICBlcnJvckRpc3BsYXkoZXJyb3JNc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbERPTURhdGEod2VhdGhlckRhdGEpIHtcbiAgLy8gc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBieSB0ZW1wVG9nZ2xlXG4gIHdlYXRoZXJSZXN1bHQgPSB3ZWF0aGVyRGF0YTtcblxuICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyRGF0YSk7XG4gIGNvbnNvbGUubG9nKFwid2VhdGhlciByZXN1bHRcIik7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLUVORC0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuXG4gIHRvZGF5SG91cmx5RGF0YSA9IHdlYXRoZXJEYXRhLmZpbmFsRGF0YS5hdmdEYXlUZW1wWzBdLmhvdXI7XG5cbiAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtZGFpbHlcIik7XG4gIH0pO1xuXG4gIGRhaWx5RGl2c1swXS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtZGFpbHlcIik7XG5cbiAgZGlzcGxheUhvdXJseURPTSh0b2RheUhvdXJseURhdGEpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEcm9wRG93bigpIHtcbiAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCkge1xuICBjb25zdCBsb2FkaW5nR0lGQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWdpZi1jb250YWluZXJcIik7XG5cbiAgaWYgKGxvYWRpbmdHSUZDb250YWluZXIucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgIGNvbnNvbGUubG9nKFwiTE9BRElORyBHSUYgUFJFU0VOVFwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBsb2FkaW5nR0lGID0gbmV3IEltYWdlKCk7XG5cbiAgbG9hZGluZ0dJRi5zcmMgPSBub3dMb2FkaW5nO1xuXG4gIGxvYWRpbmdHSUZDb250YWluZXIuYXBwZW5kKGxvYWRpbmdHSUYpO1xuXG4gIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc2NyZWVuXCIpO1xuICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJlbmFibGUtbG9hZGluZy1zY3JlZW5cIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxvYWRpbmdTY3JlZW4oKSB7XG4gIGNvbnN0IGxvYWRpbmdHSUZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctZ2lmLWNvbnRhaW5lclwiKTtcblxuICBsb2FkaW5nR0lGQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikucmVtb3ZlKCk7XG4gIGNvbnN0IGxvYWRpbmdTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc2NyZWVuXCIpO1xuICBsb2FkaW5nU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJlbmFibGUtbG9hZGluZy1zY3JlZW5cIik7XG59XG5cbmZ1bmN0aW9uIHN0YXR1c0Rpc3BsYXkobG9jYXRpb24pIHtcbiAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdHVzLW1lc3NhZ2VcIik7XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIGNvbnN0IHByZXZpb3VzRGF0YSA9IGdldExvY2FsU3RvcmFnZSgpO1xuXG4gICAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgICBcIkxvY2F0aW9uIG5vdCBmb3VuZCwgc3RpbGwgZGlzcGxheWluZzogXCIgKyBwcmV2aW91c0RhdGE7XG4gICAgcmV0dXJuO1xuICB9XG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkN1cnJlbnRseSBkaXNwbGF5aW5nOiBcIiArIGxvY2F0aW9uO1xufVxuXG5mdW5jdGlvbiBnZW9sb2NhdGlvbkJ0bkV2ZW50KCkge1xuICBjb25zdCBnZW9sb2NhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2VvbG9jYXRpb24tYnV0dG9uXCIpO1xuICBjb25zdCBzZWFyY2hEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWRyb3AtZG93blwiKTtcbiAgZ2VvbG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBnZW9sb2NhdGlvbkRhdGEgPSBhd2FpdCBnZXRHZW9sb2NhdGlvbkRhdGEoKTtcbiAgICAgIGNvbnNvbGUubG9nKGdlb2xvY2F0aW9uRGF0YSk7XG5cbiAgICAgIC8vXG4gICAgICAvL1xuXG4gICAgICAvLyBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgICAgIHBvcHVsYXRlRE9NKGdlb2xvY2F0aW9uRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IGVycm9yTXNnID1cbiAgICAgICAgXCJFcnJvciBpbiBnZW9sb2NhdGlvbkJ0bkxpc3RlbmVyKGdlb2xvY2F0aW9uQnV0dG9uKTogXCIgKyBlcnJvcjtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICAgICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3B1bGF0ZURPTShpbnB1dERhdGEpIHtcbiAgZGlzcGxheUxvYWRpbmdTY3JlZW4oKTtcblxuICB3ZWF0aGVyUmVzdWx0ID0gYXdhaXQgcmV0cmlldmVJbmZvKGlucHV0RGF0YSk7XG5cbiAgLy8gaWYgc2VhcmNoIGZhaWxzIC0gdXNlIHByZXZpb3VzbHkgc3VjY2Vzc2Z1bCBkYXRhXG4gIGlmICghd2VhdGhlclJlc3VsdCkge1xuICAgIGNvbnNvbGUubG9nKFwiTk9UIEZPVU5EXCIpO1xuXG4gICAgc3RhdHVzRGlzcGxheShmYWxzZSk7XG5cbiAgICAvLyBkaXNwbGF5IGxvY2F0aW9uIG5vdCBmb3VuZCBvbiBET01cblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJSZXN1bHQpO1xuICAgIC8vIHVzZXMgcHJldmlvdXMgZGF0YVxuICAgIGNvbnNvbGUubG9nKFwiVVNJTkcgU0VBUkNIIFNVQ0NFU1NcIik7XG4gICAgLy8gaWYgbm8gZGF0YSBpbiBzZWFyY2hTdWNjZXNzIHVzZSBpbml0aWFsRGF0YVxuICAgIGlmICghc2VhcmNoU3VjY2Vzcykge1xuICAgICAgc2VhcmNoU3VjY2VzcyA9IGluaXRpYWxEYXRhO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZWFyY2hTdWNjZXNzKTtcbiAgICBpbml0aWFsRE9NRGF0YShzZWFyY2hTdWNjZXNzKTtcbiAgICByZW1vdmVMb2FkaW5nU2NyZWVuKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgc2VhcmNoIGlzIGEgc3VjY2Vzc1xuXG4gIGlmICh3ZWF0aGVyUmVzdWx0ID09IHRydWUpIHtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHN1Y2Nlc3Mgd29ya3NcIik7XG4gIHNlYXJjaFN1Y2Nlc3MgPSB3ZWF0aGVyUmVzdWx0O1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyUmVzdWx0KTtcblxuICBzZWFyY2hJbnB1dC52YWx1ZSA9IHdlYXRoZXJSZXN1bHQuc2VhcmNoUmVzdWx0O1xuXG4gIHNldExvY2FsU3RvcmFnZSh3ZWF0aGVyUmVzdWx0LnNlYXJjaFJlc3VsdCk7XG5cbiAgc3RhdHVzRGlzcGxheSh3ZWF0aGVyUmVzdWx0LnNlYXJjaFJlc3VsdCk7XG5cbiAgc2VhcmNoRHJvcERvd24ucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBjaGlsZC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlRE9NV2l0aERhdGEod2VhdGhlclJlc3VsdCk7XG4gIGluaXRpYWxET01EYXRhKHdlYXRoZXJSZXN1bHQpO1xuXG4gIC8vIHNldFRpbWVvdXQocmVtb3ZlTG9hZGluZ1NjcmVlbiwgNTAwMCk7XG5cbiAgcmVtb3ZlTG9hZGluZ1NjcmVlbigpO1xufVxuXG5leHBvcnQge1xuICB3ZWF0aGVyUmVzdWx0LFxuICB0b2RheUhvdXJseURhdGEsXG4gIHNlYXJjaEV2ZW50cyxcbiAgZ2VvbG9jYXRpb25CdG5FdmVudCxcbiAgY3JlYXRlRHJvcERvd24sXG4gIHJlbW92ZURyb3BEb3duLFxuICBpbml0aWFsRE9NRGF0YSxcbiAgZGlzcGxheUxvYWRpbmdTY3JlZW4sXG4gIHJlbW92ZUxvYWRpbmdTY3JlZW4sXG4gIHN0YXR1c0Rpc3BsYXksXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYXBwZW5kRE9NIH0gZnJvbSBcIi4vY3JlYXRlRE9NXCI7XG5pbXBvcnQgeyBpbml0aWFsaXNlIH0gZnJvbSBcIi4vaW5pdGlhbGlzZXJcIjtcbmltcG9ydCB7IGdldEdlb2xvY2F0aW9uRGF0YSB9IGZyb20gXCIuL2dlb2xvY2F0aW9uXCI7XG5pbXBvcnQgeyB0b2dnbGVUZW1wcywgZGFpbHlEaXZzRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL2RvbUFjdGlvblwiO1xuaW1wb3J0IHtcbiAgc2VhcmNoRXZlbnRzLFxuICBnZW9sb2NhdGlvbkJ0bkV2ZW50LFxuICByZW1vdmVEcm9wRG93bixcbn0gZnJvbSBcIi4vc2VhcmNoQWN0aW9uXCI7XG5cbmNvbnNvbGUubG9nKFwid2VicGFjayB3b3JrcyFcIik7XG5cbmFwcGVuZERPTSgpO1xuXG5zZWFyY2hFdmVudHMoKTtcbi8vIFVuY29tbWVudCBsYXRlclxuaW5pdGlhbGlzZSgpO1xuLy8gVEVTVFxuXG5mdW5jdGlvbiBsb2NhdGlvbkJ1dHRvbigpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRHZW9sb2NhdGlvbkRhdGEoKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJjb29yZGluYXRlc1wiKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9KTtcbn1cblxuLy8gQWRkIGV2ZW50TGlzdGVuZXJzXG5nZW9sb2NhdGlvbkJ0bkV2ZW50KCk7XG5yZW1vdmVEcm9wRG93bigpO1xudG9nZ2xlVGVtcHMoKTtcbmRhaWx5RGl2c0V2ZW50TGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
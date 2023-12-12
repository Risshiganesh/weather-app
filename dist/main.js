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
    grid-template-rows: 45px 90px 1fr 35px;
    grid-template-areas:
    "logo"
    "search"
    "display"
    "footer" ;
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
    grid-area: logo;

}

.logo-div {
    /* border: 2px solid red; */
    width: 170px;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    /* background-color: rgba(128, 128, 128, 0.425); */
    background-color: rgba(255, 166, 0, 0.415);
    border-radius: 0px 0px 10px 10px;
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-auto-flow: column;
    gap: 5px;
    border: 2px solid orange;
    border-top: none;
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
    padding: 20px;
    gap: 10px;
    grid-area: search;
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
    /* background-color: #fff; */
    background-color: rgba(128, 0, 128, 0.562);
    color: white;
    border: 2px solid purple;

}

#geolocation-button{

    background-color: rgb(97, 97, 97);
    border: 1px solid grey;

    background-color: rgba(76, 0, 130, 0.538);
    border: 2px solid indigo;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-items: center;
}

#geolocation-button > img{

    width:15px;
}

#search-button{

    background-color: rgb(97, 97, 97);
    border: 1px solid grey;

    background-color: rgba(76, 0, 130, 0.538);
    border: 2px solid indigo;
    border-radius: 5px;
}

#geolocation-button:hover,
#search-button:hover{

    background-color: rgba(172, 255, 47, 0.62);
    border: 2px solid greenyellow;
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
    z-index: 2;
    background-color: rgba(60, 0, 116, 0.697);
    /* border: 2px solid purple; */
    border-radius: 10px;
    /* font-weight: bold; */
}

.drop-down-item{
    padding: 10px;
}

.drop-down-item:hover{

    border-radius: 10px;
    background-color: rgba(255, 255, 0, 0.659);
    color: black;
    border: 2px solid yellow;
}

.status-display {
    display: grid;
    align-items: end;
    justify-items: center;
}

.status-message{
    font-weight: bold;
    padding: 5px;
    border-bottom: 2px solid purple;
}



.display-container{
    /* align-content: space-between; */
    display: grid;

    position: relative;
    gap: 15px;
    justify-items: center;
    padding: 20px;

    height: 800px;
    grid-area: display;

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

    justify-items: start;
    align-items: center;
    overflow: auto;
    /* width: 90%; */
    height: 210px;

    border: 2px solid grey;
        /* padding: 15px; */
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
    overflow: auto;

    /* border: 2px solid grey; */
    padding: 10px;
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
.daily:hover{

  background-color: rgba(138, 159, 0, 0.334);
  border: 2px solid rgba(255, 255, 0, 0.745);
}

.hourly-average{
    height: 200px;
    overflow: auto;
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
    align-items: center;

    border: 3px solid grey;
    width: 100%;
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
    grid-area: footer;
}

.footer{
    /* border: 2px solid gold; */
    padding: 5px;
    font-size: 12px;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    /* background-color: #800020; */\n    background-color: black;\n    /* position: relative; */\n    \n\n}\n\nbody * {\n    /* border: 3px solid red; */\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n/* .primary-container{\n\n} */\n\n.background-container {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    /* border: 2px solid fuchsia; */\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n#background-video{\n    width: 100vw;\n    height: 100vh;\n    /* border: 2px solid gold; */\n    /* overflow: hidden; */\n}\n\n/* .background-container > video {\n    overflow: hidden;\n    margin: auto;\n} */\n\n.main-container{\n    display: grid;\n    position: absolute;\n    /* gap: 10px; */\n    height: 100%;\n    grid-template-rows: 45px 90px 1fr 35px;\n    grid-template-areas:\n    \"logo\"\n    \"search\"\n    \"display\"\n    \"footer\" ;\n    overflow: auto;\n    z-index: 1;\n    gap: 10px;\n}\n\n\n.main-error-container{\n\n    position: fixed;\n    background-color: rgba(83, 7, 0, 0.514);\n    width: 100%;\n    height: 100%;\n    z-index: 3;\n    \n    align-items: center;\n    justify-items: center;\n    grid-template-rows: 50px 1fr;\n    padding: 5px;\n    gap: 10px;\n    display: none;\n}\n\n.error-title{\n    align-self: end;\n    font-weight: bold;\n    padding: 5px;\n    border-bottom: 2px solid red ;\n}\n\n.error-display-container{\n    align-self: start;\n    border: 2px solid rgb(151, 0, 0);\n    border-radius: 5px;\n    padding: 10px;\n    width: 300px;\n    /* height: 100%; */\n    display: grid;\n    /* grid-auto-flow: row; */\n    gap: 10px;\n\n    max-height: 100%;\n    overflow: auto;\n\n}\n\n.error-message{\n    border: 2px solid red;\n    border-radius: 5px;\n    padding: 10px;\n    background-color: rgba(128, 0, 0, 0.651);\n}\n\n.display-error{\n    display: grid;\n}\n\n.loading-screen{\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.548);\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    /* display: grid; */\n    display: none;\n    align-items: center;\n    justify-items: center;\n    \n}\n\n.loading-screen * {\n    /* border: 2px solid red; */\n}\n\n.enable-loading-screen{\n    display: grid;\n}\n\n.loading-div{\n    display: grid;\n    gap: 15px;\n}\n\n.loading-gif-container{\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.loading-gif-container>img{\n    width: 50px;\n}\n\n.loading-text {\n\n    text-align: center;\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n\n}\n\n\n.logo-container {\n    /* text-align: center; */\n    /* border: 2px solid gold; */\n    display: grid;\n    justify-items: center;\n    align-items: start;\n    grid-area: logo;\n\n}\n\n.logo-div {\n    /* border: 2px solid red; */\n    width: 170px;\n    text-align: center;\n    padding: 10px;\n    font-weight: bold;\n    font-size: 16px;\n    /* background-color: rgba(128, 128, 128, 0.425); */\n    background-color: rgba(255, 166, 0, 0.415);\n    border-radius: 0px 0px 10px 10px;\n    display: grid;\n    grid-template-columns: 30px 1fr;\n    grid-auto-flow: column;\n    gap: 5px;\n    border: 2px solid orange;\n    border-top: none;\n}\n\n.logo-icon {\n    display: grid;\n    justify-items: end;\n}\n\n.logo-icon > img{\n    width: 20px;\n}\n\n.logo-text{\n    text-align: start;\n}\n\n\n\n\n\n/* height is 70px */\n#search-form{\n    display: grid;\n    /* align-items: center; */\n    align-items: center;\n    /* position: relative; */\n    /* border: 3px solid aqua; */\n    padding: 20px;\n    gap: 10px;\n    grid-area: search;\n}\n\n.search-container{\n    display: grid;\n    column-gap: 10px;\n    grid-template-columns: 1fr 50px 100px;\n    /* grid-template-columns: 1fr 1fr 1fr; */\n    position: relative;\n    /* border: 1px solid red; */\n    align-self: end;\n}\n\n#search-location {\n    appearance: none;\n    border: 1px solid grey;\n    height: 30px;\n    /* width: 100px; */\n    min-width: 100px;\n    color: black;\n    padding: 10px;\n    border-radius: 5px;\n    /* background-color: #fff; */\n    background-color: rgba(128, 0, 128, 0.562);\n    color: white;\n    border: 2px solid purple;\n\n}\n\n#geolocation-button{\n\n    background-color: rgb(97, 97, 97);\n    border: 1px solid grey;\n\n    background-color: rgba(76, 0, 130, 0.538);\n    border: 2px solid indigo;\n    border-radius: 5px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n#geolocation-button > img{\n\n    width:15px;\n}\n\n#search-button{\n\n    background-color: rgb(97, 97, 97);\n    border: 1px solid grey;\n\n    background-color: rgba(76, 0, 130, 0.538);\n    border: 2px solid indigo;\n    border-radius: 5px;\n}\n\n#geolocation-button:hover,\n#search-button:hover{\n\n    background-color: rgba(172, 255, 47, 0.62);\n    border: 2px solid greenyellow;\n}\n\n.drop-down-container{\n    /* border: 1px solid greenyellow; */\n    height: 0px;\n    position: relative;\n    width: 100%;\n    align-self: start;\n\n}\n\n.search-drop-down{\n    position: absolute;\n    /* border: 3px solid navy; */\n    /* height: 300px; */\n    width: 100%;\n    z-index: 2;\n    background-color: rgba(60, 0, 116, 0.697);\n    /* border: 2px solid purple; */\n    border-radius: 10px;\n    /* font-weight: bold; */\n}\n\n.drop-down-item{\n    padding: 10px;\n}\n\n.drop-down-item:hover{\n\n    border-radius: 10px;\n    background-color: rgba(255, 255, 0, 0.659);\n    color: black;\n    border: 2px solid yellow;\n}\n\n.status-display {\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.status-message{\n    font-weight: bold;\n    padding: 5px;\n    border-bottom: 2px solid purple;\n}\n\n\n\n.display-container{\n    /* align-content: space-between; */\n    display: grid;\n\n    position: relative;\n    gap: 15px;\n    justify-items: center;\n    padding: 20px;\n\n    height: 800px;\n    grid-area: display;\n\n}\n\n.current-weather-container{\n    height: 260px;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.current-weather-display *{\n    /* border: 2px solid purple; */\n}\n\n.current-weather-display{\n    border-radius: 100%;\n    height: 250px;\n    width: 250px;\n    border: 2px solid lightcoral;\n    background-color: #80002067;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n}\n\n.temp-display{\n    /* border: 2px solid fuchsia; */\n    font-size: 30px;\n    font-weight: bold;\n    align-self: flex-end;\n}\n\n.icon-current{\n    align-self: end;\n    align-items: end;\n    justify-items: center;\n}\n\n.icon-current > img {\n    height: 55px;\n}\n\n.weather-desc{\n    font-size: 14px;\n    font-weight: bold;\n    width: 150px;\n    /* align-self: start; */\n}\n\n.uv-index{\n    align-self: start;\n    font-size: 14px;\n    /* font-weight: bold; */\n}\n\n.toggle-container{\n    display: grid;\n    gap: 5px;\n}\n\n.toggle-container > label{\n    font-size: 12px;\n}\n\n#temp-toggle{\n    background-color: rgba(5, 67, 138, 0.514);\n    border-radius: 5px;\n    border: 2px solid rgba(0, 153, 255, 0.658);\n    padding: 5px;\n    height: 30px;\n\n    font-weight: bold;\n}\n\n.three-day-average{\n    display: grid;\n\n    justify-items: start;\n    align-items: center;\n    overflow: auto;\n    /* width: 90%; */\n    height: 210px;\n\n    border: 2px solid grey;\n        /* padding: 15px; */\n        border-radius: 15px;\n        background-color: rgba(56, 56, 56, 0.637);\n    \n\n}\n\n\n.three-day-average-container{\n    display: grid;\n    /* height: 100%; */\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n    justify-items: center;\n    /* height: 200px; */\n    align-items: center;\n    overflow: auto;\n\n    /* border: 2px solid grey; */\n    padding: 10px;\n    border-radius: 15px;\n    /* background-color: rgba(56, 56, 56, 0.637); */\n}\n\n\n.daily {\n\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    border: 2px solid grey;\n    height: 100%;\n    height: 170px;\n    width: 170px;\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n    font-size: 12px;\n    font-weight: bold;\n    gap: 5px;\n\n    border-radius: 15px;\n\n}\n\n.selected-daily{\n    background-color: #085c0056;\n    border: 2px solid rgb(2, 206, 2);\n}\n.daily:hover{\n\n  background-color: rgba(138, 159, 0, 0.334);\n  border: 2px solid rgba(255, 255, 0, 0.745);\n}\n\n.hourly-average{\n    height: 200px;\n    overflow: auto;\n    display: grid;\n    grid-auto-flow: column;\n    gap: 10px;\n    align-items: center;\n\n    border: 3px solid grey;\n    width: 100%;\n    padding: 10px;\n    border-radius: 15px;\n    background-color: rgba(56, 56, 56, 0.637);\n\n}\n\n.hourly{\n\n    width: 150px;\n    height: 150px;\n    border: 3px solid grey;\n    display: grid;\n    grid-template-rows: repeat(5, 1fr);\n    text-align: center;\n    justify-items: center;\n    padding: 10px;\n    font-size: 14px;\n    border-radius: 15px;\n    font-weight: bold;\n\n    font-size: 12px;\n    gap: 3px;\n}\n\n.icon-hourly>img {\n    width: 40px;\n}\n\n/* .condition-hourly{\n    font-size: 12px;\n}\n\n.avg-temp-hourly{\n    font-size: 12px;\n}\n\n.uv-hourly{\n    font-size: 12px;\n} */\n\n.footer-container{\n    border-top: 1px solid grey;\n    display: grid;\n    justify-items: center;\n    display: grid;\n    align-items: center;\n    grid-area: footer;\n}\n\n.footer{\n    /* border: 2px solid gold; */\n    padding: 5px;\n    font-size: 12px;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_location_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/location-icon.png */ "./src/assets/location-icon.png");






async function appendBackgroundVideo() {
  const backgroundContainer = document.querySelector(".background-container");

  const createVideoElement = document.createElement("video");

  createVideoElement.setAttribute("crossorigin", "anonymous");
  createVideoElement.setAttribute("playsinline", "");
  createVideoElement.setAttribute("webkit-playsinline", "");
  createVideoElement.setAttribute("autoplay", "");
  createVideoElement.setAttribute("muted", "");
  createVideoElement.setAttribute("loop", "");
  createVideoElement.setAttribute("id", "background-video");

  const videoSource = document.createElement("source");

  videoSource.src = _assets_background_video_mp4__WEBPACK_IMPORTED_MODULE_0__;

  videoSource.setAttribute("type", "video/mp4");

  backgroundContainer.append(createVideoElement);
  createVideoElement.append(videoSource);

  // video does not automatically play because there has to be user input for some reason.

  const geolocationButton = document.querySelector("#geolocation-button");
  geolocationButton.addEventListener("click", function () {
    
    createVideoElement.play();
  });

  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", function () {
    
    createVideoElement.play();
  });
}

function appendIcons() {
  const logoIconDiv = document.querySelector(".logo-icon");
  const logoImg = new Image();
  logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  logoIconDiv.append(logoImg);

  const geolocationBtn = document.querySelector("#geolocation-button");

  const locationImg = new Image();
  locationImg.src = _assets_location_icon_png__WEBPACK_IMPORTED_MODULE_2__;
  geolocationBtn.append(locationImg)

}

function appendDOM() {
  appendBackgroundVideo();
  appendIcons();
}

// To dynamically generate DOM, but super time consuming to construct
function createCoreDOM(){

  // const primaryContainer = document.querySelector(".primary-container");


  // const backgroundContainer = document.createElement("div");
  // backgroundContainer.classList.add("background-container");
  // primaryContainer.append(backgroundContainer);

  //   const mainContainer = document.createElement("div");
  //   mainContainer.classList.add("main-container");
  //   backgroundContainer.append(mainContainer);

      // loading screen

      // const mainContainer = document.querySelector(".main-container");

      // function loadingScreen(){

      //   const loadingScreen = document.createElement("div");
      //   loadingScreen.classList.add("loading-screen");
      //   mainContainer.append(loadingScreen);
  
      //     const loadingDiv = document.createElement("div");
      //     loadingDiv.classList.add("loading-div");
      //     loadingScreen.append(loadingDiv);
  
      //       const loadingGIFContainer = document.createElement("div");
      //       loadingGIFContainer.classList.add("loading-gif-container");
      //       loadingDiv.append(loadingGIFContainer);
  
      //       const loadingText = document.createElement("div");
      //       loadingText.classList.add("loading-text");
      //       loadingText.textContent = "Loading...";
      //       loadingDiv.append(loadingText);

      // }


      // function displayError (){
      //   const mainErrorContainer = document.createElement("div");
      //   mainErrorContainer.classList.add("main-error-container");
      //   mainContainer.append(mainErrorContainer);

      //     const errorTitle = document.createElement("div");
      //     errorTitle.classList.add("error-title");
      //     errorTitle.textContent = "Error";
      //     mainErrorContainer.append(errorTitle);

      //     const errorDisplayContainer = document.createElement("div");
      //     errorDisplayContainer.classList.add("error-display-container");
      //     mainErrorContainer.append(errorDisplayContainer);

      // }

      // function displayLogo (){
      //   const logoContainer = document.createElement("div");
      //   logoContainer.classList.add("logo-container");
      //   mainContainer.append(logoContainer);

      //     const logoDiv = document.createElement('div');
      //     logoDiv.classList.add("logo-div");
      //     logoContainer.append(logoDiv);

      //       const logoIcon = document.createElement("logo-text");
      //       logoIcon.classList.add('logo-icon');
      //       logoDiv.append(logoIcon);

      //       const logoText = document.createElement("div");
      //       logoText.classList.add("logo-text");
      //       logoText.textContent = "Risshweather";
      //       logoDiv.append(logoText);
      // }



      // function displaySearch(){
      //   const searchForm = document.createElement("div");
      //   searchForm.setAttribute("id","search-form");
      //   mainContainer.append(searchForm);

      //     const searchContainer = document.createElement("div");
      //     searchContainer.classList.add("search-container");
      //     searchForm.append(searchContainer);

      //       const searchLocation = document.createElement('input');
      //       searchLocation.setAttribute('type','search');
      //       searchLocation.setAttribute('id','search-location');
      //       searchLocation.setAttribute('name','search-location');
            
      //       searchLocation.setAttribute('required','');
      //       searchContainer.append(searchLocation)


      //       const geolocationBttn = document.createElement("button");
      //       geolocationBttn.setAttribute("id","geolocation-button");
      //       searchContainer.append(geolocationBttn);

      //       const searchBttn = document.createElement('button');
      //       searchBttn.setAttribute("type","submit");
      //       searchBttn.setAttribute("id","search-button");
      //       searchBttn.textContent = "Search";
      //       searchContainer.append(searchBttn);

          
      //     const dropDownContainer = document.createElement('div');
      //     dropDownContainer.classList.add('drop-down-container');
      //     searchForm.append(dropDownContainer);

      //       const searchDropDown = document.createElement('div');
      //       searchDropDown.classList.add('search-drop-down');
      //       dropDownContainer.append(searchDropDown);


      //     const statusDisplay = document.createElement('div');
      //     statusDisplay.classList.add('status-display');
      //     searchForm.append(statusDisplay);

      //       const statusMessage = document.createElement('div');
      //       // statusMessage.textContent = "STATUS";
      //       statusDisplay.append(statusMessage);

      // }

      // function displayTemps (){
      //   const displayContainer = document.createElement("div");
      //   displayContainer.classList.add("display-container");
      //   mainContainer.append(displayContainer);

      //     const currentWeatherContainer = document.createElement("div");
      //     currentWeatherContainer.classList.add("current-weather-container");
      //     displayContainer.append(currentWeatherContainer);


      //       const currentWeatherDisplay = document.createElement('div');
      //       currentWeatherDisplay.classList.add('current-weather-display');
      //       currentWeatherContainer.append(currentWeatherDisplay);


      //         const tempDisplayDiv = document.createElement("div");
      //         tempDisplayDiv.classList.add("temp-display");
      //         currentWeatherDisplay.append(tempDisplayDiv);

      //         const iconCurrentDiv = document.createElement('div');
      //         iconCurrentDiv.classList.add('icon-current');
      //         currentWeatherDisplay.append(iconCurrentDiv);

      //         const weatherDescDiv = document.createElement('div');
      //         weatherDescDiv.classList.add('weather-desc');
      //         currentWeatherDisplay.append(weatherDescDiv);

      //         const uvIndexDiv = document.createElement('div');
      //         uvIndexDiv.classList.add('uv-index');
      //         currentWeatherDisplay.append(uvIndexDiv);


      // }

      // function displayFooter (){
      //   const footerContainer = document.createElement("div");
      //   footerContainer.classList.add('footer-container');
      //   mainContainer.append(footerContainer);

      //     const footerDiv = document.createElement('div');
      //     footerDiv.classList.add('footer');
      //     footerContainer.append(footerDiv);

      //       const linkToGithub = document.createElement('a');
      //       linkToGithub.setAttribute('href', 'https://github.com/Risshiganesh/weather-app');
      //       linkToGithub.textContent = 'Made by Risshiganesh Villalan';
      //       footerDiv.append(linkToGithub);
      // }

     

      // loadingScreen();
      // displayError();
      // displayLogo();
      // displaySearch();
      // displayTemps();
      // displayFooter();



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

       
        return;
      }
    

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
   
    return;
  }

  const currentWeatherData = weatherData.finalData.currentWeatherData;
  const avgDayTemp = weatherData.finalData.avgDayTemp;

  if (tempToggle.textContent === "Celsius") {
   

    

    tempDisplay.textContent = currentWeatherData.actualCelsius + "°C";

    const iconsrc = currentWeatherData.currentIcon;

    appendIcon(currentIcon, iconsrc);
    weatherDesc.textContent = currentWeatherData.currentDescription;
    uvIndex.textContent = "UV Index: " + currentWeatherData.currentUV;

    displayDailyDOM(avgDayTemp);

    return;
  }

  if (tempToggle.textContent === "Fahrenheit") {
  

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

 
  if (!mainErrorContainer.classList.contains("display-error")) {
    mainErrorContainer.classList.add("display-error");
    
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

    // user may reject so disable this
    // errorDisplay(errorMsg);
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
     
      return;
    }
    

    

    const location = weatherData.location.name;
    const country = weatherData.location.country;
    // const url = ;
    

    // ----Current weather------
    const currentWeather = weatherData.current;

    const actualCelsius = currentWeather.temp_c;
    const actualFahrenheit = currentWeather.temp_f;
    const feelsLikeCelsius = currentWeather.feelslike_c;
    const feelsLikeFahrenheit = currentWeather.feelslike_f;
    const currentIcon = currentWeather.condition.icon;

    const currentDescription = currentWeather.condition.text;

    const currentUV = currentWeather.uv;


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


  try {
    if (!location) {
      return;
    }

    const weatherData = await getWeatherData(location);

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


}

function createDropDown(autocompleteArray) {
  searchDropDown.querySelectorAll("*").forEach(function (child) {
    child.remove();
  });



  for (const each of autocompleteArray) {
    const dropDownItem = document.createElement("div");
    dropDownItem.classList.add("drop-down-item");
    dropDownItem.textContent = each.name + ", " + each.country;
    searchDropDown.append(dropDownItem);
  }

  if (searchDropDown.querySelector(".drop-down-item")) {
    dropDownClickEvent();
  }
}

function dropDownClickEvent() {
  const dropDownItemNodeList = document.querySelectorAll(".drop-down-item");

  dropDownItemNodeList.forEach((dropDownItem) => {
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

    statusDisplay(false);

    // display location not found on DOM
    // if no data in searchSuccess use initialData
    if (!searchSuccess) {
      searchSuccess = _initialiser_js__WEBPACK_IMPORTED_MODULE_1__.initialData;
    }
    initialDOMData(searchSuccess);
    removeLoadingScreen();
    return;
  }

  // if search is a success

  if (weatherResult == true) {
  }

  searchSuccess = weatherResult;


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

/***/ "./src/assets/background-video.mp4":
/*!*****************************************!*\
  !*** ./src/assets/background-video.mp4 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "180cd1ef727f81cf5a7b.mp4";

/***/ }),

/***/ "./src/assets/loading.gif":
/*!********************************!*\
  !*** ./src/assets/loading.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a17d64354373bd0968b.gif";

/***/ }),

/***/ "./src/assets/location-icon.png":
/*!**************************************!*\
  !*** ./src/assets/location-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8330d2077d4a299003e5.png";

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









(0,_createDOM__WEBPACK_IMPORTED_MODULE_1__.appendDOM)();

(0,_searchAction__WEBPACK_IMPORTED_MODULE_5__.searchEvents)();
// Uncomment later
(0,_initialiser__WEBPACK_IMPORTED_MODULE_2__.initialise)();
// TEST

// Add eventListeners
(0,_searchAction__WEBPACK_IMPORTED_MODULE_5__.geolocationBtnEvent)();
(0,_searchAction__WEBPACK_IMPORTED_MODULE_5__.removeDropDown)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_4__.toggleTemps)();
(0,_domAction__WEBPACK_IMPORTED_MODULE_4__.dailyDivsEventListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sTUFBTSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsZUFBZSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFlBQVks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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21CO0FBQ0c7QUFDUTtBQUNlO0FBSzFDOzs7O0FBSXhCLHFEQUFTOztBQUVULDJEQUFZO0FBQ1o7QUFDQSx3REFBVTtBQUNWOztBQUVBO0FBQ0Esa0VBQW1CO0FBQ25CLDZEQUFjO0FBQ2QsdURBQVc7QUFDWCxrRUFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jcmVhdGVET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tQWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Vycm9ySGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2VvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbml0aWFsaXNlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zZWFyY2hBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIFxufVxuXG5odG1sLFxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgXG5cbn1cblxuYm9keSAqIHtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCByZWQ7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiAucHJpbWFyeS1jb250YWluZXJ7XG5cbn0gKi9cblxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jYmFja2dyb3VuZC12aWRlb3tcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBnb2xkOyAqL1xuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXG59XG5cbi8qIC5iYWNrZ3JvdW5kLWNvbnRhaW5lciA+IHZpZGVvIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogYXV0bztcbn0gKi9cblxuLm1haW4tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIGdhcDogMTBweDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDkwcHggMWZyIDM1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImxvZ29cIlxuICAgIFwic2VhcmNoXCJcbiAgICBcImRpc3BsYXlcIlxuICAgIFwiZm9vdGVyXCIgO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5cbi5tYWluLWVycm9yLWNvbnRhaW5lcntcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCA3LCAwLCAwLjUxNCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lcnJvci10aXRsZXtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQgO1xufVxuXG4uZXJyb3ItZGlzcGxheS1jb250YWluZXJ7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1MSwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdyaWQtYXV0by1mbG93OiByb3c7ICovXG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcblxufVxuXG4uZXJyb3ItbWVzc2FnZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDAsIDAsIDAuNjUxKTtcbn1cblxuLmRpc3BsYXktZXJyb3J7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvYWRpbmctc2NyZWVue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQ4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG5cbi5sb2FkaW5nLXNjcmVlbiAqIHtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXG59XG5cbi5lbmFibGUtbG9hZGluZy1zY3JlZW57XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvYWRpbmctZGl2e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4ubG9hZGluZy1naWYtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLWdpZi1jb250YWluZXI+aW1ne1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ubG9hZGluZy10ZXh0IHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ29sZDsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ3JpZC1hcmVhOiBsb2dvO1xuXG59XG5cbi5sb2dvLWRpdiB7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQyNSk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC40MTUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmcjtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuXG4ubG9nby1pY29uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGVuZDtcbn1cblxuLmxvZ28taWNvbiA+IGltZ3tcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmxvZ28tdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuXG5cblxuXG4vKiBoZWlnaHQgaXMgNzBweCAqL1xuI3NlYXJjaC1mb3Jte1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBhcXVhOyAqL1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGdyaWQtYXJlYTogc2VhcmNoO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweCAxMDBweDtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gICAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG4jc2VhcmNoLWxvY2F0aW9uIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC8qIHdpZHRoOiAxMDBweDsgKi9cbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuNTYyKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xuXG59XG5cbiNnZW9sb2NhdGlvbi1idXR0b257XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDAsIDEzMCwgMC41MzgpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGluZGlnbztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuI2dlb2xvY2F0aW9uLWJ1dHRvbiA+IGltZ3tcblxuICAgIHdpZHRoOjE1cHg7XG59XG5cbiNzZWFyY2gtYnV0dG9ue1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAwLCAxMzAsIDAuNTM4KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBpbmRpZ287XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jZ2VvbG9jYXRpb24tYnV0dG9uOmhvdmVyLFxuI3NlYXJjaC1idXR0b246aG92ZXJ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MiwgMjU1LCA0NywgMC42Mik7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XG59XG5cbi5kcm9wLWRvd24tY29udGFpbmVye1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xuICAgIGhlaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcblxufVxuXG4uc2VhcmNoLWRyb3AtZG93bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgbmF2eTsgKi9cbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMCwgMTE2LCAwLjY5Nyk7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcHVycGxlOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG59XG5cbi5kcm9wLWRvd24taXRlbXtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZHJvcC1kb3duLWl0ZW06aG92ZXJ7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjU5KTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xufVxuXG4uc3RhdHVzLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGF0dXMtbWVzc2FnZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHB1cnBsZTtcbn1cblxuXG5cbi5kaXNwbGF5LWNvbnRhaW5lcntcbiAgICAvKiBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XG5cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG59XG5cbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheSAqe1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTsgKi9cbn1cblxuLmN1cnJlbnQtd2VhdGhlci1kaXNwbGF5e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRjb3JhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwNjc7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZW1wLWRpc3BsYXl7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZnVjaHNpYTsgKi9cbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5pY29uLWN1cnJlbnR7XG4gICAgYWxpZ24tc2VsZjogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbi1jdXJyZW50ID4gaW1nIHtcbiAgICBoZWlnaHQ6IDU1cHg7XG59XG5cbi53ZWF0aGVyLWRlc2N7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICAvKiBhbGlnbi1zZWxmOiBzdGFydDsgKi9cbn1cblxuLnV2LWluZGV4e1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cbn1cblxuLnRvZ2dsZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDVweDtcbn1cblxuLnRvZ2dsZS1jb250YWluZXIgPiBsYWJlbHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbiN0ZW1wLXRvZ2dsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsIDY3LCAxMzgsIDAuNTE0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAxNTMsIDI1NSwgMC42NTgpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRocmVlLWRheS1hdmVyYWdle1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIHdpZHRoOiA5MCU7ICovXG4gICAgaGVpZ2h0OiAyMTBweDtcblxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG4gICAgICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC42MzcpO1xuICAgIFxuXG59XG5cblxuLnRocmVlLWRheS1hdmVyYWdlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JleTsgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTYsIDU2LCAwLjYzNyk7ICovXG59XG5cblxuLmRhaWx5IHtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogNXB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxufVxuXG4uc2VsZWN0ZWQtZGFpbHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NWMwMDU2O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyLCAyMDYsIDIpO1xufVxuLmRhaWx5OmhvdmVye1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM4LCAxNTksIDAsIDAuMzM0KTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMCwgMC43NDUpO1xufVxuXG4uaG91cmx5LWF2ZXJhZ2V7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNjM3KTtcblxufVxuXG4uaG91cmx5e1xuXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JleTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGdhcDogM3B4O1xufVxuXG4uaWNvbi1ob3VybHk+aW1nIHtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLyogLmNvbmRpdGlvbi1ob3VybHl7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYXZnLXRlbXAtaG91cmx5e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnV2LWhvdXJseXtcbiAgICBmb250LXNpemU6IDEycHg7XG59ICovXG5cbi5mb290ZXItY29udGFpbmVye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IGZvb3Rlcjtcbn1cblxuLmZvb3RlcntcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBnb2xkOyAqL1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsd0JBQXdCOzs7QUFHNUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLHlDQUF5QztBQUM3Qzs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLHNDQUFzQztJQUN0Qzs7OzthQUlTO0lBQ1QsY0FBYztJQUNkLFVBQVU7SUFDVixTQUFTO0FBQ2I7OztBQUdBOztJQUVJLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVOztJQUVWLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7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SUFDWixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgXFxufVxcblxcbmh0bWwsXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzgwMDAyMDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgXFxuXFxufVxcblxcbmJvZHkgKiB7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogLnByaW1hcnktY29udGFpbmVye1xcblxcbn0gKi9cXG5cXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGZ1Y2hzaWE7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2JhY2tncm91bmQtdmlkZW97XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ29sZDsgKi9cXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG59XFxuXFxuLyogLmJhY2tncm91bmQtY29udGFpbmVyID4gdmlkZW8ge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW46IGF1dG87XFxufSAqL1xcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBnYXA6IDEwcHg7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDkwcHggMWZyIDM1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJsb2dvXFxcIlxcbiAgICBcXFwic2VhcmNoXFxcIlxcbiAgICBcXFwiZGlzcGxheVxcXCJcXG4gICAgXFxcImZvb3RlclxcXCIgO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgei1pbmRleDogMTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1lcnJvci1jb250YWluZXJ7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgNywgMCwgMC41MTQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVycm9yLXRpdGxle1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQgO1xcbn1cXG5cXG4uZXJyb3ItZGlzcGxheS1jb250YWluZXJ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTUxLCAwLCAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC1hdXRvLWZsb3c6IHJvdzsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG59XFxuXFxuLmVycm9yLW1lc3NhZ2V7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMCwgMCwgMC42NTEpO1xcbn1cXG5cXG4uZGlzcGxheS1lcnJvcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmxvYWRpbmctc2NyZWVue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NDgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubG9hZGluZy1zY3JlZW4gKiB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmVuYWJsZS1sb2FkaW5nLXNjcmVlbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmxvYWRpbmctZGl2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5sb2FkaW5nLWdpZi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvYWRpbmctZ2lmLWNvbnRhaW5lcj5pbWd7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4ubG9hZGluZy10ZXh0IHtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbn1cXG5cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBncmlkLWFyZWE6IGxvZ287XFxuXFxufVxcblxcbi5sb2dvLWRpdiB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MjUpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjQxNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4ubG9nby1pY29uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbn1cXG5cXG4ubG9nby1pY29uID4gaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmxvZ28tdGV4dHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcblxcblxcblxcblxcbi8qIGhlaWdodCBpcyA3MHB4ICovXFxuI3NlYXJjaC1mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGFxdWE7ICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC1hcmVhOiBzZWFyY2g7XFxufVxcblxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1MHB4IDEwMHB4O1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4jc2VhcmNoLWxvY2F0aW9uIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiB3aWR0aDogMTAwcHg7ICovXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMCwgMTI4LCAwLjU2Mik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcblxcbn1cXG5cXG4jZ2VvbG9jYXRpb24tYnV0dG9ue1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDk3LCA5Nyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDAsIDEzMCwgMC41MzgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBpbmRpZ287XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2VvbG9jYXRpb24tYnV0dG9uID4gaW1ne1xcblxcbiAgICB3aWR0aDoxNXB4O1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbntcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA5NywgOTcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAwLCAxMzAsIDAuNTM4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgaW5kaWdvO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNnZW9sb2NhdGlvbi1idXR0b246aG92ZXIsXFxuI3NlYXJjaC1idXR0b246aG92ZXJ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcyLCAyNTUsIDQ3LCAwLjYyKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XFxufVxcblxcbi5kcm9wLWRvd24tY29udGFpbmVye1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcbn1cXG5cXG4uc2VhcmNoLWRyb3AtZG93bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBuYXZ5OyAqL1xcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMCwgMTE2LCAwLjY5Nyk7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxufVxcblxcbi5kcm9wLWRvd24taXRlbXtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRyb3AtZG93bi1pdGVtOmhvdmVye1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjY1OSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xcbn1cXG5cXG4uc3RhdHVzLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0dXMtbWVzc2FnZXtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuXFxuXFxuLmRpc3BsYXktY29udGFpbmVye1xcbiAgICAvKiBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XFxuXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheSAqe1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7ICovXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXItZGlzcGxheXtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDIwNjc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGVtcC1kaXNwbGF5e1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBmdWNoc2lhOyAqL1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmljb24tY3VycmVudHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLWN1cnJlbnQgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxufVxcblxcbi53ZWF0aGVyLWRlc2N7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgLyogYWxpZ24tc2VsZjogc3RhcnQ7ICovXFxufVxcblxcbi51di1pbmRleHtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxufVxcblxcbi50b2dnbGUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZ2dsZS1jb250YWluZXIgPiBsYWJlbHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jdGVtcC10b2dnbGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNSwgNjcsIDEzOCwgMC41MTQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMTUzLCAyNTUsIDAuNjU4KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGhyZWUtZGF5LWF2ZXJhZ2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgLyogd2lkdGg6IDkwJTsgKi9cXG4gICAgaGVpZ2h0OiAyMTBweDtcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTYsIDU2LCAwLjYzNyk7XFxuICAgIFxcblxcbn1cXG5cXG5cXG4udGhyZWUtZGF5LWF2ZXJhZ2UtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG5cXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JleTsgKi9cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTYsIDU2LCAwLjYzNyk7ICovXFxufVxcblxcblxcbi5kYWlseSB7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFxufVxcblxcbi5zZWxlY3RlZC1kYWlseXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NWMwMDU2O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMiwgMjA2LCAyKTtcXG59XFxuLmRhaWx5OmhvdmVye1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzgsIDE1OSwgMCwgMC4zMzQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMCwgMC43NDUpO1xcbn1cXG5cXG4uaG91cmx5LWF2ZXJhZ2V7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyZXk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNjM3KTtcXG5cXG59XFxuXFxuLmhvdXJseXtcXG5cXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuLmljb24taG91cmx5PmltZyB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4vKiAuY29uZGl0aW9uLWhvdXJseXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uYXZnLXRlbXAtaG91cmx5e1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi51di1ob3VybHl7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59ICovXFxuXFxuLmZvb3Rlci1jb250YWluZXJ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbn1cXG5cXG4uZm9vdGVye1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBnb2xkOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiYWNrZ3JvdW5kVmlkZW8gZnJvbSBcIi4vYXNzZXRzL2JhY2tncm91bmQtdmlkZW8ubXA0XCI7XG5cbmltcG9ydCBsb2dvSWNvbiBmcm9tIFwiLi9hc3NldHMvbG9nby5wbmdcIjtcblxuaW1wb3J0IGxvY2F0aW9uSWNvbiBmcm9tIFwiLi9hc3NldHMvbG9jYXRpb24taWNvbi5wbmdcIjtcblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kQmFja2dyb3VuZFZpZGVvKCkge1xuICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrZ3JvdW5kLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjcmVhdGVWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG5cbiAgY3JlYXRlVmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIsIFwiYW5vbnltb3VzXCIpO1xuICBjcmVhdGVWaWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJcIik7XG4gIGNyZWF0ZVZpZGVvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3ZWJraXQtcGxheXNpbmxpbmVcIiwgXCJcIik7XG4gIGNyZWF0ZVZpZGVvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBcIlwiKTtcbiAgY3JlYXRlVmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcIm11dGVkXCIsIFwiXCIpO1xuICBjcmVhdGVWaWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwibG9vcFwiLCBcIlwiKTtcbiAgY3JlYXRlVmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFja2dyb3VuZC12aWRlb1wiKTtcblxuICBjb25zdCB2aWRlb1NvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG5cbiAgdmlkZW9Tb3VyY2Uuc3JjID0gYmFja2dyb3VuZFZpZGVvO1xuXG4gIHZpZGVvU291cmNlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ2aWRlby9tcDRcIik7XG5cbiAgYmFja2dyb3VuZENvbnRhaW5lci5hcHBlbmQoY3JlYXRlVmlkZW9FbGVtZW50KTtcbiAgY3JlYXRlVmlkZW9FbGVtZW50LmFwcGVuZCh2aWRlb1NvdXJjZSk7XG5cbiAgLy8gdmlkZW8gZG9lcyBub3QgYXV0b21hdGljYWxseSBwbGF5IGJlY2F1c2UgdGhlcmUgaGFzIHRvIGJlIHVzZXIgaW5wdXQgZm9yIHNvbWUgcmVhc29uLlxuXG4gIGNvbnN0IGdlb2xvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW9sb2NhdGlvbi1idXR0b25cIik7XG4gIGdlb2xvY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgY3JlYXRlVmlkZW9FbGVtZW50LnBsYXkoKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnV0dG9uXCIpO1xuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBcbiAgICBjcmVhdGVWaWRlb0VsZW1lbnQucGxheSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kSWNvbnMoKSB7XG4gIGNvbnN0IGxvZ29JY29uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvLWljb25cIik7XG4gIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ltZy5zcmMgPSBsb2dvSWNvbjtcbiAgbG9nb0ljb25EaXYuYXBwZW5kKGxvZ29JbWcpO1xuXG4gIGNvbnN0IGdlb2xvY2F0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW9sb2NhdGlvbi1idXR0b25cIik7XG5cbiAgY29uc3QgbG9jYXRpb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbG9jYXRpb25JbWcuc3JjID0gbG9jYXRpb25JY29uO1xuICBnZW9sb2NhdGlvbkJ0bi5hcHBlbmQobG9jYXRpb25JbWcpXG5cbn1cblxuZnVuY3Rpb24gYXBwZW5kRE9NKCkge1xuICBhcHBlbmRCYWNrZ3JvdW5kVmlkZW8oKTtcbiAgYXBwZW5kSWNvbnMoKTtcbn1cblxuLy8gVG8gZHluYW1pY2FsbHkgZ2VuZXJhdGUgRE9NLCBidXQgc3VwZXIgdGltZSBjb25zdW1pbmcgdG8gY29uc3RydWN0XG5mdW5jdGlvbiBjcmVhdGVDb3JlRE9NKCl7XG5cbiAgLy8gY29uc3QgcHJpbWFyeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbWFyeS1jb250YWluZXJcIik7XG5cblxuICAvLyBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZC1jb250YWluZXJcIik7XG4gIC8vIHByaW1hcnlDb250YWluZXIuYXBwZW5kKGJhY2tncm91bmRDb250YWluZXIpO1xuXG4gIC8vICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG4gIC8vICAgYmFja2dyb3VuZENvbnRhaW5lci5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgIC8vIGxvYWRpbmcgc2NyZWVuXG5cbiAgICAgIC8vIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgICAvLyBmdW5jdGlvbiBsb2FkaW5nU2NyZWVuKCl7XG5cbiAgICAgIC8vICAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyAgIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LmFkZChcImxvYWRpbmctc2NyZWVuXCIpO1xuICAgICAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChsb2FkaW5nU2NyZWVuKTtcbiAgXG4gICAgICAvLyAgICAgY29uc3QgbG9hZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyAgICAgbG9hZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9hZGluZy1kaXZcIik7XG4gICAgICAvLyAgICAgbG9hZGluZ1NjcmVlbi5hcHBlbmQobG9hZGluZ0Rpdik7XG4gIFxuICAgICAgLy8gICAgICAgY29uc3QgbG9hZGluZ0dJRkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyAgICAgICBsb2FkaW5nR0lGQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkaW5nLWdpZi1jb250YWluZXJcIik7XG4gICAgICAvLyAgICAgICBsb2FkaW5nRGl2LmFwcGVuZChsb2FkaW5nR0lGQ29udGFpbmVyKTtcbiAgXG4gICAgICAvLyAgICAgICBjb25zdCBsb2FkaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyAgICAgICBsb2FkaW5nVGV4dC5jbGFzc0xpc3QuYWRkKFwibG9hZGluZy10ZXh0XCIpO1xuICAgICAgLy8gICAgICAgbG9hZGluZ1RleHQudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcbiAgICAgIC8vICAgICAgIGxvYWRpbmdEaXYuYXBwZW5kKGxvYWRpbmdUZXh0KTtcblxuICAgICAgLy8gfVxuXG5cbiAgICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlFcnJvciAoKXtcbiAgICAgIC8vICAgY29uc3QgbWFpbkVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vICAgbWFpbkVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWVycm9yLWNvbnRhaW5lclwiKTtcbiAgICAgIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobWFpbkVycm9yQ29udGFpbmVyKTtcblxuICAgICAgLy8gICAgIGNvbnN0IGVycm9yVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gICAgIGVycm9yVGl0bGUuY2xhc3NMaXN0LmFkZChcImVycm9yLXRpdGxlXCIpO1xuICAgICAgLy8gICAgIGVycm9yVGl0bGUudGV4dENvbnRlbnQgPSBcIkVycm9yXCI7XG4gICAgICAvLyAgICAgbWFpbkVycm9yQ29udGFpbmVyLmFwcGVuZChlcnJvclRpdGxlKTtcblxuICAgICAgLy8gICAgIGNvbnN0IGVycm9yRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyAgICAgZXJyb3JEaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1kaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgICAgIC8vICAgICBtYWluRXJyb3JDb250YWluZXIuYXBwZW5kKGVycm9yRGlzcGxheUNvbnRhaW5lcik7XG5cbiAgICAgIC8vIH1cblxuICAgICAgLy8gZnVuY3Rpb24gZGlzcGxheUxvZ28gKCl7XG4gICAgICAvLyAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWNvbnRhaW5lclwiKTtcbiAgICAgIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobG9nb0NvbnRhaW5lcik7XG5cbiAgICAgIC8vICAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyAgICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9nby1kaXZcIik7XG4gICAgICAvLyAgICAgbG9nb0NvbnRhaW5lci5hcHBlbmQobG9nb0Rpdik7XG5cbiAgICAgIC8vICAgICAgIGNvbnN0IGxvZ29JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxvZ28tdGV4dFwiKTtcbiAgICAgIC8vICAgICAgIGxvZ29JY29uLmNsYXNzTGlzdC5hZGQoJ2xvZ28taWNvbicpO1xuICAgICAgLy8gICAgICAgbG9nb0Rpdi5hcHBlbmQobG9nb0ljb24pO1xuXG4gICAgICAvLyAgICAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyAgICAgICBsb2dvVGV4dC5jbGFzc0xpc3QuYWRkKFwibG9nby10ZXh0XCIpO1xuICAgICAgLy8gICAgICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSBcIlJpc3Nod2VhdGhlclwiO1xuICAgICAgLy8gICAgICAgbG9nb0Rpdi5hcHBlbmQobG9nb1RleHQpO1xuICAgICAgLy8gfVxuXG5cblxuICAgICAgLy8gZnVuY3Rpb24gZGlzcGxheVNlYXJjaCgpe1xuICAgICAgLy8gICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vICAgc2VhcmNoRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2VhcmNoLWZvcm1cIik7XG4gICAgICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKHNlYXJjaEZvcm0pO1xuXG4gICAgICAvLyAgICAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vICAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1jb250YWluZXJcIik7XG4gICAgICAvLyAgICAgc2VhcmNoRm9ybS5hcHBlbmQoc2VhcmNoQ29udGFpbmVyKTtcblxuICAgICAgLy8gICAgICAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgLy8gICAgICAgc2VhcmNoTG9jYXRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywnc2VhcmNoJyk7XG4gICAgICAvLyAgICAgICBzZWFyY2hMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnc2VhcmNoLWxvY2F0aW9uJyk7XG4gICAgICAvLyAgICAgICBzZWFyY2hMb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdzZWFyY2gtbG9jYXRpb24nKTtcbiAgICAgICAgICAgIFxuICAgICAgLy8gICAgICAgc2VhcmNoTG9jYXRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpO1xuICAgICAgLy8gICAgICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChzZWFyY2hMb2NhdGlvbilcblxuXG4gICAgICAvLyAgICAgICBjb25zdCBnZW9sb2NhdGlvbkJ0dG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgLy8gICAgICAgZ2VvbG9jYXRpb25CdHRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJnZW9sb2NhdGlvbi1idXR0b25cIik7XG4gICAgICAvLyAgICAgICBzZWFyY2hDb250YWluZXIuYXBwZW5kKGdlb2xvY2F0aW9uQnR0bik7XG5cbiAgICAgIC8vICAgICAgIGNvbnN0IHNlYXJjaEJ0dG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIC8vICAgICAgIHNlYXJjaEJ0dG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpO1xuICAgICAgLy8gICAgICAgc2VhcmNoQnR0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwic2VhcmNoLWJ1dHRvblwiKTtcbiAgICAgIC8vICAgICAgIHNlYXJjaEJ0dG4udGV4dENvbnRlbnQgPSBcIlNlYXJjaFwiO1xuICAgICAgLy8gICAgICAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChzZWFyY2hCdHRuKTtcblxuICAgICAgICAgIFxuICAgICAgLy8gICAgIGNvbnN0IGRyb3BEb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyAgICAgZHJvcERvd25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duLWNvbnRhaW5lcicpO1xuICAgICAgLy8gICAgIHNlYXJjaEZvcm0uYXBwZW5kKGRyb3BEb3duQ29udGFpbmVyKTtcblxuICAgICAgLy8gICAgICAgY29uc3Qgc2VhcmNoRHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vICAgICAgIHNlYXJjaERyb3BEb3duLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1kcm9wLWRvd24nKTtcbiAgICAgIC8vICAgICAgIGRyb3BEb3duQ29udGFpbmVyLmFwcGVuZChzZWFyY2hEcm9wRG93bik7XG5cblxuICAgICAgLy8gICAgIGNvbnN0IHN0YXR1c0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vICAgICBzdGF0dXNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1kaXNwbGF5Jyk7XG4gICAgICAvLyAgICAgc2VhcmNoRm9ybS5hcHBlbmQoc3RhdHVzRGlzcGxheSk7XG5cbiAgICAgIC8vICAgICAgIGNvbnN0IHN0YXR1c01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vICAgICAgIC8vIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlNUQVRVU1wiO1xuICAgICAgLy8gICAgICAgc3RhdHVzRGlzcGxheS5hcHBlbmQoc3RhdHVzTWVzc2FnZSk7XG5cbiAgICAgIC8vIH1cblxuICAgICAgLy8gZnVuY3Rpb24gZGlzcGxheVRlbXBzICgpe1xuICAgICAgLy8gICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIC8vICAgZGlzcGxheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1jb250YWluZXJcIik7XG4gICAgICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGRpc3BsYXlDb250YWluZXIpO1xuXG4gICAgICAvLyAgICAgY29uc3QgY3VycmVudFdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gICAgIGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXdlYXRoZXItY29udGFpbmVyXCIpO1xuICAgICAgLy8gICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kKGN1cnJlbnRXZWF0aGVyQ29udGFpbmVyKTtcblxuXG4gICAgICAvLyAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vICAgICAgIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXdlYXRoZXItZGlzcGxheScpO1xuICAgICAgLy8gICAgICAgY3VycmVudFdlYXRoZXJDb250YWluZXIuYXBwZW5kKGN1cnJlbnRXZWF0aGVyRGlzcGxheSk7XG5cblxuICAgICAgLy8gICAgICAgICBjb25zdCB0ZW1wRGlzcGxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyAgICAgICAgIHRlbXBEaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWRpc3BsYXlcIik7XG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmQodGVtcERpc3BsYXlEaXYpO1xuXG4gICAgICAvLyAgICAgICAgIGNvbnN0IGljb25DdXJyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyAgICAgICAgIGljb25DdXJyZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2ljb24tY3VycmVudCcpO1xuICAgICAgLy8gICAgICAgICBjdXJyZW50V2VhdGhlckRpc3BsYXkuYXBwZW5kKGljb25DdXJyZW50RGl2KTtcblxuICAgICAgLy8gICAgICAgICBjb25zdCB3ZWF0aGVyRGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gICAgICAgICB3ZWF0aGVyRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRlc2MnKTtcbiAgICAgIC8vICAgICAgICAgY3VycmVudFdlYXRoZXJEaXNwbGF5LmFwcGVuZCh3ZWF0aGVyRGVzY0Rpdik7XG5cbiAgICAgIC8vICAgICAgICAgY29uc3QgdXZJbmRleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gICAgICAgICB1dkluZGV4RGl2LmNsYXNzTGlzdC5hZGQoJ3V2LWluZGV4Jyk7XG4gICAgICAvLyAgICAgICAgIGN1cnJlbnRXZWF0aGVyRGlzcGxheS5hcHBlbmQodXZJbmRleERpdik7XG5cblxuICAgICAgLy8gfVxuXG4gICAgICAvLyBmdW5jdGlvbiBkaXNwbGF5Rm9vdGVyICgpe1xuICAgICAgLy8gICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRhaW5lcicpO1xuICAgICAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChmb290ZXJDb250YWluZXIpO1xuXG4gICAgICAvLyAgICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgICAgLy8gICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmQoZm9vdGVyRGl2KTtcblxuICAgICAgLy8gICAgICAgY29uc3QgbGlua1RvR2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgLy8gICAgICAgbGlua1RvR2l0aHViLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vUmlzc2hpZ2FuZXNoL3dlYXRoZXItYXBwJyk7XG4gICAgICAvLyAgICAgICBsaW5rVG9HaXRodWIudGV4dENvbnRlbnQgPSAnTWFkZSBieSBSaXNzaGlnYW5lc2ggVmlsbGFsYW4nO1xuICAgICAgLy8gICAgICAgZm9vdGVyRGl2LmFwcGVuZChsaW5rVG9HaXRodWIpO1xuICAgICAgLy8gfVxuXG4gICAgIFxuXG4gICAgICAvLyBsb2FkaW5nU2NyZWVuKCk7XG4gICAgICAvLyBkaXNwbGF5RXJyb3IoKTtcbiAgICAgIC8vIGRpc3BsYXlMb2dvKCk7XG4gICAgICAvLyBkaXNwbGF5U2VhcmNoKCk7XG4gICAgICAvLyBkaXNwbGF5VGVtcHMoKTtcbiAgICAgIC8vIGRpc3BsYXlGb290ZXIoKTtcblxuXG5cbn1cblxuZXhwb3J0IHsgYXBwZW5kRE9NIH07XG4iLCJpbXBvcnQgeyB3ZWF0aGVyUmVzdWx0LCB0b2RheUhvdXJseURhdGEgfSBmcm9tIFwiLi9zZWFyY2hBY3Rpb25cIjtcbi8vIGltcG9ydCB7IGVycm9yRGlzcGxheSB9IGZyb20gXCIuL3NlYXJjaEFjdGlvblwiO1xuaW1wb3J0IHsgZXJyb3JEaXNwbGF5IH0gZnJvbSBcIi4vZXJyb3JIYW5kbGluZ1wiO1xuXG5sZXQgaG91cmx5QXJyYXk7XG5cbmNvbnN0IHRlbXBEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWRpc3BsYXlcIik7XG5jb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1jdXJyZW50XCIpO1xuY29uc3Qgd2VhdGhlckRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGVzY1wiKTtcbmNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnV2LWluZGV4XCIpO1xuXG5jb25zdCB0ZW1wVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wLXRvZ2dsZVwiKTtcblxuY29uc3QgZGFpbHlEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYWlseVwiKTtcblxuZnVuY3Rpb24gdG9nZ2xlVGVtcHMoKSB7XG4gIGxldCBjaG9zZW5UZW1wID0gdGVtcFRvZ2dsZS50ZXh0Q29udGVudDtcblxuICB0ZW1wVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgICB0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID0gXCJGYWhyZW5oZWl0XCI7XG4gICAgICAgIGNob3NlblRlbXAgPSBcIkZhaHJlbmhlaXRcIjtcblxuICAgICAgICAvLyBmdW5jdGlvbmlzZSB0aGlzP1xuICAgICAgICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyUmVzdWx0KTtcbiAgICAgICAgaWYgKCFob3VybHlBcnJheSkge1xuICAgICAgICAgIGRpc3BsYXlIb3VybHlET00odG9kYXlIb3VybHlEYXRhKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheUhvdXJseURPTShob3VybHlBcnJheSk7XG4gICAgICAgXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgICAgIHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPSBcIkNlbHNpdXNcIjtcbiAgICAgICAgY2hvc2VuVGVtcCA9IFwiQ2Vsc2l1c1wiO1xuICAgICAgICB1cGRhdGVET01XaXRoRGF0YSh3ZWF0aGVyUmVzdWx0KTtcblxuICAgICAgICBpZiAoIWhvdXJseUFycmF5KSB7XG4gICAgICAgICAgZGlzcGxheUhvdXJseURPTSh0b2RheUhvdXJseURhdGEpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5SG91cmx5RE9NKGhvdXJseUFycmF5KTtcblxuICAgICAgIFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgXG5cbiAgICAgIHJldHVybjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSBcIkVycm9yIGluIHRvZ2dsZVRlbXBzOiBcIiArIGVycm9yO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgICBlcnJvckRpc3BsYXkoZXJyb3JNc2cpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJEYXRhKSB7XG4gIGlmICghd2VhdGhlckRhdGEpIHtcbiAgIFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IHdlYXRoZXJEYXRhLmZpbmFsRGF0YS5jdXJyZW50V2VhdGhlckRhdGE7XG4gIGNvbnN0IGF2Z0RheVRlbXAgPSB3ZWF0aGVyRGF0YS5maW5hbERhdGEuYXZnRGF5VGVtcDtcblxuICBpZiAodGVtcFRvZ2dsZS50ZXh0Q29udGVudCA9PT0gXCJDZWxzaXVzXCIpIHtcbiAgIFxuXG4gICAgXG5cbiAgICB0ZW1wRGlzcGxheS50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5hY3R1YWxDZWxzaXVzICsgXCLCsENcIjtcblxuICAgIGNvbnN0IGljb25zcmMgPSBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudEljb247XG5cbiAgICBhcHBlbmRJY29uKGN1cnJlbnRJY29uLCBpY29uc3JjKTtcbiAgICB3ZWF0aGVyRGVzYy50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyRGF0YS5jdXJyZW50RGVzY3JpcHRpb247XG4gICAgdXZJbmRleC50ZXh0Q29udGVudCA9IFwiVVYgSW5kZXg6IFwiICsgY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnRVVjtcblxuICAgIGRpc3BsYXlEYWlseURPTShhdmdEYXlUZW1wKTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkZhaHJlbmhlaXRcIikge1xuICBcblxuICAgIHRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmFjdHVhbEZhaHJlbmhlaXQgKyBcIsKwRlwiO1xuICAgIHdlYXRoZXJEZXNjLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXJEYXRhLmN1cnJlbnREZXNjcmlwdGlvbjtcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gXCJVViBJbmRleDogXCIgKyBjdXJyZW50V2VhdGhlckRhdGEuY3VycmVudFVWO1xuXG4gICAgZGlzcGxheURhaWx5RE9NKGF2Z0RheVRlbXApO1xuXG4gICAgcmV0dXJuO1xuICB9XG59XG4vLyBJTkNPTVBMRVRFXG5mdW5jdGlvbiBhcHBlbmRJY29uKGljb25EaXYsIGljb25zcmMpIHtcbiAgaWYgKGljb25EaXYuaGFzQ2hpbGROb2Rlcykge1xuICAgIGljb25EaXYucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKTtcblxuICBpY29uLnNyYyA9IGljb25zcmM7XG5cbiAgaWNvbkRpdi5hcHBlbmQoaWNvbik7XG5cbiAgLy8gQ09NUExFVEUgVEhJU1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RGFpbHlET00oZGFpbHlBcnJheSkge1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYWlseURpdnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZGF0ZURpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5kYXRlLWRhaWx5XCIpO1xuICAgIGNvbnN0IGF2Z1RlbXBEaXYgPSBkYWlseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuYXZnLXRlbXAtZGFpbHlcIik7XG4gICAgY29uc3QgaWNvbkRpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5pY29uLWRhaWx5XCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGRhaWx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24tZGFpbHlcIik7XG4gICAgY29uc3QgdXZEaXYgPSBkYWlseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIudXYtZGFpbHlcIik7XG5cbiAgICBkYXRlRGl2LnRleHRDb250ZW50ID0gZGFpbHlBcnJheVtpbmRleF0uZGF0ZTtcblxuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkNlbHNpdXNcIikge1xuICAgICAgYXZnVGVtcERpdi50ZXh0Q29udGVudCA9IGRhaWx5QXJyYXlbaW5kZXhdLmRheS5hdmd0ZW1wX2MgKyBcIsKwQ1wiO1xuICAgIH1cblxuICAgIGlmICh0ZW1wVG9nZ2xlLnRleHRDb250ZW50ID09PSBcIkZhaHJlbmhlaXRcIikge1xuICAgICAgYXZnVGVtcERpdi50ZXh0Q29udGVudCA9IGRhaWx5QXJyYXlbaW5kZXhdLmRheS5hdmd0ZW1wX2YgKyBcIsKwRlwiO1xuICAgIH1cblxuICAgIC8vIGlmIChpY29uRGl2Lmhhc0NoaWxkTm9kZXMpIHtcbiAgICAvLyAgIGljb25EaXYucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAvLyAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb25zdCBpY29uc3JjID0gZGFpbHlBcnJheVtpbmRleF0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgLy8gICBpY29uRGl2LmFwcGVuZChpY29uKTtcblxuICAgIGFwcGVuZEljb24oaWNvbkRpdiwgaWNvbnNyYyk7XG5cbiAgICBjb25kaXRpb25EaXYudGV4dENvbnRlbnQgPSBkYWlseUFycmF5W2luZGV4XS5kYXkuY29uZGl0aW9uLnRleHQ7XG5cbiAgICB1dkRpdi50ZXh0Q29udGVudCA9IFwiQXZnLiBVViBJbmRleDogXCIgKyBkYWlseUFycmF5W2luZGV4XS5kYXkudXY7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGFpbHlEaXZzRXZlbnRMaXN0ZW5lcigpIHtcbiAgZGFpbHlEaXZzO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYWlseURpdnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgLy8gY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcbiAgICBkYWlseURpdnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkYWlseURpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtZGFpbHlcIik7XG4gICAgICB9KTtcbiAgICAgIGhvdXJseUFycmF5ID0gd2VhdGhlclJlc3VsdC5maW5hbERhdGEuYXZnRGF5VGVtcFtpbmRleF0uaG91cjtcblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgYmFja2dyb3VuZCBjb2xvdXIgb2YgZGl2cyBoZXJlXG4gICAgICBkYWlseURpdnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1kYWlseVwiKTtcblxuICAgICAgZGlzcGxheUhvdXJseURPTShob3VybHlBcnJheSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUhvdXJseURPTShob3VybHlBcnJheSkge1xuICBpZiAoIWhvdXJseUFycmF5KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGhvdXJseURpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhvdXJseVwiKTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaG91cmx5RGl2cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgLy8gICBjb25zdCBkYXRlRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5kYXRlLWRhaWx5XCIpO1xuICAgIGNvbnN0IHRpbWVEaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtaG91cmx5XCIpO1xuXG4gICAgY29uc3QgaWNvbkRpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1ob3VybHlcIik7XG4gICAgY29uc3QgY29uZGl0aW9uRGl2ID0gaG91cmx5RGl2c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb24taG91cmx5XCIpO1xuICAgIGNvbnN0IGF2Z1RlbXBEaXYgPSBob3VybHlEaXZzW2luZGV4XS5xdWVyeVNlbGVjdG9yKFwiLmF2Zy10ZW1wLWhvdXJseVwiKTtcbiAgICBjb25zdCB1dkRpdiA9IGhvdXJseURpdnNbaW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCIudXYtaG91cmx5XCIpO1xuXG4gICAgdGltZURpdi50ZXh0Q29udGVudCA9IGhvdXJseUFycmF5W2luZGV4XS50aW1lLnNsaWNlKC01KTtcblxuICAgIC8vIGlmIChpY29uRGl2Lmhhc0NoaWxkTm9kZXMpIHtcbiAgICAvLyAgIGljb25EaXYucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAvLyAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICAvLyAgIGljb24uc3JjID0gaG91cmx5QXJyYXlbaW5kZXhdLmNvbmRpdGlvbi5pY29uO1xuXG4gICAgY29uc3QgaWNvbnNyYyA9IGhvdXJseUFycmF5W2luZGV4XS5jb25kaXRpb24uaWNvbjtcblxuICAgIC8vICAgaWNvbkRpdi5hcHBlbmQoaWNvbik7XG5cbiAgICBhcHBlbmRJY29uKGljb25EaXYsIGljb25zcmMpO1xuXG4gICAgY29uZGl0aW9uRGl2LnRleHRDb250ZW50ID0gaG91cmx5QXJyYXlbaW5kZXhdLmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiQ2Vsc2l1c1wiKSB7XG4gICAgICBhdmdUZW1wRGl2LnRleHRDb250ZW50ID0gaG91cmx5QXJyYXlbaW5kZXhdLnRlbXBfYyArIFwiwrBDXCI7XG4gICAgfVxuXG4gICAgaWYgKHRlbXBUb2dnbGUudGV4dENvbnRlbnQgPT09IFwiRmFocmVuaGVpdFwiKSB7XG4gICAgICBhdmdUZW1wRGl2LnRleHRDb250ZW50ID0gaG91cmx5QXJyYXlbaW5kZXhdLnRlbXBfZiArIFwiwrBGXCI7XG4gICAgfVxuXG4gICAgdXZEaXYudGV4dENvbnRlbnQgPSBcIlVWIEluZGV4OiBcIiArIGhvdXJseUFycmF5W2luZGV4XS51djtcbiAgfVxufVxuZXhwb3J0IHtcbiAgaG91cmx5QXJyYXksXG4gIHRvZ2dsZVRlbXBzLFxuICB1cGRhdGVET01XaXRoRGF0YSxcbiAgZGFpbHlEaXZzRXZlbnRMaXN0ZW5lcixcbiAgZGlzcGxheUhvdXJseURPTSxcbn07XG4iLCJmdW5jdGlvbiBlcnJvckRpc3BsYXkoZXJyb3IpIHtcbiAgY29uc3QgbWFpbkVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWVycm9yLWNvbnRhaW5lclwiKTtcblxuIFxuICBpZiAoIW1haW5FcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNwbGF5LWVycm9yXCIpKSB7XG4gICAgbWFpbkVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWVycm9yXCIpO1xuICAgIFxuICB9XG5cbiAgLy8gICBtYWluRXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIi5kaXNwbGF5LWVycm9yXCIpO1xuICBjb25zdCBlcnJvckRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmVycm9yLWRpc3BsYXktY29udGFpbmVyXCJcbiAgKTtcblxuICAvLyAgIGxldCBpID0gMDtcblxuICAvLyAgIHdoaWxlIChpIDwgMzApIHtcbiAgLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vICAgICBlcnJvck1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImVycm9yLW1lc3NhZ2VcIik7XG4gIC8vICAgICBlcnJvck1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBlcnJvcjtcbiAgLy8gICAgIGVycm9yRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZXJyb3JNZXNzYWdlRGl2KTtcblxuICAvLyAgICAgaSsrO1xuICAvLyAgIH1cblxuICBjb25zdCBlcnJvck1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvck1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImVycm9yLW1lc3NhZ2VcIik7XG4gIGVycm9yTWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICBlcnJvckRpc3BsYXlDb250YWluZXIuYXBwZW5kKGVycm9yTWVzc2FnZURpdik7XG59XG5cbmV4cG9ydCB7IGVycm9yRGlzcGxheSB9O1xuIiwiLy8gaW1wb3J0IHsgZXJyb3JEaXNwbGF5IH0gZnJvbSBcIi4vc2VhcmNoQWN0aW9uXCI7XG5pbXBvcnQgeyBlcnJvckRpc3BsYXkgfSBmcm9tIFwiLi9lcnJvckhhbmRsaW5nXCI7XG5hc3luYyBmdW5jdGlvbiBnZXRHZW9sb2NhdGlvbkRhdGEoKSB7XG4gIHRyeSB7XG4gICAgaWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgICAgbWF4aW11bUFnZTogMCxcbiAgICAgIH07XG5cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIHVzZU5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IHVzZU5hdmlnYXRvcigpO1xuXG4gICAgICBjb25zdCBsYXRpdHVkZSA9IGNvb3JkaW5hdGVzLmNvb3Jkcy5sYXRpdHVkZS50b0ZpeGVkKDQpO1xuICAgICAgY29uc3QgbG9uZ2l0dWRlID0gY29vcmRpbmF0ZXMuY29vcmRzLmxvbmdpdHVkZS50b0ZpeGVkKDQpO1xuXG4gICAgICBjb25zdCBsYXRpdHVkZVN0cmluZyA9IGxhdGl0dWRlLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBsb25naXR1ZGVTdHJpbmcgPSBsb25naXR1ZGUudG9TdHJpbmcoKTtcblxuICAgICAgY29uc3QgbGF0aXR1ZGVMb25naXR1ZGVRdWVyeSA9IGxhdGl0dWRlU3RyaW5nICsgXCIsXCIgKyBsb25naXR1ZGVTdHJpbmc7XG5cbiAgICAgIHJldHVybiBsYXRpdHVkZUxvbmdpdHVkZVF1ZXJ5O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkdlb2xvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gXCJFcnJvciBpbiBnZXRHZW9sb2NhdGlvbkRhdGE6IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG5cbiAgICAvLyB1c2VyIG1heSByZWplY3Qgc28gZGlzYWJsZSB0aGlzXG4gICAgLy8gZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRHZW9sb2NhdGlvbkRhdGEgfTtcbiIsIi8vIGltcG9ydCB7IGVycm9yRGlzcGxheSB9IGZyb20gXCIuL3NlYXJjaEFjdGlvblwiO1xuXG5pbXBvcnQgeyBlcnJvckRpc3BsYXkgfSBmcm9tIFwiLi9lcnJvckhhbmRsaW5nXCI7XG4vLyBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5cbi8vcmVtb3ZlIGFsbCBET00gZWxlbWVudHMgZnJvbSBoZXJlLCBvbmx5IGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBwYXJhbWV0ZXJzIGFyZSBhbGxvd2VkXG5cbmNvbnN0IEFQSV9LRVkgPSBcIjViMzIyNGFmMGZkZTRiYjk5MjgyMDUyMjgyMzIyMTBcIjtcblxuLy8gbGV0IHByZXZpb3VzRGF0YTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb25EYXRhKSB7XG4gIC8vIGNvbnZlcnQgdG8gYXN5bmMgYXdhaXRcblxuICB0cnkge1xuICAgIC8vIGxldCBsb2NhdGlvbjtcblxuICAgIC8vIGlmIChsb2NhdGlvbkRhdGEudXJsID09PSB0cnVlKSB7XG4gICAgLy8gICBsb2NhdGlvbiA9IGxvY2F0aW9uRGF0YS51cmw7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGxvY2F0aW9uID0gbG9jYXRpb25EYXRhLmxvY2F0aW9uO1xuICAgIC8vIH1cbiAgICBjb25zdCBkYXlzID0gXCIzXCI7XG5cbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb25EYXRhfSZkYXlzPSR7ZGF5c30mYXFpPW5vJmFsZXJ0cz1ub2A7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoKFVSTCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcblxuICAgIGlmICghd2VhdGhlckRhdGEub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImdldFdlYXRoZXJEYXRhIGRvZXNuJ3Qgd29yayFcIik7XG5cbiAgIFxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkV2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YS5qc29uKCk7XG5cbiAgICAvLyBwcmV2aW91c0RhdGEgPSBwYXJzZWRXZWF0aGVyRGF0YTtcblxuICAgIHJldHVybiBwYXJzZWRXZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gZ2V0V2VhdGhlckRhdGE6IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzb3J0RGF0YSh3ZWF0aGVyRGF0YSkge1xuICB0cnkge1xuICAgIGlmICghd2VhdGhlckRhdGEpIHtcbiAgICAgXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuXG4gICAgXG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgY29uc3QgY291bnRyeSA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgLy8gY29uc3QgdXJsID0gO1xuICAgIFxuXG4gICAgLy8gLS0tLUN1cnJlbnQgd2VhdGhlci0tLS0tLVxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gd2VhdGhlckRhdGEuY3VycmVudDtcblxuICAgIGNvbnN0IGFjdHVhbENlbHNpdXMgPSBjdXJyZW50V2VhdGhlci50ZW1wX2M7XG4gICAgY29uc3QgYWN0dWFsRmFocmVuaGVpdCA9IGN1cnJlbnRXZWF0aGVyLnRlbXBfZjtcbiAgICBjb25zdCBmZWVsc0xpa2VDZWxzaXVzID0gY3VycmVudFdlYXRoZXIuZmVlbHNsaWtlX2M7XG4gICAgY29uc3QgZmVlbHNMaWtlRmFocmVuaGVpdCA9IGN1cnJlbnRXZWF0aGVyLmZlZWxzbGlrZV9mO1xuICAgIGNvbnN0IGN1cnJlbnRJY29uID0gY3VycmVudFdlYXRoZXIuY29uZGl0aW9uLmljb247XG5cbiAgICBjb25zdCBjdXJyZW50RGVzY3JpcHRpb24gPSBjdXJyZW50V2VhdGhlci5jb25kaXRpb24udGV4dDtcblxuICAgIGNvbnN0IGN1cnJlbnRVViA9IGN1cnJlbnRXZWF0aGVyLnV2O1xuXG5cbiAgICAvLyAtLS0tLUZvcmVjYXN0IHdlYXRoZXItLS0tLVxuXG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gd2VhdGhlckRhdGEuZm9yZWNhc3Q7XG4gICAgY29uc3QgYXZnRGF5VGVtcCA9IGZvcmVjYXN0RGF0YS5mb3JlY2FzdGRheTtcblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGNvdW50cnksXG4gICAgICBjdXJyZW50V2VhdGhlckRhdGE6IHtcbiAgICAgICAgYWN0dWFsQ2Vsc2l1cyxcbiAgICAgICAgYWN0dWFsRmFocmVuaGVpdCxcbiAgICAgICAgZmVlbHNMaWtlQ2Vsc2l1cyxcbiAgICAgICAgZmVlbHNMaWtlRmFocmVuaGVpdCxcbiAgICAgICAgY3VycmVudEljb24sXG4gICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbixcbiAgICAgICAgY3VycmVudFVWLFxuICAgICAgfSxcbiAgICAgIGF2Z0RheVRlbXAsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gc29ydERhdGE6IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG4vLyBzb3J0RGF0YSgpO1xuXG5hc3luYyBmdW5jdGlvbiBhdXRvY29tcGxldGUoc2VhcmNoSW5wdXRWYWx1ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoSW5wdXRWYWx1ZTtcbiAgICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICBjb25zdCBhdXRvY29tcGxldGVVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufWA7XG5cbiAgICBjb25zdCBhdXRvQ29tcGxldGVSZXN1bHRzID0gYXdhaXQgZmV0Y2goYXV0b2NvbXBsZXRlVVJMLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuXG4gICAgY29uc3QgcGFyc2VkQXV0b2NvbXBsZXRlUmVzdWx0ID0gYXdhaXQgYXV0b0NvbXBsZXRlUmVzdWx0cy5qc29uKCk7XG5cbiAgICByZXR1cm4gcGFyc2VkQXV0b2NvbXBsZXRlUmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gXCJFcnJvciBpbiBhdXRvY29tcGxldGU6IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG4vLyBTZW5kIGxvY2F0aW9uIGRhdGEgdG8gc2VydmVyXG5hc3luYyBmdW5jdGlvbiByZXRyaWV2ZUluZm8obG9jYXRpb24pIHtcbiAgLy8gaW5jcmVhc2VzIGNvdXBsaW5nLCBmaW5kIGFuIGFsdGVybmF0aXZlIGxhdGVyXG5cblxuICB0cnkge1xuICAgIGlmICghbG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHNvcnRlZERhdGEgPSBhd2FpdCBzb3J0RGF0YSh3ZWF0aGVyRGF0YSk7XG5cbiAgICBpZiAoIXdlYXRoZXJEYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmluYWxEYXRhID0ge1xuICAgICAgc2VhcmNoUmVzdWx0OiBzb3J0ZWREYXRhLmxvY2F0aW9uICsgXCIsIFwiICsgc29ydGVkRGF0YS5jb3VudHJ5LFxuICAgICAgZmluYWxEYXRhOiBzb3J0ZWREYXRhLFxuICAgIH07XG5cbiAgICByZXR1cm4gZmluYWxEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yTXNnID0gXCJFcnJvciBpbiByZXRyaWV2ZUluZm86IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG5leHBvcnQgeyBhdXRvY29tcGxldGUsIHJldHJpZXZlSW5mbyB9O1xuIiwiaW1wb3J0IHsgcmV0cmlldmVJbmZvIH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuaW1wb3J0IHtcbiAgaW5pdGlhbERPTURhdGEsXG4gIGRpc3BsYXlMb2FkaW5nU2NyZWVuLFxuICByZW1vdmVMb2FkaW5nU2NyZWVuLFxuICBzdGF0dXNEaXNwbGF5LFxufSBmcm9tIFwiLi9zZWFyY2hBY3Rpb25cIjtcblxuLy8gaW1wb3J0IHsgZXJyb3JEaXNwbGF5IH0gZnJvbSBcIi4vc2VhcmNoQWN0aW9uXCI7XG5pbXBvcnQgeyBlcnJvckRpc3BsYXkgfSBmcm9tIFwiLi9lcnJvckhhbmRsaW5nXCI7XG5cbi8vIGZ1bmN0aW9uIGluaXRpYWxpc2UoKXtcbi8vIENoZWNrIGlmIHRoZXJlIGlzIGxvY2FsIHN0b3JhZ2UgZGF0YVxuLy9JZiB5ZXMsIHVzZSBsb2NhbHN0b3JhZ2UgZGF0YVxuLy8gSWYgbm8sIHJlcXVlc3QgR2VvbG9jYXRpb24gZGF0YVxuLy9JZiBubywgdXNlIGRlZmF1bHQta3VhbGEtbHVtcHVyXG5cbi8vQWRkIGxvYWRpbmcgY3NzXG5cbmxldCBpbml0aWFsRGF0YTtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1sb2NhdGlvblwiKTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgdHJ5IHtcbiAgICBkaXNwbGF5TG9hZGluZ1NjcmVlbigpO1xuXG4gICAgY29uc3Qga2lja29mZkRhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIC8vIGlmIGxvY2FsU3RvcmFnZSBpcyBlbXB0eVxuICAgIGlmICgha2lja29mZkRhdGEpIHtcbiAgICAgIGNvbnN0IGt1YWxhTHVtcHVyID0gXCJLdWFsYSBMdW1wdXIsIE1hbGF5c2lhXCI7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGt1YWxhTHVtcHVyO1xuXG4gICAgICBzZXRMb2NhbFN0b3JhZ2Uoa3VhbGFMdW1wdXIpO1xuXG4gICAgICBpbml0aWFsaXNlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IGtpY2tvZmZEYXRhO1xuXG4gICAgaW5pdGlhbERhdGEgPSBhd2FpdCByZXRyaWV2ZUluZm8oa2lja29mZkRhdGEpO1xuXG4gICAgc3RhdHVzRGlzcGxheShraWNrb2ZmRGF0YSk7XG5cbiAgICBpbml0aWFsRE9NRGF0YShpbml0aWFsRGF0YSk7XG5cbiAgICByZW1vdmVMb2FkaW5nU2NyZWVuKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNc2cgPSBcIkVycm9yIGluIGluaXRpYWxpc2U6IFwiICsgZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UobmV3RGF0YSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInJpc3NoV2VhdGhlckxvY2F0aW9uRGF0YVwiKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJpc3NoV2VhdGhlckxvY2F0aW9uRGF0YVwiLCBuZXdEYXRhKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyaXNzaFdlYXRoZXJMb2NhdGlvbkRhdGFcIik7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxEYXRhLCBpbml0aWFsaXNlLCBzZXRMb2NhbFN0b3JhZ2UsIGdldExvY2FsU3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgYXV0b2NvbXBsZXRlLCByZXRyaWV2ZUluZm8gfSBmcm9tIFwiLi9nZXREYXRhLmpzXCI7XG5cbmltcG9ydCB7XG4gIGluaXRpYWxEYXRhLFxuICBzZXRMb2NhbFN0b3JhZ2UsXG4gIGdldExvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4vaW5pdGlhbGlzZXIuanNcIjtcblxuaW1wb3J0IHtcbiAgaG91cmx5QXJyYXksXG4gIHVwZGF0ZURPTVdpdGhEYXRhLFxuICBkaXNwbGF5SG91cmx5RE9NLFxufSBmcm9tIFwiLi9kb21BY3Rpb24uanNcIjtcblxuaW1wb3J0IHsgZ2V0R2VvbG9jYXRpb25EYXRhIH0gZnJvbSBcIi4vZ2VvbG9jYXRpb24uanNcIjtcblxuaW1wb3J0IG5vd0xvYWRpbmcgZnJvbSBcIi4vYXNzZXRzL2xvYWRpbmcuZ2lmXCI7XG5cbmltcG9ydCB7IGVycm9yRGlzcGxheSB9IGZyb20gXCIuL2Vycm9ySGFuZGxpbmcuanNcIjtcblxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1sb2NhdGlvblwiKTtcblxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnV0dG9uXCIpO1xuXG5jb25zdCBzZWFyY2hEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWRyb3AtZG93blwiKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cbmNvbnN0IGRhaWx5RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHlcIik7XG5cbmxldCB3ZWF0aGVyUmVzdWx0O1xuXG5sZXQgc2VhcmNoU3VjY2VzcztcblxubGV0IHRvZGF5SG91cmx5RGF0YTtcblxuLy8gQ3JlYXRlIG9uZSBtb2R1bGUgZm9yIERPTSBDcmVhdGlvbiBhbmQgYW5vdGhlciBmb3IgRE9NIGFjdGlvblxuXG4vLyBBZGQgRXZlbnQgTGlzdGVuZXIgZm9yIHNlYXJjaCBldmVudHNcbmZ1bmN0aW9uIHNlYXJjaEV2ZW50cygpIHtcbiAgLy8gc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGF1dG9jb21wbGV0ZSk7XG5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFzZWFyY2hJbnB1dC52YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBhdXRvY29tcGxldGVBcnJheSA9IGF3YWl0IGF1dG9jb21wbGV0ZShzZWFyY2hJbnB1dFZhbHVlKTtcbiAgICAgIGNyZWF0ZURyb3BEb3duKGF1dG9jb21wbGV0ZUFycmF5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgZXJyb3JNc2cgPSBcIkVycm9yIGluIHNlYXJjaEV2ZW50cyhzZWFyY2hJbnB1dCk6IFwiICsgZXJyb3I7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgICAgIGVycm9yRGlzcGxheShlcnJvck1zZyk7XG4gICAgfVxuICB9KTtcblxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICghc2VhcmNoSW5wdXQudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWFyY2hJbnB1dFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XG5cbiAgICAgIHBvcHVsYXRlRE9NKHNlYXJjaElucHV0VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gc2VhcmNoRXZlbnRzKHNlYXJjaEJ1dHRvbik6IFwiICsgZXJyb3I7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgICAgIGVycm9yRGlzcGxheShlcnJvck1zZyk7XG4gICAgfVxuICB9KTtcblxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3BEb3duKGF1dG9jb21wbGV0ZUFycmF5KSB7XG4gIHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgY2hpbGQucmVtb3ZlKCk7XG4gIH0pO1xuXG5cblxuICBmb3IgKGNvbnN0IGVhY2ggb2YgYXV0b2NvbXBsZXRlQXJyYXkpIHtcbiAgICBjb25zdCBkcm9wRG93bkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRyb3BEb3duSXRlbS5jbGFzc0xpc3QuYWRkKFwiZHJvcC1kb3duLWl0ZW1cIik7XG4gICAgZHJvcERvd25JdGVtLnRleHRDb250ZW50ID0gZWFjaC5uYW1lICsgXCIsIFwiICsgZWFjaC5jb3VudHJ5O1xuICAgIHNlYXJjaERyb3BEb3duLmFwcGVuZChkcm9wRG93bkl0ZW0pO1xuICB9XG5cbiAgaWYgKHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1kb3duLWl0ZW1cIikpIHtcbiAgICBkcm9wRG93bkNsaWNrRXZlbnQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcm9wRG93bkNsaWNrRXZlbnQoKSB7XG4gIGNvbnN0IGRyb3BEb3duSXRlbU5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wLWRvd24taXRlbVwiKTtcblxuICBkcm9wRG93bkl0ZW1Ob2RlTGlzdC5mb3JFYWNoKChkcm9wRG93bkl0ZW0pID0+IHtcbiAgICBkcm9wRG93bkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gZHJvcERvd25JdGVtLnRleHRDb250ZW50O1xuXG4gICAgICAgIHBvcHVsYXRlRE9NKGRyb3BEb3duSXRlbS50ZXh0Q29udGVudCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBlcnJvck1zZyA9IFwiRXJyb3IgaW4gZHJvcERvd25DbGlja0V2ZW50OiBcIiArIGVycm9yO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgICAgICAgZXJyb3JEaXNwbGF5KGVycm9yTXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxET01EYXRhKHdlYXRoZXJEYXRhKSB7XG4gIC8vIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYnkgdGVtcFRvZ2dsZVxuICB3ZWF0aGVyUmVzdWx0ID0gd2VhdGhlckRhdGE7XG5cbiAgdXBkYXRlRE9NV2l0aERhdGEod2VhdGhlckRhdGEpO1xuXG4gIHRvZGF5SG91cmx5RGF0YSA9IHdlYXRoZXJEYXRhLmZpbmFsRGF0YS5hdmdEYXlUZW1wWzBdLmhvdXI7XG5cbiAgZGFpbHlEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtZGFpbHlcIik7XG4gIH0pO1xuXG4gIGRhaWx5RGl2c1swXS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtZGFpbHlcIik7XG5cbiAgZGlzcGxheUhvdXJseURPTSh0b2RheUhvdXJseURhdGEpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVEcm9wRG93bigpIHtcbiAgbWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCkge1xuICBjb25zdCBsb2FkaW5nR0lGQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWdpZi1jb250YWluZXJcIik7XG5cbiAgaWYgKGxvYWRpbmdHSUZDb250YWluZXIucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGxvYWRpbmdHSUYgPSBuZXcgSW1hZ2UoKTtcblxuICBsb2FkaW5nR0lGLnNyYyA9IG5vd0xvYWRpbmc7XG5cbiAgbG9hZGluZ0dJRkNvbnRhaW5lci5hcHBlbmQobG9hZGluZ0dJRik7XG5cbiAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1zY3JlZW5cIik7XG4gIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LmFkZChcImVuYWJsZS1sb2FkaW5nLXNjcmVlblwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTG9hZGluZ1NjcmVlbigpIHtcbiAgY29uc3QgbG9hZGluZ0dJRkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1naWYtY29udGFpbmVyXCIpO1xuXG4gIGxvYWRpbmdHSUZDb250YWluZXIucXVlcnlTZWxlY3RvcihcImltZ1wiKS5yZW1vdmUoKTtcbiAgY29uc3QgbG9hZGluZ1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1zY3JlZW5cIik7XG4gIGxvYWRpbmdTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImVuYWJsZS1sb2FkaW5nLXNjcmVlblwiKTtcbn1cblxuZnVuY3Rpb24gc3RhdHVzRGlzcGxheShsb2NhdGlvbikge1xuICBjb25zdCBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0dXMtbWVzc2FnZVwiKTtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgY29uc3QgcHJldmlvdXNEYXRhID0gZ2V0TG9jYWxTdG9yYWdlKCk7XG5cbiAgICBzdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAgIFwiTG9jYXRpb24gbm90IGZvdW5kLCBzdGlsbCBkaXNwbGF5aW5nOiBcIiArIHByZXZpb3VzRGF0YTtcbiAgICByZXR1cm47XG4gIH1cbiAgc3RhdHVzTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQ3VycmVudGx5IGRpc3BsYXlpbmc6IFwiICsgbG9jYXRpb247XG59XG5cbmZ1bmN0aW9uIGdlb2xvY2F0aW9uQnRuRXZlbnQoKSB7XG4gIGNvbnN0IGdlb2xvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZW9sb2NhdGlvbi1idXR0b25cIik7XG4gIGNvbnN0IHNlYXJjaERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtZHJvcC1kb3duXCIpO1xuICBnZW9sb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGdlb2xvY2F0aW9uRGF0YSA9IGF3YWl0IGdldEdlb2xvY2F0aW9uRGF0YSgpO1xuICAgIFxuXG4gICAgICBwb3B1bGF0ZURPTShnZW9sb2NhdGlvbkRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvck1zZyA9XG4gICAgICAgIFwiRXJyb3IgaW4gZ2VvbG9jYXRpb25CdG5MaXN0ZW5lcihnZW9sb2NhdGlvbkJ1dHRvbik6IFwiICsgZXJyb3I7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcbiAgICAgIGVycm9yRGlzcGxheShlcnJvck1zZyk7XG4gICAgfVxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVET00oaW5wdXREYXRhKSB7XG4gIGRpc3BsYXlMb2FkaW5nU2NyZWVuKCk7XG5cbiAgd2VhdGhlclJlc3VsdCA9IGF3YWl0IHJldHJpZXZlSW5mbyhpbnB1dERhdGEpO1xuXG4gIC8vIGlmIHNlYXJjaCBmYWlscyAtIHVzZSBwcmV2aW91c2x5IHN1Y2Nlc3NmdWwgZGF0YVxuICBpZiAoIXdlYXRoZXJSZXN1bHQpIHtcblxuICAgIHN0YXR1c0Rpc3BsYXkoZmFsc2UpO1xuXG4gICAgLy8gZGlzcGxheSBsb2NhdGlvbiBub3QgZm91bmQgb24gRE9NXG4gICAgLy8gaWYgbm8gZGF0YSBpbiBzZWFyY2hTdWNjZXNzIHVzZSBpbml0aWFsRGF0YVxuICAgIGlmICghc2VhcmNoU3VjY2Vzcykge1xuICAgICAgc2VhcmNoU3VjY2VzcyA9IGluaXRpYWxEYXRhO1xuICAgIH1cbiAgICBpbml0aWFsRE9NRGF0YShzZWFyY2hTdWNjZXNzKTtcbiAgICByZW1vdmVMb2FkaW5nU2NyZWVuKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gaWYgc2VhcmNoIGlzIGEgc3VjY2Vzc1xuXG4gIGlmICh3ZWF0aGVyUmVzdWx0ID09IHRydWUpIHtcbiAgfVxuXG4gIHNlYXJjaFN1Y2Nlc3MgPSB3ZWF0aGVyUmVzdWx0O1xuXG5cbiAgc2VhcmNoSW5wdXQudmFsdWUgPSB3ZWF0aGVyUmVzdWx0LnNlYXJjaFJlc3VsdDtcblxuICBzZXRMb2NhbFN0b3JhZ2Uod2VhdGhlclJlc3VsdC5zZWFyY2hSZXN1bHQpO1xuXG4gIHN0YXR1c0Rpc3BsYXkod2VhdGhlclJlc3VsdC5zZWFyY2hSZXN1bHQpO1xuXG4gIHNlYXJjaERyb3BEb3duLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgY2hpbGQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIC8vIHVwZGF0ZURPTVdpdGhEYXRhKHdlYXRoZXJSZXN1bHQpO1xuICBpbml0aWFsRE9NRGF0YSh3ZWF0aGVyUmVzdWx0KTtcblxuICAvLyBzZXRUaW1lb3V0KHJlbW92ZUxvYWRpbmdTY3JlZW4sIDUwMDApO1xuXG4gIHJlbW92ZUxvYWRpbmdTY3JlZW4oKTtcbn1cblxuZXhwb3J0IHtcbiAgd2VhdGhlclJlc3VsdCxcbiAgdG9kYXlIb3VybHlEYXRhLFxuICBzZWFyY2hFdmVudHMsXG4gIGdlb2xvY2F0aW9uQnRuRXZlbnQsXG4gIGNyZWF0ZURyb3BEb3duLFxuICByZW1vdmVEcm9wRG93bixcbiAgaW5pdGlhbERPTURhdGEsXG4gIGRpc3BsYXlMb2FkaW5nU2NyZWVuLFxuICByZW1vdmVMb2FkaW5nU2NyZWVuLFxuICBzdGF0dXNEaXNwbGF5LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGFwcGVuZERPTSB9IGZyb20gXCIuL2NyZWF0ZURPTVwiO1xuaW1wb3J0IHsgaW5pdGlhbGlzZSB9IGZyb20gXCIuL2luaXRpYWxpc2VyXCI7XG5pbXBvcnQgeyBnZXRHZW9sb2NhdGlvbkRhdGEgfSBmcm9tIFwiLi9nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgdG9nZ2xlVGVtcHMsIGRhaWx5RGl2c0V2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9kb21BY3Rpb25cIjtcbmltcG9ydCB7XG4gIHNlYXJjaEV2ZW50cyxcbiAgZ2VvbG9jYXRpb25CdG5FdmVudCxcbiAgcmVtb3ZlRHJvcERvd24sXG59IGZyb20gXCIuL3NlYXJjaEFjdGlvblwiO1xuXG5cblxuYXBwZW5kRE9NKCk7XG5cbnNlYXJjaEV2ZW50cygpO1xuLy8gVW5jb21tZW50IGxhdGVyXG5pbml0aWFsaXNlKCk7XG4vLyBURVNUXG5cbi8vIEFkZCBldmVudExpc3RlbmVyc1xuZ2VvbG9jYXRpb25CdG5FdmVudCgpO1xucmVtb3ZlRHJvcERvd24oKTtcbnRvZ2dsZVRlbXBzKCk7XG5kYWlseURpdnNFdmVudExpc3RlbmVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
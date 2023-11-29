import { autocomplete, retrieveInfo } from "./getData.js";

import {
  initialData,
  setLocalStorage,
  getLocalStorage,
} from "./initialiser.js";

import {
  hourlyArray,
  updateDOMWithData,
  displayHourlyDOM,
} from "./domAction.js";

import nowLoading from "./assets/loading.gif";

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
    const autocompleteArray = await autocomplete(searchInputValue);
    createDropDown(autocompleteArray);
  });

  searchButton.addEventListener("click", async function (e) {
    e.preventDefault();

    if (!searchInput.value) {
      return;
    }

    displayLoadingScreen();

    const searchInputValue = searchInput.value;

    weatherResult = await retrieveInfo(searchInputValue);

    if (!weatherResult) {
      console.log("NOT FOUND");

      statusDisplay(false);

      // display location not found on DOM

      console.log(weatherResult);
      removeLoadingScreen();
      return;
    }

    searchInput.value = weatherResult.searchResult;

    setLocalStorage(weatherResult.searchResult);

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

      setLocalStorage(dropDownItem.textContent);

      // use await for this?
      weatherResult = await retrieveInfo(
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
  updateDOMWithData(weatherData);

  if (!weatherResult) {
    weatherResult = initialData;
    console.log(initialData);
    console.log("INITIAL DATA USED");
  }

  todayHourlyData = weatherData.finalData.avgDayTemp[0].hour;

  // console.log(weatherData.finalData.avgDayTemp[0].hour);

  dailyDivs.forEach((div) => {
    div.classList.remove("selected-daily");
  });

  dailyDivs[0].classList.add("selected-daily");

  displayHourlyDOM(todayHourlyData);
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

  if (loadingGIFContainer.querySelector("img")) {
    console.log("LOADING GIF PRESENT");
    return;
  }

  const loadingGIF = new Image();

  loadingGIF.src = nowLoading;

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
    const previousData = getLocalStorage();

    statusMessage.textContent =
      "Location not found, still displaying: " + previousData;
    return;
  }
  statusMessage.textContent = "Currently displaying: " + location;
}

export {
  weatherResult,
  todayHourlyData,
  searchEvents,
  createDropDown,
  removeDropDown,
  initialDOMData,
  displayLoadingScreen,
  removeLoadingScreen,
  statusDisplay,
};

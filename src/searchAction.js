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

import { getGeolocationData } from "./geolocation.js";

import nowLoading from "./assets/loading.gif";

import { errorDisplay } from "./errorHandling.js";

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
      const autocompleteArray = await autocomplete(searchInputValue);
      createDropDown(autocompleteArray);
    } catch (error) {
      const errorMsg = "Error in searchEvents(searchInput): " + error;
      console.error(errorMsg);
      errorDisplay(errorMsg);
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
      errorDisplay(errorMsg);
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
        errorDisplay(errorMsg);
      }
    });
  });
}

function initialDOMData(weatherData) {
  // so that it can be used by tempToggle
  weatherResult = weatherData;

  updateDOMWithData(weatherData);

  todayHourlyData = weatherData.finalData.avgDayTemp[0].hour;

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
  const loadingGIFContainer = document.querySelector(".loading-gif-container");

  if (loadingGIFContainer.querySelector("img")) {
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

function geolocationBtnEvent() {
  const geolocationButton = document.querySelector("#geolocation-button");
  const searchDropDown = document.querySelector(".search-drop-down");
  geolocationButton.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
      const geolocationData = await getGeolocationData();
    

      populateDOM(geolocationData);
    } catch (error) {
      const errorMsg =
        "Error in geolocationBtnListener(geolocationButton): " + error;
      console.error(errorMsg);
      errorDisplay(errorMsg);
    }
  });
}

async function populateDOM(inputData) {
  displayLoadingScreen();

  weatherResult = await retrieveInfo(inputData);

  // if search fails - use previously successful data
  if (!weatherResult) {

    statusDisplay(false);

    // display location not found on DOM
    // if no data in searchSuccess use initialData
    if (!searchSuccess) {
      searchSuccess = initialData;
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

  setLocalStorage(weatherResult.searchResult);

  statusDisplay(weatherResult.searchResult);

  searchDropDown.querySelectorAll("*").forEach(function (child) {
    child.remove();
  });

  // updateDOMWithData(weatherResult);
  initialDOMData(weatherResult);

  // setTimeout(removeLoadingScreen, 5000);

  removeLoadingScreen();
}

export {
  weatherResult,
  todayHourlyData,
  searchEvents,
  geolocationBtnEvent,
  createDropDown,
  removeDropDown,
  initialDOMData,
  displayLoadingScreen,
  removeLoadingScreen,
  statusDisplay,
};

import { autocomplete, retrieveInfo } from "./getData.js";

import {
  hourlyArray,
  updateDOMWithData,
  displayHourlyDOM,
} from "./domAction.js";

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

    const searchInputValue = searchInput.value;

    weatherResult = await retrieveInfo(searchInputValue);

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
      weatherResult = await retrieveInfo(
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
  updateDOMWithData(weatherResult);

  todayHourlyData = weatherResult.finalData.avgDayTemp[0].hour;

  console.log(weatherResult.finalData.avgDayTemp[0].hour);

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

export {
  weatherResult,
  todayHourlyData,
  searchEvents,
  createDropDown,
  removeDropDown,
};

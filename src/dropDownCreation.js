import { autocomplete, sendLocation } from "./getData.js";

const searchInput = document.querySelector("#search-location");

const searchButton = document.querySelector("#search-button");

const searchDropDown = document.querySelector(".search-drop-down");

const mainContainer = document.querySelector(".main-container");

function searchEvents() {
  searchInput.addEventListener("keyup", autocomplete);

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    sendLocation();
    searchDropDown.querySelectorAll("*").forEach(function (child) {
      child.remove();
    });
  });

  console.log("module-works");
}

function createDropDown(resultArray) {
  searchDropDown.querySelectorAll("*").forEach(function (child) {
    child.remove();
  });

  console.log(resultArray);

  for (const each of resultArray) {
    const dropDownItem = document.createElement("div");
    dropDownItem.classList.add("drop-down-item");
    console.log(each);
    dropDownItem.textContent = each.name + ", " + each.country;
    searchDropDown.append(dropDownItem);
  }

  if (searchDropDown.querySelector(".drop-down-item")) {
    console.log("drop-down-works");
    console.log(searchDropDown.querySelector(".drop-down-item"));

    dropDownClickEvent();
  }
}

function dropDownClickEvent() {
  const dropDownItemNodeList = document.querySelectorAll(".drop-down-item");

  // console.log("what");

  dropDownItemNodeList.forEach((dropDownItem) => {
    console.log(dropDownItem);
    dropDownItem.addEventListener("click", function () {
      console.log("test-click");

      searchInput.value = dropDownItem.textContent;

      sendLocation();

      searchDropDown.querySelectorAll("*").forEach(function (child) {
        child.remove();
      });
    });
  });
}

function removeDropDown() {
  mainContainer.addEventListener("click", function () {
    searchDropDown.querySelectorAll("*").forEach(function (child) {
      child.remove();
    });
  });
}

removeDropDown();

export { searchEvents, createDropDown };

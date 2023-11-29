import { retrieveInfo } from "./getData";
import {
  initialDOMData,
  displayLoadingScreen,
  removeLoadingScreen,
  statusDisplay,
} from "./dropDownCreation";

// function initialise(){
// Check if there is local storage data
//If yes, use localstorage data
// If no, request Geolocation data
//If no, use default-kuala-lumpur

//Add loading css

let initialData;

const searchInput = document.querySelector("#search-location");

async function initialise() {
  displayLoadingScreen();

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

  initialData = await retrieveInfo(kickoffData);

  statusDisplay(kickoffData);

  initialDOMData(initialData);

  removeLoadingScreen();
}

function setLocalStorage(newData) {
  localStorage.removeItem("risshWeatherLocationData");

  localStorage.setItem("risshWeatherLocationData", newData);
}

function getLocalStorage() {
  return localStorage.getItem("risshWeatherLocationData");
}

export { initialData, initialise, setLocalStorage, getLocalStorage };

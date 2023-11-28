import { retrieveInfo } from "./getData";
import { initialDOMData } from "./dropDownCreation";

// function initialise(){
// Check if there is local storage data
//If yes, use localstorage data
// If no, request Geolocation data
//If no, use default-kuala-lumpur

//Add loading css

let initialData;

const searchInput = document.querySelector("#search-location");

async function initialise() {
  if (!searchInput.value) {
    const kualaLumpur = "Kuala Lumpur, Malaysia";
    searchInput.value = kualaLumpur;

    initialData = await retrieveInfo(
      kualaLumpur,
      "kuala-lumpur-kuala-lumpur-malaysia"
    );

    initialDOMData(initialData);
  }
}

export { initialData, initialise };

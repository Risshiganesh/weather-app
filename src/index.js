import "./style.css";
import { appendDOM } from "./createDOM";
import { initialise } from "./initialiser";
import { getGeolocationData } from "./geolocation";
import { toggleTemps, dailyDivsEventListener } from "./domAction";
import {
  searchEvents,
  geolocationBtnEvent,
  removeDropDown,
} from "./searchAction";

console.log("webpack works!");

appendDOM();

searchEvents();
// Uncomment later
initialise();
// TEST

function locationButton() {
  const coordinates = getGeolocationData().then(function (data) {
    console.log("coordinates");
    console.log(data);

    return data;
  });
}

// Add eventListeners
geolocationBtnEvent();
removeDropDown();
toggleTemps();
dailyDivsEventListener();

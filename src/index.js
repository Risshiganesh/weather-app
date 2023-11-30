import "./style.css";
import { initialise } from "./initialiser";
import { getGeolocationData } from "./geolocation";
import { toggleTemps, dailyDivsEventListener } from "./domAction";
import { searchEvents, removeDropDown } from "./searchAction";

console.log("webpack works!");

searchEvents();
// Uncomment later
initialise();
// TEST
getGeolocationData();

// Add eventListeners
removeDropDown();
toggleTemps();
dailyDivsEventListener();

import "./style.css";
import { toggleTemps, dailyDivsEventListener } from "./domAction";
import { searchEvents, removeDropDown } from "./dropDownCreation";

console.log("webpack works!");

searchEvents();
// Uncomment later

// Add eventListeners
removeDropDown();
toggleTemps();
dailyDivsEventListener();

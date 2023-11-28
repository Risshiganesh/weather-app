import "./style.css";
import { initialise } from "./initialiser";
import { toggleTemps, dailyDivsEventListener } from "./domAction";
import { searchEvents, removeDropDown } from "./dropDownCreation";

console.log("webpack works!");

searchEvents();
// Uncomment later
initialise();

// Add eventListeners
removeDropDown();
toggleTemps();
dailyDivsEventListener();

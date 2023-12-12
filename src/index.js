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



appendDOM();

searchEvents();
// Uncomment later
initialise();
// TEST

// Add eventListeners
geolocationBtnEvent();
removeDropDown();
toggleTemps();
dailyDivsEventListener();

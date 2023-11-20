import { createDropDown } from "./dropDownCreation";

const searchButton = document.querySelector("#search-button");

const searchInput = document.querySelector("#search-location");

const API_KEY = "5b3224af0fde4bb9928205228232210";
// let location = "kuala lumpur";

async function getWeatherData(location) {
  // convert to async await

  try {
    const days = "3";

    const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;

    const weatherData = await fetch(URL, { mode: "cors" });

    if (!weatherData.ok) {
      console.log("getWeatherData doesn't work!");
    }

    const parsedWeatherData = await weatherData.json();

    return parsedWeatherData;
  } catch (error) {
    console.log(error);
    console.log("works!!!!");
  }
}

async function sortData(weatherData) {
  // const weatherData = await getWeatherData();
  try {
    console.log(weatherData);

    console.log("TTTTTTTTTTT");

    const location = weatherData.location.name;
    const country = weatherData.location.country;
    console.log(location);

    // ----Current weather------
    const currentWeather = weatherData.current;

    const actualCelsius = currentWeather.temp_c;
    const actualFahrenheit = currentWeather.temp_f;
    const feelsLikeCelsius = currentWeather.feelslike_c;
    const feelsLikeFahrenheit = currentWeather.feelslike_f;

    const currentDescription = currentWeather.condition.text;

    // Log current data
    // console.log(currentWeather);

    console.log("------CURRENT DATA------");
    console.log(`Actual Temp(C*): ${actualCelsius}`);
    console.log(`Actual Temp(F*): ${actualFahrenheit}`);
    console.log(`Feels Like (C*): ${feelsLikeCelsius}`);
    console.log(`Feels Like (F*): ${feelsLikeFahrenheit}`);
    console.log(`Description: ` + currentDescription);
    // add UV levels

    // -----Forecast weather-----

    const forecastData = weatherData.forecast;
    const avgDayTempCelsius = forecastData.forecastday;

    console.log(forecastData);
    console.log("-------FORECAST DATA (DAY)--------");

    for (const each of avgDayTempCelsius) {
      // console.log(each);

      console.log(each.day);
      // temps displayed in f or c depending on which option is chosen
      // day average temp
      // day max temp
      // day min temp
      // description/icon
    }
    console.log("-------FORECAST DATA (HOUR)--------");

    for (const each of avgDayTempCelsius) {
      console.log(each.hour);
      const hourlyForecastArray = each.hour;

      console.log("-----PER HOUR-----");

      for (const iterator of hourlyForecastArray) {
        console.log(iterator);
        console.log(iterator.time + ": " + " " + iterator.condition.text);
      }
      // temps f and c - displays depending on which option is chosen
      // description or icon
    }

    return {
      location,
      country,
      currentWeatherData: {
        actualCelsius,
        actualFahrenheit,
        feelsLikeCelsius,
        feelsLikeFahrenheit,
        currentDescription,
      },
    };
  } catch (error) {
    console.log("sort data fn");
    console.log(error);
  }
}

// sortData();

async function autocomplete() {
  try {
    const location = searchInput.value;
    if (!location) {
      return;
    }

    console.log(location);

    const autocompleteURL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`;
    const autoCompleteResults = await fetch(autocompleteURL, { mode: "cors" });

    const parsedAutocompleteResult = await autoCompleteResults.json();

    //   console.log(parsedAutocompleteResult);

    createDropDown(parsedAutocompleteResult);
  } catch (error) {
    console.log(error);
  }
}

async function sendLocation() {
  // increases coupling, find an alternative later

  try {
    const location = searchInput.value;
    if (!location) {
      return;
    }
    // console.log(location);

    const weatherData = await getWeatherData(location);

    const sortedData = await sortData(weatherData);

    searchInput.value = sortedData.location + ", " + sortedData.country;
  } catch (error) {
    console.log(error);
  }
}

export { autocomplete, sendLocation };

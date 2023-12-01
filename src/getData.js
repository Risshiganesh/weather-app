const searchButton = document.querySelector("#search-button");

//remove all DOM elements from here, only functions that accept parameters are allowed

const API_KEY = "5b3224af0fde4bb9928205228232210";

// let previousData;

async function getWeatherData(locationData) {
  // convert to async await

  try {
    // let location;

    // if (locationData.url === true) {
    //   location = locationData.url;
    // } else {
    //   location = locationData.location;
    // }
    const days = "3";

    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${locationData}&days=${days}&aqi=no&alerts=no`;

    const weatherData = await fetch(URL, { mode: "cors" });

    if (!weatherData.ok) {
      console.log("getWeatherData doesn't work!");

      // console.log(previousData);

      return;
    }

    const parsedWeatherData = await weatherData.json();

    // previousData = parsedWeatherData;

    return parsedWeatherData;
  } catch (error) {
    console.error("getWeatherData: " + error);
    // console.log("works!!!!");
  }
}

async function sortData(weatherData) {
  try {
    if (!weatherData) {
      console.log("location not found");
      return;
    }
    console.log(weatherData);

    console.log("TTTTTTTTTTT");

    const location = weatherData.location.name;
    const country = weatherData.location.country;
    // const url = ;
    console.log(location);

    // ----Current weather------
    const currentWeather = weatherData.current;

    const actualCelsius = currentWeather.temp_c;
    const actualFahrenheit = currentWeather.temp_f;
    const feelsLikeCelsius = currentWeather.feelslike_c;
    const feelsLikeFahrenheit = currentWeather.feelslike_f;
    const currentIcon = currentWeather.condition.icon;

    const currentDescription = currentWeather.condition.text;

    const currentUV = currentWeather.uv;

    // Log current data
    // console.log(currentWeather);

    console.log("------CURRENT DATA------");
    console.log(`Actual Temp(C*): ${actualCelsius}`);
    console.log(`Actual Temp(F*): ${actualFahrenheit}`);
    console.log(`Feels Like (C*): ${feelsLikeCelsius}`);
    console.log(`Feels Like (F*): ${feelsLikeFahrenheit}`);
    console.log(`Description: ` + currentDescription);
    console.log("UV: " + currentUV);
    // add UV levels

    // -----Forecast weather-----

    const forecastData = weatherData.forecast;
    const avgDayTemp = forecastData.forecastday;

    return {
      location,
      country,
      currentWeatherData: {
        actualCelsius,
        actualFahrenheit,
        feelsLikeCelsius,
        feelsLikeFahrenheit,
        currentIcon,
        currentDescription,
        currentUV,
      },
      avgDayTemp,
      // dailyWeatherData: {
      //   avgDayTempCelsius,
      // },
    };
  } catch (error) {
    console.log("sort data fn");
    console.error(error);
  }
}

// sortData();

async function autocomplete(searchInputValue) {
  try {
    const location = searchInputValue;
    if (!location) {
      return;
    }

    console.log(location);

    const autocompleteURL = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`;

    const autoCompleteResults = await fetch(autocompleteURL, { mode: "cors" });

    const parsedAutocompleteResult = await autoCompleteResults.json();

    return parsedAutocompleteResult;
  } catch (error) {
    console.error(error);
  }
}

// Send location data to server
async function retrieveInfo(location) {
  // increases coupling, find an alternative later

  // console.log(url);

  try {
    // const locationData = {
    //   location: location,
    //   url: url,
    // };
    if (!location) {
      return;
    }
    // console.log(location);

    console.log("Location used: " + location);

    const weatherData = await getWeatherData(location);

    const sortedData = await sortData(weatherData);

    if (!weatherData) {
      return;
    }

    const finalData = {
      searchResult: sortedData.location + ", " + sortedData.country,
      finalData: sortedData,
    };

    console.log(finalData);

    return finalData;
  } catch (error) {
    console.error(error);
  }
}

export { autocomplete, retrieveInfo };

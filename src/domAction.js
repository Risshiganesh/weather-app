const tempDisplay = document.querySelector(".temp-display");

const tempToggle = document.querySelector("#temp-toggle");

const weatherDesc = document.querySelector(".weather-desc");
const uvIndex = document.querySelector(".uv-index");

function toggleTemps(weatherData) {
  let chosenTemp = tempToggle.textContent;

  tempToggle.addEventListener("click", function () {
    if (tempToggle.textContent === "Celsius") {
      tempToggle.textContent = "Fahrenheit";
      chosenTemp = "Fahrenheit";
      updateDOMWithData(weatherData, chosenTemp);
      return;
    }

    if (tempToggle.textContent === "Fahrenheit") {
      tempToggle.textContent = "Celsius";
      chosenTemp = "Celsius";
      updateDOMWithData(weatherData, chosenTemp);
      return;
    }
    console.log("TESTTTTT");

    return;
  });

  // Is this correct?
  updateDOMWithData(weatherData, chosenTemp);
}

function updateDOMWithData(weatherData, temperatureUnit) {
  if (!weatherData) {
    return;
  }

  if (temperatureUnit === "Celsius") {
    console.log("HSHSHSHHSHSHS");
    // console.log(weatherData);

    const currentWeatherData = weatherData.finalData.currentWeatherData;
    const avgDayTempCelsius = weatherData.finalData.avgDayTempCelsius;

    console.log(currentWeatherData);
    console.log(avgDayTempCelsius);

    tempDisplay.textContent = currentWeatherData.actualCelsius + " *c";
    weatherDesc.textContent = currentWeatherData.currentDescription;
    uvIndex.textContent = "UV Index: " + currentWeatherData.currentUV;

    return;
  }

  if (temperatureUnit === "Fahrenheit") {
    console.log("YEP");
    // console.log(weatherData);

    const currentWeatherData = weatherData.finalData.currentWeatherData;
    console.log(currentWeatherData);

    tempDisplay.textContent = currentWeatherData.actualFahrenheit + " *F";
    weatherDesc.textContent = currentWeatherData.currentDescription;
    uvIndex.textContent = "UV Index: " + currentWeatherData.currentUV;

    return;
  }
}

function toggleUnit() {
  if (tempToggle.textContent === "Celsius") {
    // updateDOMWithData()

    return;
  }

  if (tempToggle.textContent === "Fahrenheit") {
    // updateDOMWithData()
    return;
  }
}

export { toggleTemps };

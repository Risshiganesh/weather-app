import "./style.css";
console.log("webpack works!")

const searchInput = document.querySelector("#search-location");

const searchButton = document.querySelector("#search-button");

const API_KEY = "5b3224af0fde4bb9928205228232210";
// let location = "kuala lumpur";








async function getWeatherData (location){

    // convert to async await

    try {
        const days = "3";

        const URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`;

        const weatherData = await fetch(URL,{mode:'cors'});

        if(!weatherData.ok){
            console.log("getWeatherData doesn't work!")
        }

        const parsedWeatherData = await weatherData.json();
    
        return parsedWeatherData;
    } catch (error) {
        console.log(error)
        console.log("works!!!!")
    }
}



async function sortData (weatherData){

    // const weatherData = await getWeatherData();
    try {

        console.log(weatherData);

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
        console.log(`Description: `+currentDescription);
        // add UV levels
    
    
        // -----Forecast weather-----
    
        const forecastData = weatherData.forecast;
        const avgDayTempCelsius = forecastData.forecastday;
    
    
    
      
        console.log(forecastData);
        console.log("-------FORECAST DATA (DAY)--------");
    
        for (const each of avgDayTempCelsius) {
            // console.log(each);
           
            console.log(each.day)
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
                console.log(iterator.time+": "+" "+iterator.condition.text);
            }
            // temps f and c - displays depending on which option is chosen
            // description or icon
        }
        
    } catch (error) {
        console.log("sort data fn")  
      console.log(error);
      
    }


}

// sortData();


function sendLocation (){

    // Autocomplete
    searchInput.addEventListener('keyup',async function()
    {

        try {

            const location = searchInput.value;
            if (!location) {
                return;
            }
            
            console.log(location);

            const autocompleteURL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${location}`
            const autoCompleteResults = await fetch(autocompleteURL,{mode:"cors"})
            
            const parsedAutocompleteResult = autoCompleteResults.json();

            console.log(parsedAutocompleteResult);

        } catch (error) {
            console.log(error);
        }
        

    })

    // Search
    searchButton.addEventListener('click',async function(e){

        try {

            e.preventDefault();

            const location = searchInput.value;
            if (!location) {
                return;
            }
            console.log(location);
    
            const weatherData = await getWeatherData(location);
    
            sortData(weatherData);
            
        } catch (error) {
            console.log(error);
        }
        
       
    })
}

sendLocation();
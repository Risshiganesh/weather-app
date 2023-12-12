import backgroundVideo from "./assets/background-video.mp4";

import logoIcon from "./assets/logo.png";

import locationIcon from "./assets/location-icon.png";

async function appendBackgroundVideo() {
  const backgroundContainer = document.querySelector(".background-container");

  const createVideoElement = document.createElement("video");

  createVideoElement.setAttribute("crossorigin", "anonymous");
  createVideoElement.setAttribute("playsinline", "");
  createVideoElement.setAttribute("webkit-playsinline", "");
  createVideoElement.setAttribute("autoplay", "");
  createVideoElement.setAttribute("muted", "");
  createVideoElement.setAttribute("loop", "");
  createVideoElement.setAttribute("id", "background-video");

  const videoSource = document.createElement("source");

  videoSource.src = backgroundVideo;

  videoSource.setAttribute("type", "video/mp4");

  backgroundContainer.append(createVideoElement);
  createVideoElement.append(videoSource);

  // video does not automatically play because there has to be user input for some reason.

  const geolocationButton = document.querySelector("#geolocation-button");
  geolocationButton.addEventListener("click", function () {
    
    createVideoElement.play();
  });

  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", function () {
    
    createVideoElement.play();
  });
}

function appendIcons() {
  const logoIconDiv = document.querySelector(".logo-icon");
  const logoImg = new Image();
  logoImg.src = logoIcon;
  logoIconDiv.append(logoImg);

  const geolocationBtn = document.querySelector("#geolocation-button");

  const locationImg = new Image();
  locationImg.src = locationIcon;
  geolocationBtn.append(locationImg)

}

function appendDOM() {
  appendBackgroundVideo();
  appendIcons();
}

// To dynamically generate DOM, but super time consuming to construct
function createCoreDOM(){

  // const primaryContainer = document.querySelector(".primary-container");


  // const backgroundContainer = document.createElement("div");
  // backgroundContainer.classList.add("background-container");
  // primaryContainer.append(backgroundContainer);

  //   const mainContainer = document.createElement("div");
  //   mainContainer.classList.add("main-container");
  //   backgroundContainer.append(mainContainer);

      // loading screen

      // const mainContainer = document.querySelector(".main-container");

      // function loadingScreen(){

      //   const loadingScreen = document.createElement("div");
      //   loadingScreen.classList.add("loading-screen");
      //   mainContainer.append(loadingScreen);
  
      //     const loadingDiv = document.createElement("div");
      //     loadingDiv.classList.add("loading-div");
      //     loadingScreen.append(loadingDiv);
  
      //       const loadingGIFContainer = document.createElement("div");
      //       loadingGIFContainer.classList.add("loading-gif-container");
      //       loadingDiv.append(loadingGIFContainer);
  
      //       const loadingText = document.createElement("div");
      //       loadingText.classList.add("loading-text");
      //       loadingText.textContent = "Loading...";
      //       loadingDiv.append(loadingText);

      // }


      // function displayError (){
      //   const mainErrorContainer = document.createElement("div");
      //   mainErrorContainer.classList.add("main-error-container");
      //   mainContainer.append(mainErrorContainer);

      //     const errorTitle = document.createElement("div");
      //     errorTitle.classList.add("error-title");
      //     errorTitle.textContent = "Error";
      //     mainErrorContainer.append(errorTitle);

      //     const errorDisplayContainer = document.createElement("div");
      //     errorDisplayContainer.classList.add("error-display-container");
      //     mainErrorContainer.append(errorDisplayContainer);

      // }

      // function displayLogo (){
      //   const logoContainer = document.createElement("div");
      //   logoContainer.classList.add("logo-container");
      //   mainContainer.append(logoContainer);

      //     const logoDiv = document.createElement('div');
      //     logoDiv.classList.add("logo-div");
      //     logoContainer.append(logoDiv);

      //       const logoIcon = document.createElement("logo-text");
      //       logoIcon.classList.add('logo-icon');
      //       logoDiv.append(logoIcon);

      //       const logoText = document.createElement("div");
      //       logoText.classList.add("logo-text");
      //       logoText.textContent = "Risshweather";
      //       logoDiv.append(logoText);
      // }



      // function displaySearch(){
      //   const searchForm = document.createElement("div");
      //   searchForm.setAttribute("id","search-form");
      //   mainContainer.append(searchForm);

      //     const searchContainer = document.createElement("div");
      //     searchContainer.classList.add("search-container");
      //     searchForm.append(searchContainer);

      //       const searchLocation = document.createElement('input');
      //       searchLocation.setAttribute('type','search');
      //       searchLocation.setAttribute('id','search-location');
      //       searchLocation.setAttribute('name','search-location');
            
      //       searchLocation.setAttribute('required','');
      //       searchContainer.append(searchLocation)


      //       const geolocationBttn = document.createElement("button");
      //       geolocationBttn.setAttribute("id","geolocation-button");
      //       searchContainer.append(geolocationBttn);

      //       const searchBttn = document.createElement('button');
      //       searchBttn.setAttribute("type","submit");
      //       searchBttn.setAttribute("id","search-button");
      //       searchBttn.textContent = "Search";
      //       searchContainer.append(searchBttn);

          
      //     const dropDownContainer = document.createElement('div');
      //     dropDownContainer.classList.add('drop-down-container');
      //     searchForm.append(dropDownContainer);

      //       const searchDropDown = document.createElement('div');
      //       searchDropDown.classList.add('search-drop-down');
      //       dropDownContainer.append(searchDropDown);


      //     const statusDisplay = document.createElement('div');
      //     statusDisplay.classList.add('status-display');
      //     searchForm.append(statusDisplay);

      //       const statusMessage = document.createElement('div');
      //       // statusMessage.textContent = "STATUS";
      //       statusDisplay.append(statusMessage);

      // }

      // function displayTemps (){
      //   const displayContainer = document.createElement("div");
      //   displayContainer.classList.add("display-container");
      //   mainContainer.append(displayContainer);

      //     const currentWeatherContainer = document.createElement("div");
      //     currentWeatherContainer.classList.add("current-weather-container");
      //     displayContainer.append(currentWeatherContainer);


      //       const currentWeatherDisplay = document.createElement('div');
      //       currentWeatherDisplay.classList.add('current-weather-display');
      //       currentWeatherContainer.append(currentWeatherDisplay);


      //         const tempDisplayDiv = document.createElement("div");
      //         tempDisplayDiv.classList.add("temp-display");
      //         currentWeatherDisplay.append(tempDisplayDiv);

      //         const iconCurrentDiv = document.createElement('div');
      //         iconCurrentDiv.classList.add('icon-current');
      //         currentWeatherDisplay.append(iconCurrentDiv);

      //         const weatherDescDiv = document.createElement('div');
      //         weatherDescDiv.classList.add('weather-desc');
      //         currentWeatherDisplay.append(weatherDescDiv);

      //         const uvIndexDiv = document.createElement('div');
      //         uvIndexDiv.classList.add('uv-index');
      //         currentWeatherDisplay.append(uvIndexDiv);


      // }

      // function displayFooter (){
      //   const footerContainer = document.createElement("div");
      //   footerContainer.classList.add('footer-container');
      //   mainContainer.append(footerContainer);

      //     const footerDiv = document.createElement('div');
      //     footerDiv.classList.add('footer');
      //     footerContainer.append(footerDiv);

      //       const linkToGithub = document.createElement('a');
      //       linkToGithub.setAttribute('href', 'https://github.com/Risshiganesh/weather-app');
      //       linkToGithub.textContent = 'Made by Risshiganesh Villalan';
      //       footerDiv.append(linkToGithub);
      // }

     

      // loadingScreen();
      // displayError();
      // displayLogo();
      // displaySearch();
      // displayTemps();
      // displayFooter();



}

export { appendDOM };

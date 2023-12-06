import backgroundVideo from "./assets/background-video.mp4";

import logoIcon from "./assets/logo.png";

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
  // createVideoElement.setAttribute("preload", "metadata");

  const videoSource = document.createElement("source");

  // const vidSrc = await fetch(backgroundVideo, { mode: "cors" }).catch(function (
  //   error
  // ) {
  //   console.log("ERROR!!!!!!!!!!!!!");
  //   console.log(error);
  // });

  // console.log(vidSrc);

  // videoSource.src = vidSrc.url;
  videoSource.src = backgroundVideo;

  // videoSource.src = require("./assets/background-video.mp4");
  videoSource.setAttribute("type", "video/mp4");

  backgroundContainer.append(createVideoElement);
  createVideoElement.append(videoSource);

  // video does not automatically play because there has to be user input for some reason.

  const geolocationButton = document.querySelector("#geolocation-button");
  geolocationButton.addEventListener("click", function () {
    console.log("TETETETETE");
    createVideoElement.play();
  });

  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", function () {
    console.log("TETETETETE");
    createVideoElement.play();
  });
}

function appendIcons() {
  const logoIconDiv = document.querySelector(".logo-icon");
  const logoImg = new Image();
  logoImg.src = logoIcon;
  logoIconDiv.append(logoImg);
}

function appendDOM() {
  appendBackgroundVideo();
  appendIcons();
}

export { appendDOM };

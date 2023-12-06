import backgroundVideo from "./assets/background-video.mp4";

import logoIcon from "./assets/logo.png";

async function appendBackgroundVideo() {
  const backgroundContainer = document.querySelector(".background-container");

  const createVideoElement = document.createElement("video");

  // createVideoElement.setAttribute("playsinline", "");
  createVideoElement.setAttribute("autoplay", "");
  createVideoElement.setAttribute("muted", "");
  createVideoElement.setAttribute("loop", "");
  createVideoElement.setAttribute("id", "background-video");

  const videoSource = document.createElement("source");

  const vidSrc = await fetch(backgroundVideo, { mode: "cors" }).catch(function (
    error
  ) {
    console.log("ERROR!!!!!!!!!!!!!");
    console.log(error);
  });

  // console.log(vidSrc);

  videoSource.src = vidSrc.url;
  videoSource.src = backgroundVideo;
  videoSource.setAttribute("type", "video/mp4");

  backgroundContainer.append(createVideoElement);
  createVideoElement.append(videoSource);
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

import backgroundVideo from "./assets/background-video.mp4";

import logoIcon from "./assets/logo.png";

function appendBackgroundVideo() {
  const backgroundContainer = document.querySelector(".background-container");

  const createVideoElement = document.createElement("video");

  createVideoElement.setAttribute("autoplay", "");
  createVideoElement.setAttribute("muted", "");
  createVideoElement.setAttribute("loop", "");
  createVideoElement.setAttribute("id", "background-video");

  const videoSource = document.createElement("source");
  videoSource.src = backgroundVideo;
  videoSource.setAttribute("type", "video/mp4");

  createVideoElement.append(videoSource);
  backgroundContainer.append(createVideoElement);
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

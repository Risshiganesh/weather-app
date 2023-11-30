// sort this async api out
async function getGeolocationData() {
  let latitudeLongitudeQuery;

  function geolocationSuccess(pos) {
    console.log(pos.coords);

    const latitude = pos.coords.latitude.toFixed(4);
    const longitude = pos.coords.longitude.toFixed(4);

    const latitudeString = latitude.toString();
    const longitudeString = longitude.toString();

    //   console.log(latitudeString + "," + longitudeString);

    latitudeLongitudeQuery = latitudeString + "," + longitudeString;
  }

  function geolocationFail(error) {
    console.log(error);
  }

  if ("geolocation" in navigator) {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      geolocationSuccess,
      geolocationFail,
      options
    );

    // console.log(geolocationResult);

    // return geolocationResult;
  } else {
    console.log("Geolocation not supported");
  }

  console.log(latitudeLongitudeQuery);

  return latitudeLongitudeQuery;
}

export { getGeolocationData };

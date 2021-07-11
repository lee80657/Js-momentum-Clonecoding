const geolocationBox = document.querySelector("div .geolocation");
const geolocationCity = geolocationBox.querySelector(".geolocation__city");
const geolocationWeather = geolocationBox.querySelector(
  ".geolocation__weather"
);
const API_KEY = "c2171d699229a9c142b904c948520948";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      geolocationCity.innerText = data.name;
      geolocationWeather.innerText = `.  ${data.weather[0].main}  /  ${data.main.temp} ℃`;
    });
}

function onGeoError() {
  geolocationCity.innerText = "Sorry, I can't find your location.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

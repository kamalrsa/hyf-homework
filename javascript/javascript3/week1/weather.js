let button = document.getElementById("button");
let input = document.getElementById("inputValue");
let name = document.getElementById("name");
let desc = document.getElementById("desc");
let icon = document.getElementById("weather-icon");
let temp = document.getElementById("temp");
let sunRise = document.getElementById("sunRise");
let sunSet = document.getElementById("sunSet");
let windSpeed = document.getElementById("windSpeed");
let position = document.getElementById("button1");
let place = document.getElementById("location");

const fetchApi = () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=22f1181cc9b8c93a858298fdd7ae18e2`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      name.innerText = data.name;
      desc.innerText = data.weather[0].description;
      const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      icon.setAttribute("src", iconUrl);
      temp.innerText = `Temperature ${Math.round(data.main.temp - 273.15)}°C`;
      sunRise.innerText = `Sunrise ${new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString()}`;
      sunSet.innerText = `SunSet ${new Date(
        data.sys.sunrise * 1000
      ).toLocaleTimeString()}`;
      windSpeed.innerText = `Windspeed ${data.wind.speed}`;
    });
};
document.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchApi();
});

// Current position location using geoapi and weather API

const fetchPosition = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    positionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=22f1181cc9b8c93a858298fdd7ae18e2`;
    fetch(positionUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        place.innerText = data.name;
      });
  });
};
position.addEventListener("click", (event) => {
  event.preventDefault();
  fetchPosition();
});

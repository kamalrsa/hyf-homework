////WEATHER REOPRT/////
const body = document.querySelector("body");
const cityName = document.querySelector("input");
const button = document.getElementById("submit");
const weather = () => {
  if (cityName.value == "") {
    body.innerHTML = "enter city name";
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=bac7c91526d4783920990e14b8cbac2d`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const city = document.getElementById("city");
      city.innerHTML = `${data.name}`;

      const temp = document.getElementById("temp");
      temp.innerHTML = ` ${(data.main.temp - 273.15).toFixed(0)}°C`;

      data.weather.forEach((element) => {
        console.log(element.icon);
        const icons = document.getElementById("icon");
        const div = document.querySelector("div");
        document.getElementById("main").innerHTML = ` ${element.main} `;
        icons.src = `http://openweathermap.org/img/wn/${element.icon}.png`;
        div.appendChild(icons);
      });

      const windSpeed = data.wind.speed;
      //console.log(windSpeed)
      document.getElementById("windspeed").innerHTML =
        "Speed :" + windSpeed + "m/s";

      const cloudy = data.clouds.all;
      document.getElementById("cloudy").innerHTML = ` ${cloudy}% clouds`;

      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleString();
      const sunset = new Date(data.sys.sunset * 1000).toLocaleString();
      document.getElementById(
        "sunrise"
      ).innerHTML = `SunRise: ${sunrise} <br> SunSet: ${sunset}`;

      const status = document.querySelector("#status");
      const mapLink = document.querySelector("#map-link");

      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        mapLink.href = `https://www.openstreetmap.org/#map=18/${lat}/${lon}`;
        mapLink.textContent = `Latitude: ${lat} ° Longitude: ${lon} °`;
      });
    });
};
button.addEventListener("click", weather);
navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bac7c91526d4783920990e14b8cbac2d`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerHTML = `${data.name}`;
      temp.innerHTML = ` ${(data.main.temp - 273.15).toFixed(0)}°C`;
    });
});

//button.addEventListener("click", weather);

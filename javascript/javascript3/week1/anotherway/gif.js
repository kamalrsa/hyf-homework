console.log("script loded");
const gif = document.querySelector("#gif");
const limit = document.querySelector("#limit");
const search = document.querySelector("#search");
const gifSearcher = () => {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=JlYs50eNHzVsJxIrM7V2MiYcvbJluBwh&q=${gif.value}&limit=${limit.value}&offset=0&rating=g&lang=en`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      data.data.forEach((element) => {
        //console.log(element.images.downsized.url)
        const img = document.createElement("img");
        img.src = element.images.downsized.url;
        const div = document.querySelector("div");
        div.appendChild(img);
      });
    });
};
search.addEventListener("click", gifSearcher);

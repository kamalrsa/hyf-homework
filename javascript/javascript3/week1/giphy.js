let search = document.getElementById("search");
let btn = document.getElementById("btnSearch");
let divImage = document.getElementById("giphiImage");
const APIKEY = "L9m45vq8McMRHt49YWmsy1qXVcMzUUK7";

const fetchGiphy = () => {
  const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${search.value}`;

  fetch(giphyUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data[0].images.fixed_width.url);
      data.data.forEach(function (obj) {
        console.log(obj.images.fixed_width.url); //log all cats images
        const url = obj.images.fixed_width.url;
        const width = obj.images.fixed_width.width;
        const height = obj.images.fixed_width.height;
        const title = obj.title;
        divImage.innerHTML = `<img src="${url}" width="${width}" height="${height}"alt="${title}">`;
      });
    });
};
btn.addEventListener("click", (e) => {
  fetchGiphy();
});

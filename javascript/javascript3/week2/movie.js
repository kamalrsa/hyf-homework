let badMovies = [];
let badMovieBefore2000 = [];
function fetchMovie() {
  fetch(
    `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`
  )
    .then((response) => response.json())
    //.then((data) => console.log(data))
    .then((data) => {
      moviesList(data);
    });
}
fetchMovie();

function moviesList(data) {
  sessionStorage.clear();
  console.log(data);
  let select = document.getElementById("movies").value;
  if (select == "badMovie") {
    data.filter((element) => {
      if (element.rating < 6) {
        badMovies.push(element.title);
      }
    });
    console.log(badMovies);
    console.log(badMovies.length);
    document.getElementById(
      "totalBadMovies"
    ).innerHTML = `no of movies${badMovies}`;
  } else if (select == "badMovie1") {
    data.map((e) => {
      if (e.rating < 6 && e.year < 2000) {
        badMovieBefore2000.push(e.title);
      }
    });

    console.log(badMovieBefore2000);
    console.log(badMovieBefore2000.length);
    document.getElementById(
      "badMoviesBefore2000"
    ).innerHTML = `no of movies${badMovieBefore2000.length}`;
  }
}
document.getElementById("movies").addEventListener("change", fetchMovie);

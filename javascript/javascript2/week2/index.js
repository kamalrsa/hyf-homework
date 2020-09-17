const movies = require("./movies.json");
// short movies title
const shortMovie = movies.filter((x) => x.title.length < 4);
console.log(shortMovie);

// Long movies title
const longMovie = movies.filter((x) => x.title.length >= 50);
console.log(longMovie);

//number of movies between 1980-1989

const count = movies.filter((x) => x.year <= 1989 && x.year >= 1980);
console.log(count);

// create a new array that has an extra key called tag.

const ratingMovie = movies.filter((x) => x.rating >= 7);
const newRatingMovie = ratingMovie.map((y) =>
  Object.assign(y, { tag: "Good" })
);
const ratingMovie1 = movies.filter((x) => x.rating >= 4 && x.rating < 7);
const newRatingMovie1 = ratingMovie1.map((y) =>
  Object.assign(y, { tag: "Average" })
);
const ratingMovie2 = movies.filter((x) => x.rating < 4);
const newRatingMovie2 = ratingMovie2.map((y) =>
  Object.assign(y, { tag: "Good" })
);
console.log(newRatingMovie);
console.log(newRatingMovie1);
console.log(newRatingMovie2);

// Use Chaining
const movieRatings = movies.filter((x) => x.rating > 6);
console.log(movieRatings);
const onlyMovieRating = movieRatings.map((x) => x.rating);
console.log(onlyMovieRating);

// count the total no of movies containing any words
const totalMoviesWithWord= movies.filter((x) =>
  x.title.toLowerCase().includes("Alien") || x.title.toLowerCase().includes("surfer")|| x.title.toLowerCase.includes('benjamin'));

console.log(totalMoviesWithWord);
console.log(totalMoviesWithWord.length);

// count the total no of movies containing any word using reduce callback function
const totalMoviesByKeywords = movies.reduce(
  (sum, x) =>
    x.title.search(/Alien/i) >= 0 ||
    x.title.search(/Benjamin/i) >= 0 ||
    x.title.search(/Surfer/i) >= 0
      ? (sum += 1)
      : sum,
  0
);
console.log(totalMoviesByKeywords);


// create an array of movies where word in the title is duplicated.
let keyword = "Alien";
let movieNames = movies.map((x) => x.title);
var regex = new RegExp(keyword, "g");
var count = (moviesName.match(regex) || []).length;

if (count > 0) {
  console.log(
    "true, since there are " + count + " repeats of the word '" + keyword + "'"
  );
} else {
  console.log("false, not found.");
}

// average rating of all movies
const ratingsMovie = movies.map((x) => x.rating);
console.log(ratingsMovie);
let total = ratingsMovie.reduce(sum, 0);
function sum(total, value, index, array) {
  return total + value;
}

let averageRating = total / ratingsMovie.length;
console.log(averageRating);

// count the total no of good, average and bad movies using reduce

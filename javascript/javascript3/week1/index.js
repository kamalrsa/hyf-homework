// Find a cool API
// here the data tye is object
const body = document.querySelector("body");
const data = fetch(
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
).then((response) => response.json().then((data) => console.log(data)));
console.log(data);

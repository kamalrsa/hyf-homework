/* create a  function that has one parameter: resolveAfter. Calling this function will return a promise that
 resolves after the resolveAfter second has passed*/

function resolvedPromise(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("I am called asynchronously"));
    }, resolveAfter * 1000);
  });
}
resolvedPromise(8);
async function promiseResolved() {
  try {
    const result = await resolvedPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
promiseResolved();

//setTimeout promise
let setPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 9000);
});
setPromise.then(() => {
  console.log("called after 9 sec");
});
// get current location promise

function currentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(
        `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`
      );
    }, reject);
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
currentLocation();

// fetching and waiting

function fetchAPI() {
  fetch("http://api.open-notify.org/astros.json")
    .then((response) => response.json())
    .then((data) => console.log("astros", data));
}
function accessData() {
  setTimeout(() => {
    fetchAPI();
  }, 4000);
}
accessData();
// fetching and waiting async/await away
async function fetchAstors() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const astrosData = await response.json();
  console.log("astros", astrosData);
  //return astrosData;
}
function astros() {
  setTimeout(() => {
    fetchAstors();
  }, 4000);
}
astros();

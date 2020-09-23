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

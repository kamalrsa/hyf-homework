/*// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
    
        setTimeout(()=>{
            console.log("called after 2.5 sec");
        }, 2500);

// Create a function that takes 2 parameters: delay and stringToLog.
// Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function delayLog(delay, stringToLog){
    setTimeout(()=> {
        console.log(stringToLog);
        }, delay*1000);
        

}
delayLog(5, "This string log after 5 sec");
delayLog(3, "This string logged after 3 sec");

//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
let btn = document.getElementById("button1");
btn.innerHTML = "log after 5 Sec";
btn.addEventListener("click",()=>{
    setTimeout(()=> {console.log("Log after 5 sec");}, 5000)
});

//Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.
function earthLogger(){
   console.log("Earth");
}
function saturnLogger(){
    console.log("Saturn");
}
function planetLogFunction(callback){
    callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api
let btn1 = document.getElementById("find-me");
let map1 = document.getElementById("map1")
btn1.addEventListener("click", geoFindme);
function geoFindme() {
    if('geolocation' in navigator ){
    console.log('geolocation is available');
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        document.getElementById("latitude").innerText = lat;
        document.getElementById("longitude").innerText = lng;
        map1.innerHTML = `<div style="width: 100%"><iframe width="800" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=${latitude},${longitude}&amp;q=+(My%20location)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>`;
    });
}
else {
    console.log("geolocation is not available");
}}

// Location on Map using Google maps api

function initMap(){
    let mapOptions = {
        center : new google.maps.LatLng(55.7210421, 12.37),
        zoom: 10, 
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
   }

   // Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

  function runAfterDelay(delay, callback){
    setTimeout(()=> {
        callback();
        }, delay*1000);
    }
    
    runAfterDelay(4, function(){
        console.log("should be logged after 4 sec");
    })
    runAfterDelay(7, function(){
       console.log(" logged after 7 sec");
   })
   // check if you have a double click on page
   function myFunction(){
      let clickCount = document.getElementById("doubleClick")
      clickCount.innerHTML = "double Click"
   }
   //Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.
   
   function jokeCreator(shouldTellFunnyJoke, callback1, callback2){
       
       if (shouldTellFunnyJoke === true){
           logFunnyJoke();
       }
       else{
           logBadJoke();
       }
      function logFunnyJoke() {

           console.log("funny Joke");
       }
       function logBadJoke(){
           console.log("Bad Joke");
       }
    }
    jokeCreator(true, "funnyjoke", "logBadJoke");
    jokeCreator(false, "funnyjoke", "badjoke"); */

// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
let array = [add(5,8), sub(3,4), mul(2,0)];
//array.push(add);
//array.push(sub);
//array.push(mul);
function sub(a,b){
    let Y = a-b;
    return Y;
    }
    

function mul(a,b){
    let x = a*b;
    return x;
    }

for(let i = 0; i<array.length; i++){
    console.log(array[i]);
    
}




// Create a function as a const and try creating a function normally. Call both functions.
const myFun = function show(){
    console.log("Hack Your Future");
}
myFun();

function show(){
    console.log("Hack Your Future");
} show();

// Create an object that has a key whose value is a function. Try calling this function.

let myObject = {
    first: function(){
        console.log("first function");
    },
    second: function(){
        console.log("second function");
    }
};

function add(a,b){
    let sum = a+b;
    return sum;
    }
let addNum = add(4, 5);
//console.log(addNum);

myObject.third = function add(){
    console.log(addNum);
};
    


for (let i in myObject){
    myObject[i]();
}
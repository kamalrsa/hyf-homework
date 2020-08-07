// Future age calculator
const yearOfBirth = 1983; //  data type number
let yearFuture = 2070;
let age = yearFuture - yearOfBirth;
console.log(`you will be ${age} years old in ${yearFuture}`);


// Dog age Calculator

let dogYearOfBirth = 2004;
let dogYearFuture =  2024;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears ===true){
        console.log(`your dog will became ${dogYear * 7} dog years old in ${dogYearFuture}`);
            }
            else {
                 console.log(`your dog will became ${dogYear} human years is ${dogYearFuture}`);
            }

// Home price estimator
 
let houseWidth = 8;
let houseDeep = 10;
let houseHeight = 10;
let volumeInMeters = houseDeep * houseHeight * houseHeight;
let gardenSizeInM2 = 100;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let houseCost = 1000000;
if (houseCost <= houseCost){
    console.log(`You can buy the house`);
}
else{
    console.log(`Don not buy the house`);
}

// startup Name Generator

const firstWords = ['easy','awesome','hard','math','finas','nice','super','bio','mind','mountain'];
const secondWords = ['meet','tech','bst','mile','fun','blue','red','green','known','massive'];
var startupName = firstWords[Math.floor(Math.random() * 10)] + " " + secondWords[Math.floor(Math.random() * 10)];
console.log(`The startup name is ${startupName}`);







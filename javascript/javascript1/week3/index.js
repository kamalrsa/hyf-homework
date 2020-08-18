// 1: Item Array removal
const names = ['Peter', 'Ahamd', 'Yana','kristina', 'Rasmus', 'Ahamd'];
const nameToRemove = "Ahamd"
//names.splice(0,1); 
names.splice(names.indexOf('Ahamd'), 1); // find the index position of Ahamd and remove one element from that position.
    
console.log(names);

// to remove multiple specific elements for this I added  "Ahamd" in last index of the array
for (let i = 0; i<names.length; i++){
    if (nameToRemove === names[i]){
        names.splice(i, 1);
        break;
    }
}
console.log(names);

//2: When will we be there

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
const a = travelInformation.destinationDistance;
const b = travelInformation.speed
const hours= a/b;
function travelTime(){
    
    
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return hours + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}
console.log(`the total hours to travel is ${travelTime(hours)}`);


// SERIES DURATION MY LIFE

const seriesDurations = {
    "first":{
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    "second":{
        title: 'Sopranos',
        days: 3,
        hours: 14,
        minutes: 0,

    },
    "third":{
        title: 'The Wire',
        days: 2,
        hours: 12,
        minutes: 0,
    }
};
const myLifeSpan = 80*365*24;
let totalTimeForFirstSeries =(seriesDurations.first["days"]* (seriesDurations.first["hours"]+seriesDurations.first["minutes"]/60));
let totalTimeForSecondSeries =(seriesDurations.first["days"]* (seriesDurations.second["hours"]+seriesDurations.second["minutes"]/60));
let totalTimeForThirdSeries =(seriesDurations.first["days"]* (seriesDurations.third["hours"]+seriesDurations.third["minutes"]/60));
//console.log(totalTimeForFirstSeries);
//console.log(totalTimeForSecondSeries)
//console.log(totalTimeForThirdSeries)
let inTotalTimeForSeries = totalTimeForFirstSeries + totalTimeForSecondSeries + totalTimeForThirdSeries;

// Function to calculate percentage
function logOutSeriesText(time,year){
    percentage = time/year *100;
    return percentage;

}
const firstSeries = logOutSeriesText(totalTimeForFirstSeries, myLifeSpan);
const secondSeries = logOutSeriesText(totalTimeForSecondSeries, myLifeSpan);
const thirdSeries = logOutSeriesText(totalTimeForThirdSeries, myLifeSpan);
const inTotal = logOutSeriesText(inTotalTimeForSeries, myLifeSpan)
console.log(`Game of thrones took${firstSeries}% of my life`);
console.log(`Sopranos took${secondSeries}% of my life`);
console.log(`The Wire took${thirdSeries}% of my life`);
console.log(`In total that is${inTotal}% of my life`);

// Step3: Note taking app!

//3.1 save a note
const notes = [];
function saveNote(content, id){
        notes.push({content, id,});
}
saveNote("Pickup groceries", 1);
saveNote(" Do laundry", 2);
console.log(notes);

// 3.2 Get a note

function getNote(id){
    for(let i = 0; i<notes.length; i++){
        if(id === isNaN() ||id ==='' ){
            return  'please write a number in ID'
        }
        else if(id === (notes[i].id)){
            return notes[i];
        }
        
    }


}
const firstNote = getNote(1);
console.log(firstNote);


//3.3 log out notes

function logOutNotesFormatted(){
    for(i=0; i<notes.length; i++){
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
        
    }
}
logOutNotesFormatted();

// Adding a activity and Usage Limit

const activities = [];

function addActivity(date, activity, duration){
    let addedActivities = {date: new Date(), activity: activity, duration: duration};
    if (typeof activity === "string" && !isNaN(duration && activity!="")){
        return activities.push(addedActivities);
    }
    else{
        return console.log("activity should be string and duration is number");
    }
    
    /*activities.date = new Date();
    activities.activity = activity;
    activities.duration = duration;
    activities.push({date, activity, duration});*/
}

addActivity("", "Javascript function", 30);
addActivity("", "Fundamental of JS", 50);
addActivity("", "Why Javascript1", 80);
addActivity("", "Why Javascript", 20); // this is not calculate limit for only 3 activities.
console.log(activities);


// Show my status and Usage Limit



function showStatus(){
    let sum = 0;
    let maxLimit = 100;
    //activities.length = 3; // usage limit so user could not get more than 3 activities.
    for(i=0; i<activities.length; i++){
        sum+= activities[i].duration;
        
    }
    console.log(`You have added ${activities.length} activities. The amount to ${sum} min of usage`);
    if(sum > maxLimit){

    console.log(`You have reached your limit, no more smartphoning for you`);
    }
    else{
        console.log(`you can add more`);
    }
}
showStatus();

//Optional
// we don't need to specify date - done in addActivity function
// calculate the activity a user has spent the most time on.

function mostTimeSpent(){
    let maxTimeSpent = 0;
    
    
    for(i=0; i<activities.length; i++){
        if(activities[i].duration > maxTimeSpent){
        maxTimeSpent = activities[i].duration;
        
    }
    

console.log(maxTimeSpent);

    }
   return maxTimeSpent;


}
if
mostTimeSpent();







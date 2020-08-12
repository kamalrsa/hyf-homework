function getFullname(firstname, surname, useFormalName){
    
    const fullname = (useFormalName == true) ? ("Lord" + "  "+firstname +"  "+ surname) :(firstname +"  "+ surname);
return fullname;
    

}
const fullname1= getFullname('kamal', 'sharma', true);
const fullname2 = getFullname('kamal', 'sharma', false);
console.log(fullname1);
console.log(fullname2);
// weather wear

function  clothMatch(temperature){
    if(temperature>=18){
        console.log("shorts and a t-shirt");
    }
    else{
        console.log("remember a jacket");
    }
}
clothMatch(19); // execute in if condition
clothMatch(10); // execute in else condition

//Event application

const todayDate = new Date(); // displayed month, date, year and time
const todayCount = todayDate.getDay(); // counts the number of todayDate
function getEventWeekday(totalDays){
const daysForEvent= todayCount + totalDays;
const week = ["sday", "mday", "tuday", "wed", "Thday", "friday", "satday"];

if (daysForEvent >= 7){
    daysForEvent = daysForEvent % 7;
}
return week[daysForEvent];

}
const dateEvent = getEventWeekday(19);
console.log(dateEvent);

// Student Manager

const class07Students = [];

function addStudentsToClass(studentName){
    if(studentName==="queen"){
        if(class07Students.includes("queen")){
            console.log("queen is already in the class")
        }
        else{
        
        class07Students.push(studentName);
    }
}

    else if (getNumberOfStudents() <6){
        if(class07Students.includes(studentName)){
            console.log('student ${studentName} is in the class');

        }
        else{

        class07Students.push(studentName);
    }
}
    
    else{

        console.log("we can not add more students");
    }
  
}
addStudentsToClass("kamal");
addStudentsToClass("jack");
addStudentsToClass("benjamin");
addStudentsToClass("maria");
addStudentsToClass("pandit");
addStudentsToClass("carlo");
addStudentsToClass("queen");
addStudentsToClass("kamal"); // this does not push in array. 
console.log(class07Students);



function getNumberOfStudents(){
   const totalStudents = class07Students.length;
  return totalStudents;

}



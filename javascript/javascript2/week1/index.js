const danishWords = ["bil", "plante", "kaffe","bog", "ø", "planetrium"];
function shortestWord(array){
    return array.reduce(function(prevWord, currWord){
        if(currWord.length < prevWord.length){
            return currWord;
        }
        else 
        return prevWord;

    })
}
console.log(shortestWord(danishWords));

// Find and count the danish letter




function danishLetters(array) {
    let alpha1 = 0; //to count æ
    let alpha2 = 0; //to count ø
    let alpha3 = 0; //to count å
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'æ') {
            alpha1++;
        } else if (array[i] === 'ø') {
            alpha2++;
        } else if (array[i] === 'å') {
            alpha3++;
        }
    }
    console.log(array);
    console.log(
        'total: ' +
        (alpha1 + alpha2 + alpha3) +
        ', æ: ' +
        alpha1 +
        ' , ø: ' +
        alpha2 +
        ' , å: ' +
        alpha3
    );
} 
console.log(danishLetters('jeg har en blå bil'));
console.log(danishLetters("blå grød med røde bær"));


// setting up the event
// display name with  sprit animal name
// user should enter their name otherwise could not see a sprit animal name(NO INPUT)
function myFunction(){
    let name = document.getElementById("myText").value;
    let textArray = ["The fullman off", "The crying butterfly", "Moving Birds", "Flying Tiger", "Small Chicken"];
    let randomIndex = Math.floor(Math.random() *textArray.length);
    let randomString = textArray[randomIndex];
    if (name = myText.value){
    document.getElementById("displayName").innerHTML = `${name} - ${randomString}`;}
}

// create a  input and button dynamically!!

const body = document.querySelector("body");
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name1")
body.appendChild(input);
let btn = document.createElement("button");
btn.innerHTML = "clickMe"
body.appendChild(btn);
btn.addEventListener("click", function(){
    let name = document.getElementById("name1").value;
    let textArray = ["The fullman off", "The crying butterfly", "Moving Birds", "Flying Tiger", "Small Chicken"];
    let randomIndex = Math.floor(Math.random() *textArray.length);
    let randomString = textArray[randomIndex];
    let div = document.createElement("div");
     div.innerText = `${name} - ${randomString}`;
     body.appendChild(div);
     if(name == ""){
         div.innerText = "Enter your name";
     }
    
})
//
const body1 = document.querySelector("body");
let input1 = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name1")
body1.appendChild(input1);
let btn1 = document.createElement("button");
btn1.innerHTML = "clickMe"
body.appendChild(btn1);
input1.addEventListener("mouseover", function(){
    let name1 = document.getElementById("name1").value;
    let textArray1 = ["The fullman off", "The crying butterfly", "Moving Birds", "Flying Tiger", "Small Chicken"];
    let randomIndex1 = Math.floor(Math.random() *textArray1.length);
    let randomString1 = textArray1[randomIndex1];
    let div1 = document.createElement("div");
     div1.innerText = `${name1} - ${randomString1}`;
     body1.appendChild(div1);
     if(name1 == ""){
         div1.innerText = "Enter your name";
     }
    
})


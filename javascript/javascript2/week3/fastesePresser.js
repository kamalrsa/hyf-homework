
function getInputValue(){
let inputVal= document.getElementById("time").value;


setTimeout(()=>{
    console.log("Game Over!! Try Again");
}, inputVal*1000);
}

//let p1 = document.getElementById("pressKey");
let count = 0;
let count1 = 0;
let array1= [];
let array2 = [];

window.addEventListener('keypress', (event)=>{
    
    
        if(event.keyCode == '115'){
            count++;
            console.log(count);
            array1.push(event.keyCode);
                        
        
        }
        else if (event.keyCode == '108'){
        count1++;
        console.log(count1);
        array2.push(event.keyCode)
        
        
    }
    
    //let inputVal1= document.getElementById("time").value;
    let myTime = setTimeout(()=>{
        console.log("Game Over!! Try Again");
    },1000);
    clearTimeout(myTime);
    if(array1.length > array2.length) {
        console.log("S is larger")
    }
    else {
    console.log("l is larger"); }

});




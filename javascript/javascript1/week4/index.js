let todo = [];
function getReply(command){
    switch(command){
        case "Hello my name is Benjamin":
           let name = command.substr(-8);
           console.log(`nice to meet you ${name}`);
           break;
        case "what is my name":
            console.log(`your name not found`);
            break;
       case "Add fishing to my todo":
            todo.push("fishing");
            console.log(`${todo[0]} added to your todo`);
            break;
        case "Add singing in the shower to my todo":
            todo.push("singing in the shower");
            console.log(todo);
            break;

        case "Remove fishing from my todo":
           todo.shift();
           console.log(`Removed phishing from your todo`);
           break;
        case "What is on my todo":
            console.log(`you have ${todo}`);
            break;
        case "What day is it today?":
            const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const today = new Date();
            const day = today.getDate();
            const year = today.getFullYear();
            let currentMonth = today.getMonth();
             for(let i = 0; i<=month.length;i++){
                if(currentMonth=== i)
                     currentMonth = month[i];
                }
                return (`${day}. of ${currentMonth} ${year}`);
                break;
        case "Timer set for 4 minutes":
            let time = 4*60*1000;
            
            let timer = setTimeout(myTimer, time);
            function myTimer(){
                console.log(`Timer done`);
            }
            break;
                
            }
            
            




    }
     


console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('what is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo'));
console.log(getReply('What day is it today?'));
console.log(getReply('Timer set for 4 minutes'));


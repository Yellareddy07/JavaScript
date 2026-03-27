//Control Flow in JavaScript
console.log("Control Flow in JavaScript: if,if-else, switch");
//1. If Statement
console.log("If Statement:");
let age2 = 18;
if(age2 >= 18){
    console.log("You are an adult.");
}



//2. If-Else Statement
console.log("If-Else Statement:");
let age3 = 16;
if(age3 >= 18){
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}



//3. Switch Statement
console.log("Switch Statement:");
let day = "Monday";
switch(day){
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;              
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}   

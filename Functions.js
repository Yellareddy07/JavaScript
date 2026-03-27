//Functions in JavaScript
console.log("Functions in JavaScript: Function Declaration, Function Expression, Arrow Function");
//1. Function Declaration
console.log("Function Declaration:");
function greet(name){
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));



//2. Function Expression
console.log("Function Expression: a function that is assigned to a variable and not have the name of the function");
const greet2 = function(name){
    return "Hi, " + name + "!";
}
console.log(greet2("Bob"));



//3. Arrow Function
console.log("Arrow Function: a shorter syntax for writing functions, and does not have its own this keyword");
const greet3 = (name) => {
    return "Hey, " + name + "!";
}
console.log(greet3("Charlie"));



//Arrow function with implicit return
const greet4 = name => "Welcome, " + name + "!";
console.log(greet4("Dave"));



console.log("Rest parameters Function:");
function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10



console.log("Async Function:They return a promise and can be used with the await keyword to wait for the promise to resolve before continuing with the execution of the code.");
async function fetchData(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();
console.log("Hello World!");


//JavaScript Variables
var name = "John";
let age = 30;       //we can change the value of age because it is a variable declared with let
const pi = 3.14;    //we cannot change the value of pi because it is a constant variable

console.log(name);
console.log(age);
console.log(pi);   


//Scoping in JavaScript
function testScope() {
    var functionScoped = "I am function scoped";
    let blockScoped = "I am block scoped";
    const alsoBlockScoped = "I am also block scoped";
    
   // console.log(functionScoped);    
    console.log(blockScoped);    
    console.log(alsoBlockScoped); 
}
testScope();

/*
console.log(functionScoped);    // This will cause an error because functionScoped is not defined in the global scope
console.log(blockScoped);    // This will cause an error because blockScoped is not defined in the global scope
console.log(alsoBlockScoped); // This will cause an error because alsoBlockScoped is not defined in the global scope

*/
if(true) {
    var functionScoped = "I am function scoped";
    let blockScoped = "I am block scoped";
    const alsoBlockScoped = "I am also block scoped";
}

console.log(functionScoped);    // This will work because functionScoped is function scoped and we are still in the same function
//console.log(blockScoped);    // This will cause an error because blockScoped is block scoped and we are outside of the block
//console.log(alsoBlockScoped); // This will cause an error because alsoBlockScoped is block scoped and we are outside of the block


console.log(x);
var x = 5;    // This will work because of hoisting, the declaration of x is hoisted to the top of the scope, but the assignment is not, so x is undefined at this point

//console.log(y);
let y = 10;   // This will cause an error because let does not allow hoisting, y is not defined at this point

//console.log(z);
const z = 15;  // This will cause an error because const does not allow hoisting, z is not defined at this point


console.log("==============================================")


//Scope of variables
console.log("Variable Scopes: GLobal and local");
//1. Global Scope and Local Scope
var a=10; // Global Scope

function scope(){
    var b=20; // Local Scope
    console.log("Inside function: ", a); // Accessing global variable
    console.log("Inside function: ", b); // Accessing local variable
}

scope();

console.log("Outside function: ", a); // Accessing global variable
//console.log("Outside function: ", b); // This will cause an error because b is not defined in the global scope


//2. Block Scope
console.log("Block Scope:");
if(true){
    var c=30; // Global Scope (because var does not have block scope)
    let d=40; // Block Scope
    const e=50; // Block Scope
    console.log("Inside block: ", c); // Accessing variable declared with var
    console.log("Inside block: ", d); // Accessing variable declared with let
    console.log("Inside block: ", e); // Accessing variable declared with const
}

console.log("Outside block: ", c); // Accessing variable declared with var
//console.log("Outside block: ", d); // This will cause an error because d is not defined in the global scope
//console.log("Outside block: ", e); // This will cause an error because e is not defined in the global scope


//lexical scope
console.log("Lexical Scope:");
function outerFunction() {
    var outerVariable = "I am from the outer function";
    
    function innerFunction() {
        console.log(outerVariable); // Accessing variable from the outer function
    }
    
    innerFunction();
}

outerFunction();



console.log("==============================================")   

//Typeconversion in JavaScript
console.log("Type Conversion in JavaScript: String, Number, Boolean");

//1. String to Number
console.log("String to Number:");
let strNum = "123";
let num = Number(strNum);
console.log(num); // 123
console.log(typeof num); // number

//2. Number to String
console.log("Number to String:");
let num2 = 456;
let str = String(num2);
console.log(str); // "456"
console.log(typeof str); // string

//3. Boolean to String
console.log("Boolean to String:");
let bool = true;
let boolStr = String(bool);
console.log(boolStr); // "true"
console.log(typeof boolStr); // string

//4. String to Boolean
console.log("String to Boolean:");
let strBool = "false";
let bool2 = Boolean(strBool);
console.log(bool2); // true (because non-empty strings are truthy)
console.log(typeof bool2); // boolean

//5. Number to Boolean
console.log("Number to Boolean:");
let num3 = 0;
let bool3 = Boolean(num3);
console.log(bool3); // false (because 0 is falsy)
console.log(typeof bool3); // boolean

let num4 = 1;
let bool4 = Boolean(num4);
console.log(bool4); // true (because non-zero numbers are truthy)
console.log(typeof bool4); // boolean




console.log("==============================================")
//console in JavaScript
console.log("Console in JavaScript: log, error, warn, info,table, time, timeEnd");
//1. console.log()
console.log("This is a log message.");

//2. console.error()
console.error("This is an error message.");

//3. console.warn()
console.warn("This is a warning message.");

//4. console.info()
console.info("This is an informational message.");     

//5. console.table()
console.table([{name: "John", age: 30}, {name: "Jane", age: 25}]);

//6. console.time() and console.timeEnd()
console.time("Timer");
for(let i=0; i<1000000; i++){}
console.timeEnd("Timer");       



console.log("==============================================")
//Binding in JavaScript
console.log("Binding in JavaScript: this, call, apply, bind");
//1. this keyword
console.log("this keyword: refers to the object that is executing the current function");
const person2 = {
    name: "John",
    greet: function(){
        console.log("Hello, " + this.name + "!");
    }
}
person2.greet(); // Hello, John!




//2. call() method
console.log("call() method: allows you to call a function with a specified this value and arguments provided individually");
function greet5(greeting){
    console.log(greeting + ", " + this.name + "!");
}
greet5.call(person2, "Hi"); // Hi, John!




//3. apply() method
console.log("apply() method: allows you to call a function with a specified this value and arguments provided as an array");
greet5.apply(person2, ["Hey"]); // Hey, John!




//4. bind() method
console.log("bind() method: creates a new function that, when called, has its this keyword set to the provided value");
const greetJohn = greet5.bind(person2);
greetJohn("Welcome"); // Welcome, John!     
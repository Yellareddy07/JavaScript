//A callback function is a function that is passed as an argument to another function and executed later.
function hello(name,callback){
    console.log("Hello " + name);
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}

hello("Alice",goodbye);



//Asynchronous callback example
console.log("Asynchronous callback example");
console.log("Start of the program");

setTimeout(() => {
    console.log("executes after three seconds");
}, 3000);

console.log("End of the program");


//call backs  have some disadvantages such as callback hell and difficulty in error handling. To overcome these issues.
//Promises and async/await can be used for better readability and error handling in asynchronous code.


function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Function 1 executed");
            resolve();
        }, 2000);
    }); 
}

function fun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Function 2 executed");
            resolve();
        }, 1000);
    }); 
}

function fun3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Function 3 executed");
            resolve();
        }, 1500)
    });
}


fun1()
.then(fun2)
.then(fun3)
.then(() => console.log("All functions executed"));


//async/await example =>it is cleaner alternative to promises and allows you to write asynchronous code in a synchronous manner.

async function executeFunctions(){
    await fun1();
    await fun2();
    await fun3();
    console.log("All functions executed using async/await");
}

executeFunctions();





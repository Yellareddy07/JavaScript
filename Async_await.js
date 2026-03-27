// async functions always return a Promise.
// await pauses execution until the Promise is resolved or rejected.
// Improves readability compared to .then() and .catch() chaining.
// Makes error handling simpler using try...catch.
// Ideal for managing complex asynchronous flows in a structured way.

//Async/Await in JavaScript allows you to write asynchronous code in a clean,
//synchronous-like manner, making it easier to read, understand, and maintain while working with
//promises.

//Syntax:
async function functionName() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } 
  
  catch (error) {
    console.error("Error:", error.message);
  }
}

functionName();


//Example:
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1500);
    });
}

async function processData() {
    try {
        console.log("before await called");
        const data = await fetchData();
        console.log(data); // "Data fetched successfully"
        
        console.log("after await called");
        const processedData = `${data} - Processed`;
        console.log(processedData); // "Data fetched successfully - Processed"
    } 
    
    catch (error) {
        console.error("Error:", error);
    }
}
console.log("before calling processData");
processData();
console.log("after calling processData");

//Output:
// before calling processData
// before await called
// after calling processData
// after await called
// Data fetched successfully
// Data fetched successfully - Processed

//In this example, the processData function is declared as async, allowing us to use await to pause execution 
//until the fetchData promise is resolved. This makes the code easier to read and understand compared 
//to using .then() chaining. Additionally, we can handle errors using try...catch blocks, providing a cleaner 
//way to manage exceptions in asynchronous code.
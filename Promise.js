let p=new Promise((resolve, reject) => {
    age=14;
    if (age>=18) {
        resolve("You are eligible to vote");
    } else {
        reject("You are not eligible to vote");
    }
});

p
.then((message) =>{ console.log(message);})
.catch((error) => { console.log(error);});


//Promise methods
//Promise.all() - waits for all promises to resolve and returns an array of results or rejects if any promise is rejected.

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log("Results from Promise.all:", results);
})
.catch((error) => {
    console.log("Error in Promise.all:", error);
});



//promise.allSettled() - waits for all promises to settle (either resolve or reject) and returns an array of objects describing the outcome of each promise.
const promise4 = Promise.resolve(40);
const promise5 = Promise.reject("Promise 5 rejected");
const promise6 = Promise.resolve(60);

Promise.allSettled([promise4, promise5, promise6])
.then((results) => {
    console.log("Results from Promise.allSettled:", results);
})
.catch((error) => {
    console.log("Error in Promise.allSettled:", error);
}); 




//Promise.race() - waits for the first promise to resolve or reject and returns that result.
//ex:1
const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 2001));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 1000));

Promise.race([promiseA, promiseB])
.then((result) => {
    console.log("Result from Promise.race:", result);
})
.catch((error) => {
    console.log("Error in Promise.race:", error);
});

//ex:2
let fetchData = new Promise((resolve) =>
    setTimeout(() =>
        resolve("Data loaded"), 3000));
let timeout = new Promise((_, reject) =>
    setTimeout(() =>
        reject("Timeout!"), 2000));

Promise.race([fetchData, timeout])
    .then((result) =>
        console.log(result))
    .catch((error) =>
        console.error(error));

//promise.any() - waits for the first promise to resolve and returns that result. If all promises reject, it rejects with an AggregateError.

Promise.any([Promise.reject("Promise X rejected"),
             Promise.reject("Promise Y rejected"),
             Promise.resolve("Promise Z resolved")])

.then((result) => {
    console.log("Result from Promise.any:", result);
})
.catch((error) => {
    console.log("Error in Promise.any:", error);
});


//Promise.resolve() - returns a promise that is resolved with a given value.

Promise.resolve("This is a resolved promise")
.then((message) => {
    console.log("Message from Promise.resolve:", message);
});

//Promise.reject() - returns a promise that is rejected with a given reason.

Promise.reject("This is a rejected promise")
.catch((error) => {
    console.log("Error from Promise.reject:", error);
});


//promise.finally() - allows you to specify a callback that will be executed regardless of whether the promise is resolved or rejected.

Promise.resolve("Promise with finally")
.then((message) => {
    console.log("Message from Promise with finally:", message);
})
.finally(() => {
    console.log("Finnally will always execute regardless of the promise outcome");
});



//Promise chaining - allows you to chain multiple .then() calls together, where each .then() receives the result of the previous one.

function addTwo(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 2);
        }   , 1000);
    });
}

addTwo(5)
.then((result) => {
    console.log("Result after adding two:", result);
    return addTwo(result);      //input for the next .then() is the result of the previous .then()
})
.then((result) => {
    console.log("Result after adding two again:", result);
})
.catch((error) => {
    console.log("Error in promise chaining:", error);
});

//Linking Promises step by step using .then() is known as Promise Chaining.
//promise states=>pending, fulfilled, rejected

//ex:1
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

promise
.then((result) => {
    console.log("First then:", result); // 10
    return result * 2; // returns 20 to the next then
})
.then((result) => {
    console.log("Second then:", result); // 20
    return result + 5; // returns 25 to the next then
})
.then((result) => {
    console.log("Third then:", result); // 25
})
.catch((error) => {
    console.error("Error:", error);
});

//ex:2
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 1500);
    });
}

fetchData()
.then((message) => {
    console.log(message); // "Data fetched successfully"
    return "Processing data";
})
.then((message) => {
    console.log(message); // "Processing data"
    return "Data processed successfully";
})
.then((message) => {
    console.log(message); // "Data processed successfully"
})
.catch((error) => {
    console.error("Error:", error);
}); 
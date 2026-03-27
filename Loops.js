//Loops in JavaScript
console.log("Loops in JavaScript: for,for in,for each, while, do-while");

//1. For Loop
console.log("For Loop:");
for(let i=0; i<5; i++){
    console.log(i);
}


//1.1 For-In Loop
console.log("For-In Loop: used to iterate over the properties of an object");
const person = {name: "John", age: 30, city: "New York"};
for(let key in person){
    console.log(key + ": " + person[key]);
}


//1.2 For-Each Loop
console.log("For-Each Loop:");
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
});

fruits.forEach(function(fruit){
    console.log(fruit);
});




//2. While Loop
console.log("While Loop:");
let j=0;
while(j<5){
    console.log(j);
    j++;
}



//3. Do-While Loop
console.log("Do-While Loop:");
let k=0;
do{
    console.log(k);
    k++;
} while(k<5);
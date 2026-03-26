//DOM EXAMPLES
//1. Get element by ID

//2. Get element by class name

//3. Get element by tag name

//4. Query selector

//5. Create element

//6. Append child

//7. Remove child

//8. Set attribute

//9. Get attribute

//10. Inner HTML

//Example of get element by ID
console.log("Get element by ID");
var element1 = document.getElementById("example1");
console.log(element1);



//Example of get element by class name
console.log("Get element by class name");
var elements2 = document.getElementsByClassName("example2");
console.log(elements2);



//Example of get element by tag name
console.log("Get element by tag name");
var elements3 = document.getElementsByTagName("p");
console.log(elements3);



//Example of query selector
console.log("Query selector");
var element4 = document.querySelector(".example4");
console.log(element4);      



//querySelectorAll
console.log("Query selector all");
var elements4 = document.querySelectorAll(".example5");
console.log(elements4);



//Example of create element
console.log("Create element");
var newElement = document.createElement("div");
newElement.innerHTML = "This is a new div element.";
document.body.appendChild(newElement);



//Example of append child
console.log("Append child");
var parentElement = document.getElementById("parent");
var childElement = document.createElement("p");
childElement.innerHTML = "This is a child paragraph.";
parentElement.appendChild(childElement);



//Example of remove child
console.log("Remove child");
var parentElement2 = document.getElementById("parent1");
var childToRemove = document.getElementById("child");
parentElement2.removeChild(childToRemove);



//Example of set attribute
console.log("Set attribute");
var element5 = document.getElementById("example6");
element5.setAttribute("id", "newid1");



//Example of get attribute
console.log("Get attribute");
var classValue = element5.getAttribute("class");
console.log(classValue);



//Example of inner HTML
console.log("Inner HTML");
var element6 = document.getElementById("example9");
element6.innerHTML = "This is the new inner HTML content."; 
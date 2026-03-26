//DOM MANIPULATION

//Change the content of an element
function changeContent() {
console.log("Change the content of an element using innerhtml");
var changecontent = document.getElementById("changeContent");
changecontent.innerHTML = "Content changed!";

console.log("Change the content of an element using textContent");
var changecontent1 = document.getElementById("changeContent1");
changecontent1.textContent = "Text content changed!";

}


//Manipulate the class Attribute
//1. Add a class
function addClass() {
    console.log("Add a class to an element");
    var element = document.getElementById("idd");
    element.classList.add("newClass");
}

//2. Remove a class
function removeClass() {
    console.log("Remove a class from an element");
    var element = document.getElementById("idd");
    element.classList.remove("hello");
}

//3. Toggle a class
function toggleClass() {
    console.log("Toggle a class on an element");
    var element = document.getElementById("idd");
    element.classList.toggle("newClass");
}

//4. Check if an element has a class
function checkClass() {
    console.log("Check if an element has a class");
    var element = document.getElementById("idd");
    if (element.classList.contains("checkClass")) {
        console.log("Element has the class 'checkClass'");
    } else {
        console.log("Element does not have the class 'checkClass'");
    }
}




//setting styles
function setStyles() {
    console.log("Set styles on an element");
    var element = document.getElementById("styleElement").style.color = "red";
    element = document.getElementById("styleElement").style.fontSize = "20px";
    element = document.getElementById("styleElement").style.backgroundColor = "yellow";
}




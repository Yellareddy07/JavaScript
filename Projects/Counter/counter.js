
let count = 0;

function inc(){
    count++;
    if(count > 10){
        alert("Counter cannot be greater than 10");
        count = 10;
    }
    document.getElementById("counter").innerHTML = count;
}

function dec(){
    count--;
    if(count < 0){
        alert("Counter cannot be less than 0");
        count = 0;
    }
    document.getElementById("counter").innerHTML = count;
}

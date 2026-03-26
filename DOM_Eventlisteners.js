let event2=document.querySelector('.event1');
    event2.addEventListener('click',function(e){
    console.log("Event listener added to the element");
    event2.innerHTML="Event Triggered!";
    event2.style.color="red";
});



let event3=document.querySelector('.event2');
event3.addEventListener('keydown',function(e){
    console.log("Keydown event triggered");
    event3.style.backgroundColor="blue";
});



let event4=document.querySelector('.event2');
event4.addEventListener('keyup',function(e){
    console.log("Keyup event triggered");
    event4.style.backgroundColor="red";
});


let event5=document.querySelector('.event2');
event5.addEventListener('mouseover',function(e){
    console.log("Mouseover event triggered");
    event5.style.backgroundColor="yellow";
});


let event6=document.querySelector('.event2');
event6.addEventListener('keypress',function(e){
    console.log("Keypress event triggered");
    event6.style.backgroundColor="green";
});
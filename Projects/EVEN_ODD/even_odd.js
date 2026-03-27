function CheckEvenOdd() {
    var number = document.getElementById("number").value;
    var result = document.getElementById("result");

    number = parseInt(number);

    if (isNaN(number)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    if (number % 2 === 0) {
        result.textContent = number + " is an even number.";
    } else {
        result.textContent = number + " is an odd number.";
    }
}


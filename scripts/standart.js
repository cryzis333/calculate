let step = true;
let result = 0.0;
let operator = "+";
let res = 0.0;
let userInput = document.getElementById("userInput");
let knopka = document.getElementById("knopka");

function switchStep() {
    step = !step;
}

function mathematics() {
    if (operator == "+") {
        result = result + res
    } else if (operator == "-") {
        result = result - res
    } else if (operator == "*") {
        result = result * res
    } else if (operator == "/" || operator == ":") {
        result = result / res
    } else {
        console.log("thats is not operator dolbaeb")
    }
}


knopka.onclick = function () {
    userInput = isNaN(Number(userInput.value));

    if (step == true) {
        res = userInput;
        mathematics()
        switchStep()
    } else if (step = false) {
        operator = userInput; // пометка перенести сюда проверку
        switchStep()
    } else {
        console.log("error")
    }
}
let step = true;
let result = 0.0;
let operator = "";
let res = 0.0;
let userInput = document.getElementById("userInput").value;
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
    } else if (operator == "/" && ":") {
        result = result / res
    } else {
        console.log("thats is not operator dolbaeb")
    }
}


knopka.onclick = function () {
    if (step = true) {
        if (userInput == Number) {
            res = userInput;
            mathematics()
            switchStep()
        } else {
            console.log("thats is not number dolbaeb")
        }
    } else if (step = false) {
        operator = userInput; // пометка перенести сюда проверку
        switchStep()
    } else {
        console.log("error")
    }
}
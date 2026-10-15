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
    userInput = Number(userInput.value);
    value = isNaN(userInput);
    if (value === true) {

        if (step == true) {
            res = userInput;
            mathematics()
            switchStep()
        } else if (step == false) {
            if (operator === "/" || ":" || "*" || "-" || "+") {
            operator = userInput; // пометка перенести сюда проверку
            switchStep()
        } else {
            console.log("error")
        }
        } else {
            console.log("that not operator < O P E R A T O R > you know?")
        }
    } else {
        console.log("error it isn't number");
    }
}
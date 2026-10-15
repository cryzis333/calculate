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
    userInputTest = Number(userInput.value);
    let value = isNaN(userInputTest);
        if (step == true) {
            if (value === true) {
            res = userInput;
            mathematics()
            switchStep()
        }
    }
         else if (step == false) {
        if (operator === "/" || ":" || "*" || "-" || "+") {
            operator = userInput; // пометка перенести сюда проверку
            switchStep()
        } else {
            console.log("error")
        }
    } else {
        console.log("that not operator < O P E R A T O R > you know?")
    }
}
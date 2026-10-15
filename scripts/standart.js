let step = true;
let result = 0.0;
let operator = "+";
let res = 0.0;
let userInput = document.getElementById("userInput");
let knopka = document.getElementById("knopka");

let userFOutput = document.getElementById("firstOutput");
let userOutput = document.getElementById("operOutput");
let userTOutput = document.getElementById("twoOutput");

userInput.focus();

function switchStep() {
    step = !step;
    if (step) {
        userInput.placeholder = "Input number";
    } else {
        userInput.placeholder = "Input operator: + - * /"
    }
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
    userInput.value = "";
    userFOutput.value = "";
    userFOutput.textContent = result;
}

function confirm() {
    if (userInput.value === "") return;
    let userInputTest = Number(userInput.value);
    let value = isNaN(userInputTest);
    if (step == true) {
        if (value === false) {
            res = userInputTest;
            mathematics()
            switchStep()
            userOutput.textContent = "";      
        }
    }
    else if (step == false) {
        if (userInput.value === "/" || userInput.value === ":" || userInput.value === "*" || userInput.value === "-" || userInput.value === "+") {
            operator = userInput.value;
            switchStep()
            userInput.value = "";
            userOutput.textContent = operator;
        } else {
            console.log("error")
        }
    } else {
        console.log("that not operator < O P E R A T O R > you know?")
    }
    userInput.focus();
}

knopka.onclick = confirm;


userInput.onkeydown = function (event) {
    if (event.key === "Enter") {
        knopka.click(); 
    }
};

document.onkeydown = function () {
    userInput.focus();
};
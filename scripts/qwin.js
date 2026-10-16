import { create, all } from "https://cdn.jsdelivr.net/npm/mathjs@15.2.0/+esm";
const math = create(all, { number: "BigNumber", precision: 32 });
console.log(math.add(math.bignumber("0.1"), math.bignumber("0.2")).toString());

const qwinMode = document.getElementById("qwinMode");
const qwinValue = document.getElementById("qwinValue");
const qwinExpression = document.getElementById("qwinExpression");

let current = "0";
let previous = null;
let operator = null;
let startNew = false; // true = следующая цифра начинает новое число

function render() {
    qwinValue.textContent = current;
}

function press(key) {
    console.log("нажали:", key);
    if ("0123456789".includes(key)) {
        if (startNew) {
            current = key;
            startNew = false;
        } else if (current === "0") {
            current = key;
        } else {
            current = current + key;
        }
    } else if (key === ".") {
        if (startNew) {
            current = "0.";
            startNew = false;
        } else if (!current.includes(".")) {
            current = current + "."
        }
    } else if ("+-*/".includes(key)) {
        previous = current;
        operator = key;
        startNew = true;
        qwinExpression.textContent = previous + " " + operator;
    } else if (key === "=" || key === "Enter") {
        if (operator !== null) {
            qwinExpression.textContent = previous + " " + operator + " " + current + " ="
            current = calculate(previous, operator, current)
            previous = null
            operator = null
            startNew = true
        }
    } else if (key == "Escape") {
        current = "0";
        previous = null;
        operator = null;
        startNew = false;
        qwinExpression.textContent = ""
    } else if (key == "Backspace") {
        current = current.slice(0, -1);
        if (current.length === 0) {
            current = "0";
        }
    }
    render();
}

document.addEventListener("keydown", function (event) {
    if (qwinMode.hidden) {
        return;
    }
    press(event.key)
});

function calculate(a, operator, b) {
    return math.evaluate(`${a} ${operator} ${b}`).toString();
}
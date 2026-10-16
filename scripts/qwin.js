const qwinMode = document.getElementById("qwinMode");
const qwinValue = document.getElementById("qwinValue");
const qwinExpression = document.getElementById("qwinExpression");

let current = "0";

function render() {
    qwinValue.textContent = current;
}

function press(key) {
    console.log("нажали:", key);
    if ("0123456789".includes(key)) {
        if (current === "0") {
            current = key;
        } else {
            current = current + key;
        }
    } else if (key === ".") {
        if (!current.includes(".")) {
            current = current + "."
        }
    } else if (key == "Escape") {
        current = "0";
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
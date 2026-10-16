const qwinMode = document.getElementById("qwinMode");
const qwinValue = document.getElementById("qwinValue");
const qwinExpression = document.getElementById("qwinExpression");

let current = "0";

function render() {
    qwinValue.textContent = current;
}

function press(key) {
    console.log("нажали:", key);
    render();
    if ("0123456789".includes(key)) {
        if (current === "0") {
            current = key;
        } else {
            current = current + key;
        }
    render();
    } else if (key === ".") {
        if (!current.includes(".")) {
            current = current + "."
        }
    render();
    }
}

document.addEventListener("keydown", function (event) {

});
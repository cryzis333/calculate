const qwinMode = document.getElementById("qwinMode");
const qwinValue = document.getElementById("qwinValue");
const qwinExpression = document.getElementById("qwinExpression");

let current = "0";

function render() {
    qwinValue.value = "";
    qwinValue.textContent = current;
}

function press(key) {
    console.log("нажали:", key);
    render();
    if (key == "0123456789".includes(key)) {
        if (current === 0) {
            current = key;
        } else {
            current = current + key;
        }
    render();
    } else if (key === ".") {
        if (current.includes(".")) {
            current = "."
        }
    }
}

document.addEventListener("keydown", function (event) {

});
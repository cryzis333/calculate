
let mode = document.getElementById("mode");
let btnMode = document.getElementById("btnMode");

let modeMenu = document.getElementById("modeMenu");

let standart = document.getElementById("standart");
let qwin = document.getElementById("qwin");
let hueta = document.getElementById("hueta");

let standartMode = document.getElementById("standartMode");
let qwinMode = document.getElementById("qwinMode");
let huetaMode = document.getElementById("huetaMode");

btnMode.onclick = function () {
    modeMenu.hidden = !modeMenu.hidden;
};

function showMode(section) {
    standartMode.hidden = true;
    qwinMode.hidden = true;
    huetaMode.hidden = true;

    section.hidden = false;
    modeMenu.hidden = true;
}




standart.onclick = function () {
    showMode(standartMode);
}

qwin.onclick = function () {
    showMode(qwinMode);
}

hueta.onclick = function () {
    showMode(huetaMode);
}


let mode = document.getElementById("mode");
let btnMode = document.getElementById("btnMode");

let modeMenu = document.getElementById("modeMenu");

let standart = document.getElementById("standart");
let qwin = document.getElementById("qwin");
let hueta = document.getElementById("hueta");

btnMode.onclick = function () {
    modeMenu.hidden = !modeMenu.hidden;
};

standart.onclick = function () {
    let standartMode = document.getElementById("standartMode")
    standartMode.hidden = !standartMode.hidden;
}

qwin.onclick = function () {
    let qwinMode = document.getElementById("qwinMode")
    qwinMode.hidden = !qwinMode.hidden;
}

hueta.onclick = function () {
    let huetaMode = document.getElementById("huetaMode")
    huetaMode.hidden = !huetaMode.hidden;
}

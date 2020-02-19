let rules = document.getElementById("rulesButton")

let play = document.getElementById("playButton");

let back = document.getElementById("backButton");

let blueSelect = document.getElementById('blueSelect');

let redSelect = document.getElementById('redSelect');

let blue = true;

let titleScreen = document.getElementById("titleScreen");
let rulesScreen = document.getElementById("rulesScreen");
let selectScreen = document.getElementById("selectScreen");
let gameScreen = document.getElementById("gameScreen");

rules.onclick = () => {
    titleScreen.style.visibility = 'hidden';
    rulesScreen.style.visibility = 'visible';
}
back.onclick = () => {
    titleScreen.style.visibility = 'visible';
    rulesScreen.style.visibility = 'hidden';
}
play.onclick = () => {
    selectScreen.style.visibility = 'visible';
    titleScreen.style.visibility = 'hidden';
}

blueSelect.onclick = () => {
    selectScreen.style.visibility = 'hidden';
    gameScreen.style.visibility = 'visible';
}

redSelect.onclick = () => {
    selectScreen.style.visibility = 'hidden';
    gameScreen.style.visibility = 'visible';
}
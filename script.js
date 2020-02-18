let rules = document.getElementById("rulesButton")

let play = document.getElementById("playButton");

let back = document.getElementById("backButton");

let titleScreen = document.getElementById("titleScreen");
let rulesScreen = document.getElementById("rulesScreen");
let playScreen = document.getElementById("playScreen")

rules.onclick = () => { 
    titleScreen.style.visibility = 'hidden';
    rulesScreen.style.visibility = 'visible';
}
 back.onclick = () => {
    titleScreen.style.visibility = 'visible';
    rulesScreen.style.visibility = 'hidden';
 }
 play.onclick = () => {
     playScreen.style.visibility = 'visible';
     titleScreen.style.visibility = 'hidden';
 }

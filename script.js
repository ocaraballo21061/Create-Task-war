let rules = document.getElementById("rulesButton")

let play = document.getElementById("playButton");

let back = document.getElementById("backButton");

let blueSelect = document.getElementById('blueSelect');

let redSelect = document.getElementById('redSelect');

let p1deck = document.getElementById('p1deck');

let p2deck = document.getElementById('p2deck')

let p1slot = document.getElementById('p1slot');

let p2slot = document.getElementById('p2slot');

let score1 = document.getElementById('score1');

let score2 = document.getElementById('score2');

let warButton = document.getElementById('warButton');

let startButton = document.getElementById('startButton')

let p1score = 0;

let p2score = 0;

let p1num;

let p2num;

let p1 = false;

let p2 = false;

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
    p1deck.style.backgroundImage = "url('images/blue_back.png')";
    p2deck.style.backgroundImage = "url('images/red_back.png')";
}

redSelect.onclick = () => {
    selectScreen.style.visibility = 'hidden';
    gameScreen.style.visibility = 'visible';
    p1deck.style.backgroundImage = "url('images/red_back.png')";
    p2deck.style.backgroundImage = "url('images/blue_back.png')";
}

startButton.onclick = () => {
    startButton.style.visibility = 'hidden';
    setGame();
pickWinner();
updateScore();
}




function generateRandomCard() {
    p1num = Math.ceil(Math.random() * 13 + 1);

    p2num = Math.ceil(Math.random() * 13 + 1);
}

function player1Card() {
    if (p1num == 2) {
        p1slot.style.backgroundImage = "url('images/2S.png')";
    }
    else if (p1num == 3) {
        p1slot.style.backgroundImage = "url('images/3S.png')";
    }
    else if (p1num == 4) {
        p1slot.style.backgroundImage = "url('images/4S.png')";
    }
    else if (p1num == 5) {
        p1slot.style.backgroundImage = "url('images/5S.png')";
    }
    else if (p1num == 6) {
        p1slot.style.backgroundImage = "url('images/6S.png')";
    }
    else if (p1num == 7) {
        p1slot.style.backgroundImage = "url('images/7S.png')";
    }
    else if (p1num == 8) {
        p1slot.style.backgroundImage = "url('images/8S.png')";
    }
    else if (p1num == 9) {
        p1slot.style.backgroundImage = "url('images/9S.png')";
    }
    else if (p1num == 10) {
        p1slot.style.backgroundImage = "url('images/10S.png')";;
    }
    else if (p1num == 11) {
        p1slot.style.backgroundImage = "url('images/JS.png')";
    }
    else if (p1num == 12) {
        p1slot.style.backgroundImage = "url('images/QS.png')";
    }
    else if (p1num == 13) {
        p1slot.style.backgroundImage = "url('images/KS.png')";
    }
    else if (p1num == 14) {
        p1slot.style.backgroundImage = "url('images/AS.png')";
    }

}
function player2Card() {
    if (p2num == 2) {
        p2slot.style.backgroundImage = "url('images/2H.png')";
    }
    else if (p2num == 3) {
        p2slot.style.backgroundImage = "url('images/3H.png')";
    }
    else if (p2num == 4) {
        p2slot.style.backgroundImage = "url('images/4H.png')";
    }
    else if (p2num == 5) {
        p2slot.style.backgroundImage = "url('images/5H.png')";
    }
    else if (p2num == 6) {
        p2slot.style.backgroundImage = "url('images/6H.png')";
    }
    else if (p2num == 7) {
        p2slot.style.backgroundImage = "url('images/7H.png')";
    }
    else if (p2num == 8) {
        p2slot.style.backgroundImage = "url('images/8H.png')";
    }
    else if (p2num == 9) {
        p2slot.style.backgroundImage = "url('images/9H.png')";
    }
    else if (p2num == 10) {
        p2slot.style.backgroundImage = "url('images/10H.png')";;
    }
    else if (p2num == 11) {
        p2slot.style.backgroundImage = "url('images/JH.png')";
    }
    else if (p2num == 12) {
        p2slot.style.backgroundImage = "url('images/QH.png')";
    }
    else if (p2num == 13) {
        p2slot.style.backgroundImage = "url('images/KH.png')";
    }
    else if (p2num == 14) {
        p2slot.style.backgroundImage = "url('images/AH.png')";
    }
}

function setGame() {
    generateRandomCard();
    player1Card();
    player2Card();
    
}
function endGame() {
if ( p1score = 10){
    gameScreen.style.visibility = 'hidden';
    p1screen.style.visibility = 'visible';
}
else{
    gameScreen.style.visibility = 'hidden';
    p2screen.style.visibility = 'visible'
}
}
function updateScore() {
    score1.innerHTML = p1score;
    score2.innerHTML = p2score;
}
function pickWinner(){
    if (p1num > p2num){
        p1slot.classList.add('winner');
        p2slot.classList.remove('winner');
    }
    else if (p1num < p2num) {
        p2slot.classList.add('winner');
        p1slot.classList.remove('winner');
    }
    else if (p1num = p2num){
        p1slot.classList.remove('winner');
        p2slot.classList.remove('winner');
    }
}

p1deck.onclick = () => {
    if (p1num > p2num) {
        p1score++;
        setGame();
        pickWinner();
        updateScore();
    }
    else if (p1num < p2num) {
        p2score++;
        setGame();
        pickWinner();
        updateScore();
    }
    else if (p1num = p2num) {
        warButton.style.visibility = 'visible';

      
    }
}
// Next time you code try to make a function that checks for a winner rather than having the onclick do it.
warButton.onclick = () => {
    setGame();
        pickWinner();
        updateScore();
        warButton.style.visibility = 'hidden';

    if (p1num > p2num) {
        p1score = p1score + 2;
        updateScore();
    }
    else if (p1num < p2num) {
        p2score = p2score + 2;
        updateScore();
    }
}


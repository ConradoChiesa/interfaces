let boy = document.getElementById('boy');
let coin = document.getElementById('coin');
let coins = new Number();
let timer = new Number();
let startView = document.getElementById('startView');
let time = document.getElementById('time');
let score = document.getElementById('score');
document.addEventListener("DOMContentLoaded", start);

function start() {
    let btnPlay = document.getElementById("play");
    let btnExit = document.getElementById("exit");
    btnPlay.addEventListener("click", startGame);
}

function startGame() {
    timer = 5;
    document.addEventListener("keydown", handleKeyDown);
    startView.className = "hidden";
    var countDown = setInterval( () => {
        let txtTime = "Tiempo: " + timer;
        let txtScore =  "Monedas: " + coins;
        time.innerHTML = txtTime;
        score.innerHTML = txtScore;
        if (timer > 0) {
            timer--;
            console.log(timer);
        } else {
            finishGame();
            clearInterval(countDown);
        }
    }, 1000);
}

function finishGame() {
    console.log("finish");
    document.removeEventListener("keydown", handleKeyDown);
    startView.className = "startView";
}

function handleKeyDown(e) {
    if (e.keyCode == 38) {
        boy.className = "boyJump";
        setTimeout( () => { 
            boy.className = "boyRun";
        }, 600);
        detectarColision()
    }
}

function detectarColision(){
    setTimeout( () => {
        let a_pos = 
            {   t: boy.getBoundingClientRect().top, 
                l: boy.getBoundingClientRect().left, 
                r: boy.getBoundingClientRect().left + boy.getBoundingClientRect().width, 
                b: boy.getBoundingClientRect().top + boy.getBoundingClientRect().height
            };
        let b_pos = 
            {   t: coin.getBoundingClientRect().top, 
                l: coin.getBoundingClientRect().left, 
                r: coin.getBoundingClientRect().left + coin.getBoundingClientRect().width, 
                b: coin.getBoundingClientRect().top + coin.getBoundingClientRect().height
            };
        if(a_pos.l <= b_pos.r && a_pos.r >= b_pos.l 
        && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b ) {
                colision()
                playSound()
        }
    }, 300);   
}

function playSound() {
    let audio = {};
    audio["bien"] = new Audio();
    audio["bien"].src = "js/sound/buenaViejo.mp4";
    audio["bien"].play();
}

function colision() {
    coins += 1;
    timer = timer + 3;
    console.log(coins);
    coin.className = "hidden";
    setTimeout( () => {
        coin.className = "coin";
    }, 900);
}
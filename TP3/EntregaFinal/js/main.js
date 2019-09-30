document.addEventListener("DOMContentLoaded", start);
const gameTime = 20;
let coins = new Number();
let remainingTime = new Number();
let boy = document.getElementById('boy');
let coin = document.getElementById('coin');
let coinContainer = document.getElementById('coin-container');
let startView = document.getElementById('startView');
let time = document.getElementById('time');
let score = document.getElementById('score');
let finish = true;
let jumping = false;
let firstPosY = boy.getBoundingClientRect().top;
let now, dt, last, startJump, coinManegerTime = timestamp();
let raf; // requestAnimationFrame


function start() {
    coin.className = "hidden";
    coinContainer.className = "hidden";
    let btnPlay = document.getElementById("play");
    let btnExit = document.getElementById("exit");
    btnPlay.addEventListener("click", startGame);
    btnExit.addEventListener("click", handleExitGame)
}

function update() {
    if (remainingTime > 0) {
        remainingTime--;
        detectarColision()
    } else {
        finish = true;
    }
    if (boy.getBoundingClientRect().top != firstPosY && timestamp() > startJump + 600)
    jumping = false;
    coinManager();
}

function render(raf) {
    if (jumping)
        boy.className = "boyJump";
    else
        boy.className = "boyRun";
    let txtTime = Math.round(remainingTime / 60);
    let txtScore = "Monedas: " + coins;
    time.innerHTML = txtTime;
    score.innerHTML = txtScore;
    if(finish) finishGame(raf);
}

function gameLoop() {
    raf = window.requestAnimationFrame(gameLoop);
    now = timestamp();
    dt = (now - last) / 1000;
    update();
    render(raf);
    last = now;
}


function startGame() {
    remainingTime = gameTime * 60;
    coins = 0;
    document.addEventListener("keydown", handleKeyDown);
    startView.className = "hidden";
    finish = false;
    raf = window.requestAnimationFrame(gameLoop);
}

function finishGame(raf) {
    cancelAnimationFrame(raf);
    document.removeEventListener("keydown", handleKeyDown);
    startView.className = "startView";
}

function handleKeyDown(e) {
    if (e.keyCode == 38) {
        jumping = true;
        startJump = timestamp();
    }
}

function detectarColision(){
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
        }
}

function playSound() {
    let audio = {};
    audio["bien"] = new Audio();
    audio["bien"].src = "js/sound/buenaViejo.mp4";
    audio["bien"].play();
}


function colision(){
    coins += 1;
    remainingTime = remainingTime + 3 * 60;
    playSound()
    coin.className = "hidden";
    coinContainer.className = "hidden";
    coinManegerTime = timestamp();
}

function coinManager() {
    if (coinManegerTime + 4000 < timestamp() && coin.className == "hidden"  ) {
        coin.className = "coin";
        coinContainer.className = "coin-container";
    }

}
function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

// La idea es que esta función te deribe a la pagina que te genero el error 404

function handleExitGame() { location.href = "https://www.google.com/"; }
let boy = document.getElementById('boy');
let coin = document.getElementById('coin');
let coins = new Number();
document.addEventListener("DOMContentLoaded", () => {
    // startView(); // hacer
document.addEventListener("keydown", handleKeyDown); // sacar
});

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
    
        //Detecta si se superponen las áreas
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
    // audio["bien"].src = "./css/sound/Bienboludo.wma"
    // audio["bien"].addEventListener('load', () => {
        audio["bien"].play();
        
// });
}
function colision() {
    coins += 1;
    console.log(coins);
    coin.className = "hidden";
    setTimeout( () => {
    coin.className = "coin";
    }, 900);
}
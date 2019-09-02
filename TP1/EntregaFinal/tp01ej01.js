document.addEventListener('DOMContentLoaded', load());

function load() {
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

    ctx.font = "bold 22px sans-serif";
    ctx.fillText("Resultados en consola",20,20);
    let matriz = [];
    let w = 10;
    let h = 10;
    for(let i = 0; i < w; i++) {
        matriz[i] = [];
        for(let j = 0; j < h; j++){
            matriz[i][j] = Math.floor(Math.random() * 1001);
        }
    }
console.table(matriz);
getMax(matriz);
getMaxParMinInpar(matriz);
}   

function getMax(matriz) {
    let aux = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (aux < matriz[i][j]) {
                aux = matriz[i][j];
            }
            
        }
    }
    console.log("El número más alto de la matriz es " + aux);
}

function getMaxParMinInpar(matriz) {
    let min = 9999999999;
    let max = -9999999999;
    for (let i = 0; i < matriz.length; i+=2) {
        for (let j = 0; j < matriz.length; j++) {
            if (max < matriz[i][j]) 
                max = matriz[i][j];
        }
    }
    for (let i = 1; i < matriz.length; i+=2) {
        for (let j = 0; j < matriz.length; j++) {
            if (min > matriz[i][j]) 
                min = matriz[i][j];
        }
    }
    console.log("El máximo encontrado en las filas pares fue " + max);
    console.log("El mínimo encontrado en las filas impares fue " + min);
}


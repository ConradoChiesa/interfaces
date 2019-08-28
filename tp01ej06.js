let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let img01 = new Image();
let imgData = img01.data;
img01.src = "/home/konrad/Documentos/Interfaces/Aguila.jpg";
img01.onload = function() {
    ctx.drawImage(img01, 0, 0);
}
apliFilter(img01);

function apliFilter(img01){

    var imgToGray = ctx.getImageData(0, 0, width, height);
    let data1 = imgToGray.data;
    
    for (let i = 0; i < data1.length; i += 4) {
        let gris = parseInt((data1[i] + data1[i + 1] + data1[i + 2]) / 3);
        data1[i] = gris;
        data1[i + 1] = gris;
        data1[i + 2] = gris;
        data1[i + 3] = 255;
    }
    
    img01.onload = function() {
        //ctx.drawImage(img01, 0, 0);
        //ctx.putImageData(imgToGray,0,0);
        
    }
}
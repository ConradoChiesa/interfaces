const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let img01 = new Image();
let imgData = img01.data;
img01.src = "/home/konrad/Documentos/Interfaces/Aguila.jpg";
img01.onload = function() {
    ctx.drawImage(img01, 0, 0);
}
let imgToGray = ctx.getImageData(0, 0, canvas.Width, canvas.height);
let data1 = imgToGray.data;

for (let i = 0; i < data1.length; i++) {
    let gris = parseInt((data1[i] + data1[i + 1] + data1[i + 2]) / 3);
    data1[i] = gris;
    data1[i + 1] = gris;
    data1[i + 2] = gris;
}

img01.onload = function() {
    ctx.putImageData(imgToGray,0,0);

    ctx.drawImage(img01, 0, 0);
}
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

    let imgToGray = ctx.getImageData(0, 0, width, height);
    let data1 = imgToGray.data;
    
    for (let i = 0; i < imgToGray.height; i ++) {
        for (let j = 0; j < imgToGray.width; j++) {
                        
            let r = getRed(imgToGray, i, j);
            let g = getGreen(imgToGray, i, j);
            let b = getBlue(imgToGray, i, j);

            let gris = (r + g + b) / 3;
            //setPixel(imgTogray, r, g, b);
            imgToGray.data[i] = gris;
            imgToGray.data[i + 1] = gris;
            imgToGray.data[i + 2] = gris;
            imgToGray.data[i + 3] = 255;
        }
    }
    function getRed(imgToGray, x, y) {
        let index = (x + y * imgToGray.width) * 4;
        return imgToGray.data[index+0];
    }
    
    function getGreen(imgToGray, x, y) {
        let index = (x + y * imgToGray.width) * 4;
        return imgToGray.data[index+1];
    }
    
    function getBlue(imgToGray, x, y) {
        let index = (x + y * imgToGray.width) * 4;
        return imgToGray.data[index+2];
    }

    img01.onload = function() {
        ctx.drawImage(img01, 0, 0);
        ctx.putImageData(imgToGray,0,0);
        
    }
}
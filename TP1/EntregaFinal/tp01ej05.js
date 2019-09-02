let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let h = canvas.clientHeight;
let w = canvas.clientWidth;
let degrade = ctx.createImageData(w, h);

for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        let ancho = (j/w);
        setPixel(degrade, j, i, ancho);
    }
}

ctx.putImageData(degrade, 0, 0);

function setPixel(degrade, i, j, ancho) {
    if (ancho < 0.5) {
        let r = ancho*255;
        let g = ancho*255;
        let b = 0;
        let index = (i + j * degrade.width) * 4;
        degrade.data[index] = r;
        degrade.data[index+1] = g;
        degrade.data[index+2] = b;
        degrade.data[index+3] = 255;    
    } else {
        let r = ancho*255;
        let g = 255 - (ancho*255);
        let b = 0;
        let index = (i + j * degrade.width) * 4;
        degrade.data[index] = r;
        degrade.data[index+1] = g;
        degrade.data[index+2] = b;
        degrade.data[index+3] = 255;
    }
}
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let h = canvas.clientHeight;
let w = canvas.clientWidth;
let degrade = ctx.createImageData(w, h);
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            let ancho = (j/w);
            setPixel(j, i, ancho);
        }
    }
    ctx.putImageData(degrade, 0, 0);
});

function setPixel(i, j, ancho) {
    let r;
    let g;
    let b;
    let a;
    if (ancho < 0.5) {
        r = ancho*255;
        g = ancho*255;
        b = 0;
        a = 255;
        setearColor(r, g, b, a, i, j);
    } else {
        r = ancho*255;
        g = 255 - (ancho*255);
        b = 0;
        a = 255;
        setearColor(r, g, b, a, i, j);
    }
}

function setearColor(r, g, b, a, i, j) {
    let index = (i + j * degrade.width) * 4;
    degrade.data[index] = r;
    degrade.data[index+1] = g;
    degrade.data[index+2] = b;
    degrade.data[index+3] = a;
}
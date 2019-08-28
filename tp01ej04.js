let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let h = 300;
var degrade = ctx.createImageData(h, h);



for (let i = 0; i < degrade.width; i++) {
    for (let j = 0; j < degrade.height; j++) {
        let color = (j/h)*255;
        setPixel(degrade, i, j, color);
    }
}
ctx.putImageData(degrade, 0, 0);
function setPixel(degrade, i, j, color) {
    let index = (i + j * degrade.width) * 4;
    degrade.data[index] = color;
    degrade.data[index+1] = color;
    degrade.data[index+2] = color;
    degrade.data[index+3] = 255;
}

// let degrade = ctx.createLinearGradient(0,0,0,300);
// degrade.addColorStop(0, "#000000");
// degrade.addColorStop(1, "#FFFFFF");
// ctx.fillStyle = degrade;
// ctx.fillRect(50, 50, 250, 350);
// ctx.strokeStyle = "#00FF00";
// ctx.lineWidth = 5;
// ctx.strokeRect(50, 50, 250, 350);

// color = (j/h)*255 donde J es el segundo for y H el alto de la imagen

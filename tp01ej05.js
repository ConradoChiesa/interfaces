let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let h = 800;
let degrade = ctx.createImageData(500, h);



for (let i = 0; i < degrade.width; i++) {
    for (let j = 0; j < degrade.height; j++) {
        let altura = (j/h);
        setPixel(degrade, i, j, altura);
    }
}
ctx.putImageData(degrade, 50, 30);

function setPixel(degrade, i, j, altura) {
    if (altura < 0.5) {
        let rg = altura*255;
        let index = (i + j * degrade.width) * 4;
        degrade.data[index] = rg;
        degrade.data[index+1] = rg;
        degrade.data[index+2] = 0;
        degrade.data[index+3] = 255;    
    } else {
        let r = altura*255;
        let g = 255-(altura*255);
        let index = (i + j * degrade.width) * 4;
        degrade.data[index] = r;
        degrade.data[index+1] = g;
        degrade.data[index+2] = 0;
        degrade.data[index+3] = 255; 
    }

}
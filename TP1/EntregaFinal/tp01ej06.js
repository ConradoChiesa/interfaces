document.addEventListener('DOMContentLoaded', load());
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;



function load() {
    
    let img01 = new Image();
    let btn = document.getElementById("filtro01");

    btn.addEventListener("click", function() {
        apliFilter();
    });

    img01.src = "einstein.jpeg";
    img01.onload = function() {
        ctx.drawImage(img01, 0, 0);
    }
}

function apliFilter(){
    let img = new Image();
    let imgData;
    img.src = "einstein.jpeg";
    img.onload = function() {
        ctx.drawImage(this, 0, 0);
        imgData = ctx.getImageData(0, 0, this.width, this.height);
        for (let i = 0; i < img.width; i ++) {
            for (let j = 0; j < img.height; j++) {
                
                let r = getRed(imgData, i, j);
                let g = getGreen(imgData, i, j);
                let b = getBlue(imgData, i, j);
                setPixel(imgData, i, j, r, g, b);
                
            }
        }
        ctx.putImageData(imgData,0,0);
        
    }    
    function setPixel(imgToGray, x, y, r, g, b) {
        let i = (x + y * imgToGray.width) * 4;
        let gris = (r + g + b) / 3;
        imgToGray.data[i] = gris;
        imgToGray.data[i + 1] = gris;
        imgToGray.data[i + 2] = gris;
        imgToGray.data[i + 3] = 255;
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

}
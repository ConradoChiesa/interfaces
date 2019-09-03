let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let imgsrc = 'einstein.jpeg';
// let imgsrc = 'aguila.jpg';
document.addEventListener('DOMContentLoaded', () => {
    let btn1 = document.getElementById("cleaner");
    let btn2 = document.getElementById("filtro01");
    let btn3 = document.getElementById("filtro02");
    btn1.addEventListener("click", () => clean());
    btn2.addEventListener("click", () => apliFilterGris());
    btn3.addEventListener("click", () => apliFilterSepia());
    clean();
});

function apliFilterGris() {
    let id = 01;
    apliFilter(id);
}

function apliFilterSepia() {
    let id = 02;
    apliFilter(id);
}

function apliFilter(id) {
    let img = new Image();
    img.src = imgsrc;
    img.onload = function() {
        ctx.drawImage(this, 0, 0);
        let imgData = ctx.getImageData(0, 0, this.width, this.height);
        for (let i = 0; i < img.width; i ++) {
            for (let j = 0; j < img.height; j++) {
                let r = getBasePixelColor(imgData, i, j, 0);
                let g = getBasePixelColor(imgData, i, j, 1);
                let b = getBasePixelColor(imgData, i, j, 2);
                setPixel(id, imgData, i, j, r, g, b);
            }
        }
        ctx.putImageData(imgData,0,0);
    }
}

function getBasePixelColor(img, x, y, index) { //index representa R, G, B o A; 0, 1, 2, 3 respectivamente
    return img.data[(x + y * img.width) * 4 + index];
}

function clean() {
    let img = new Image();
    img.src = imgsrc;
    img.onload = () => ctx.drawImage(img, 0, 0);
}

function setPixel(id, img, x, y, r, g, b) {
    let i = (x + y * img.width) * 4;
    let base = (r + g + b) / 3;
    if (id == 01) {
        img.data[i] = base;
        img.data[i + 1] = base;
        img.data[i + 2] = base;
        img.data[i + 3] = 255; 
    }
    else if (id == 02) {
        img.data[i] = base;
        img.data[i + 1] = base-30;
        img.data[i + 2] = 50;
        img.data[i + 3] = 255;
    }
}
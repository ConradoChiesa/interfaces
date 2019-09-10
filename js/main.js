let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let btnClose = document.getElementById("closePoligon");
let btnClean = document.getElementById("clean");

let poligono = new Poligono();

document.addEventListener("DOMContentLoaded", () => {
    // 
    btnClean.addEventListener("click", handleBtnClean);
    btnClose.addEventListener("click", handleBtnClosePoligon);
    canvas.addEventListener("click", handleCanvasClick);
    
});

function handleCanvasClick(event){
    let x = new Number();
    let y = new Number();
    let color = "#FF0000";
    x = event.layerX;
    y = event.layerY;
    console.log("x: " + x + "  y: " + y);
    poligono.addCircle(x, y, color);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    poligono.draw();
}

function handleBtnClosePoligon() {
    poligono.close();
    poligono.calcCenter();
}

function handleBtnClean() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    poligono.clean();
}






// function createCircle(x, y) {
//     let radio = 10;
//     let color = "#FF0000";
//     let circle = new Circle(x, y, radio, color);
//     circle.drawCircle(ctx);
    
// }
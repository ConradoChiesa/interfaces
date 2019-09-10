let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let btnClose = document.getElementById("closePoligon");

let poligono = new Poligono();

document.addEventListener("DOMContentLoaded", () => {
    // 
   
    btnClose.addEventListener("click", handleBtnClosePoligon);
    canvas.addEventListener("click", handleCanvasClick);
    
});

function handleCanvasClick(event){
    let x = new Number();
    let y = new Number();
    x = event.layerX;
    y = event.layerY;
    console.log("x: " + x + "  y: " + y);
    poligono.addCircle(x, y);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    poligono.draw();
}

function handleBtnClosePoligon() {
        poligono.close();
}
function createCircle(x, y) {
    let radio = 10;
    let color = "#FF0000";
    let circle = new Circle(x, y, radio, color);
    circle.drawCircle(ctx);
    
}
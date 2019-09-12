let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let btnClose = document.getElementById("closePoligon");
let btnClean = document.getElementById("clean");
let poligonos = [];
let poligono = new Poligono();

document.addEventListener("DOMContentLoaded", () => {
    // 
    btnClean.addEventListener("click", handleBtnClean);
    btnClose.addEventListener("click", handleBtnClosePoligon);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("mousedown", handleCanvasMouseDown);
    document.addEventListener("keypress", handleKeyPress);
    canvas.addEventListener("dblclick", handleCanvasDbclick);
});

function handleCanvasClick(event) {
    let x = new Number();
    let y = new Number();
    let color = "#FF0000";
    x = event.layerX;
    y = event.layerY;
    console.log("x: " + x + "  y: " + y);
    if (!poligono.centerPoligon) {
        poligono.addCircle(x, y, color);
        reDraw();
    }
}

function reDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    poligono.draw();
    for (let i = 0; i < poligonos.length; i++) {
        const poligono = poligonos[i];
        poligono.draw();
        poligono.close()
        poligono.calcCenter();
        
    }
}

function handleBtnClosePoligon() {
    poligono.close();
    if (poligono.cerrado){
        poligono.calcCenter();
        poligonos.push(poligono);
        poligono = new Poligono();
    }
}

function handleBtnClean() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    poligono.clean();
    poligonos = [];
}

function handleCanvasMouseDown() {
    if (poligono.centerPoligon > 0) {
        alert("Vas bien petiso");
    }
}

function handleKeyPress(event) {
    let teclaPulsada = event.keyCode;
    if (teclaPulsada == 99) {
        console.log("Usted esta precionando la letra C");
    }
}

function handleCanvasDbclick() {
    console.log("doble click");
}

// function createCircle(x, y) {
//     let radio = 10;
//     let color = "#FF0000";
//     let circle = new Circle(x, y, radio, color);
//     circle.drawCircle(ctx);
    
// }

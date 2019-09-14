let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let btnClose = document.getElementById("closePoligon");
let btnClean = document.getElementById("clean");
let poligonos = [];
let active = false;
let poligono = new Poligono();
let mouseIsDown = false;
let pulsed = false;
let doubleClickThreshold = 50;  //ms
let lastClick = 0;
let isDragging = false;
let isDoubleClick = false;

document.addEventListener("DOMContentLoaded", () => {
    btnClean.addEventListener("click", handleBtnClean);
    btnClose.addEventListener("click", handleBtnClosePoligon);
    canvas.addEventListener("click", handleCanvasClick );
    canvas.addEventListener("dblclick", handleCanvasDblclick);
    document.addEventListener("keypress", handleKeyPress);
    canvas.addEventListener("wheel", handleCanvasWheel);
    document.addEventListener("keyup", () => { pulsed = false; });
    canvas.addEventListener("mousedown", () => { mouseIsDown = true; });
    canvas.addEventListener("mouseUp", () => {
        isDragging = false;
        mouseIsDown = false;
    });

    canvas.addEventListener("mousemove", () => {
    if (mouseIsDown) {
        isDragging = true;
    }
    });
      

});

function handleCanvasWheel() {
    if (pulsed) {
        // subir y bajar opacidad
    }
}

function handleCanvasClick() {
            
    let thisClick = new Date().getTime();
    var isDoubleClick = thisClick - lastClick < doubleClickThreshold;
    lastClick = thisClick;
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


function handleKeyPress(event) {
    let teclaPulsada = event.keyCode;
    if (teclaPulsada == 99) {
        pulsed = true;
        console.log("Usted esta precionando la letra C");
    }
}

function handleCanvasDblclick(event) {
    alert("Doble Click");
    let x = event.layerX;
    let y = event.layerY;
    for (let i = 0; i < poligonos.length; i++) {
        const poligono = poligonos[i];
        if (poligono[i].indice) {
            
        }
    }
}

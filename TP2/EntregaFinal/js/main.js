let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let btnClose = document.getElementById("closePoligon");
let btnClean = document.getElementById("clean");
let poligonos = [];
let active = false;
let poligono = new Poligono();
let mouseIsDown = false;
let mouseIsMoving = false;
let doubleClickThreshold = 200;
let lastClick = 0;
let isDraggingMouse = false;
let isDoubleClick = false;
let x = new Number();
let y = new Number();
let movingObject = null;
let cPressed = false;

document.addEventListener("DOMContentLoaded", () => {
    btnClean.addEventListener("click", handleBtnClean);
    btnClose.addEventListener("click", handleBtnClosePoligon);
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("mousedown", (event) => { 
        document.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("dblclick", handleCanvasDblclick);
        canvas.addEventListener("mousemove", handleMouseMove);
        x = event.layerX;
        y = event.layerY;
        isDraggingMouse = true;
        let thisClick = new Date().getTime();
        isDoubleClick = thisClick - lastClick < doubleClickThreshold;
        lastClick = thisClick;
        setTimeout( () => {
            if (!isDoubleClick && !isDraggingMouse) 
                putPoint(x, y);                    
        }, 200);
    });  
});

function handleMouseUp() {
    isDraggingMouse = false;
    movingObject = null;
    canvas.removeEventListener("mousemove", handleMouseMove);
}

function handleKeyUp() {
    cPressed = false;
}

function handleMouseMove(event) {
    x = event.layerX;
    y = event.layerY;
    if (isDraggingMouse) {
        if (!movingObject) {
            for (let i = 0; i < poligonos.length ; i++) {
                const poligono = poligonos[i];
                movingObject = poligono.tryToMove(x, y);
                if(movingObject) break;
            }
        } else {
            movingObject.move(x,y);
        }
    }
    reDraw();
}

function putPoint(x, y) {
    let color = [255,0,0];
    if (!poligono.center) {
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
        cPressed = true;
    }
    canvas.addEventListener("wheel", event => {
        if (cPressed) tono(event.deltaY);
    });
}

function tono(deltaY) {
    for (let i = 0; i < poligonos.length; i++) {
        const poligono = poligonos[i];
        poligono.tono(deltaY/100);   
    }
    reDraw();
}

function handleCanvasDblclick(event) {
    let x = event.layerX;
    let y = event.layerY;
    for (let i = 0; i < poligonos.length ; i++) {
        const poligono = poligonos[i];
        poligono.delCircle(event);
    }
}

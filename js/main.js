let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let btnClose = document.getElementById("closePoligon");
let btnClean = document.getElementById("clean");
let poligonos = [];
let active = false;
let poligono = new Poligono();
let mouseIsDown = false;
let mouseIsMoving = false;
let doubleClickThreshold = 200;  //ms
let lastClick = 0;
let isDragging = false;
let isDoubleClick = false;
let x = new Number();
let y = new Number();

document.addEventListener("DOMContentLoaded", () => {
    btnClean.addEventListener("click", handleBtnClean);
    btnClose.addEventListener("click", handleBtnClosePoligon);
    canvas.addEventListener("mousedown", (event) => { 
        document.addEventListener("keypress", handleKeyPress);
        document.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("dblclick", handleCanvasDblclick);
        canvas.addEventListener("mousemove", handleMouseMove);
        x = event.layerX;
        y = event.layerY;
        isDragging = true;
        let thisClick = new Date().getTime();
        isDoubleClick = thisClick - lastClick < doubleClickThreshold;
        lastClick = thisClick;
        setTimeout( () => {
            putPoint(x, y);                    
        }, 200);
    });  
});

function handleMouseUp() {
    isDragging = false;
    canvas.removeEventListener("mousemove", handleMouseMove);
}

function handleMouseMove() {
    console.log("Mouse Moving");
    poligono.tryToMove(x, y);
}

function putPoint(x, y) {
    if (!isDoubleClick && !isDragging) {
        let color = "#FF0000";
        console.log("x: " + x + "  y: " + y);
        if (!poligono.centerPoligon) {
            poligono.addCircle(x, y, color);
            reDraw();
        }
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
        document.addEventListener("wheel", event => {
            if (event.deltaY < 0)
                subirClaridad();
            if (event.deltaY > 0)
                bajarClaridad();
        });
    }
}

function subirClaridad() {
    
}

function handleCanvasDblclick(event) {
    isDoubleClick = true;
    let x = event.layerX;
    let y = event.layerY;
    for (let i = 0; i < poligonos.length ; i++) {
        const poligono = poligonos[i];
        poligono.delCircle(event);
    }
    // isDoubleClick = false;
}

////////////////////


// function handleCanvasClick(event) {

//         If (poligonoActual.vacio()) {
//             for (let i = 0; i < poligonos.length; i++) {
//         {
//         Let vertice = polígonos[I].getVertice()
//         if(vertice) {
//         Poligonos[I].borrar(vertice)
//         }
//         }
//         Else
//         {
//         Poligono.addCircle(x, y, color);
//         }

//     let x = new Number();
//     let y = new Number();
//     let color = "#FF0000";
//     x = event.layerX;
//     y = event.layerY;
//     console.log("x: " + x + "  y: " + y);
//     if (!poligono.centerPoligon) { // CONICIÓN: Y no este ocupado por otro circulo
//         poligono.addCircle(x, y, color);
//         reDraw();
//     }
    
// // event.addEventListener("click", function(event){
// //     if(poligonos != null) {
// //         for (let i = 0; i < poligonos.length; i++) {
// //             let aux = poligono[i].meclickearon().indice;
// //         }
// //     }
// // })
// }
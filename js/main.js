let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let btnClose = document.getElementById("closePoligon");
let btnClean = document.getElementById("clean");
let poligonos = [];
let active = false;
let poligono = new Poligono();
let mouseIsDown = false;

let doubleClickThreshold = 50;  //ms
let lastClick = 0;
let isDragging = false;
let isDoubleClick = false;

document.addEventListener("DOMContentLoaded", () => {
    
    btnClean.addEventListener("click", handleBtnClean);
    btnClose.addEventListener("click", handleBtnClosePoligon);
    canvas.addEventListener("click", () => { 
            
        let thisClick = new Date().getTime();
        var isDoubleClick = thisClick - lastClick < doubleClickThreshold;
        lastClick = thisClick;
            let x = new Number();
            let y = new Number();
            let color = "#FF0000";
            x = event.layerX;
            y = event.layerY;
            console.log("x: " + x + "  y: " + y);
            if (!poligono.centerPoligon) { // CONICIÓN: Y no este ocupado por otro circulo
                poligono.addCircle(x, y, color);
                reDraw();
            }
    });
        canvas.addEventListener("dblclick", handleCanvasDblclick);
        canvas.addEventListener("mousedown", () => {
        mouseIsDown = true;
      });
    
      canvas.addEventListener("mouseUp", () => {
        isDragging = false;
        mouseIsDown = false;
      });
    
      // Using document so you can drag outside of the canvas, use $node
      // if you cannot drag outside of the canvas
      canvas.addEventListener("mousemove", () => {
        if (mouseIsDown) {
            isDragging = true;
        }
      });
      
    document.addEventListener("keypress", handleKeyPress);
    // canvas.addEventListener("dblclick", handleCanvasDbclick);
    // document.addEventListener("mouseup", () => { active = false; });
    // canvas.addEventListener("mousedown", handleCanvasMouseDown);
    
});




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
        console.log("Usted esta precionando la letra C");
    }
}

function handleCanvasDblclick(event) {
    alert("DobleClick");

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
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
document.addEventListener("DOMContentLoaded", () => {
    canvas.addEventListener("click", getPosition);
});

function getPosition(event) {
    let x = new Number();
    let y = new Number();
    x = event.clientX;
    y = event.clientY;
    console.log("x: " + x + "  y: " + y);
}


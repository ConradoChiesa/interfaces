let canvas = document.getElementById("canvas");
document.addEventListener("DOMContentLoaded", init, false);

function init() {
canvas.addEventListener("mousedown", getPosition, false);
}

function getPosition(event) {
let x = new Number();
let y = new Number();

if (event.x != undefined && event.y != undefined) {
    x = event.x;
    y = event.y;
}
else // Firefox method to get the position
{
    x = event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
}

x -= canvas.offsetLeft;
y -= canvas.offsetTop;

console.log("x: " + x + "  y: " + y);
}


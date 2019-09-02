document.addEventListener('DOMContentLoaded', load());

function load(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#2A0000";
    ctx.beginPath();
    ctx.fillRect(100, 100, 300, 100);
    ctx.arc(250, 50, 45, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(250, 250, 45, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}
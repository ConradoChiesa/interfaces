document.addEventListener('DOMContentLoaded', load());
    function load(){
        var canvas = document.getElementById("canvas").getContext("2d");
        canvas.fillStyle = "#2A0000";
        canvas.beginPath();
        canvas.fillRect(100, 100, 300, 100);
        canvas.arc(250, 50, 45, 0, 2 * Math.PI);
        canvas.lineWidth = 10;
        canvas.fillStyle = "#FF0000";
        canvas.fill();
        canvas.stroke();

    }
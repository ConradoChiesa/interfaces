const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var degrade = ctx.createLinearGradient(0,0,0,300);
degrade.addColorStop(0, "#000000");
degrade.addColorStop(1, "#FFFFFF");
ctx.fillStyle = degrade;
ctx.fillRect(50, 50, 250, 350);
ctx.strokeStyle = "#00FF00";
ctx.lineWidth = 5;
ctx.strokeRect(50, 50, 250, 350);


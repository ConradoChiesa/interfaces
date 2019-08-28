const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var degrade = ctx.createLinearGradient(0,0,0,500);
degrade.addColorStop(0, "#000000");
degrade.addColorStop("0.6" , "#FFF400");
degrade.addColorStop(1, "#F30000");
ctx.fillStyle = degrade;
ctx.fillRect(50, 50, 250, 500);
ctx.strokeStyle = "#00FF00";
ctx.lineWidth = 5;
ctx.strokeRect(50, 50, 250, 500);


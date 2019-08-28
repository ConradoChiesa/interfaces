const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let imageData = ctx.createImageData(100, 100);

for (let i = 0; i < imageData.data.length; i += 4) {
  
  imageData.data[i + 0] = 190;  
  imageData.data[i + 1] = 50;    
  imageData.data[i + 2] = 80;  
  imageData.data[i + 3] = 255;  
}


ctx.putImageData(imageData, 20, 20);
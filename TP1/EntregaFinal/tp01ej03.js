document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let w = canvas.clientWidth;
    let h = canvas.clientHeight;
    let imageData = ctx.createImageData(w, h);

    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);

    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = randomR;  
      imageData.data[i + 1] = randomG;    
      imageData.data[i + 2] = randomB;  
      imageData.data[i + 3] = 255;  
    }

    ctx.putImageData(imageData, 0, 0);
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("Color random generado en JavScript", w/6, h/6);
  }
);

class Circle {
    constructor(x, y, radio, color) {
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    movePoint(event) {
        console.log("moving point");
        
        this.x += event.layerX;
        this.y += event.layerY;
    }
}


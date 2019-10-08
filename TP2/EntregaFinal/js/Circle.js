
class Circle {
    constructor(x, y, radio, color) {
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`;
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    move(x,y) {
        this.x = x;
        this.y = y;
    }

    tono(deltaY) {
        this.color = [
            this.color[0]+deltaY,
            this.color[1]+deltaY,
            this.color[2]+deltaY
        ];
    }
   
}


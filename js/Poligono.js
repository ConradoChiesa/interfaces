class Poligono {


    //private circles: []

    constructor() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');
        
        this.circles = [];
        
    }

    draw(){
        for(let i = 0; i< this.circles.length; i++){
            let circle = this.circles[i];
            circle.draw(ctx);
            if (i > 0) {
                ctx.beginPath();
                ctx.moveTo(this.circles[i-1].x ,this.circles[i-1].y);
                ctx.lineTo(this.circles[i].x ,this.circles[i].y);
                ctx.strokeStyle = "#FFFF00";
                ctx.stroke();
                ctx.closePath();
            }
        }
    }

    addCircle(x, y) {
        let radio = 10;
        let color = "#FF0000";
        let circle = new Circle(x, y, radio, color);
        this.circles.push(circle);
        
    }
}
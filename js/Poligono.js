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
                let x1 = this.circles[i-1].x;
                let y1 = this.circles[i-1].y;
                let x2 = this.circles[i].x;
                let y2 = this.circles[i].y;
                let color = "#FFFF00"
                this.drawLine(x1, y1, x2, y2, color);
            }
        }
    }

    drawLine(x1, y1, x2, y2, color) {
        ctx.beginPath();
        ctx.moveTo(x1 ,y1);
        ctx.lineTo(x2 ,y2);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    }

    addCircle(x, y) {
        let radio = 10;
        let color = "#FF0000";
        let circle = new Circle(x, y, radio, color);
        this.circles.push(circle);
        
    }

    close() {
        if (this.circles.length > 2) {
            let x1 = this.circles[0].x;
            let y1 = this.circles[0].y;
            let x2 = this.circles[this.circles.length-1].x;
            let y2 = this.circles[this.circles.length-1].y;
            let color = "#FFFF00";
            this.drawLine(x1, y1, x2, y2, color);
        } else {
            alert("El poligono debe contar con al menos 3 vertices");
        }
    }
}
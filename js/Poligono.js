class Poligono {

    constructor() {
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext('2d');
        this.circles = [];
        this.centerPoligon;

    }

    draw(){
        for(let i = 0; i< this.circles.length; i++){
            const circle = this.circles[i];
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
        ctx.lineWidth = 2;
        ctx.moveTo(x1 ,y1);
        ctx.lineTo(x2 ,y2);
        ctx.strokeStyle = color;
        ctx.stroke();
        ctx.closePath();
    }

    addCircle(x, y, color) {
        let ocupado = false;
        let radio = 10;
        let circle = new Circle(x, y, radio, color);
 
        for (let i = 0; i < this.circles.length; i++) {
            const circ = this.circles[i];
            let x1 = circ.x;
            let y1 = circ.y;
            if (this.circles.length > 1 && Math.sqrt( (x-x1)*(x-x1) + (y-y1)*(y-y1)) < circ.radio + radio) {
                ocupado = true;
            }
        }
        
        if (!ocupado) {
            this.circles.push(circle);
        }else{ 
            console.log("Lugar ocupado");
        }
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

    get cerrado() {
        if (this.circles.length > 2) {
            return true;
        }
    }
    
    clean() {
        for (let i = 0; i < this.circles.length; i++) 
            this.circles.splice(i);
            this.centerPoligon = null;
    }

    calcCenter() {
        let color = "#00FF00"
        let radio = 7;
        let promX = new Number();
        let promY = new Number();
        for (let i = 0; i < this.circles.length; i++) {
            promX += this.circles[i].x;
            promY += this.circles[i].y;
        }
        promX = promX / this.circles.length;
        promY = promY / this.circles.length;
        let center = new Circle(promX, promY, radio, color);

        this.centerPoligon = center;
        this.centerPoligon.draw(ctx);
    }

    delCircle(event) {
        let radio = 10;
        let x = event.layerX;
        let y = event.layerY;
        for (let i = 0; i < this.circles.length; i++) {
            const circ = this.circles[i];
            let x1 = circ.x;
            let y1 = circ.y;
            if (this.circles.length > 1 && Math.sqrt( (x-x1)*(x-x1) + (y-y1)*(y-y1)) < circ.radio + radio
            && this.circles.length > 3) {
                this.circles.splice(i,1);
            }
        }
        reDraw();
    }

    tryToMove(x, y, event) {
        let radio = 10;
        for (let i = 0; i < this.circles.length; i++) {
            const circ = this.circles[i];
            let x1 = circ.x;
            let y1 = circ.y;
            if (this.circles.length > 1 && Math.sqrt( (x-x1)*(x-x1) + (y-y1)*(y-y1)) > circ.radio + radio)
            this.circles.
            circ.movePoint(event);
            reDraw();
        }
    }
    
}
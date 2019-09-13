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

    slot() {
        alert("llamada a slot");
        let newCircle = this.circles.pop;
        for (let i = 0; i < circles.length; i++) {
            const circle = circles[i];
            let x1 = circle[i].x;
            let y1 = circle[i].y;
            let x2 = newCircle.x;
            let y2 = newCircle.y;
            console.log(y2);
            
            if (this.circles.length < 1 || Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)) < circle[i].radio + newCircle.radio) 
                return true;
            else return false;
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
        // this.center.addEventListener("click", () => {alert("todo es increible")});
    }

    deleteCircle(event) {
        // alert("Deleteando punto");
        console.log(event);
        
        this.circles.slice();
    }
}
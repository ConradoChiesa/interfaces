document.addEventListener('DOMContentLoaded', load());
    function load(){


        let matriz = [];
        let w = 10;
        let h = 10;
        for(let i=0; i<w; i++) {
            matriz[i] = [];
            for(let j=0; j<h; j++){
                matriz[i][j] = Math.floor(Math.random() *100);
            }
        }
    console.table(matriz);
    devMax(matriz);
    }   

    function devMax(matriz) {
        let aux = 0;
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz.length; j++) {
                if (aux < matriz[i][j]) {
                    aux = matriz[i][j];
                }
                
            }
        }
        alert(aux);
    }


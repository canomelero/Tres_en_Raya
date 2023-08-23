
export class Tablero {
    constructor(filas = 3, col = 3) {
        this.filas = filas;
        this.col = col;
    
        this.arrayTablero = new Array();

        for(let i = 0; i < filas; i++) {
            this.arrayTablero[i] = new Array();

            for(let j = 0; j < col; j++) {
                this.arrayTablero[i][j] = "";
            }
        }
    }

}
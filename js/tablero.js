const fil_default = 3;
const col_default = 3;

export class Tablero {
    // #### Inicialización de los datos ####
    constructor(filas = fil_default, col = col_default) {
        this.filas = filas;
        this.col = col;
        
        let num = 1;
        this.arrayTablero = new Array();

        for(let i = 0; i < filas; i++) {
            this.arrayTablero[i] = new Array();

            for(let j = 0; j < col; j++) {
                this.arrayTablero[i][j] = `${num}`;
                num++;
            }
        }
    }

    // #### Métodos ####
    setCasilla(casilla, elemento) {
        for(let i = 0; i < this.filas; i++) {
            for(let j = 0; j < this.col; j++) {
                if(this.arrayTablero[i][j] === casilla) {
                    this.arrayTablero[i][j] = elemento;
                }
            }
        }
    }

    getElemento(fila, columna) {
        return this.arrayTablero[fila][columna];
    }

    getNumCasilla(fila, columna) {
        let num_casilla = 1, i = 0, j = 0;
        let encontrado = false;

        for(let i = 0; i < this.filas && !encontrado; i++) {
            for(let j = 0; j < this.col && !encontrado; j++) {
                if(fila === i && columna === j) {
                    encontrado = true;
                }
                else {
                    num_casilla++;
                }
            }
        }

        return num_casilla;
    }
    

}
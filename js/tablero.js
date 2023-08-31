const fil_default = 3;
const col_default = 3;
const elemento_x = "X";
const elemento_o = "O";

export class Tablero {
    // #### Inicialización de los datos ####
    constructor(filas = fil_default, col = col_default) {
        this.filas = filas;
        this.col = col;
        
        let num = 1;
        this.tablero = new Array();

        for(let i = 0; i < filas; i++) {
            this.tablero[i] = new Array();

            for(let j = 0; j < col; j++) {
                this.tablero[i][j] = `${num}`;
                num++;
            }
        }
    }


    // #### Métodos ####

    /* 
    Algoritmo:
        Se recorre la matriz y se compara si el número que tiene almacenado en cada casilla coincide con la casilla o posición que se le pasa al método; si coincide, en la casilla de la matriz se guarda el elemento.
    */
    setCasilla(casilla, elemento) {
        for(let i = 0; i < this.filas; i++) {
            for(let j = 0; j < this.col; j++) {
                if(this.tablero[i][j] === casilla) {
                    this.tablero[i][j] = elemento;
                }
            }
        }
    }

    getElemento(fila, columna) {
        return this.tablero[fila][columna];
    }

    
    /* 
    Algoritmo:
        Se recorre la matriz y mientras no coincida el valor de la fila y columna con los valores pasados al método, el contador "número de casilla" va aumentando en 1. En el momento que la fila y columna coincide con el valor de los parámetros, se acaba el bucle y se devuelve el número de la casilla de la matriz (1,2,3,...). 
    */
    getNumCasilla(fila, columna) {
        let num_casilla = 1;
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


    /*
    Algoritmo:
        Se saca el elemento ('X' o 'O') de la casilla central y se comprueba que coincide con las esquinas del tablero.
    */
    juegoEnDiagonal() {
        let juego_diagonal = false;

        if(this.getElemento(1, 1) === elemento_x || this.getElemento(1, 1) === elemento_o) {
            const elemento = this.getElemento(1, 1);
    
            if(this.getElemento(0, 0) === elemento && this.getElemento(2, 2) === elemento) {
                juego_diagonal = true;
            }
            else if(this.getElemento(0,2) === elemento && this.getElemento(2, 0) === elemento) {
                juego_diagonal = true;
            }
        }

        return juego_diagonal;
    }


    /*
    Algoritmo:
        Se recorre toda la matriz y se comprueba si el elemento de una casilla es el mismo que el de su casilla siguiente. Si es así, se suma una unidad a una variable contador. En el momento que el contador llegue al valor de 3 ya habrá un juego en fila
    */
    juegoEnFila() {
        let contador = 1;
        let hay_juego = false;

        for(let i = 0; i < this.filas && !hay_juego; i++) {
            for(let j = 0; j < this.col-1 && !hay_juego; j++) {
                if(this.getElemento(i, j) === this.getElemento(i, j+1)) {
                    contador++;
                }

                if(contador === 3) {
                    hay_juego = true;
                }
            }

            contador = 1;
        }

        return hay_juego;
    }


    /*
    Algoritmo:
        Se saca el elemento que hay en la fila central y que corresponde a cada columna. Después, se comprueba si coincide con el elemento que hay en su fila anterior y en su fila posterior
    */
    juegoEnColumna() {
        let hay_juego = false;
        let fila_central = 1;
        
        for(let j = 0; j < this.col && !hay_juego; j++) {
            let elemento = this.getElemento(fila_central, j);

            if(this.getElemento(fila_central-1, j) === elemento && this.getElemento(fila_central+1, j) === elemento) {
                hay_juego = true;
            }
        }  

        return hay_juego;
    }
    
    juegoGanado() {
        return this.juegoEnDiagonal() || this.juegoEnFila() || this.juegoEnColumna();
    }

    tableroCompleto() {
        let tablero_completo = true;

        for(let i = 0; i < this.filas && tablero_completo; i++) {
            for(let j = 0; j < this.col && tablero_completo; j++) {
                if(this.getElemento(i, j) !== elemento_o && this.getElemento(i, j) !== elemento_x) {
                    tablero_completo = false;
                }
            }
        }

        return tablero_completo;
    }

    vaciarTablero() {
        let num = 1;

        for(let i = 0; i < this.filas; i++) {
            for(let j = 0; j < this.col; j++) {
                this.tablero[i][j] = `${num}`;
                num++;
            }
        }
    }
}
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

    /* 
    Algoritmo:
        Se recorre la matriz y se compara si el número que tiene almacenado en cada casilla coincide con la casilla o posición que se le pasa al método; si coincide, en la casilla de la matriz se guarda el elemento.
    */
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

    juegoEnLinea() {
        


    }
    
    juegoGanado() {
        return this.juegoEnDiagonal() || this.juegoEnLinea();
    }

    completo() {
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
}
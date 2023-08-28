import { Tablero } from './tablero.js';

document.addEventListener('DOMContentLoaded', () => {
    // #### Variables ####
    const boton1 = document.querySelector('#un_jugador');
    const boton2 = document.querySelector('#dos_jugadores');
    const div_botones = document.querySelector('#botones');
    const tablero = new Tablero();
    const marca_x = "X";
    const marca_o = "O";
    let juegoOFF = true;
    let arrayTablero = [];
    let turno1 = true;
    

    
    // #### Eventos ####
    boton1.addEventListener('click', juegoUno);
    boton2.addEventListener('click', juegoDos);
    
    if(juegoOFF) {
        alerta("Debes seleccionar un modo de juego");
    }


    // #### Funciones Principales ####
    function juegoUno(evento) {
        console.log(evento.target.id);
        juegoOFF = false;
        div_botones.removeChild(div_botones.lastChild);

        const tablero = new Tablero();

        console.log(tablero);



    }
    
    function juegoDos(evento) {
        console.log(evento.target.id);
        juegoOFF = false;
        div_botones.removeChild(div_botones.lastChild);

        console.log(tablero);

        rellenarArray();
        console.log(arrayTablero)
        
        //while(!acabarPartida()) {
            for(let i = 0; i < arrayTablero.length; i++) {
                arrayTablero[i].addEventListener('click', agregarFicha);
            }
        //}
    }


    // #### Otras Funciones ####
    function alerta(mensaje) {
        const msg_alerta = document.createElement("p");
        msg_alerta.textContent = mensaje;
        msg_alerta.classList.add('alerta');
        div_botones.appendChild(msg_alerta);
    }

    function rellenarArray() {
        for(let i = 1; i <= 9; i++) {
            arrayTablero.push(document.querySelector(`#casilla${i}`));
        }
    }

    function agregarFicha(evento) {
        if(turno1) {
            turno1 = false;
            tablero.setCasilla(evento.target.title, marca_x);    // se agrega al objeto tablero
            console.log(tablero);
            agregarHTML();   // se agrega al tablero del HTML
        }
        else {
            turno1 = true;
            tablero.setCasilla(evento.target.title, marca_o);
            console.log(tablero);
            agregarHTML();
        }
    }

    function agregarHTML() {
        limpiarTableroHTML();

        for(let i = 0; i < tablero.filas; i++) {
            for(let j = 0; j < tablero.col; j++) {
                if(tablero.getElemento(i, j) === marca_x || tablero.getElemento(i, j) === marca_o) {
                    const msg = document.createElement("p");
                    msg.textContent = tablero.getElemento(i, j);

                    if(tablero.getElemento(i, j) === marca_x) {
                        msg.classList.add('marca-x');
                    }
                    else if(tablero.getElemento(i, j) === marca_o) {
                        msg.classList.add('marca-o');
                    }
                    
                    const casilla = tablero.getNumCasilla(i, j);

                    const div_casilla = document.querySelector(`#casilla${casilla}`);
                    div_casilla.appendChild(msg);
                }
            }
        }
    }

    function limpiarTableroHTML() {
        for(let i = 0; i <= arrayTablero.length; i++) {
            const div = document.querySelector(`#casilla${i+1}`);
            
            if(div !== null) {
                while(div.firstChild) {
                    div.removeChild(div.firstChild);
                }
            }
        }
    }
});





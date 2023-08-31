import { Tablero } from './tablero.js';

document.addEventListener('DOMContentLoaded', () => {
    // #### Variables ####
    const boton1 = document.querySelector('#un_jugador');
    const boton2 = document.querySelector('#dos_jugadores');
    const div_botones = document.querySelector('.botones');
    const tablero_html = document.querySelector('#tablero');
    const btn_inicio = document.querySelector('#inicio');
    const btn_nueva_partida = document.querySelector('#nueva_partida');
    const footer = document.querySelector('#footer');
    const tablero = new Tablero();
    const marca_x = "X";
    const marca_o = "O";
    let un_ganador = false;
    let mensaje_inicio = true;
    let arrayTablero = [];
    let turno1 = true;
    

    
    // #### Eventos ####
    boton1.addEventListener('click', juegoUno);
    boton2.addEventListener('click', juegoDos);
    
    if(mensaje_inicio) {
        alerta("Debes seleccionar un modo de juego");
    }


    // #### Funciones Principales ####
    function juegoUno(evento) {
        console.log(evento.target.id);
        juegoOFF = false;
        div_botones.removeChild(div_botones.lastChild);

        const tablero = new Tablero();

        console.log(tablero);

        rellenarArray();
        console.log(arrayTablero);

    }
    
    function juegoDos() {
        mensaje_inicio = false;
        div_botones.removeChild(div_botones.lastChild);
        
        rellenarArray();
        
        tablero_html.addEventListener('click', agregarFicha);
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

            if(tablero.juegoGanado() && !un_ganador) {
                final("Ganador: Jugador 1");
            }
        }
        else {
            turno1 = true;
            tablero.setCasilla(evento.target.title, marca_o);
            console.log(tablero);
            agregarHTML();

            if(tablero.juegoGanado() && !un_ganador) {
                final("Ganador: Jugador 2");
            }
        }

        if(tablero.tableroCompleto() && !un_ganador) {
            final("Ningún ganador");
        }

        if(!footer.classList.contains('oculto')) {
            btn_inicio.addEventListener('click', function() {
                location.reload();
            });

            btn_nueva_partida.addEventListener('click', () => {
                tablero.vaciarTablero();
                limpiarTableroHTML();
                footer.classList.add('oculto');
                footer.removeChild(footer.lastChild);
                un_ganador = false;
                turno1 = true;
            });
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

    function final(mensaje) {
        const msg_final = document.createElement("p");
        msg_final.textContent = mensaje;
        msg_final.classList.add('mensaje-final');

        const footer = document.querySelector('#footer');
        footer.classList.remove('oculto');

        footer.appendChild(msg_final);
        un_ganador = true;
    }
});





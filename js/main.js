import { Tablero } from './tablero.js';

document.addEventListener('DOMContentLoaded', () => {
    // #### Variables ####
    const boton1 = document.querySelector('#un_jugador');
    const boton2 = document.querySelector('#dos_jugadores');
    const div_botones = document.querySelector('#botones');
    let juegoOFF = true;

    
    // #### Eventos ####
    boton1.addEventListener('click', juegoUno);
    boton2.addEventListener('click', juegoDos);
    
    if(juegoOFF) {
        alerta("Debes seleccionar un modo de juego");
    }


    // #### Funciones ####
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

        const tablero = new Tablero();

        console.log(tablero);

    }

    function alerta(mensaje) {
        const msg_alerta = document.createElement("p");
        msg_alerta.textContent = mensaje;
        msg_alerta.classList.add('alerta');
        div_botones.appendChild(msg_alerta);
    }
});





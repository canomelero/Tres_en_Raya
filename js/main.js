document.addEventListener('DOMContentLoaded', () => {
    // #### Variables ####
    const tablero = document.querySelector('.juego');
    const boton1 = document.querySelector('#un_jugador');
    const boton2 = document.querySelector('#dos_jugadores');


    // #### Eventos ####
    boton1.addEventListener('click', juegoUno);
    boton2.addEventListener('click', juegoDos);


    // #### Funciones ####
    function juegoUno(evento) {
        console.log(evento.target.id);
        

    }
    
    function juegoDos(evento) {
        console.log(evento.target.id);
      
    }

});





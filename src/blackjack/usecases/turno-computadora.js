import { CrearCartaHTML } from './crear-carta-HTML';
import {pedirCarta} from './pedir-carta';
import {valorCarta} from './valor-carta';

/**
 * Turno CPU
 * @param {Number} puntosMinimos Puntos min que la computadora necesita para ganar
 * @param {HTMLElment} puntosHTML HTML para mostrar los puntos
 * @param {HTMLElment} divCartasComputadora Mostrar las cartas
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[] ) => {

    if (!puntosMinimos)throw new Error("Puntos minimos son necesiarios");
    if (!deck)throw new Error("Deck es necesario");
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        //TODO: Crear Carta
        const imgCarta = CrearCartaHTML( carta )

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

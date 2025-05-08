
/**
 * 
 * Elemento HTML para las cartas 
 * @param {*} carta Carta String
 * @returns {HTMLImageElement} Imagen de retorno
 */

export const CrearCartaHTML = ( carta) =>{

    if( !carta )throw new Error("La carta es una argumento obligatorio");

    

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
   
    

    return imgCarta

}
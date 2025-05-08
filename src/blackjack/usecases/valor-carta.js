/**
 * 
 * @param {String} carta Ejemplo: [3C,4J...]
 * @returns {Number} Retorna el Valor de la carta
 */

export const valorCarta = ( carta ) => {

    if (!carta || carta ===0)throw new Error("Carta es necesario para un string valido");
    

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
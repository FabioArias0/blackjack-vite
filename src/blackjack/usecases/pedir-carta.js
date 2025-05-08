/**
 * 
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} Retorna la carta del Deck
 */


export const pedirCarta = (deck) => {

    if (!deck || deck.length ===0) throw new Error("Deck es obligatorio como un arreglo String");
    

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
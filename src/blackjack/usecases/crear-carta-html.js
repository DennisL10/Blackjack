
/**
 *  Crea una carta en formato HTML
 * @param {String} carta 
 * @returns {HTMLImageElement}  Imagen de retorno
 */
export const crearCartaHTML = ( carta ) => {

    if (!carta) throw new Error('carta es necesario');

    const imgCarta = document.createElement('img');
    imgCarta.src = `../../assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}

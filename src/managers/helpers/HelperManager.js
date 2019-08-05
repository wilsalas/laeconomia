import numeral from 'numeral';

/** Este funcion formatea un numero a COP devuelve por ejemplo: $10.000 */
export function FormatCOPNumber(number, commas = false) {
    try {
        //algunos inputs de la aplicacion envian textos con "$" para formatearlos, 
        //pero estos no se les puede hacer parse int. Por eso lo quitamos si no funciona. 
        if (number.toString().includes("$")) {
            number = number.toString().replace(/\D/g, "");
        }
        //si number esta vacio en este momento devolvemos "$0"
        if (!number) return "$0";
        //esta linea mira si debemos agregar un signo negativo al numero cuando es menor a 0
        let prefix = parseInt(number) >= 0 ? "$" : "-$";
        if (!commas) return prefix + numeral(number.toString().replace(/\D/g, "")).format('0,0').replace(/,/g, '.');
        else return prefix + numeral(number).format('0,0');

    }
    catch (error) {
        return "";
    }
}
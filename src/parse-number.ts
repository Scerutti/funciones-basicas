/**
 * Convierte un valor en un número, con la opción de proporcionar un valor predeterminado en caso de error.
 * @param {any} value - El valor que se intentará convertir en un número.
 * @param {number} [def=0] - El valor predeterminado que se utilizará si la conversión falla o no se proporciona.
 * @returns {number} - El valor convertido a número o el valor predeterminado en caso de error.
 */

export const parseNumber = (value: any, def?: number): number => {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
        return def !== undefined ? def : 0;
    } else {
        return parsedValue;
    }
};

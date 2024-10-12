/**
 * Convierte un valor en una cadena de texto o devuelve un valor predeterminado si no es una cadena o es un objeto vacío.
 * 
 * @param {any} value - El valor que se desea convertir a una cadena de texto.
 * @param {string | undefined} defaultValue - (Opcional) El valor predeterminado que se retornará si `value` no es una cadena o es un objeto vacío.
 * @returns {string} Una cadena de texto si `value` es una cadena, o el valor predeterminado si se proporciona, de lo contrario, una cadena vacía.
 */

export function toString(value: any, defaultValue?: string): string {
  if (value) {
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      if (defaultValue !== undefined && typeof defaultValue === 'string') {
        return defaultValue;
      }
      return '';
    }
    return value.toString();
  }

  if (defaultValue !== undefined && typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}
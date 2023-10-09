/**
 * Convierte un valor en una cadena de texto o devuelve un valor predeterminado si no es una cadena.
 * 
 * @param value El valor que se desea convertir a una cadena de texto.
 * @param defaultValue (Opcional) El valor predeterminado que se retornará si `value` no es una cadena.
 * @returns Una cadena de texto si `value` es una cadena, o el valor predeterminado si se proporciona, de lo contrario, una cadena vacía.
 */

export function toString(value: any, defaultValue?: string): string {
  if (typeof value === 'string') {
    return value;
  }

  if (defaultValue !== undefined && typeof defaultValue === 'string') {
    return defaultValue;
  }

  return '';
}
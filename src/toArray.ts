/**
 * Crea un vector (Array) del tipo de dato especificado.
 * @param array Vector (Array).
 * @returns Vector (Array) del tipo especificado.
 */
export function toArray<T>(array?: T[] | void): T[] {
  if (!Array.isArray(array)) {
    return [];
  }
  return array;
}
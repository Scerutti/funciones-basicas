import { useState } from "react";
import { toString } from "./toString";


/**
 * Hook personalizado para gestionar valores en el almacenamiento local (localStorage) de manera segura.
 * @template T - Tipo de datos para el valor almacenado en localStorage.
 * @param {string} key - Clave para identificar el valor en localStorage.
 * @param {T} initialValue - Valor inicial que se utilizará si no se encuentra ningún valor en localStorage.
 * @returns {[T, (value: T) => void]} - Un array con dos elementos: el valor actual y una función para actualizar el valor.
 */
export function useLocalStorage<T>(key: string, initialValue: T):readonly [T, (value: T) => void] {
  /**
   * Estado local para el valor almacenado en localStorage.
   * @type {T}
   */
  const [sortedValue, setSortedValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  /**
   * Función para establecer un nuevo valor en localStorage y actualizar el estado local.
   * @param {T} value - Nuevo valor a almacenar en localStorage.
   */
  const setUniqueStringValue = (value: T) => {
    try {
      const newValue: T = Array.isArray(value) ? (value as T) : value;
      setSortedValue(newValue);

      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      throw new Error(toString(error))
    }
  };

  return [sortedValue, setUniqueStringValue] as const;
}

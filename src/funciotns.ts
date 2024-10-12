import { parseNumber } from "./parse-number";


/**
 * Dada una cadena, reemplaza en dicha cadena el valor de {@link oldValue} por el valor de {@link newValue}.
 * @param value Cadena de caracteres.
 * @param oldValue Valor antiguo a ser reemplazado por uno nuevo.
 * @param newValue Valor nuevo que tomara el lugar del valor antiguo.
 * @returns Cadena de caracteres con ocurrencias reemplazadas.
 */
export const replaceAll = (
  value: string | null | undefined,
  oldValue: string,
  newValue: string,
): string => {
  if (!value) return "";

  try {
    let pos = value.indexOf(oldValue);
    while (pos >= 0) {
      value = value?.replace(oldValue, newValue);
      pos = value.indexOf(oldValue);
    }
    return value;
  } catch (error) {
    return value;
  }
};

/**
 * Dada una cadena de fecha con formato ISO 8601 {@link https://en.wikipedia.org/wiki/ISO_8601}:
 * Elimina de dicha cadena las apariciones de "T" y "Z".
 * @param date Cadena con formato de fecha.
 * @returns Cadena con formato fecha YYYY-MM-DD HH:mm:ss.
 */
export const dateToStr = (date: string): string => {
  return date && date.replace
    ? date.replace("T", " ").replace("Z", "").substr(0, 19)
    : date;
};

/**
 * Dada una fecha en formato ISO 8601 {@link https://en.wikipedia.org/wiki/ISO_8601}:
 * Transforma la fecha de formato ISO 8601 a "DD-MM-YYYY HH:MM:sss".
 * El formato de salida dependera de los parametros que reciba la funcion.
 * @param fecha Fecha de tipo {@link Date} con formato ISO 8601.
 * @param includeTime True si el formato de salida incluye tiempo "HH:MM", False si no incluye "HH:MM".
 * @param format Caracter divisor de fecha, puede ser "DD-MM-YYYY HH:MM" ó "DD/MM/YYYY HH:MM".
 * @param days Cantidad de dias que seran sumados o restados a los dias de la fecha.
 * @param includeSeconds True si el formato de salida incluye tiempo ":sss", False si no incluye ":sss".
 * @returns Cadena de fecha con formato "DD-MM-YYYY HH:MM:sss" en su forma extendida, "DD-MM-YYYY" en su forma reducida.
 */
export const formatContructorDate = (
  fecha: Date | null | undefined,
  includeTime: boolean = true,
  format: "-" | "/" = "/",
  days: number = 0,
  includeSeconds: boolean = false,
): string => {
  let res = "";
  try {
    if (fecha && fecha.getDate) {
      if (days && days !== 0) fecha.setDate(fecha.getDate() + days);
      const d = fecha.getDate();
      const m = fecha.getMonth() + 1;
      const y = fecha.getFullYear();
      const h = fecha.getHours();
      const M = fecha.getMinutes();
      if (format === "/") {
        if (d < 10) res = "0";
        res += d.toString() + "/";
        if (m < 10) res += "0";
        res += m.toString() + "/";
        res += y.toString();
      } else {
        res = y.toString() + "-";
        if (m < 10) res += "0";
        res += m.toString() + "-";
        if (d < 10) res += "0";
        res += d.toString();
      }

      if (includeTime === true || includeSeconds === true) {
        res += " ";
        if (h < 10) res += "0";
        res += h.toString() + ":";
        if (M < 10) res += "0";
        res += M.toString();

        if (includeSeconds === true) {
          res += ":";
          if (fecha.getSeconds() < 10) res += "0";
          res += fecha.getSeconds().toString();
        }
      }
    }
  } catch (error) {
    res = "";
  }

  return res;
};

/**
 * Dada una fecha en formato ISO 8601 {@link https://en.wikipedia.org/wiki/ISO_8601}:
 * Transforma la fecha de formato ISO 8601 a "DD-MM-YYYY HH:MM:sss".
 * El formato de salida dependera de los parametros que reciba la funcion.
 * @param isoDate Cadena de fecha con formato  ISO 8601.
 * @param includeTime True si el formato de salida incluye tiempo "HH:MM", False si no incluye "HH:MM".
 * @param format Caracter divisor de fecha, puede ser "DD-MM-YYYY HH:MM" ó "DD/MM/YYYY HH:MM".
 * @param days Cantidad de dias que seran sumados o restados a los dias de la fecha.
 * @param includeSeconds True si el formato de salida incluye tiempo ":sss", False si no incluye ":sss".
 * @returns Cadena de fecha con formato "DD-MM-YYYY HH:MM:sss" en su forma extendida, "DD-MM-YYYY" en su forma reducida.
 */
export const formatDate = (
  isoDate?: string,
  includeTime: boolean = true,
  format: "-" | "/" = "/",
  days: number = 0,
  includeSeconds: boolean = false,
) => {
  if (isoDate && isoDate.length === 10) isoDate = isoDate + " 00:00:00";
  const fecha = isoDate ? new Date(dateToStr(isoDate)) : new Date();
  return formatContructorDate(fecha, includeTime, format, days, includeSeconds);
};

/**
 * Dada una fecha en la transforma a formato ISO 8601 {@link https://en.wikipedia.org/wiki/ISO_8601}:
 * @param Date Caedna de fecha.
 * @returns Fecha en formato ISO 8601.
 */
export const formatDateToIso = (Date: string) => {
  // Convertimos cualquier caracter, aunque no deberia haber, en minuscula.
  Date = Date.toLowerCase();
  // En caso de que la fecha incluya valores mas alla de los minutos, los eliminamos.
  if (Date.length > 16) Date = Date.slice(0, 16);
  // Retornamos la fecha en el formato iso 8601 - YYYY-MM-DDTHH:mm
  return `${Date.slice(6, 10)}-${Date.slice(3, 5)}-${Date.slice(
    0,
    2,
  )}T${Date.slice(11, 16)}`;
};

/**
 * Dada una cadena en formato ISO 8601 {@link https://en.wikipedia.org/wiki/ISO_8601}:
 * Formatea los datos te tiempo HH:MM con 0 a la izquierda.
 * @param isoDate Cadena de fecha en formato ISO 8601.
 * @returns Cadena de fecha en formato ISO 8601 con HH:MM formateados.
 */
export const formatTime = (isoDate?: string) => {
  let res = "";
  try {
    const fecha = isoDate ? new Date(dateToStr(isoDate)) : new Date();
    if (fecha.getDate()) {
      const h = fecha.getHours();
      const M = fecha.getMinutes();
      if (h < 10) res = "0";
      res += h.toString() + ":";
      if (M < 10) res += "0";
      res += M.toString();
    }
  } catch (error) {
    res = "";
  }
  return res;
};

/**
 * Dada una cadena de fecha como valor inicial {@link valueFrom} y una como valor final {@link valueTo}:
 * Calcula la diferencia de tiempo (resto) segun el tipo {@link type} que se haya especificado.
 * @param valueFrom Cadena de fecha inicial.
 * @param valueTo Cadena de fecha final.
 * @param type Tipo de diferencia (resto) que se quiere calcular.
 * @param includeNegatives True si se quiere incluir valores negativos, False caso contrario.
 * @returns Numero de diferencia (resto) de fechas segun el tipo especificado.
 */
export const diffDate = (
  valueFrom: string,
  valueTo: string | null | undefined,
  type: "min" | "sec" | "hour" | "day",
  includeNegatives: boolean,
): number => {
  if (!valueFrom) return 0;

  try {
    const ff = new Date(dateToStr(valueFrom)).getTime();
    let ft = new Date().getTime();
    if (valueTo) {
      ft = new Date(dateToStr(valueTo)).getTime();
    }

    let res = (ft - ff) / 1000; // segundos
    if (type === "min") res = res / 60;
    // en minutos
    else if (type === "hour") res = res / 60 / 60;
    // en minutos
    else if (type === "day") {
      res = res / 60 / 60 / 24; // en dias
      if (includeNegatives !== true) {
        if (res > 0 && res < 1) res = 1;
        if (res > -1 && res < 0) res = -1;
      }
    }

    if (includeNegatives === true) return res;
    return Math.abs(res);
  } catch (error) {
    return 0;
  }
};

/**
 * Dado un valor cualquiera, analiza y determina su tipo de dato.
 * @param value Valor.
 * @returns Tipo de dato del valor.
 */
export const typeOf = (
  value: any,
): "" | "array" | "string" | "number" | "object" | "boolean" => {
  if (value) {
    if (value instanceof Array) return "array";
    if (value instanceof Object) return "object";
    if (value.toString) {
      const str: string = value.toString();
      if (str.toLowerCase() === "false" || str.toLowerCase() === "true")
        return "boolean";
      if (str === "0" || parseNumber(str) !== 0) return "number";
      return "string";
    }
  }
  return "";
};


/**
 * Si el valor (value) es de tipo booleano, lo devuelve, sino devuelve un default (def) o false en su defecto.
 *
 * @param {any} value - El valor que se desea convertir a un booleano.
 * @param {boolean | undefined} def - (Opcional) El valor predeterminado que se retornará si `value` no es un booleano.
 * @returns {boolean} Un valor booleano igual a `value` si `value` es un booleano, o el valor predeterminado si se proporciona; de lo contrario, `false`.
 */

export const toBoolean = (value?: any, def?: boolean): boolean => {
  if (typeof value === "boolean") return value;
  return def || false;
}

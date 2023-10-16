<div align="center">

[![UtilsJs](./assets/funciones-basicas-logo.png)](https://www.npmjs.com/package/funciones-basicas)
</div>

<div align="center">

  ![GitHub forks](https://img.shields.io/github/forks/Scerutti/funciones-basicas)
  ![GitHub Repo stars](https://img.shields.io/github/stars/Scerutti/funciones-basicas)
<br>

  [![npm version](https://badge.fury.io/js/funciones-basicas.svg)](https://badge.fury.io/js/funciones-basicas)
  [![install size](https://packagephobia.com/badge?p=funciones-basicas)](https://packagephobia.com/result?p=funciones-basicas)
  ![License](https://img.shields.io/badge/License-MIT-blue.svg)
  ![GitHub contributors](https://img.shields.io/github/contributors/Scerutti/funciones-basicas)
<br/>

  [![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/Scerutti/funciones-basicas)
  [![Issues opened](https://img.shields.io/github/issues/Scerutti/funciones-basicas)](https://github.com/Scerutti/funciones-basicas/issues)
  [![PRs open](https://img.shields.io/github/issues-pr/Scerutti/funciones-basicas)](https://github.com/Scerutti/funciones-basicas/pulls)
  [![PRs closed](https://img.shields.io/github/issues-pr-closed/Scerutti/funciones-basicas)](https://github.com/Scerutti/funciones-basicas/pulls)
<br/>
</div>

# Funciones Basicas

Este README proporciona una descripción y ejemplos de uso de las funciones disponibles en este paquete.

## Función `parseNumber`

Convierte un valor en un número, con la opción de proporcionar un valor predeterminado en caso de error.

### Parámetros
- `value` (any): El valor que se intentará convertir en un número.
- `def` (number, opcional, por defecto 0): El valor predeterminado que se utilizará si la conversión falla o no se proporciona.

### Ejemplo de Uso

```javascript
const result = parseNumber("42");
console.log(result); // Resultado: 42

const resultWithDefault = parseNumber("texto no numérico", 100);
console.log(resultWithDefault); // Resultado: 100
```

## Función `useWindowSize`

Hook personalizado que proporciona el tamaño de la ventana del navegador en tiempo real.

### Retorno
- `WindowSize | undefined`: El objeto que contiene el ancho (width) y el alto (heigth) de la ventana o undefined si el hook no se ha inicializado todavía.

### Ejemplo de uso:

```javascript
import useWindowSize from './useWindowSize';

function MyComponent() {
  const windowSize = useWindowSize();

  if (windowSize) {
    console.log(`Ancho: ${windowSize.width}, Alto: ${windowSize.height}`);
  } else {
    console.log('El tamaño de la ventana no se ha inicializado todavía.');
  }
}
```

## Función `toString`

Convierte un valor en una cadena de texto o devuelve un valor predeterminado si no es una cadena o es un objeto vacío.

### Parámetros
- `value` (any): El valor que se desea convertir a una cadena de texto.
- `defaultValue` (string, opcional): El valor predeterminado que se retornará si value no es una cadena o es un objeto vacío.

### Ejemplo de uso:

```javascript
import toString from './toString';

const result = toString(42);
console.log(result); // Resultado: "42"

const resultWithDefault = toString({}, "Valor predeterminado");
console.log(resultWithDefault); // Resultado: "Valor predeterminado"
```

## Función `useLocalStorage`

Hook personalizado para gestionar valores en el almacenamiento local (localStorage) de manera segura.

### Parámetros
- `key` (string): Clave para identificar el valor en localStorage.
- `initialValue`(T): Valor inicial que se utilizará si no se encuentra ningún valor en localStorage.

### Retorno
- `[T, (value: T) => void]`: Un array con dos elementos: el valor actual y una función para actualizar el valor.

### Ejemplo de uso:

```javascript
import useLocalStorage from './useLocalStorage';

function MyComponent() {
  const [storedValue, setStoredValue] = useLocalStorage('myKey', 'default');

  // Para obtener el valor almacenado
  console.log(storedValue);

  // Para actualizar el valor almacenado
  setStoredValue('nuevoValor');
}
```
## Funcion `toArray`

Crea un vector (Array) del tipo de dato especificado.

### Parámetros
- `array`(T[] | void): Vector (Array).

### Retorno
- `T[]`: Vector (Array) del tipo especificado.

### Ejemplo de uso:
```javascript
const array = toArray([1, 2, 3]);
console.log(array); // Resultado: [1, 2, 3]

const emptyArray = toArray();
console.log(emptyArray); // Resultado: []
```

## Funcion `replaceAll`

Dada una cadena, reemplaza en dicha cadena el valor de `oldValue` por el valor de `newValue`.

### Parámetros
- `value` (string | null | undefined): Cadena de caracteres.
- `oldValue` (string): Valor antiguo a ser reemplazado por uno nuevo.
- `newValue` (string): Valor nuevo que tomará el lugar del valor antiguo.

### Retorno
- `string`: Cadena de caracteres con ocurrencias reemplazadas.

### Ejemplo de uso:
```javascript
const originalString = "Hoy es un día soleado y hoy es genial.";
const replacedString = replaceAll(originalString, "hoy", "mañana");
console.log(replacedString);
// Resultado: "Mañana es un día soleado y mañana es genial."
```

## Funcion `dateToStr`

Dada una cadena de fecha con formato ISO 8601, elimina de dicha cadena las apariciones de "T" y "Z".

### Parámetros
- `date` (string): Cadena con formato de fecha.

### Retorno
- `string`: Cadena con formato fecha YYYY-MM-DD HH:mm:ss.

### Ejemplo de uso:
```javascript
const isoDate = "2023-10-16T08:30:00Z";
const formattedDate = dateToStr(isoDate);
console.log(formattedDate); // Resultado: "2023-10-16 08:30:00"
```

## Funcion `formatContructorDate`

Dada una fecha en formato ISO 8601, transforma la fecha de formato ISO 8601 a "DD-MM-YYYY HH:MM:sss". El formato de salida dependerá de los parámetros que reciba la función.

### Parámetros
- `fecha` (Date | null | undefined): Fecha de tipo Date con formato ISO 8601.
- `includeTime` (boolean, opcional, por defecto true): True si el formato de salida incluye tiempo "HH:MM", False si no incluye "HH:MM".
- `format` ("-" | "/", opcional, por defecto "/"): Carácter divisor de fecha, puede ser "DD-MM-YYYY HH:MM" o "DD/MM/YYYY HH:MM".
- `days` (number, opcional, por defecto 0): Cantidad de días que serán sumados o restados a los días de la fecha.
- `includeSeconds` (boolean, opcional, por defecto false): True si el formato de salida incluye tiempo ":sss", False si no incluye ":sss".

### Retorno
- `string`: Cadena de fecha con formato "DD-MM-YYYY HH:MM:sss" en su forma extendida, "DD-MM-YYYY" en su forma reducida.

### Ejemplo de uso:
```javascript
const isoDate = "2023-10-16T08:30:00Z";
const formattedDate = formatContructorDate(new Date(isoDate));
console.log(formattedDate); // Resultado: "16-10-2023 08:30:00"
```

## Funcion `formatDate`

Dada una fecha en formato ISO 8601, transforma la fecha de formato ISO 8601 a "DD-MM-YYYY HH:MM:sss". El formato de salida dependerá de los parámetros que reciba la función.

### Parámetros
- `isoDate` (string, opcional): Cadena de fecha con formato ISO 8601.
- `includeTime` (boolean, opcional, por defecto true): True si el formato de salida incluye tiempo "HH:MM", False si no incluye "HH:MM".
- `format` ("-" | "/", opcional, por defecto "/"): Carácter divisor de fecha, puede ser "DD-MM-YYYY HH:MM" o "DD/MM/YYYY HH:MM".
- `days` (number, opcional, por defecto 0): Cantidad de días que serán sumados o restados a los días de la fecha.
- `includeSeconds` (boolean, opcional, por defecto false): True si el formato de salida incluye tiempo ":sss", False si no incluye ":sss".

### Retorno
- `string`: Cadena de fecha con formato "DD-MM-YYYY HH:MM:sss" en su forma extendida, "DD-MM-YYYY" en su forma reducida.

### Ejemplo de uso:
```javascript
const isoDate = "2023-10-16T08:30:00Z";
const formattedDate = formatDate(isoDate);
console.log(formattedDate); // Resultado: "16-10-2023 08:30:00"
```

## Funcion `formatDateToIso`

Dada una fecha en la transforma a formato ISO 8601.

### Parámetros
- `Date` (string): Cadena de fecha.

### Retorno
- `string`: Fecha en formato ISO 8601.

### Ejemplo de uso:
```javascript
const date = "16-10-2023 08:30";
const isoDate = formatDateToIso(date);
console.log(isoDate); // Resultado: "2023-10-16T08:30"
```

## Funcion `formatTime`

Dada una cadena en formato ISO 8601, formatea los datos de tiempo HH:MM con 0 a la izquierda.

### Parámetros
- `isoDate` (string, opcional): Cadena de fecha en formato ISO 8601.

### Retorno
- `string`: Cadena de fecha en formato ISO 8601 con HH:MM formateados.

### Ejemplo de uso:
```javascript
const isoDate = "2023-10-16T08:03:00Z";
const formattedTime = formatTime(isoDate);
console.log(formattedTime); // Resultado: "08:03"
```

## Funcion `diffDate`

Dado un valor cualquiera, analiza y determina su tipo de dato.

### Parámetros
- `valueFrom` (string): Cadena de fecha inicial.
- `valueTo` (string | null | undefined): Cadena de fecha final.
- `type` ("min" | "sec" | "hour" | "day"): Tipo de diferencia (resto) que se quiere calcular.
- `includeNegatives` (boolean): True si se quiere incluir valores negativos, False caso contrario.

### Retorno
- `number`: Número de diferencia (resto) de fechas según el tipo especificado.

### Ejemplo de uso:
```javascript
const startDate = "2023-10-15T08:00:00Z";
const endDate = "2023-10-16T08:30:00Z";
const differenceInHours = diffDate(startDate, endDate, "hour", true);
console.log(differenceInHours); // Resultado: 24
```

## Funcion `typeOf`

Dado un valor cualquiera, analiza y determina su tipo de dato.

### Parámetros
- `value` (any): Valor.

### Retorno
- "" | "array" | "string" | "number" | "object" | "boolean": Tipo de dato del valor.

### Ejemplo de uso:
```javascript
const value1 = 42;
const type1 = typeOf(value1);
console.log(type1); // Resultado: "number"

const value2 = "Hola, mundo";
const type2 = typeOf(value2);
console.log(type2); // Resultado: "string"

const value3 = [1, 2, 3];
const type3 = typeOf(value3);
console.log(type3); // Resultado: "array"
```

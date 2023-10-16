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

## Retorno
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

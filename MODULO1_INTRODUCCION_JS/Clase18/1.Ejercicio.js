// Ejercicio 1: Palíndromo
// Escribe una función que determine si una cadena dada es un palíndromo.
// Un palíndromo es una palabra, frase, número o secuencia de caracteres
// que se lee igual hacia adelante que hacia atrás, ignorando espacios,
// signos de puntuación y mayúsculas/minúsculas.

function esPalindromo(cadena) {
    // eliminar caracteres no alfabeticos y convertir a minusculas
    let cleachain = cadena.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // invertir la cadena limpia
    let turnchain = cleachain.split('').reverse().join('');
    // comparar si la cadena es limpia con su version invertida
    return cleachain === turnchain
}

// Ejemplos

console.log(esPalindromo("¡Hola, mundo!")); // false
console.log(esPalindromo("¡Ojo! corre poco perro cojo")); // true
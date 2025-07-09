"use strict";
// Ejercicio 1: Operaciones básicas con Arrays
// 1. Declara un array de números con los valores [5, 10, 15, 20, 25].
// 2. Imprime el tercer elemento del array.
// 3. Añade el número 30 al final del array.
// 4. Elimina el primer número del array.
// 5. Muestra por consola la longitud actual del array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeros = void 0;
exports.numeros = [5, 10, 15, 20, 25];
// Imprimir el tercer numero
console.log(exports.numeros[2]);
// Añadir el numero 30 al final del array
exports.numeros.push(30);
// Eliminar el primer numero del array
exports.numeros.shift();
// Mostrar la longitud actual del array
console.log(exports.numeros.length);

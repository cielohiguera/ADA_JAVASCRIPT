// Ejercicio 8 Conversión de temperaturas
// Escribe un programa que convierta una temperatura dada en grados celsius a grados Farenheit
// La formula de conversión es F = C X (9/5) + 32
// 1. Pedir al usuario que ingrese la temperatura en celsius
const prompt = require('prompt-sync')();
let celsius = parseFloat(prompt('Ingresa la temperatura en grados celsius: '));
// 2. Conversión de la temperatura a Farenheit
let farenheit = celsius * 9 / 5 + 32;
console.log("La temperatura en grados Farenheit es: ", farenheit);
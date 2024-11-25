// Ejercicio 7: Pide al usuario que ingrese un peso en kilogramos y conviertelo a libras. Muestra el resultado con un mensaje. 
const prompt = require('prompt-sync')();
let weight = parseFloat(prompt('Ingresa tu peso: '));

let libra = (weight * 2.20462);
console.log(`Tu peso en libras es: ${libra}`)
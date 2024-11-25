// Ejercicio 6: Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso
const prompt = require('prompt-sync')();
let year = parseFloat(prompt('Ingresa tu edad: '));
let legal = '';

if (year <= 17) {
    legal = 'Menor de edad';
} else {
    legal = 'Mayor de edad';
}
console.log(legal);
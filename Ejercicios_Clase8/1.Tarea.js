// Ejercicio 1: Calcula el doble de un número
// En este ejercicio, practicarás el uso de varibales y operadores aritméticos. Deberas escribir un programa en JavaScript que:
// 1. Solicitar al usuario que ingrese un número cualquiera.
// 2. Calcule el doble de ese número.
// 3. Muestre el resultado en la consola

const prompt = require('prompt-sync')();

let ingresoNumero = parseFloat(prompt('Ingresa un número: '));
let dobleNumero = (ingresoNumero * 2);
console.log('El resultado doble del número es: ', dobleNumero);
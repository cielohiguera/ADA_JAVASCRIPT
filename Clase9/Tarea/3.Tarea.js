// Ejercicio 3: Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos (true o false)
// y muestra el resultado de diversas condiciones

// 1. Pedir que el usuario ingrese dos valores booleanos
const prompt = require('prompt-sync')();

let condicion1 = prompt('Ingresa la primera variable booleana: ');
let condicion2 = prompt('Ingresa la segunda variable booleana: ');

// 3. Resultado de diversas condiciones
console.log(`Condicion 1 AND Condicion 2: ${condicion1 && condicion2}`);
console.log(`Condicion 1 OR Condicion 2: ${condicion1 || condicion2}`);
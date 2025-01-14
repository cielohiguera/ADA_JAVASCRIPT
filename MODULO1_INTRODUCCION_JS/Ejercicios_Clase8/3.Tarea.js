// Ejercicio 3. Suma de dos números ingresados por el usuario
// 1. Pedir al usuario que ingrese dos números
const prompt = require('prompt-sync')();

let numeroUno = parseFloat(prompt('Ingresa el primer número: '));
let numeroDos = parseFloat(prompt('Ingresa el segundo número: '));
// 2. Suma de ambos números
let sumaNumeros = (numeroUno + numeroDos);
// 3. Muestre el resultado de la suma
console.log('La suma de los numeros ingresados es: ', sumaNumeros);
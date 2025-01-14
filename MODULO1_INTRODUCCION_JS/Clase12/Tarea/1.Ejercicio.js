// Ejercicio 1: While
// Crear un programa que solicite al usuario ingresar numeros continuamente hasta que el usuario ingrese un numero negativo. 
// Luego imprime la suma de todos los numeros ingresados
const prompt = require('prompt-sync')();

let suma = 0;
let number = parseFloat(prompt("Ingresa un numero: "));

while (number >= 0) {
    suma += number;
    number = parseFloat(prompt("Ingrese un numero: "));
}

console.log(`La suma de los numeros ingresados es: ${suma}`);
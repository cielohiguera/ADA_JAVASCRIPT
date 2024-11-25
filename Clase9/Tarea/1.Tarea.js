// Ejercicio 1: Declara dos variable númericas numero1 y numero2. Pide al usuario que ingrese dos números y muestre cual es el mayor

// 1. Pedir al usuario a ingresar las variables númericas
const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Ingresa el primer número: '));
let numero2 = parseFloat(prompt('Ingresa el segundo número: '));

// 2. Condiciones de las variables
if (numero1 > numero2) {
    console.log(`El numero ${numero1} es mayor que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`El numero ${numero2} es mayor que ${numero1}`);
} else {
    console.log(`El numero ${numero1} es igual que ${numero2}`);
}
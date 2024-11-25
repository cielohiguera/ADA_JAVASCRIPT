// Ejercicio 5: Escribe un programa que pida al usuario que ingrese tres números y determine cual es el mayor de los tres

const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese los tres numeros

let num1 = parseFloat(prompt('Ingresa el primer numero: '));
let num2 = parseFloat(prompt('Ingresa el segundo numero: '));
let num3 = parseFloat(prompt('Ingresa el tercer numero: '));

let mayor = '';
// 2. Condicionales 

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

// 3. Resultado
console.log(`El numero mayor es: ${mayor}`);
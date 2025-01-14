// Ejercicio 6: La tabla de multiplicar
// Crea un programa que le pida al usuario un numero y luego imprimir su taba de multiplicar desde 1 hasta 10. Usando un ciclo for
const prompt = require('prompt-sync')();
// Solicitar al usuario que ingrese un numero
let numeroMultiplicacion = parseInt(prompt('Ingresa un número entero para calcular su tabla de multiplicar: '));
// Paso 2: Realizar la tabla de multiplicar

console.log(`La tabla de multiplicar ${numeroMultiplicacion} es la siguiente: `);
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroMultiplicacion} x ${i} = ${numeroMultiplicacion * i}`);
}
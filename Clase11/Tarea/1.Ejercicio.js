// Ejercicio 1: ¿Positivo, negativo o cero?
// Vamos a trabajar con números y aprender a clasificarlos. Escribe un rograma que le pida al usuario un número cualquiera. 
// El programa deberá analizar si el número ingresado es positivo, negativo o cero.
// Utiliza las estructura if para resolverlo y muestra un mensaje en cada caso.
// Paso 1: Pedir al usuario que ingrese un númerpo
const prompt = require('prompt-sync')();
let numeroUsuario = parseFloat(prompt('Ingresa un numero: '));
// Paso 2: Utilizar la estructura if para saber si el número ingresado es positivo, negativo o cero
if (numeroUsuario > 0) {
    console.log("El numero es positivo. Esto significa que esta por encima de cero.");
} else if (numeroUsuario < 0) {
    console.log("El numeroes negativa. Esto significa que esta por debajo del cero.");
} else {
    console.log("El numero es cero. Esto significa que no tiene valor positivo ni negativo.");
}
// Ejercicio 8: Encuentra los múltiplos de un número
// Escribe un programa que le pida al usuario un numero entero positivo y muestre todos los multiplos de ese numero entre 1 y 100.
// Utiliza un ciclo for para resolverlo. 
// Paso 1: pedir al usuario ingresar dos numeros
const prompt = require('prompt-sync')();
// Solicitar al usuario que ingrese un numero entero
let numeroUsuario = parseInt(prompt('Ingresa un número entero: '));

// verificar si el numero es positivo
if (numeroUsuario > 0) {
    console.log(`Los numeros pares del numero ${numeroUsuario} entre 1 y 100 son:`);

    // Realiza el ciclo for para encontrar los pares
    for (let i = 1; i <= 100; i++)
    if (i % numeroUsuario === 0) {
        console.log(i);
    }
} else {
    console.log("Ingresa un numero entero positivo")
}
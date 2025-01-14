// Ejercicio 5: Encuentra los números pares entre dos valores
// El programa debe mostrar todas los números pares que se encuentre entre dos valores, incluyendo
// los límites si son pares.
// Paso 1: pedir al usuario
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese dos números enteros
let numeroUno = parseInt(prompt('Ingresa un número entero: '));
let numeroDos = parseInt(prompt('Ingresa un número entero: '));

// Verificar que el rango sea válido
if (numeroUno > numeroDos) {
    console.log("El número inicial no puede ser mayor que el número final. Intenta de nuevo.");
} else {
    console.log(`Los números pares entre ${numeroUno} y ${numeroDos} son:`);

    // Usamos un ciclo for para recorrer el rango
    for (let i = numeroUno; i <= numeroDos; i++) {
        if (i % 2 === 0) {
            console.log(i); // Imprimir solo los números pares
        }
    }
}
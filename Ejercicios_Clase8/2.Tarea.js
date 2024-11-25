// Ejercicio 2: Verificar si un número es positivo, negativo o cero
// En este ejercicio se usará el uso de condicionales (if, else). 
// En este ejercicio se solicitará al usuario un número y se verificará si el número es positivo, negativo o igual a cero.
// Se mostrará en pantalla indicando cual es el caso

const prompt = require('prompt-sync')();

// 1. Solicitar al usuario que ingrese un número cualquiera
let numeroSolicitado = parseFloat(prompt('Ingresa un numero: '));
let naturalezaNumero = '';

// 2. Verificar si el número es positivo, negativo o cero
if (numeroSolicitado > 0) {
    naturalezaNumero = 'Positivo';
}
    else if (numeroSolicitado < 0) {
        naturalezaNumero = 'Negativo';
    }
    else {
    naturalezaNumero = 'Cero';
}
// 3. Mensaje indicando cuál es el caso
console.log('La natualeza del numero es: ', naturalezaNumero);
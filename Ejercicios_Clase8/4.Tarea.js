// Ejercicio 4: Determinar si un número es par o impar
// 1. Solicitar que el usuario ingrese si un numero es impar o par
const prompt = require('prompt-sync')();
let numeroIngresado = parseFloat(prompt('Ingresa un numero: '));
let resultadoNumero = '';
// 2. Determinar si un numero es par o impar
if (numeroIngresado % 2 == 0) {
    resultadoNumero = 'Par';
}
else {
    resultadoNumero ='Impar';
}
// 3. Mensaje al usuario
console.log('El numero es: ', resultadoNumero);
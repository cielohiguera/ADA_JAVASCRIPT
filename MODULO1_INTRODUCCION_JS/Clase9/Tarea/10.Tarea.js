// Ejercicio 10: Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondientre. Si el
// numero no esta dentro de ese rango, muestra un mensaje error

const prompt = require('prompt-sync')();

// 1. Pedir al usuario ingresar un número de la semana
let numero = parseFloat(prompt('Ingresa un número del 1 al 7: '));

// 2. Día de la semana
let dia;
// 3. Determinar que dia de la semana es de acuerdo al número
if (numero === 1) {
    dia = 'Lunes';
} else if (numero === 2) {
    dia = 'Martes';
} else if (numero === 3) {
    dia = 'Miércoles';
} else if (numero === 4) {
    dia = 'Jueves';
} else if (numero === 5) {
    dia = 'Viernes';
} else if (numero === 6) {
    dia = 'Sábado';
} else if (numero === 7) {
    dia = 'Domingo';
} else {
    console.log('Error: El número ingresado no está dentro del rango de 1 a 7.');
}

// Resultado
console.log(`El día correspondiente al número ${numero} es: ${dia}`);
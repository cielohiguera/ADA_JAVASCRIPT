// Ejercicio 3 Constantes/Validación de edad 
// Validar a usuarios encuestados, en el que tenga como edad minima 18 años y edad máxima 99 años.
// 1. Crear una constante lla,ada EDAD_MINIMA Y OTRA EDAD_MÁXIMA
const EDAD_MINIMA = 18;
const EDAD_MÁXIMA = 99;
// 2. Pedir al usuario que ingrese su edad

const prompt = require('prompt-sync')();
let ageUsuario = parseInt(prompt('Ingresa tu edad: '));

// 3. Validar la edad del usuario

if (ageUsuario >= EDAD_MINIMA && ageUsuario <= EDAD_MÁXIMA) {
    console.log("Tu edad esta permitida dentro del rango");
} else {
    console.log("Tu edad no esta permitida dentro del rango");
}
// Ejercicio 4: Declara una variable nombre y pide al usuario que ingre su nombre. Verifica si el nombre ingresado es igual a tu nombre

// 1. Pedir que el usuario ingrese su nombre
const prompt = require('prompt-sync')();
let name = prompt('Ingresa tu nombre: ');
let myName = 'Cielo';

if (name == myName) {
    console.log('Super, tenemos el mismo nombre!')
}
else {
    console.log('Tenemos diferentes nombres')
}
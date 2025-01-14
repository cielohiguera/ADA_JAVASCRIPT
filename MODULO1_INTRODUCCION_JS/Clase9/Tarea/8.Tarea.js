// Ejercicio 8: Pida al usuario que ingrese las longitudes de los tres lados de un triangulo. Determina y muestra si el triangulo
// es equilatero, isoceles o escaleno

const prompt = require('prompt-sync')();

// 1. Pedir al usuario que ingrese las longitudes del triangulo

let lado1 = parseFloat(prompt('Ingresa el primer lado del triangulo: '));
let lado2 = parseFloat(prompt('Ingresa el segundo lado del triangulo: '));
let lado3 = parseFloat(prompt('Ingresa el tercer lado del triangulo: '));


if (lado1 == lado2 && lado1 == lado3) {
    console.log('El triangulo es equilatero');
}
else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log('El triangulo es isosceles');
}
else {
    console.log('El triangulo es escaleno');
}
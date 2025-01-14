// Ejercicio 9: Define una constante Pi con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su
// área y perímetro utilizando la constante PI

const prompt = require('prompt-sync')();
const pi = 3.14159;
// 1. Pedir al usuario ingresar el radio del circulo
let circle = parseFloat(prompt('Ingresa el radio del circulo: '));
// 2. Determinar el area y el perimetro
let area = pi * Math.pow(circle, 2);
let perimetro = 2 * pi * circle;
// 3. Resultado
console.log(`El área del círculo es: ${area}`);
console.log(`El perímetro del círculo es: ${perimetro}`);
// Ejercicio 2: Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores númericos de tu elección. Pide al usuario que ingrese un
// número y verifica si esta dentro del rango definido por las constantes.

// 1. Pedir al usuario a ingresar las variables númericas
const prompt = require('prompt-sync')();

let number = parseFloat(prompt('Ingresa un número: '));
// 2. Definir los rangos

const rangoMaximo = 100;
const rangoMinimo = 0;

// 3. Condiciones para saber si el número ingresado se encuentra dentro del rango
if (number > rangoMaximo) {
    console.log("El numero se encuentra fuera del rango máximo, favor de ingresar otro")
} 
else {
    console.log("El numero se encuentra fuera del rango mínimo, favor de ingresar otro ")
}

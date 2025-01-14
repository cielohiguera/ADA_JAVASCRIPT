// Ejercicio 4: ¿Es par o impar?
// Los numeros pueden ser pares o impares. Escribe un programa que le pida al usuario un numero y determine
// si es par o impar. 
// Paso 1: Pedir al usuario que ingrese 
const prompt = require('prompt-sync')();
let numeroConsigna = parseFloat(prompt('Ingresa un numero para verificar si es par o impar: '));
// Paso 2: Determinar el numero es par o impar
if (numeroConsigna % 2 === 0){
    console.log("El numero ingresado es par. Lo que significa que se puede dividir entre dos");
} else {
    console.log("El numero ingresado es impar. Lo que significa que no se pueda dividir en partes iguales.")
}
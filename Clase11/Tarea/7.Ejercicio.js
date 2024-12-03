// Ejercicio 7: Calculadora simple
// Crear un programa que le pida al usuario dos números y una operacion matematica a realizar: suma, resta, multiplicación o división
// Segun la operacion ingresada, el programa deberá calcular y mostrar el resultado.
// Paso 1: pedir al usuario ingresar dos numeros
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese dos números enteros
let numeroUno = parseInt(prompt('Ingresa un número entero: '));
let numeroDos = parseInt(prompt('Ingresa un número entero: '));
let operacion = prompt("Ingresa la operacion a realizar: ");
// Realizar la estructura para switch
switch (operacion) {
    case "suma":
     console.log(`La suma de ${numeroUno} y ${numeroUno} es = ${numeroUno + numeroDos}`);
     break;
    case "resta":
        console.log(`La resta de ${numeroUno} y ${numeroUno} es = ${numeroUno - numeroDos}`)
        break;
    case "multiplicacion":
        console.log(`La multiplicacion de ${numeroUno} y ${numeroUno} es = ${numeroUno * numeroDos}`)
        break;
    case "division":
        if (numeroDos !==0 ) {
            console.log(`La division de ${numeroUno} y ${numeroUno} es = ${numeroUno / numeroDos}`);
        } else {
            console.log("Error. El numero no se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operacion no reconocida, favor elige suma, resta, multiplicacion o division");
}
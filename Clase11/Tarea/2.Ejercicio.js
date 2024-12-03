// Ejercicio 2: Semáforo inteligente
// Escribe un programa que le pida al usuario ingresar un número un color del semáforo: rojo, amarillo o verde.
// Dependiendo del color ingresado, el programa debe imprimir una acción
// Paso 1: Pedir al usuario que ingrese el color
const prompt = require('prompt-sync')();
let semaforo = prompt("Ingresa el color del semaforo: ");
// Paso 2: Imprimir la acción
switch (semaforo) {
    case "rojo":
        console.log("Alto, no puedes avanzar");
        break
    case "amarillo":
        console.log("Precaucion, preparate para avanzar");
        break
    case "verde":
        console.log("Avanza con seguridad");
        break
    default:
     console.log("Color no reconocido, ingresa rojo, amarrillo o verde")
}
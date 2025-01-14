// Ejercicio 3: Ciclo For
// Nuestra tarea es contar la cantidad de numeros impares que hay desde el numero 0 hasta un numero x (inclusive).
// Para eso, debes seguir los siguientes pasos:
// 1. Solicitar al usuario que ingrese un numero X
// 2. Inicializar una variable para contar los numeros impares
// 3. Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
// 4. Dentro del ciclo, verificar si el número es impar
// 5. Si el número es impar, incrementar el contador de números impares
// 6.  Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.
// 7. Utiliza  el operador módulo (%) para verificar si un número es impar.
// 8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debe imprimir:
// “La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5”

const prompt = require('prompt-sync')();

let numeroUsuario = parseFloat(prompt("Ingresa un numero: "));
let impares = 0;

for (let i = 0; i <= numeroUsuario; i++) {
    if (i % 2 !== 0) {
        impares++;
    }
}
console.log("La cantidad de números impares desde 0 hasta " + numeroUsuario + " (inclusive) es: " + impares);
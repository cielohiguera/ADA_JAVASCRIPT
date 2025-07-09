"use strict";
// Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
// Implementa una clase Calculadora que tenga un método sumar. El método debe 
// estar sobrecargado para permitir la suma de:
// • Dos números enteros.• Tres números enteros.
// • Dos cadenas, concatenando las dos cadenas
class Calculadora {
    // Implementación única
    sumar(a, b, c) {
        if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
            return a + b + c;
        }
        else if (typeof a === "number" && typeof b === "number" && c === undefined) {
            return a + b;
        }
        else if (typeof a === "string" && typeof b === "string" && c === undefined) {
            return a + b;
        }
        else {
            console.log("Error: Tipos de datos no soportados.");
            return null;
        }
    }
}
// Pruebas
const calc = new Calculadora();
console.log(calc.sumar(5, 7)); // Resultado: 12
console.log(calc.sumar(1, 2, 3)); // Resultado: 6
console.log(calc.sumar("Hola, ", "mundo!")); // Resultado: "Hola, mundo!"

"use strict";
// POLIMORFISMO
// Ejercicio 7: Herencia y Polimorfismo con Clases Abstractas y Métodos
// SobrecargadosCrea una clase abstracta InstrumentoMusical con un método tocar. Crea dos
// clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el
// instrumento de manera diferente. Además, agrega una sobrecarga del método
// tocar en la clase base para permitir tocar con o sin acompañamiento.
class InstrumentoMusical {
}
class Guitarra extends InstrumentoMusical {
    tocar(conAcompaniamiento) {
        if (conAcompaniamiento) {
            console.log("Tocando la guitarra con acompañamiento");
        }
        else {
            console.log("Tocando la guitarra sin acompañamiento");
        }
    }
}
class Piano extends InstrumentoMusical {
    tocar(conAcompaniamiento) {
        if (conAcompaniamiento) {
            console.log("Tocando el piano con acompañamiento");
        }
        else {
            console.log("Tocandso el piano sin acompañamiento");
        }
    }
}
// Pruebas
const guitarra = new Guitarra();
guitarra.tocar(); // Tocando la guitarra sin acompañamiento
guitarra.tocar(true); // Tocando la guitarra con acompañamiento
const piano = new Piano();
piano.tocar();
piano.tocar(true);

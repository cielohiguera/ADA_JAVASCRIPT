"use strict";
// Ejercicio 4: Clases y Objetos1. Define una clase llamada Animal con propiedades nombre y tipo, y un
// método hacerSonido().
// 2. Crea una instancia de la clase Animal y llama al método.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    // Metodo de hacerSonido()
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}
exports.Animal = Animal;
const gato = new Animal('Garra', "Gato");
gato.hacerSonido();

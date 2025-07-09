"use strict";
// Ejercicio 5: Interfaz
// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
// método presentarse().
// 2. Crea una clase llamada Persona que implemente esta interfaz y
// proporciona la implementación del método presentarse().
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} anios`);
    }
}
exports.Persona = Persona;
// Ejemplo de uso
const persona1 = new Persona("Ana", 30);
persona1.presentarse();

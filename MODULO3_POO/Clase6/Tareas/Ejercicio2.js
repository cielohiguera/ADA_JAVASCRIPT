"use strict";
// Ejercicio 2: Herencia Simple con Acceso
// Consigna: Crea una clase base Maestro con propiedades protegidas nombre y
// materia, y un método enseñar(). Luego, crea una clase derivada
// MaestroMatematicas que extienda de Maestro y sobrescriba el método
// enseñar() para imprimir un mensaje específico de matemáticas
class Maestro {
    constructor(nombre, materia) {
        this.nombre = nombre;
        this.materia = materia;
    }
    // Metodo de enseñar
    enseñar() {
        console.log(`El maestro ${this.nombre} enseña la materia de ${this.nombre}`);
    }
}
class MaestroMatematicas extends Maestro {
    constructor(nombre) {
        super(nombre, "Matematicas");
    }
    enseñar() {
        console.log(`La maestra ${this.nombre} esta explicando ecuaciones diferenciales`);
    }
}
// Uso de método
const profesor = new MaestroMatematicas("Laura");
profesor.enseñar();

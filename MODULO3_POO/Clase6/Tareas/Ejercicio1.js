"use strict";
// Ejercicio 1: Herencia Simple
// Consigna: Define una clase base Torta que tenga propiedades generales como
// nombre y tipo, y un método hacerDescripcion() que devuelva una descripción
// general de la torta. Luego, crea una clase derivada TortaDeChocolate que
// extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva
// "Soy una torta de chocolate, deliciosa y suave."
class Torta {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    hacerDescripcion() {
        console.log(`Esta torta ${this.nombre} es conocida como ${this.tipo}`);
    }
}
class TortaDeChocolate extends Torta {
    constructor(nombre) {
        // Llama al constructor de la clase base con el tipo predefinido
        super(nombre, 'chocolate');
    }
    hacerDescripcion() {
        console.log(`Soy una torta de chocolate, deliciosa y suave.`);
    }
}
const miTorta = new TortaDeChocolate('Pastel');
miTorta.hacerDescripcion();

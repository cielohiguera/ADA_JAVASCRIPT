"use strict";
// Ejercicio 6: Uso de this
// 1. Crea una clase llamada Mariposa con propiedades nombre y color, y un
// método volar() que use this para referirse a las propiedades de la
// instancia.
// 2. Crea una instancia de la clase y llama al método
class Mariposa {
    // Constructor
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    volar() {
        console.log(`La mariposa ${this.nombre} de color ${this.color} esta volando.`);
    }
}
// Crear instancia
const mariposa1 = new Mariposa('Monarca', 'Naranja');
mariposa1.volar();

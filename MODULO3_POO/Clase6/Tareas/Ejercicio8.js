"use strict";
// Ejercicio 2: Clases Abstractas - Sistema de Vehículos
// Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
// abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
// los modificadores de acceso para controlar la visibilidad de las propiedades.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(velocidad) {
        this.velocidad = velocidad;
    }
}
exports.Vehiculo = Vehiculo;
// Clase concreta de Auto
class Auto extends Vehiculo {
    mover() {
        console.log(`El auto se mueve a una velocidad de ${this.velocidad} km/h.`);
    }
}
class Bicicleta extends Vehiculo {
    mover() {
        console.log(`La bicicleta se mueve a una velocidad de  ${this.velocidad} km/h.`);
    }
}
const miAuto = new Auto(120);
miAuto.mover();
const miBici = new Bicicleta(25);
miBici.mover();

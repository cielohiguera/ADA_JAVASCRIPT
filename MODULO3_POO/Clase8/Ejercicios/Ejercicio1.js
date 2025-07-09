"use strict";
// Abstracción
//  Ejercicio 7: Comparación Completa - Sistema de Transporte Público
// Diseña un sistema que combine interfaces y clases abstractas para gestionar un
// transporte público.
// • Crea una clase abstracta Transporte con un método abstracto mover().
// • Define dos interfaces:
// o Electrico con el método cargarBateria().
// o Combustible con el método llenarTanque().
// • Implementa dos clases:o AutobusElectrico: Extiende de Transporte e implementa Electrico.
// o Taxi: Extiende de Transporte e implementa Combustible
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transporte = void 0;
// Clase abstracta Transporte
class Transporte {
    constructor(pasajeros) {
        this.pasajeros = pasajeros;
    }
    // Método concreto para descibir el transporte
    describir() {
        console.log(`Este transporte lleva ${this.pasajeros} pasajeros`);
    }
}
exports.Transporte = Transporte;
// Clase autobusElectrico que extiende transporte e implementa el electrico
class AutobusElectrico extends Transporte {
    mover() {
        console.log(`El autobus alectrico se mueve por la ciudad`);
    }
    cargarBateria() {
        console.log(`Cargando la bateria del automovil`);
    }
}
// Clase taxi que extiende transporte e implementa combustible
class Taxi extends Transporte {
    mover() {
        console.log(`El taxi se mueve por la ruta`);
    }
    llenarTanque() {
        console.log("Llenando el tanque");
    }
}
// Prueba
const autobus = new AutobusElectrico(30);
autobus.describir();
autobus.cargarBateria();
autobus.mover();
const taxi = new Taxi(4);
taxi.describir();
taxi.llenarTanque();
taxi.mover();

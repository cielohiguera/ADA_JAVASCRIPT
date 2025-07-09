"use strict";
// Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
// Diseña un sistema de transporte público. Define:
// • Una interfaz VehiculoElectrico con el método cargarBateria().
// • Una clase abstracta Transporte con el método abstracto mover().
// Implementa ambas estructuras en una clase concreta AutobusElectrico.
// Clase abstracta con comportamiento general de transporte
class Transporte {
    constructor(capacidadPasajeros) {
        this.capacidadPasajeros = capacidadPasajeros;
    }
}
// Clase concreta que hereda de Transporte e implementa VehiculoElectrico
class AutobusElectrico extends Transporte {
    constructor(capacidadPasajeros, nivelBateria) {
        super(capacidadPasajeros);
        this.nivelBateria = nivelBateria;
    }
    // Implementación del método abstracto mover()
    mover() {
        if (this.nivelBateria > 20) {
            console.log(`El autobús se está moviendo con ${this.nivelBateria}% de batería.`);
        }
        else {
            console.log("Batería baja. Necesita recarga antes de moverse.");
        }
    }
    // Implementación del método de la interfaz
    cargarBateria() {
        console.log("Cargando batería del autobús...");
        this.nivelBateria = 100;
        console.log("Batería completamente cargada.");
    }
}
// Prueba
const bus = new AutobusElectrico(40, 15);
bus.mover(); // Batería baja
bus.cargarBateria(); // Carga la batería
bus.mover(); // Ahora sí se mueve

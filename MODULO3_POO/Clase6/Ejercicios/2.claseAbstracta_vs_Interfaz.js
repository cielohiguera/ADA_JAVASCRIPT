"use strict";
// Ejemplos Practico
// Imaginemos un sistema de gestion de transporte donde queremos definir vehiculos que se mueven de
// diferentes maneras, usaremos una clase abstracta "vehiculo" para definir el comportamiento
// general de todos los vehiculos y crearemos una interfaz "electrico" para los vehiculos que 
// pueden cargarse electronicamente
// Clase abstracta para todos los vehiculos
class Vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
    // método concreto
    describir() {
        console.log(`Este es un vehiculo tipo ${this.tipo}`);
    }
}
// Clase concreta que extende de la clase abstracta e implementa una interface
class AutoElectrico extends Vehiculo {
    constructor() {
        super("Auto electrico");
    }
    moverse() {
        console.log("El auto se mueve silenciosamente...");
    }
    cargarBateria() {
        console.log(`Cargando la bateria del auto...`);
    }
}
const tesla = new AutoElectrico();
tesla.describir();
tesla.moverse();
tesla.cargarBateria();

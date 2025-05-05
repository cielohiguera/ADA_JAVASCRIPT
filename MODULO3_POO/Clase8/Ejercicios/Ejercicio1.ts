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

// Interfaz Electrico
interface Electrico {
    cargarBateria(): void
}

// Interfaz Combustible
interface Combustible {
    llenarTanque(): void
}

// Clase abstracta Transporte
export abstract class Transporte {
    constructor(protected pasajeros: number) {}
    // Método abstracto que deben implementar las subclases
    abstract mover(): void
    // Método concreto para descibir el transporte
    describir(): void {
        console.log(`Este transporte lleva ${this.pasajeros} pasajeros`);
    }
}

// Clase autobusElectrico que extiende transporte e implementa el electrico
class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
        console.log(`El autobus alectrico se mueve por la ciudad`);
    }
    cargarBateria(): void {
        console.log(`Cargando la bateria del automovil`);
    }
}

// Clase taxi que extiende transporte e implementa combustible
class Taxi extends Transporte implements Combustible {
    mover(): void {
        console.log(`El taxi se mueve por la ruta`);
    }
    llenarTanque(): void {
        console.log("Llenando el tanque");
    }
}

// Prueba
const autobus = new AutobusElectrico(30)
autobus.describir()
autobus.cargarBateria()
autobus.mover()


const taxi = new Taxi(4)
taxi.describir()
taxi.llenarTanque()
taxi.mover()
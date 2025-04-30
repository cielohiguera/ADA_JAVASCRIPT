// Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
// Diseña un sistema de transporte público. Define:
// • Una interfaz VehiculoElectrico con el método cargarBateria().
// • Una clase abstracta Transporte con el método abstracto mover().
// Implementa ambas estructuras en una clase concreta AutobusElectrico.

interface VehiculoElectrico {
    cargarBateria(): void;
}

// Clase abstracta con comportamiento general de transporte
abstract class Transporte {
    protected capacidadPasajeros: number;

    constructor(capacidadPasajeros: number) {
        this.capacidadPasajeros = capacidadPasajeros;
    }

    // Método abstracto que deben implementar las subclases
    abstract mover(): void;
}

// Clase concreta que hereda de Transporte e implementa VehiculoElectrico
class AutobusElectrico extends Transporte implements VehiculoElectrico {
    private nivelBateria: number;

    constructor(capacidadPasajeros: number, nivelBateria: number) {
        super(capacidadPasajeros);
        this.nivelBateria = nivelBateria;
    }

    // Implementación del método abstracto mover()
    mover(): void {
        if (this.nivelBateria > 20) {
            console.log(`El autobús se está moviendo con ${this.nivelBateria}% de batería.`);
        } else {
            console.log("Batería baja. Necesita recarga antes de moverse.");
        }
    }

    // Implementación del método de la interfaz
    cargarBateria(): void {
        console.log("Cargando batería del autobús...");
        this.nivelBateria = 100;
        console.log("Batería completamente cargada.");
    }
}

// Prueba
const bus = new AutobusElectrico(40, 15);
bus.mover();         // Batería baja
bus.cargarBateria(); // Carga la batería
bus.mover();         // Ahora sí se mueve
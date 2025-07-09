"use strict";
// Ejercicio 9: Sistema de Gestión de Vehículos
// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
// o Vehiculo: Clase base con propiedades como marca, modelo y un
// método para mostrar información del vehículo.
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para
// tipoCombustible y un método para mostrar la información completa
// del coche.
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
// para cilindrada y un método para mostrar la información completa
// de la motocicleta
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = void 0;
// Clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarInformacion() {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}
// Clase Coche que hereda de Vehiculo
class Coche extends Vehiculo {
    constructor(marca, modelo, tipoCombustible) {
        super(marca, modelo); // Llama al constructor de Vehiculo
        this.tipoCombustible = tipoCombustible;
    }
    mostrarInformacion() {
        console.log(`Coche: ${this.marca} ${this.modelo} | Combustible: ${this.tipoCombustible}`);
    }
}
exports.Coche = Coche;
// Clase Motocicleta que hereda de Vehiculo
class Motocicleta extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo); // Llama al constructor de Vehiculo
        this.cilindrada = cilindrada;
    }
    mostrarInformacion() {
        console.log(`Motocicleta: ${this.marca} ${this.modelo} | Cilindrada: ${this.cilindrada}cc`);
    }
}
const vehiculoGenerico = new Vehiculo("Ford", "F-150");
vehiculoGenerico.mostrarInformacion();
const miCoche = new Coche("Toyota", "Corolla", "Gasolina");
miCoche.mostrarInformacion();
const miMoto = new Motocicleta("Yamaha", "MT-03", 321);
miMoto.mostrarInformacion();

"use strict";
// 1. Ejercicio de Coche
// Diseña una clase Coche que represente un vehículo. Esta clase debe tener 
// propiedades privadas para marca, modelo, año, y kilometraje. Implementa 
// métodos para encender el coche y realizar un viaje, que incrementen el 
// kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se 
// inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta 
// establecer un año o kilometraje no válido, imprime un mensaje indicando el 
// error
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = void 0;
class Coche {
    constructor(marca, modelo, anio, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        if (anio >= 1886) {
            this.anio = anio;
        }
        else {
            console.log("Error: El año debe ser igual o mayor a 1886.");
            this.anio = 1886;
        }
        if (kilometraje >= 0) {
            this.kilometraje = kilometraje;
        }
        else {
            console.log("Error. El kilometraje no puede ser negativo.");
            this.kilometraje = 0;
        }
    }
    encender() {
        console.log(`El coche ${this.marca}, ${this.modelo} está encendido`);
    }
    realizarViaje(distancia) {
        if (distancia > 0) {
            this.kilometraje += distancia;
            console.log(`Viaje de ${distancia} km realizado. Kilometraje total ${this.kilometraje} km.`);
        }
        else {
            console.log("Error: La distancia del viaje tiene que ser mayor a 0");
        }
    }
    mostrarInfo() {
        console.log(`Marca: ${this.modelo}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Kilometraje: ${this.kilometraje} km`);
    }
}
exports.Coche = Coche;
const miCoche = new Coche("Ford", "Mustang", 2022, 12000);
miCoche.encender();
miCoche.realizarViaje(100);
miCoche.mostrarInfo();

"use strict";
// Ejercicio 7: Modificadores de Acceso
// 1. Define una clase Coche con propiedades marca, modelo (públicas) y
// precio (privada).
// 2. Implementa un método para mostrar la información del coche que acceda
// a las propiedades públicas y no a la privada directamente.
class Coche {
    // Constructor
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    // Metodo que acceda a las propiedades
    mostrarInformacion() {
        console.log(`Coche: ${this.marca}, ${this.modelo}`);
    }
    obtenerPrecio() {
        return this.precio;
    }
}
const miCoche = new Coche("Toyota", "Corolla", 25000);
miCoche.mostrarInformacion();
console.log(`Precio (accedido con método): $${miCoche.obtenerPrecio()}`);

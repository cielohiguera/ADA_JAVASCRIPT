"use strict";
// 6. Ejercicio de Supermercado
// Crea una clase Producto que contenga propiedades privadas como nombre, 
// precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea 
// negativo y que cantidad no sea menor que 0.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(nombre, precio, cantidad) {
        this._nombre = nombre;
        this.precio = precio; // Usamos setter
        this.cantidad = cantidad; // Usamos setter
    }
    // Getter y Setter para nombre
    get nombre() {
        return this._nombre;
    }
    set nombre(valor) {
        this._nombre = valor;
    }
    // Getter y Setter para precio
    get precio() {
        return this._precio;
    }
    set precio(valor) {
        if (valor >= 0) {
            this._precio = valor;
        }
        else {
            console.log("Error: El precio no puede ser negativo.");
            this._precio = 0;
        }
    }
    // Getter y Setter para cantidad
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(valor) {
        if (valor >= 0) {
            this._cantidad = valor;
        }
        else {
            console.log("Error: La cantidad no puede ser menor que 0.");
            this._cantidad = 0;
        }
    }
    mostrarInfo() {
        console.log(`Producto: ${this._nombre}`);
        console.log(`Precio: $${this._precio}`);
        console.log(`Cantidad: ${this._cantidad}`);
    }
}
exports.Producto = Producto;
// Prueba
const producto1 = new Producto("Manzanas", 2.5, 30);
producto1.mostrarInfo();
producto1.precio = -10; // Error controlado
producto1.cantidad = -5; // Error controlado
producto1.mostrarInfo();

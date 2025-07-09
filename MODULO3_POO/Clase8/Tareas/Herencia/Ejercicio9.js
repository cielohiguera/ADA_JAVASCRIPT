"use strict";
// Ejercicio 9: Sistema de Tienda en Línea
// Consigna: Desarrolla un sistema para una tienda en línea. Crea una clase base
// Producto que tenga propiedades como nombre, precio, y un método
// detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas
// deben sobrescribir el método detallesProducto() con información más
// específica.
// Crea una interfaz Envio que defina el método calcularEnvio(). La clase
// Electronico debe implementar esta interfaz y el cálculo del envío será un 10%
// del precio del producto.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
// Clase base del producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    detallesProducto() {
        return `Producto: ${this.nombre}, precio: $${this.precio.toFixed(2)}`;
    }
}
exports.Producto = Producto;
// Clase derivada
class Electronico extends Producto {
    constructor(nombre, precio, marca) {
        super(nombre, precio);
        this.marca = marca;
    }
    detallesProducto() {
        return `Electronico: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio.toFixed(2)}`;
    }
    calcularEnvio() {
        return this.precio * 0.10;
    }
}
// Clase derivada ropa
class Ropa extends Producto {
    constructor(nombre, precio, talla) {
        super(nombre, precio);
        this.talla = talla;
    }
    detallesProducto() {
        return `Ropa ${this.nombre}, Talla: ${this.talla}, Precio: $${this.precio.toFixed(2)}`;
    }
}
const laptop = new Electronico("Laptop Dell", 1200, "Dell");
const camiseta = new Ropa("Camiseta deportiva", 25, "M");
console.log(laptop.detallesProducto());
console.log(`Costo de envío: $${laptop.calcularEnvio().toFixed(2)}`);
console.log("-----------------------------------");
console.log(camiseta.detallesProducto());

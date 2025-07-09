"use strict";
// Ejercicio 9: Sistema de Gestión de Compras
// Crea un sistema que gestione productos y órdenes de compra. Usa una clase
// abstracta Producto, clases concretas Electrónico y Alimento, y una clase
// OrdenCompra que contenga múltiples productos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
// Clase abstracta del producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
exports.Producto = Producto;
// Clase concreta: Electrónico
class Electronico extends Producto {
    constructor(nombre, precio, marca) {
        super(nombre, precio);
        this.marca = marca;
    }
    obtenerDescripcion() {
        return `Electrónico: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio.toFixed(2)}`;
    }
}
// Clase concreta: Alimento
class Alimento extends Producto {
    constructor(nombre, precio, fechaCaducidad) {
        super(nombre, precio);
        this.fechaCaducidad = fechaCaducidad;
    }
    obtenerDescripcion() {
        return `Alimento: ${this.nombre}, Caduca: ${this.fechaCaducidad}, Precio: $${this.precio.toFixed(2)}`;
    }
}
// Clase Orden de compra
class OrdenCompra {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    calcularTotal() {
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }
    mostrarOrden() {
        console.log("Orden de compras");
        this.productos.forEach((p, i) => {
            console.log(`${i + 1}. ${p.obtenerDescripcion()}`);
        });
        console.log(`Total: $${this.calcularTotal().toFixed(2)}`);
    }
}
const laptop = new Electronico("Laptop Lenovo", 1500, "Lenovo");
const celular = new Electronico("iPhone", 1200, "Apple");
const pan = new Alimento("Pan integral", 3.5, "2025-06-01");
const leche = new Alimento("Leche deslactosada", 1.8, "2025-05-20");
const orden = new OrdenCompra();
orden.agregarProducto(laptop);
orden.agregarProducto(celular);
orden.agregarProducto(pan);
orden.agregarProducto(leche);
orden.mostrarOrden();

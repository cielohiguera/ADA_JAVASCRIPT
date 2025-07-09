"use strict";
// Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
// Crea un sistema de gestión de productos en una tienda de belleza. Define una
// clase Producto con atributos como nombre, precio y categoria. Luego, crea una
// clase Inventario que gestione un conjunto de productos y tenga métodos para
// agregar, eliminar y buscar productos por categoría. Usa polimorfismo para
// manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar,
// etc.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
// Clase base Producto
class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}
exports.Producto = Producto;
// Clase Cosmetico que extiende Producto
class Cosmetico extends Producto {
    constructor(nombre, precio, marca) {
        super(nombre, precio, "Cosmético");
        this.marca = marca;
    }
    // Método para mostrar información del cosmético
    mostrarInfo() {
        console.log(`Cosmético - Nombre: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio}`);
    }
}
// Clase TratamientoCapilar que extiende Producto
class TratamientoCapilar extends Producto {
    constructor(nombre, precio, tipoDeCabello) {
        super(nombre, precio, "Tratamiento Capilar");
        this.tipoDeCabello = tipoDeCabello;
    }
    // Método para mostrar información del tratamiento capilar
    mostrarInfo() {
        console.log(`Tratamiento Capilar - Nombre: ${this.nombre}, Tipo de Cabello: ${this.tipoDeCabello}, Precio: $${this.precio}`);
    }
}
// Clase Inventario
class Inventario {
    constructor() {
        this.productos = [];
    }
    // Método para agregar un producto
    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`${producto.nombre} ha sido agregado al inventario.`);
    }
    // Método para eliminar un producto por nombre
    eliminarProducto(nombre) {
        this.productos = this.productos.filter(producto => producto.nombre !== nombre);
        console.log(`${nombre} ha sido eliminado del inventario.`);
    }
    // Método para buscar productos por categoría
    buscarPorCategoria(categoria) {
        return this.productos.filter(producto => producto.categoria === categoria);
    }
    // Método para mostrar todos los productos
    mostrarInventario() {
        this.productos.forEach(producto => {
            if (producto instanceof Cosmetico) {
                producto.mostrarInfo();
            }
            else if (producto instanceof TratamientoCapilar) {
                producto.mostrarInfo();
            }
        });
    }
}
// Ejemplo de uso
const inventario = new Inventario();
const labial = new Cosmetico("Labial Rojo", 15, "MAC");
const shampoo = new TratamientoCapilar("Shampoo Hidratante", 20, "Cabello Seco");
inventario.agregarProducto(labial);
inventario.agregarProducto(shampoo);
inventario.mostrarInventario(); // Mostrar todos los productos
console.log(inventario.buscarPorCategoria("Cosmético")); // Buscar productos por categoría
inventario.eliminarProducto("Labial Rojo"); // Eliminar un producto

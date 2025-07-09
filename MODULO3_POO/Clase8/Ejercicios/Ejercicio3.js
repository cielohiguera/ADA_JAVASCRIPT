"use strict";
// ENCAPSULAMIENTO
// 7. Ejercicio de Bodega
// Diseña una clase Bodega que tenga propiedades privadas para nombre,
// direccion, y inventario (un array de objetos con producto y cantidad).
// Implementa métodos para agregar productos al inventario, eliminar productos,
// y listar el inventario. Si se intenta agregar un producto con una cantidad
// negativa, imprime un mensaje informativo.
class Bodega {
    constructor(nombre, direccion) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._inventario = []; // Inicializa el inventario como un arreglo vacío
    }
    // Geter para el nombre
    get nombre() {
        return this._nombre; // devuelve el nombre de la bodega
    }
    agregarProducto(producto, cantidad) {
        if (cantidad < 0) {
            console.log("La cantidad no puede ser negativa");
        }
        else {
            this._inventario.push({ producto, cantidad }); // Agrego el producto al inventario
            console.log(`Producto ${producto} agregado con cantidad ${cantidad}`);
        }
    }
    eliminarProducto(producto) {
        const index = this._inventario.findIndex(item => item.producto === producto);
        if (index === -1) {
            console.log(`El producto ${producto} no esta en el inventario`);
        }
        else {
            this._inventario.splice(index, 1);
            console.log(`Producto ${producto} eliminado del inventario`);
        }
    }
    listarInventario() {
        return this._inventario;
    }
}
// Pruebas
const bodega = new Bodega('Bodega central', 'Calle principal 123');
bodega.agregarProducto('Manzanas', 50);
bodega.agregarProducto('Peras', -10);
console.log(`Inventario de ${bodega.nombre}: `, bodega.listarInventario());

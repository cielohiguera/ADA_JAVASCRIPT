"use strict";
// 1. Mueblería: Actualización de PreciosEn una mueblería, se requiere un sistema que permita actualizar los precios de
// los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
// un identificador único. Implementa las siguientes funciones:
// • Añadir un nuevo mueble.
// • Actualizar el precio de un mueble después de 3 segundos utilizando
// setTimeout().
// • Mostrar el inventario de muebles
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventario = void 0;
// Inventario como un arreglo de muebles
exports.inventario = [];
// Funcion para añadir un nuevo mueble
function agregarMueble(id, nombre, precio) {
    const nuevoMueble = [id, nombre, precio];
    exports.inventario.push(nuevoMueble);
    console.log(`Mueble ${nombre} añadido con éxito`);
}
// Funcion para mostrar inventario
function mostrarInventario() {
    console.log("Inventario de la muebleria");
    exports.inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    });
}
// Función para actualizar el precio de un mueble
function actualizarPrecio(id, nuevoPrecio) {
    setTimeout(() => {
        const mueble = exports.inventario.find(m => m[0] === id);
        if (mueble) {
            mueble[2] = nuevoPrecio; // Actualizar el precio
            console.log(`El precio del mueble ${mueble[1]} se ha actualizado a $${nuevoPrecio}.`);
        }
        else {
            console.log("Mueble no encontrado.");
        }
    }, 3000); // Después de 3 segundos
}
// Añadimos algunos muebles
agregarMueble(1, "Sofá", 300);
agregarMueble(2, "Mesa", 150);
// Mostramos el inventario
mostrarInventario();
// Actualizamos el precio del sofá
actualizarPrecio(1, 350);

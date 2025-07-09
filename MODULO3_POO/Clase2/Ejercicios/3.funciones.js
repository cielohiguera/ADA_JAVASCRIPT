"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saludar = saludar;
// 1. Función básica
function suma(a, b) {
    return a + b;
}
console.log(suma(3, 4));
let resultadoSuma = suma(3, 4);
console.log(resultadoSuma);
// Función que muestra un mensaje sin retorno
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
console.log(mostrarMensaje("Hola"));
// 3. Función con parametro opcional
function saludar(nombre, saludo) {
    if (saludo) {
        return `${saludo}, ${nombre}`;
    }
    return `Hola, ${nombre}`;
}
console.log(saludar("Cielo"));

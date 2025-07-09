"use strict";
// Actividad 3: Crear una función genérica
// Crea una función genérica que tome un parámetro de cualquier tipo y lo
// devuelva. Prueba la función con diferentes tipos de datos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleano = exports.numeros = exports.texto = void 0;
function devolverValor(valor) {
    return valor;
}
// Podemos probar con diferentes tipos de datos
exports.texto = devolverValor('Hola mundo');
exports.numeros = devolverValor(52);
exports.booleano = devolverValor(true);
console.log("Texto:", exports.texto);
console.log("Número:", exports.numeros);
console.log("Booleano:", exports.booleano);

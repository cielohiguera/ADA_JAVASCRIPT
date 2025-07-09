"use strict";
// Declaración e inicialización de la tupla
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
// Inicialización de la tupla
exports.persona = ['Ana', 25];
// Acceder a los elementos de la tupla
console.log("Nombre: ", exports.persona[0]);
console.log("Edad: ", exports.persona[1]);
// Modificamos
exports.persona[1] = 28;
console.log("Edad actualizada: ", exports.persona[1]);
// Desestructuración de la tupla
let [nombre, edad] = exports.persona;
console.log(`La persona se llama ${nombre} y tiene ${edad} anios`);

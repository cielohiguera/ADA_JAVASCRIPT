"use strict";
// Ejercicio 4: Parámetros opcionales simuladosDeclara dos variables, una para almacenar un nombre y otra para almacenar una
// edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
// proporcionada". Si se asigna la edad, imprímela junto al nombre.
Object.defineProperty(exports, "__esModule", { value: true });
exports.nombre = void 0;
exports.nombre = 'Olivia';
let edad = undefined;
// Verificación de edad
if (edad != undefined) {
    console.log(`Nombre ${exports.nombre}, edad ${edad}`);
}
else {
    console.log(`Nombre: ${exports.nombre}. Edad no proporcionada`);
}

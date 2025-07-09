"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estudiante1 = void 0;
// Creación de un objeto que cumple con la interfaz estudiante
exports.estudiante1 = {
    nombre: "Cielo",
    edad: 25,
    materiaFavorita: "Ciencia de datos",
    promedio: 98,
    // implementación de los métodos
    // Método 1: Saludar
    saludar: function () {
        console.log(`Hola soy ${exports.estudiante1.nombre}, tengo ${exports.estudiante1.edad} anios, mi materia favorita ${exports.estudiante1.materiaFavorita}`);
        // Método 2: obtener detalles
    },
    obtenerDetalles: function () {
        return `Hola, soy ${exports.estudiante1.nombre}, tengo ${exports.estudiante1.edad} anios, mi materia favorita ${exports.estudiante1.materiaFavorita} y mi promedio es ${exports.estudiante1.promedio}`;
    }
};
// Uso de método saludar
exports.estudiante1.saludar;
// Obtener detalles de los alumnos
const detalles = exports.estudiante1.obtenerDetalles();
console.log(detalles);

"use strict";
// Actividad 5: Re-exportación de Módulos
// Crea un módulo index.ts que re-exporte todas las funciones y constantes de los
// módulos mathUtils.ts y stringUtils.ts.
// En main.ts, importa todo desde index.ts y utiliza al menos una función de cada
// módulo, mostrando el resultado en la consola.
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log("Resultado de suma:", (0, index_1.add)(7, 8)); // 15
console.log("Texto capitalizado:", (0, index_1.capitalize)('typescript')); // "Typescript"

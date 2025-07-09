"use strict";
// Actividad 10: Consolidación de Módulos
// Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts,
// stringUtils.ts y user.ts.
// Asegúrate de que todas las funciones se puedan importar desde utils/index.ts.
// En main.ts, importa lo necesario desde utils/index.ts y utiliza las funciones en un
// solo flujo de trabajo, mostrando todos los resultados en la consola.
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
// Operaciones matemáticas
const resultSum = (0, index_1.add)(10, 5);
const resultSubtract = (0, index_1.subtratc)(10, 5);
// Manipulación de cadenas
const capitalized = (0, index_1.capitalize)("hello");
const reversed = (0, index_1.reverse)("world");
// Crear una persona
const person = (0, index_1.createPerson)("Marina", 25);
console.log("Suma:", resultSum);
console.log("Resta:", resultSubtract);
console.log("Capitalizado:", capitalized);
console.log("Invertido:", reversed);
console.log("Persona:", person);

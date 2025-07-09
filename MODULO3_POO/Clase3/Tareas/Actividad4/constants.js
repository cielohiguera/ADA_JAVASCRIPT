"use strict";
// Actividad 4: Tipos de Exportaciones
// Crea un archivo llamado constants.ts que contenga:
// • Una constante PI con el valor de π.
// • Una constante E con el valor de e.
// Exporta ambas constantes usando:
// • Exportación directa.
// • Exportación separada.
// Luego, en main.ts, importa ambas constantes y muestra sus valores en la
// consola.
Object.defineProperty(exports, "__esModule", { value: true });
exports.E = exports.PI = void 0;
// Exportación directa
exports.PI = 3.1416;
// Exportación separada
const E = 2.7182;
exports.E = E;

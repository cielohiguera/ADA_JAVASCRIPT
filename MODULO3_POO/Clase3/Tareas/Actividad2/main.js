"use strict";
// Actividad 2: Exportaciones Nombradas
// En el archivo stringUtils.ts, crea dos funciones:
// • capitalize(str: string): string: devuelve el string con la primera letra en
// mayúscula.
// • reverse(str: string): string: devuelve el string al revés.
// Exporta ambas funciones como exportaciones nombradas. Luego, en main.ts,
// importa las funciones y utilízalas con una cadena de texto, mostrando el
// resultado en la consola.
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = require("./stringUtils");
const texto = 'hola mundo';
console.log("Capitalizado: ", (0, stringUtils_1.capitalize)(texto));
console.log("Reverso: ", (0, stringUtils_1.reverse)(texto));

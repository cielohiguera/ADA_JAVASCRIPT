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
exports.capitalize = capitalize;
exports.reverse = reverse;
function capitalize(str) {
    if (!str)
        return '';
    return str[0].toUpperCase() + str.slice(1);
}
function reverse(str) {
    return str.split('').reverse().join('');
}

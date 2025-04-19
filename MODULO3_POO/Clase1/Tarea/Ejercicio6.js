"use strict";
// Ejercicio 6: Uso de unknown
// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los
// valores.
// 2. Unkown: Similar a any pero requiere verficación antes de su uso
let valorDesconocido;
valorDesconocido = 45;
if (typeof valorDesconocido === "number") {
    console.log('Es una numero: ', valorDesconocido);
}
valorDesconocido = "Hello TypeScript";
if (typeof valorDesconocido === "string") {
    console.log('Es una cadena: ', valorDesconocido);
}

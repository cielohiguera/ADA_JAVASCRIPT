"use strict";
// Ejemplo de una función generica 
function identidad(valor) {
    return valor;
}
// Ejemplo de uso de la función
let numero = identidad(10);
console.log(`Ejemplo de uso con tipo numer: ${numero}`);
let texto = identidad("Hola");
console.log(`Ejemplo de uso con tipo string: ${texto}`);

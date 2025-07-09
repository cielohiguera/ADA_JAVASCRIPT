"use strict";
// Declaración de un array simple
let frutas = ['manzana', 'banana', 'pera'];
// agregamos una fruta al final
frutas.push('naranja');
console.log('Agregamos frutas al final: ', frutas);
// Eliminamos la ultima fruta
let ultimaFruta = frutas.pop();
console.log('Eliminamos una fruta al final: ', ultimaFruta);
// Combinamos todos los elementos del array en una cadena
let cadenaFrutas = frutas.join(' - ');
console.log('Combinamos todos los elementos del array en una cadena: ', cadenaFrutas);
// Agregamos frutas al final:  [ 'manzana', 'banana', 'pera', 'naranja' ]
// Eliminamos una fruta al final:  naranja
// Combinamos todos los elementos del array en una cadena:  manzana - banana - pera

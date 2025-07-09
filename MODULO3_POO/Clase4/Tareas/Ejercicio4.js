"use strict";
// Actividad 4: Usar aserciones de tipo
// Declara una variable de tipo any y usa una aserción para tratarla como string,
// accediendo a la propiedad .length.
let dato = "Hola TypeScript";
// Usamos una aserción de tipo para tratarla como string y acceder a .length
let longitud = dato.length;
// Mostramos el resultado en consola
console.log(`La longitud del texto es: ${longitud}`);

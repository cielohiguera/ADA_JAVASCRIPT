"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valorDesconocido = void 0;
// Decirle al copilador que tipo de datos quiere asumir cuando no puede inferir
// Ejemplo 1: asercion básica de tipo 'any' a 'string'
let valorGenerico = 'typeScript es genial';
// console.log(valorGenerico.length)
let longitudString = valorGenerico.length;
console.log(longitudString);
// Ejemplo 2: Aserciones con tipos de union
function obtenerNombreEnMayuscula(nombre) {
    if (nombre) {
        return nombre.toUpperCase();
    }
    else {
        return "Nombre no proporcionado";
    }
}
// Ponemos a prueba la función
console.log(obtenerNombreEnMayuscula('ana'));
console.log(obtenerNombreEnMayuscula(null));
console.log('----------------------------');
// Ejemplo 3: Uso de aserciones con unknown
exports.valorDesconocido = "Este es un valor desconocido";
// console.log(valorDesconocido.length);
// Como no podemos acceder a sus propiedades directamente, usamos y lo cambiamos a tipo string
if (typeof exports.valorDesconocido === 'string') {
    let longitud = exports.valorDesconocido.length;
    console.log(`La longitud del string desconocido es: ${longitud}`);
}
// Ejemplo 4: Aserciones dobles (para convertir tipos incompatibles)
let valor = 'Este es un valor';
let valorNumerico = valor;
console.log(`Valor numerico asercion doble: ${valorNumerico}`);
// Ejemplo 5: precauciones en aserciones
let valorErroneo = 42;
let textoErroneo = valorErroneo;
console.log(textoErroneo.length); //undefined

// Ejercicio 5: Verificar origen del auto
/* Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
para verificar y mostrar si el auto es de origen nacional o importado. Considera
que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen
nacional.

✓ Solicita al usuario que ingrese la marca de un auto.

✓ Utiliza una función flecha para determinar si la marca ingresada
corresponde a un auto de origen nacional o importado.

✓ Muestra un mensaje indicando si el auto es de origen nacional o
importado, basado en la marca ingresada por el usuario.
*/
const prompt = require('prompt-sync')();
// Solicitar al usuario la marca de auto
let marcaAuto = prompt("Ingresa la marca del auto: ");
const marcasNacionales = ["Chevrolet", "Ford", "Fiat"];

// Verificar si el auto es nacionL o importado
const verificarAuto = (marca) => {
    if (marcasNacionales.includes(marca)) {
        return "Marca Nacional";
    } else {
        return "Importado";
    }
}

let origen = verificarAuto(marcaAuto);
console.log(`El auto de marca ${marcaAuto} es de origen ${origen}.`);
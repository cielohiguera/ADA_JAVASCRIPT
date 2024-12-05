// Ejercicio 5: Concatenar nombres (funcion expresada)
// Crear una funcion expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido)
// como parametros y devuelva el nombre completo concatenado
const prompt = require('prompt-sync')();
let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa apellido: ")

function concatenarNombres (nombre, apellido){
    return 'Hola ' + nombre + ' ' + apellido;
}
console.log(concatenarNombres(nombre, apellido));
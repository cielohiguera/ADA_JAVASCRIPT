"use strict";
// Usando los alias para declarar variables
let usuarioID = 123; // Variable de tipo id (number)
let nombreUsuario = "Lucia";
let cuentaActuvia = true;
console.log(`Usuario: ${nombreUsuario}, Id: ${usuarioID}, activa: ${cuentaActuvia}`);
// Usamos el alias dirección para crear un objeto con las propiedades especificadas
let miDirreccion = {
    calle: "Avenida Castillo",
    ciudad: "Buenos Aires",
    codigoPostal: 6029
};
console.log(`Vivo en ${miDirreccion.calle}, ${miDirreccion.ciudad}, ${miDirreccion.codigoPostal}`);
// Usamos el alias resultado y idUsuario para definir las variables
let estadoOperaciones = "exito";
let idUsuario1 = 4356;
let idUsuario2 = "Berni";
console.log(`Estado de operación: ${estadoOperaciones}, Id Usuario 1: ${idUsuario1}`);
// Implementación de dos funciones que siguen el formato de operacionesMatematicas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
console.log(`La suma de los numeros ingresados en la consola son`, sumar(5, 7));
console.log(`La suma de los numeros ingresados en la consola son`, restar(8, 5));
//usamos los alias para crear arrays 
let numeros = [1, 2, 3, 5, 6];
let cadenas = ["Perro", "Gato", "Hamster"];
console.log(`Numeros ${numeros.join(", ")}`);
console.log(`Numeros ${cadenas.join(", ")}`);
// resultados
// Usuario: Lucia, Id: 123, activa: true
// Vivo en Avenida Castillo, Buenos Aires, 6029
// Estado de operación: exito, Id Usuario 1: 4356
// La suma de los numeros ingresados en la consola son 12
// La suma de los numeros ingresados en la consola son 3
// Numeros 1, 2, 3, 5, 6
// Numeros Perro, Gato, Hamster

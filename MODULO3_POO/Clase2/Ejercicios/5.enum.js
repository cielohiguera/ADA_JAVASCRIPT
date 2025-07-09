"use strict";
// 1. Definición de un enum numerico
var colores;
(function (colores) {
    colores[colores["Rojo"] = 0] = "Rojo";
    colores[colores["Verde"] = 1] = "Verde";
    colores[colores["Azul"] = 2] = "Azul";
})(colores || (colores = {}));
// Acceder a los valores enum
let coloresFavoritos = colores.Verde;
console.log('Color favorito (por numero): ', coloresFavoritos);
console.log('Nombre del color por indice: ', colores[coloresFavoritos]);
// Color favorito (por numero):  1
// Nombre del color por indice:  Verde
// 2. Definciión de enum de cadenas
var Direcciones;
(function (Direcciones) {
    Direcciones["Norte"] = "N";
    Direcciones["Sur"] = "S";
    Direcciones["Este"] = "E";
    Direcciones["Oeste"] = "O";
})(Direcciones || (Direcciones = {}));
// Asignar un valor del enum a una variable
let direccionViaje = Direcciones.Norte;
console.log('Direcciones del viaje: ', direccionViaje);
// Direcciones del viaje:  N

"use strict";
// Actividad 7: Cálculo de Áreas
// Crea un módulo shapes.ts que contenga las siguientes funciones:
// • circleArea(radius: number): number: devuelve el área de un círculo.
// • squareArea(side: number): number: devuelve el área de un cuadrado.
// Exporta ambas funciones como exportaciones nombradas. En main.ts, importa
// las funciones y úsalas para calcular y mostrar las áreas en la consola
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = circleArea;
exports.squareArea = squareArea;
// Función para calcular el área de un círculo
function circleArea(radius) {
    return Math.PI * radius * radius;
}
// Función para calcular el área de un cuadrado
function squareArea(side) {
    return side * side;
}

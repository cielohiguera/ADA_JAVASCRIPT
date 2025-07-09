"use strict";
// Actividad 6: Uso de Namespaces
// Crea un namespace llamado Geometry en un archivo geometry.ts que contenga
// las siguientes funciones:• areaOfCircle(radius: number): number: devuelve el área de un círculo.
// • areaOfSquare(side: number): number: devuelve el área de un cuadrado.
// Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar
// a las funciones y muestra los resultados en la consola
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
var Geometry;
(function (Geometry) {
    const PI = Math.PI;
    function areaOfCircle(radius) {
        return PI * radius * radius;
    }
    Geometry.areaOfCircle = areaOfCircle;
    function areaOfSquare(side) {
        return side * side;
    }
    Geometry.areaOfSquare = areaOfSquare;
})(Geometry || (exports.Geometry = Geometry = {}));

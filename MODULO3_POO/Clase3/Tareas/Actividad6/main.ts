// Actividad 6: Uso de Namespaces
// Crea un namespace llamado Geometry en un archivo geometry.ts que contenga
// las siguientes funciones:• areaOfCircle(radius: number): number: devuelve el área de un círculo.
// • areaOfSquare(side: number): number: devuelve el área de un cuadrado.
// Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar
// a las funciones y muestra los resultados en la consola

import { Geometry } from "./geometry";

const areaCirculo = Geometry.areaOfCircle(5);
const areaCuadrado = Geometry.areaOfSquare(4);

console.log("Área del círculo:", areaCirculo);     // 78.53
console.log("Área del cuadrado:", areaCuadrado);   // 16
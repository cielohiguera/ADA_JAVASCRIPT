"use strict";
// La función no se exporta y es privada al modulo
// ambos dfunción y name se exportan directamente
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRIANGLE_NAME = exports.calculateTriangleArea = void 0;
// Función privada no exportada
const logCalculate = (area) => {
    console.log(`Calculate area: ${area}`);
};
// exportación directa de la funcion
const calculateTriangleArea = (base, height) => {
    const area = (base * height) / 2;
    logCalculate(area); // uso de la función privada
    return area;
};
exports.calculateTriangleArea = calculateTriangleArea;
exports.TRIANGLE_NAME = 'Triangle';

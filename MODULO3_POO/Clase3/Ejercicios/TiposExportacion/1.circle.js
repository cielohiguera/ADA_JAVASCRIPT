"use strict";
// Aquí usaremos la exportación directa para la siguiente función 
// y la constante
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIRCLE_NAME = exports.calculateCircleArea = void 0;
const calculateCircleArea = (radius) => {
    return Math.PI * radius * radius;
};
exports.calculateCircleArea = calculateCircleArea;
exports.CIRCLE_NAME = "Circle";

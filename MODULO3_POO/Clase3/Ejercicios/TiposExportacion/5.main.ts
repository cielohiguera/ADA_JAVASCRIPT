// Importamos todas las funciones y constanstes desde index.ts
// gracias a la re-exportación. Esto demuestra como las tres formas de exportación funcionan
// juntas en un proyecto

import {
    calculateCircleArea,
    CIRCLE_NAME,
    calculateRentangleArea,
    RENTANGLE_NAME,
    calculateTriangleArea,
    TRIANGLE_NAME
} from './4.index'

const circleArea = calculateCircleArea(5)
console.log(`${CIRCLE_NAME}, area: ${circleArea}`);

const rectangleArea = calculateRentangleArea(10, 20)
console.log(`${RENTANGLE_NAME}, area: ${rectangleArea}`);

const triangleArea = calculateTriangleArea(10, 15)
console.log(`${TRIANGLE_NAME}, area: ${triangleArea}`);
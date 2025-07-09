"use strict";
// Importamos todas las funciones y constanstes desde index.ts
// gracias a la re-exportación. Esto demuestra como las tres formas de exportación funcionan
// juntas en un proyecto
Object.defineProperty(exports, "__esModule", { value: true });
const _4_index_1 = require("./4.index");
const circleArea = (0, _4_index_1.calculateCircleArea)(5);
console.log(`${_4_index_1.CIRCLE_NAME}, area: ${circleArea}`);
const rectangleArea = (0, _4_index_1.calculateRentangleArea)(10, 20);
console.log(`${_4_index_1.RENTANGLE_NAME}, area: ${rectangleArea}`);
const triangleArea = (0, _4_index_1.calculateTriangleArea)(10, 15);
console.log(`${_4_index_1.TRIANGLE_NAME}, area: ${triangleArea}`);

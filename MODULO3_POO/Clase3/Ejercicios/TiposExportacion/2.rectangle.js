"use strict";
// declaramos primero las funciones y constantes
// y luego las exportamos al final del archivo utilizando la expoeración separada
Object.defineProperty(exports, "__esModule", { value: true });
exports.RENTANGLE_NAME = exports.calculateRentangleArea = void 0;
const calculateRentangleArea = (width, height) => {
    return width * height;
};
exports.calculateRentangleArea = calculateRentangleArea;
const RENTANGLE_NAME = "Rectangle";
exports.RENTANGLE_NAME = RENTANGLE_NAME;

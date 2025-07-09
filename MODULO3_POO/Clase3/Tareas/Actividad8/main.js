"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const higherOrderFunctions_1 = __importDefault(require("./higherOrderFunctions"));
const multiplyByTwo = (0, higherOrderFunctions_1.default)(2); // Crear un multiplicador por 2
const multiplyByThree = (0, higherOrderFunctions_1.default)(3); // Crear un multiplicador por 3
console.log(multiplyByTwo(5)); // Muestra: 10 (5 * 2)
console.log(multiplyByThree(5)); // Muestra: 15 (5 * 3)

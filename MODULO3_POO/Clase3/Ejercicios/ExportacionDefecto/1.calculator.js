"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculate;
// Definicimos una función que realiza una función matematica
function calculate(op, a, b) {
    return op === "sumar" ? a + b : a - b;
}

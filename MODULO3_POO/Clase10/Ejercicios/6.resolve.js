"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.miPromesa = exports.valor = void 0;
exports.valor = 42;
exports.miPromesa = Promise.resolve(exports.valor);
exports.miPromesa
    .then((resultado) => {
    console.log("Valor de la promesa: ", resultado);
});

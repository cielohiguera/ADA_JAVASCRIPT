"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promesa1 = void 0;
exports.promesa1 = Promise.reject("Error en promesa 1");
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Chicas");
});
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Chicas");
});
Promise.any([exports.promesa1, promesa2, promesa3])
    .then((resultado) => {
    console.log("Promesa resuelta: ", resultado);
})
    .catch((error) => {
    console.error("Todas las promesas fueron rechazadas: ", error);
});

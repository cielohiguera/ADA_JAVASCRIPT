"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auto = void 0;
// Ejemplo 1: Recorrer un array con for..in y después con for .. of
let autos = ['Toyota', 'Honda', 'Tesla'];
// Recorre con for .. in
console.log('Recorremos el array con for .. in');
for (let indice in autos) {
    console.log(`Indice: ${indice}, Auto: ${autos[indice]}`);
}
console.log('-------------------------------------');
// Recorre con for .. of
console.log('Recorremos el arrat con for .. of');
for (let auto of autos) {
    console.log(`Auto: ${auto}`);
}
console.log('-------------------------------------');
// Ejemplo 2: recorremos un obketo con for .. in y for .. of
exports.auto = {
    marca: "Tesla",
    modelo: "Model S",
    anio: 2023
};
console.log('Recorremos el objeto con un for .. in');
for (let propiedad in exports.auto) {
    console.log(`Clave: ${propiedad}, Valor: ${exports.auto[propiedad]}`);
}
// console.log('Recorremos el objeto con un for .. of')
// for (valor of auto) { // Marca error no puede copilar el typescript
//     console.log(valor);
// }

"use strict";
function procesarObjeto(objeto) {
    for (const propiedad in objeto) {
        if (Object.prototype.hasOwnProperty.call(objeto, propiedad)) {
            const valor = objeto[propiedad];
            if (typeof valor === 'string') {
                console.log(valor.toLowerCase());
            }
            else if (typeof valor === 'number') {
                console.log(valor ** 2);
            }
            else if (typeof valor === 'boolean') {
                console.log(!valor);
            }
        }
    }
}
// Ejemplo de uso:
const datosMixtos = {
    nombre: "Ana",
    edad: 30,
    activo: true
};
procesarObjeto(datosMixtos);
// Salida: "ana", 900, false

"use strict";
// Ejercicio 3: Métodos en Objetos
// 1. Modifica el objeto del ejercicio anterior para que incluya un método
// llamado descripcion() que devuelva una descripción del libro.
// 2. Llama al método y muestra el resultado en la consola.
Object.defineProperty(exports, "__esModule", { value: true });
exports.libros = void 0;
exports.libros = {
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    anio: 2013,
    description: function () {
        return `${this.titulo} es un libro escrito por ${this.autor} en ${this.anio}.`;
    }
};
console.log(exports.libros.description);

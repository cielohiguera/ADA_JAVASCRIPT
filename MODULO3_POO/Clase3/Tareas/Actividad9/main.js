"use strict";
// Actividad 9: Módulos y Tipos
// Crea un módulo types.ts que contenga:
// • Un tipo Person con las propiedades name y age.• Una función createPerson(name: string, age: number): Person: devuelve un
// objeto Person.
// Exporta el tipo y la función como exportaciones nombradas. En main.ts, importa
// el tipo y la función, crea una persona y muestra su información en la consola.
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const newPerson = (0, types_1.createPerson)("Juan", 30);
console.log("Nombre:", newPerson.name);
console.log("Edad:", newPerson.age);

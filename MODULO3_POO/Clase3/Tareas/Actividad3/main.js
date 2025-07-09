"use strict";
// Actividad 3: Exportación por Defecto
// Crea un módulo llamado user.ts que contenga una función:• createUser(name: string, age: number): devuelve un objeto con name y
// age.
// Exporta la función como exportación por defecto. En main.ts, importa
// createUser, crea un usuario y muestra su información en la consola.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const usuario = (0, user_1.default)("Jennifer", 25);
console.log("Usuario creado:");
console.log(`Nombre: ${usuario.name}`);
console.log(`Edad: ${usuario.age}`);

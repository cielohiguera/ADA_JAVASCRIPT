"use strict";
// 8. Ejercicio de Empleado
// Crea una clase Empleado que contenga propiedades privadas para nombre,
// salario, y departamento. Implementa métodos para cambiar el salario 
// (que no puede ser menor a 0) y obtener la información del empleado. 
// Si se intenta establecer un salario negativo, imprime un mensaje indicativo.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(nombre, salario, departamento) {
        this._nombre = nombre;
        this._departamento = departamento;
        this._salario = salario;
        this.setSalario(salario); // usamos el setter para validar
    }
    // Getter
    getInformacion() {
        return `Empleado: ${this._nombre}, Departamento: ${this._departamento}, Salario: $${this._salario}`;
    }
    // Setter con validacion 
    setSalario(nuevoSalario) {
        if (nuevoSalario < 0) {
            console.log("Error: el salario no puede ser menor a 0");
        }
        else {
            this._salario = nuevoSalario;
        }
    }
    // Getter individual si se desea conocer el valor
    getSalario() {
        return this._salario;
    }
}
exports.Empleado = Empleado;
const empleado1 = new Empleado("Lucía Gómez", 2500, "Recursos Humanos");
console.log(empleado1.getInformacion());
empleado1.setSalario(3000);
console.log(empleado1.getInformacion());
empleado1.setSalario(-500);

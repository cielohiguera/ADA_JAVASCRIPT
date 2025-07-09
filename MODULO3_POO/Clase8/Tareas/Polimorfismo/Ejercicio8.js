"use strict";
// Ejercicio 8: Polimorfismo y Herencia con Abstracción Compleja
// Implementa una clase abstracta Empleado con un método abstracto
// calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo,
// que calculen el salario de acuerdo a las horas trabajadas y salario fijo
// respectivamente
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarInformacion() {
        console.log(`${this.nombre} gana $${this.calcularSalario()}`);
    }
}
exports.Empleado = Empleado;
// Clase hija para empleados por hora
class EmpleadoPorHora extends Empleado {
    constructor(nombre, horasTrabajadas, pagoPorHora) {
        super(nombre);
        this.horasTrabajadas = horasTrabajadas;
        this.pagoPorHora = pagoPorHora;
    }
    calcularSalario() {
        return this.horasTrabajadas * this.pagoPorHora;
    }
}
// Clase hija para empleados fijos
class EmpleadoFijo extends Empleado {
    constructor(nombre, salarioMensual) {
        super(nombre);
        this.salarioMensual = salarioMensual;
    }
    calcularSalario() {
        return this.salarioMensual;
    }
}
// Ejemplo de uso
const empleado1 = new EmpleadoPorHora("Carlos Díaz", 120, 15);
const empleado2 = new EmpleadoFijo("Ana Torres", 2500);
empleado1.mostrarInformacion(); // Carlos Díaz gana $1800
empleado2.mostrarInformacion(); // Ana Torres gana $2500

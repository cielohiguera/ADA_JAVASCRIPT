"use strict";
// Ejercicio 10: Sistema de Gestión de Empleados
// Consigna: Crea una clase base Empleado con propiedades protegidas nombre y
// salario, y un método calcularSalario(). Crea dos clases derivadas
// EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben
// sobrescribir el método calcularSalario() con sus propias lógicas (empleados de
// tiempo completo tienen un salario fijo, mientras que los empleados de medio
// tiempo cobran por hora).
// Además, crea una interfaz BeneficiosLaborales que tenga el método
// calcularBeneficios(). Solo los empleados de tiempo completo implementarán
// esta interfaz.
// Clase base Empleado
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    mostrarInformacion() {
        console.log(`Empleado: ${this.nombre}, Salario: $${this.calcularSalario().toFixed(2)}`);
    }
}
// Clase empleado de tiempo completo
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, salarioFijo) {
        super(nombre, salarioFijo);
    }
    calcularSalario() {
        return this.salario;
    }
    calcularBeneficios() {
        return "Beneficios: Seguro medico, vacaciones pagadas, fondo de retiro";
    }
}
// Clase de empleado de medio tiempo
class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, salarioPorHora, horasTrabajadas) {
        super(nombre, salarioPorHora);
        this.horasTrabajadas = horasTrabajadas;
    }
    calcularSalario() {
        return this.salario * this.horasTrabajadas;
    }
}
const empleado3 = new EmpleadoTiempoCompleto("María López", 3000);
const empleado4 = new EmpleadoMedioTiempo("Carlos Ruiz", 20, 80);
empleado3.mostrarInformacion();
console.log(empleado3.calcularBeneficios());
console.log("---------------------------------");
empleado4.mostrarInformacion();

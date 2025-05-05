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


interface BeneficiosLaborales {
    calcularBeneficios(): string;
}

// Clase base Empleado
abstract class Empleado {
    protected nombre: string;
    protected salario: number;

    constructor(nombre: string, salario: number) {
        this.nombre = nombre;
        this.salario = salario;
    }

    abstract calcularSalario(): number;

    mostrarInformacion(): void {
        console.log(`Empleado: ${this.nombre}, Salario: $${this.calcularSalario().toFixed(2)}`);
    }
}

// Clase empleado de tiempo completo

class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
    constructor(nombre: string, salarioFijo: number) {
        super(nombre, salarioFijo)
    }
    calcularSalario(): number {
        return this.salario;
    }
    calcularBeneficios(): string {
        return "Beneficios: Seguro medico, vacaciones pagadas, fondo de retiro"
    }
}

// Clase de empleado de medio tiempo

class EmpleadoMedioTiempo extends Empleado {
    private horasTrabajadas: number;
    constructor(nombre: string, salarioPorHora: number, horasTrabajadas: number) {
        super(nombre, salarioPorHora);
        this.horasTrabajadas = horasTrabajadas;
    }
    calcularSalario(): number {
        return this.salario * this.horasTrabajadas;
    }
}

const empleado3 = new EmpleadoTiempoCompleto("María López", 3000);
const empleado4 = new EmpleadoMedioTiempo("Carlos Ruiz", 20, 80);

empleado3.mostrarInformacion();
console.log(empleado3.calcularBeneficios());
console.log("---------------------------------");
empleado4.mostrarInformacion();
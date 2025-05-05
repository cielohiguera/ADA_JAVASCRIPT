// Ejercicio 8: Polimorfismo y Herencia con Abstracción Compleja
// Implementa una clase abstracta Empleado con un método abstracto
// calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo,
// que calculen el salario de acuerdo a las horas trabajadas y salario fijo
// respectivamente

export abstract class Empleado {
    protected nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    // Método abstracto que deben implementar las subclases
    abstract calcularSalario(): number;
    public mostrarInformacion(): void {
        console.log(`${this.nombre} gana $${this.calcularSalario()}`);
    }
}

// Clase hija para empleados por hora
class EmpleadoPorHora extends Empleado {
    private horasTrabajadas: number;
    private pagoPorHora: number;
  
    constructor(nombre: string, horasTrabajadas: number, pagoPorHora: number) {
      super(nombre);
      this.horasTrabajadas = horasTrabajadas;
      this.pagoPorHora = pagoPorHora;
    }
  
    calcularSalario(): number {
      return this.horasTrabajadas * this.pagoPorHora;
    }
  }
  
  // Clase hija para empleados fijos
  class EmpleadoFijo extends Empleado {
    private salarioMensual: number;
  
    constructor(nombre: string, salarioMensual: number) {
      super(nombre);
      this.salarioMensual = salarioMensual;
    }
  
    calcularSalario(): number {
      return this.salarioMensual;
    }
  }
  
  // Ejemplo de uso
  const empleado1: Empleado = new EmpleadoPorHora("Carlos Díaz", 120, 15);
  const empleado2: Empleado = new EmpleadoFijo("Ana Torres", 2500);
  
  empleado1.mostrarInformacion();  // Carlos Díaz gana $1800
  empleado2.mostrarInformacion();  // Ana Torres gana $2500
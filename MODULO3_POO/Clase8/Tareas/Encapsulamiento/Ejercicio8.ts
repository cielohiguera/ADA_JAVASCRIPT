// 8. Ejercicio de Empleado
// Crea una clase Empleado que contenga propiedades privadas para nombre,
// salario, y departamento. Implementa métodos para cambiar el salario 
// (que no puede ser menor a 0) y obtener la información del empleado. 
// Si se intenta establecer un salario negativo, imprime un mensaje indicativo.

export class Empleado {
    private _nombre: string;
    private _salario: number;
    private _departamento: string

    constructor(nombre: string, salario: number, departamento: string) {
        this._nombre = nombre;
        this._departamento = departamento;
        this._salario = salario;
        this.setSalario(salario); // usamos el setter para validar
    }

    // Getter
    public getInformacion(): string {
        return `Empleado: ${this._nombre}, Departamento: ${this._departamento}, Salario: $${this._salario}`
    }
    // Setter con validacion 
    public setSalario(nuevoSalario: number): void {
        if (nuevoSalario < 0) {
            console.log("Error: el salario no puede ser menor a 0");
        } else {
            this._salario = nuevoSalario;
        }
    }
    // Getter individual si se desea conocer el valor
    public getSalario(): number {
        return this._salario;
    }
}

const empleado1 = new Empleado("Lucía Gómez", 2500, "Recursos Humanos");
console.log(empleado1.getInformacion());

empleado1.setSalario(3000); 
console.log(empleado1.getInformacion());

empleado1.setSalario(-500); 
// 3. Ejercicio de EstudianteDiseña una clase Estudiante que contenga propiedades privadas para nombre, 
// edad, y calificaciones. Implementa métodos para agregar calificaciones y 
// calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
// una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
// calcular el promedio

export class Estudiante {
    private nombre: string;
    private edad: number;
    private calificaciones: number [];

    constructor(nombre: string, edad: number, calificaciones: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = [];
    }

    public agregarCalificacion(calificacion: number): void {
        if (calificacion >= 0 && calificacion <= 100) {
            this.calificaciones.push(calificacion)
            console.log(`Calificacion ${calificacion} agregada a ${this.nombre}`);
        } else {
            console.log(`Calificación invalida, favor de poner una calificación entre 0 y 100`);
        }
    }

    public calcularPromedio(): void {
        if (this.calificaciones.length === 0) {
            console.log(`No hay calificaciones para calcular el promedio.`); 
    } else {
        const suma = this.calificaciones.reduce((total, nota) => total + nota, 0);
        const promedio = suma / this.calificaciones.length
        console.log(`El promedio de ${this.nombre} es: ${promedio.toFixed(2)}`);
    }
    }
    public mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Calificaciones: ${this.calificaciones.join(", ") || "Ninguna"}`);
    }
}


const estudiante1 = new Estudiante("Lucía", 20, 95);
estudiante1.mostrarInfo();
estudiante1.calcularPromedio(); 
estudiante1.agregarCalificacion(95);
estudiante1.agregarCalificacion(88);
estudiante1.agregarCalificacion(105); 
estudiante1.mostrarInfo();
estudiante1.calcularPromedio();
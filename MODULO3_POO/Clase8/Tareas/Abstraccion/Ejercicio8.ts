// Ejercicio 8: Sistema de Gestión de Cursos
// Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase
// abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que
// contenga los estudiantes y el profesor.

abstract class Persona {
    constructor(public nombre: string, public edad: number) {}
    abstract mostrarInformacion(): string;
}

export class Estudiante extends Persona {
    constructor(nombre: string, edad: number, public matricula: string) {
        super(nombre, edad)
    }
    mostrarInformacion(): string {
        return `Estudiante ${this.nombre}, edad: ${this.edad}, matrícula: ${this.matricula}`; 
    }
}

class Profesor extends Persona {
    constructor(nombre: string, edad: number, public curso: string) {
        super(nombre, edad)
    }
    mostrarInformacion(): string {
        return `Docente ${this.nombre}, edad: ${this.edad}, curso: ${this.curso}`;
    }
}

class Curso {
    estudiantes: Estudiante[] = [];

    constructor(public nombre: string, public profesor: Profesor) {}
    
    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante)
    }

    mostrarCurso(): void {
        console.log(`Curso: ${this.nombre}`);
        console.log(this.profesor.mostrarInformacion());
        console.log("--------------------------------------");
        console.log("Estudiantes:");
        this.estudiantes.forEach(e => console.log(e.mostrarInformacion()));
    }
}


const profesor1 = new Profesor("Laura Ramírez", 40, "Matemáticas");
const estudiante1 = new Estudiante("Carlos Pérez", 20, "A001");
const estudiante2 = new Estudiante("Ana Torres", 22, "A002");

const cursoMatematicas = new Curso("Matemáticas Avanzadas", profesor1);
cursoMatematicas.agregarEstudiante(estudiante1);
cursoMatematicas.agregarEstudiante(estudiante2);

cursoMatematicas.mostrarCurso();
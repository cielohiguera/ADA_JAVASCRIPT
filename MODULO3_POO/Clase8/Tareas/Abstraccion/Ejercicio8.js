"use strict";
// Ejercicio 8: Sistema de Gestión de Cursos
// Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase
// abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que
// contenga los estudiantes y el profesor.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, matricula) {
        super(nombre, edad);
        this.matricula = matricula;
    }
    mostrarInformacion() {
        return `Estudiante ${this.nombre}, edad: ${this.edad}, matrícula: ${this.matricula}`;
    }
}
exports.Estudiante = Estudiante;
class Profesor extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    mostrarInformacion() {
        return `Docente ${this.nombre}, edad: ${this.edad}, curso: ${this.curso}`;
    }
}
class Curso {
    constructor(nombre, profesor) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.estudiantes = [];
    }
    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
    mostrarCurso() {
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

"use strict";
// 2. Ejercicio de Libro
// Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
// tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
// Implementa métodos para prestar y devolver el libro, asegurando que solo se 
// pueda prestar si está disponible y que se pueda devolver solo si ha sido 
// prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
// válida.
class Libro {
    constructor(titulo, autor, anioPublicacion, disponible) {
        this.titulo = titulo,
            this.autor = autor,
            this.anioPublicacion = anioPublicacion,
            this.disponble = disponible;
    }
    prestar() {
        if (this.disponble) {
            this.disponble = false;
            console.log(`El libro: ${this.titulo} ha sido prestado`);
        }
        else {
            console.log(`No se puede prestar "${this.titulo}" porque ya ha sido prestadp`);
        }
    }
    devolver() {
        if (!this.disponble) {
            this.disponble = true;
            console.log(`El libro '${this.titulo}' ha sido devuelto.`);
        }
        else {
            console.log(`No se puede devolver '${this.titulo}' porque no estaba prestado`);
        }
    }
    mostrarInfo() {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año de publicación: ${this.anioPublicacion}`);
        console.log(`Disponible: ${this.disponble ? "Sí" : "No"}`);
    }
}
const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967, true);
libro1.mostrarInfo();
libro1.prestar();
libro1.prestar();
libro1.devolver();
libro1.devolver();

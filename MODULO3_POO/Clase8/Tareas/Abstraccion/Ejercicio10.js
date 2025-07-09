"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
// Ejercicio 10: Sistema de Gestión de Biblioteca
// Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una
// clase abstracta Publicacion, clases concretas Libro y Revista, y una clase
// Biblioteca que gestione el préstamo de publicaciones.
// Clase abstracta: Publicacion
class Publicacion {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }
}
// Clase concreta: Libro
class Libro extends Publicacion {
    constructor(titulo, autor, anio, isbn) {
        super(titulo, autor, anio);
        this.isbn = isbn;
    }
    mostrarInformacion() {
        return `Libro: "${this.titulo}" de ${this.autor} (${this.anio}), ISBN: ${this.isbn}`;
    }
}
exports.Libro = Libro;
// Clase concreta: Revista
class Revista extends Publicacion {
    constructor(titulo, autor, anio, numero) {
        super(titulo, autor, anio);
        this.numero = numero;
    }
    mostrarInformacion() {
        return `Revista: "${this.titulo}" - Nº ${this.numero}, ${this.autor} (${this.anio})`;
    }
}
// Clase: Miembro
class Miembro {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}
// Clase: Biblioteca
class Biblioteca {
    constructor() {
        this.publicaciones = [];
        this.prestamos = new Map(); // idMiembro -> publicaciones
    }
    agregarPublicacion(publicacion) {
        this.publicaciones.push(publicacion);
    }
    prestarPublicacion(idMiembro, publicacion) {
        var _a;
        if (!this.prestamos.has(idMiembro)) {
            this.prestamos.set(idMiembro, []);
        }
        (_a = this.prestamos.get(idMiembro)) === null || _a === void 0 ? void 0 : _a.push(publicacion);
        console.log(`Publicación prestada a miembro ${idMiembro}: ${publicacion.mostrarInformacion()}`);
    }
    mostrarPrestamos() {
        console.log("Registro de préstamos:");
        this.prestamos.forEach((publicaciones, id) => {
            console.log(`Miembro ${id}:`);
            publicaciones.forEach(p => console.log(" - " + p.mostrarInformacion()));
        });
    }
}
// Prueba del sistema
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "978-3-16-148410-0");
const revista1 = new Revista("National Geographic", "Varios autores", 2025, 320);
const biblioteca = new Biblioteca();
biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(revista1);
const miembro1 = new Miembro("Laura Mendoza", 1);
const miembro2 = new Miembro("Luis Torres", 2);
biblioteca.prestarPublicacion(miembro1.id, libro1);
biblioteca.prestarPublicacion(miembro2.id, revista1);
biblioteca.mostrarPrestamos();

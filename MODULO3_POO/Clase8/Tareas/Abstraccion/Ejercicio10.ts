// Ejercicio 10: Sistema de Gestión de Biblioteca
// Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una
// clase abstracta Publicacion, clases concretas Libro y Revista, y una clase
// Biblioteca que gestione el préstamo de publicaciones.
// Clase abstracta: Publicacion
abstract class Publicacion {
    constructor(
        public titulo: string,
        public autor: string,
        public anio: number
    ) {}

    abstract mostrarInformacion(): string;
}

// Clase concreta: Libro
export class Libro extends Publicacion {
    constructor(
        titulo: string,
        autor: string,
        anio: number,
        public isbn: string
    ) {
        super(titulo, autor, anio);
    }

    mostrarInformacion(): string {
        return `Libro: "${this.titulo}" de ${this.autor} (${this.anio}), ISBN: ${this.isbn}`;
    }
}

// Clase concreta: Revista
class Revista extends Publicacion {
    constructor(
        titulo: string,
        autor: string,
        anio: number,
        public numero: number
    ) {
        super(titulo, autor, anio);
    }

    mostrarInformacion(): string {
        return `Revista: "${this.titulo}" - Nº ${this.numero}, ${this.autor} (${this.anio})`;
    }
}

// Clase: Miembro
class Miembro {
    constructor(
        public nombre: string,
        public id: number
    ) {}
}

// Clase: Biblioteca
class Biblioteca {
    private publicaciones: Publicacion[] = [];
    private prestamos: Map<number, Publicacion[]> = new Map(); // idMiembro -> publicaciones

    agregarPublicacion(publicacion: Publicacion): void {
        this.publicaciones.push(publicacion);
    }

    prestarPublicacion(idMiembro: number, publicacion: Publicacion): void {
        if (!this.prestamos.has(idMiembro)) {
            this.prestamos.set(idMiembro, []);
        }
        this.prestamos.get(idMiembro)?.push(publicacion);
        console.log(`Publicación prestada a miembro ${idMiembro}: ${publicacion.mostrarInformacion()}`);
    }

    mostrarPrestamos(): void {
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
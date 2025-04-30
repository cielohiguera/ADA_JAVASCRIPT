// Ejercicio 3: Interfaces - Sistema de Gestión de UsuariosCrea una interfaz Usuario que tenga las propiedades:
// • nombre (obligatoria).
// • edad (opcional).
// • readonly id (solo lectura).
// Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
// modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
// lectura.

interface Usuario {
    readonly id: number;
    nombre: string;
    edad?: number;
}

// Clase que implementa la interfaz
class UsuarioConcreto implements Usuario {
    readonly id: number;
    nombre: string;
    edad?: number;

    constructor(id:number, nombre: string, edad?:number) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarInformacion(): void {
        console.log(`ID: ${this.id}, Nombre: ${this.nombre}, edad: ${this.edad ?? 'No especificada'}`);
        
    }
}

// Ejemplo de uso
const usuario = new UsuarioConcreto(101, "Selene", 27)
usuario.mostrarInformacion();
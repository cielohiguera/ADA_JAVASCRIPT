"use strict";
// Ejercicio 3: Interfaces - Sistema de Gestión de UsuariosCrea una interfaz Usuario que tenga las propiedades:
// • nombre (obligatoria).
// • edad (opcional).
// • readonly id (solo lectura).
// Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
// modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
// lectura.
// Clase que implementa la interfaz
class UsuarioConcreto {
    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }
    mostrarInformacion() {
        var _a;
        console.log(`ID: ${this.id}, Nombre: ${this.nombre}, edad: ${(_a = this.edad) !== null && _a !== void 0 ? _a : 'No especificada'}`);
    }
}
// Ejemplo de uso
const usuario = new UsuarioConcreto(101, "Selene", 27);
usuario.mostrarInformacion();

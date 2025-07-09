"use strict";
// Ejercicio 8: Integramos contenidos - Animales1. Crea un pequeño sistema de gestión de Animales que incluya las clases
// Animal, Mascota, y MascotaExotica.
// o La clase Animal debe tener propiedades como nombre y tipo.
// o La clase Mascota debe extender Animal e incluir una propiedad para
// dueño.
// o La clase MascotaExotica debe extender Animal e incluir una
// propiedad para habitat.
// 2. Implementa métodos para mostrar información sobre cada tipo de animal
// y agrega ejemplos de instanciación.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Clase base
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
    }
}
exports.Animal = Animal;
// crear clase para extender animal
class Mascota extends Animal {
    constructor(nombre, tipo, dueno) {
        super(nombre, tipo);
        this.dueno = dueno;
    }
    mostrarInformacion() {
        super.mostrarInformacion(); // Llamar metodo base
        console.log(`Dueño: ${this.dueno}`);
    }
}
// Clase MascotaExotica que extiende Animal
class MascotaExotica extends Animal {
    constructor(nombre, tipo, habitat) {
        super(nombre, tipo); // Llama al constructor de la clase base
        this.habitat = habitat;
    }
    mostrarInformacion() {
        super.mostrarInformacion(); // Llama al método de la clase base
        console.log(`Hábitat: ${this.habitat}`);
    }
}
// Ejemplo de uso
const miPerro = new Mascota("Rex", "Perro", "Juan");
miPerro.mostrarInformacion();
const miTigre = new MascotaExotica("Tigre", "Felino", "Selva");
miTigre.mostrarInformacion();

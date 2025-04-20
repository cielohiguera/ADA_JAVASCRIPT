// Ejercicio 5: Interfaz
// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
// método presentarse().
// 2. Crea una clase llamada Persona que implemente esta interfaz y
// proporciona la implementación del método presentarse().

interface IPersona {
    nombre: string;
    edad: number;

    // Defindir metodo
    presentarse: () => void;
}

export class Persona implements IPersona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse():  void {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} anios`)
    }
}

// Ejemplo de uso
const persona1 = new Persona("Ana", 30);
persona1.presentarse();
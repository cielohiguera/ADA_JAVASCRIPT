"use strict";
// Definimos una clase
class Gato {
    // constructor
    constructor(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    // Método para obtener información del gatito
    obtenerInformacion() {
        return `Nombre: ${this.nombre}, edad: ${this.edad}, raza: ${this.raza}`;
    }
    // Método para cambiar la raza del gatito
    cambiarRaza(nuevaRaza) {
        this.raza = nuevaRaza;
    }
}
// Creamos una instancia de la clase gato
const gato1 = new Gato('Miau', 2, 'siames');
// Llamamos al método obtener informacion
console.log(gato1.obtenerInformacion());
// Cambiamos raza
gato1.cambiarRaza("Persa");
console.log(gato1.obtenerInformacion());

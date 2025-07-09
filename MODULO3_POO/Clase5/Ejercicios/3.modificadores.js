"use strict";
class Animal {
    //constructor
    constructor(nombre, tipoAlimento, especie) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie;
    }
    // metodo publico: accesible desde cualquier parte
    describirAnimal() {
        console.log(`Este es ${this.nombre}, un animal de la especie ${this.especie}`);
    }
    mostrarTipoAlimento() {
        console.log(`${this.nombre} se alimenta con ${this.tipoAlimento}`);
    }
    sonidoAnimal() {
        console.log(`${this.nombre} hace un sonido`);
    }
}
// porque void?
// La función hace algo (en este caso, muestra un mensaje en la consola),
// pero no retorna ningun valor que puedas guardar en una variable o 
// usar después.
// crear la instancia 
const miAnimal = new Animal('Gato', 'coquito', 'felino');
miAnimal.describirAnimal();
//miAnimal.mostrarTipoAlimento()
//miAnimal.sonidoAnimal()

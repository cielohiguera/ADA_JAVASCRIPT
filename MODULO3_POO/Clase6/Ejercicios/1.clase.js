"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Clase base Clase padre
class Animal {
    // Constructor: Inicializa la propiedad name
    constructor(name) {
        this.name = name;
    }
    // Método que imprime un sonido generico de animal
    makeSound() {
        console.log(`${this.name} hace un sonido`);
    }
}
exports.Animal = Animal;
// Clase derivada - Clase Hijo
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Llama al constructor de la clase base animal para inicializar 'name'
        this.breed = breed; // inicializamos la propiedad breed
    }
    // Sobre escritura de metodo makeSound
    makeSound() {
        console.log(`${this.name} ladra.`); // Cambia el sonido especifico para los perros
    }
    // Nuevo método especifico de la subclase Dog
    fetch() {
        console.log(`${this.name} esta buscando la pelota.`); // El perro realiza la acción de buscar la pelota
    }
}
// Instanciar objetos de la clase base y derivada
const animalGenerico = new Animal('Animal'); // Creación de un objeto de la clase base 
animalGenerico.makeSound();
const myDog = new Dog('Blaki', 'Manchas');
myDog.makeSound();
myDog.fetch();

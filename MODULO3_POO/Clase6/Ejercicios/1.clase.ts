// Clase base Clase padre
export class Animal {
    name: string;

    // Constructor: Inicializa la propiedad name
    constructor (name: string) {
        this.name = name;
    }

    // Método que imprime un sonido generico de animal
    makeSound(): void {
        console.log(`${this.name} hace un sonido`);
    }
}

// Clase derivada - Clase Hijo
class Dog extends Animal {
    breed: string;

    constructor(name:string, breed:string) {
        super(name) // Llama al constructor de la clase base animal para inicializar 'name'
        this.breed = breed // inicializamos la propiedad breed
    }

    // Sobre escritura de metodo makeSound
    makeSound(): void {
        console.log(`${this.name} ladra.`); // Cambia el sonido especifico para los perros
    }

    // Nuevo método especifico de la subclase Dog
    fetch(): void {
        console.log(`${this.name} esta buscando la pelota.`); // El perro realiza la acción de buscar la pelota
    }
}

// Instanciar objetos de la clase base y derivada
const animalGenerico = new Animal('Animal') // Creación de un objeto de la clase base 
animalGenerico.makeSound()

const myDog = new Dog('Blaki', 'Manchas')
myDog.makeSound();
myDog.fetch();
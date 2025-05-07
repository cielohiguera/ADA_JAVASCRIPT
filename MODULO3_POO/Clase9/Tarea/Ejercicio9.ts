// Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
// Crea un sistema que represente el juego Pac-Man utilizando clases. Define una
// clase Personaje que sirva como clase base para PacMan y Fantasma. Implementa
// métodos para moverse por el mapa y realizar acciones. Define una interfaz
// EntidadMovible que contenga el método moverse. Usa herencia para que PacMan 
// y los fantasmas compartan el comportamiento de moverse y polimorfismo
// para que cada personaje pueda implementar su propio comportamiento de
// movimiento.

type CoordenadasMapa = [number, number];

// Interfaz que define entidades movibles
interface EntidadMovible {
    moverse(): void;
}

// Clase base Personaje
export abstract class Personaje implements EntidadMovible {
    protected posicionInicial: CoordenadasMapa;
    protected velocidad: number;

    constructor(posicionInicial: CoordenadasMapa, velocidad: number) {
        this.posicionInicial = posicionInicial;
        this.velocidad = velocidad;
    }

    // Método abstracto para moverse, implementar en subclase
    abstract moverse(): void;

    // Método común para imprimir la posición actual
    imprimirPosicion(): void {
        console.log(`Posición actual: ${this.posicionInicial[0]}. ${this.posicionInicial[1]}`);
    }
    // Metodo para cambiar de posición
    protected actualizarPosicion(x: number, y: number): void {
        this.posicionInicial = [this.posicionInicial[0] + x, this.posicionInicial[1] + y];
    }
}

class PacMan extends Personaje {
    constructor(posicionInicial: CoordenadasMapa) {
        super(posicionInicial, 2) // PacMan se mueve a una velocidad 2
    }

    // Implementación del método de moverse
    moverse(): void {
        this.actualizarPosicion(this.velocidad, 0)
        console.log(`Pac-Man se movió a la derecha`);
        this.imprimirPosicion();
    }
    // Método para comer una pastilla
    comerPastilla(): void {
        console.log("Pac-Man comió una pastilla");
    }
}

// Clase Fantasma que extiende Personaje
class Fantasma extends Personaje {
    private nombre: string;

    constructor(nombre: string, posicionInicial: CoordenadasMapa) {
        super(posicionInicial, 1); // Los fantasmas se mueven a velocidad 1
        this.nombre = nombre;
    }

    // Implementación del método moverse
    moverse(): void {
        // Los fantasmas se mueven de forma aleatoria
        const direccion = Math.random() > 0.5 ? 1 : -1;
        this.actualizarPosicion(direccion * this.velocidad, 0);
        console.log(`${this.nombre} se movió en dirección ${direccion > 0 ? 'derecha' : 'izquierda'}.`);
        this.imprimirPosicion();
    }

    // Método específico de los fantasmas
    asustarPacMan(): void {
        console.log(`${this.nombre} está persiguiendo a Pac-Man.`);
    }
}

// Ejemplo de uso
const pacman = new PacMan([0, 0]);
pacman.moverse();  // Pac-Man se mueve
pacman.comerPastilla();  // Pac-Man come una pastilla

const fantasma1 = new Fantasma("Blinky", [5, 0]);
fantasma1.moverse();  // Blinky se mueve aleatoriamente
fantasma1.asustarPacMan();  // Blinky persigue a Pac-Man

// Pac-Man se movió a la derecha
// Posición actual: 2. 0
// Pac-Man comió una pastilla
// Blinky se movió en dirección izquierda.
// Posición actual: 4. 0
// Blinky está persiguiendo a Pac-Man.

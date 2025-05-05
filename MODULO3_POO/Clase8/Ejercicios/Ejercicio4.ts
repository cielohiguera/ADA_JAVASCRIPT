// POLIMORFISMO
// Ejercicio 7: Herencia y Polimorfismo con Clases Abstractas y Métodos
// SobrecargadosCrea una clase abstracta InstrumentoMusical con un método tocar. Crea dos
// clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el
// instrumento de manera diferente. Además, agrega una sobrecarga del método
// tocar en la clase base para permitir tocar con o sin acompañamiento.

abstract class InstrumentoMusical {
    // Método abstracto
    abstract tocar(): void
    abstract tocar(conAcompaniamiento: boolean): void
}

class Guitarra extends InstrumentoMusical {
    // Sobreescritura del método tocar
    tocar(): void;
    tocar(conAcompaniamiento: boolean): void;
    tocar(conAcompaniamiento?: boolean): void {
        if (conAcompaniamiento) {
            console.log("Tocando la guitarra con acompañamiento");
            
        } else {
            console.log("Tocando la guitarra sin acompañamiento");
        }
    }
}

class Piano extends InstrumentoMusical {
    // Sobreescritura del método tocar
    tocar(): void;
    tocar(conAcompaniamiento: boolean): void;
    tocar(conAcompaniamiento?: boolean): void {
        if (conAcompaniamiento) {
            console.log("Tocando el piano con acompañamiento");
        } else {
            console.log("Tocandso el piano sin acompañamiento");
        }
    }
}

// Pruebas
const guitarra = new Guitarra()
guitarra.tocar() // Tocando la guitarra sin acompañamiento
guitarra.tocar(true) // Tocando la guitarra con acompañamiento

const piano = new Piano()
piano.tocar()
piano.tocar(true)
// Interfaces
interface Volador {
    volar(): void;
}

interface Nadador {
    nadar(): void;
}

// Clase que implementa ambas interfaces
class Pato implements Volador, Nadador {
    volar(): void {
        console.log("El pato está volando sobre el lago.");
    }

    nadar(): void {
        console.log("El pato está nadando en el agua.");
    }
}

// Prueba
const pato = new Pato();
pato.volar(); // El pato está volando sobre el lago.
pato.nadar(); // El pato está nadando en el agua.

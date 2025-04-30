// Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)Consigna: 
// Crea dos interfaces: Volador con el método volar() y Transportable
// con el método transportar(). Luego crea una clase Avion que implemente ambas
// interfaces y sobrescriba los métodos.

// Definción de la interfaz volar
interface Volar {
    volar(): void;
}

interface Transportable {
    transportable(): void;
}

class Avion implements Volar, Transportable {
    // Implementación del método volar en la interfaz volar
    volar() {
        console.log('El avión esta volando');
    }

    // Implementación del método transportable de la interfaz Transportable
    transportable(): void {
        console.log('El avión es transportable');
        
    }
}

// Crear una instancia de 'Plane'
const plane = new Avion(); // Se crea un objeto de tipo avión
// Llamar al método volar en la instacia 'plane'
plane.volar(); // Imprime 'El avión esta volando'
// Llamar al método transportable en la instancia 'plane'
plane.transportable(); // Imprime 'El avión es transportable'
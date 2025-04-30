// Ejercicio 4: Herencia de Métodos y Sobrescritura
// Consigna: Define una clase base Flor con el método describir(), que imprime un
// mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
// cada una sobrescribiendo el método describir() con un mensaje específico.

class Flor {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo
    }

    // Metodo de describir
    describir() {
        console.log(`${this.tipo} es una flor muy bonita`);
    }
}

// Clase derivada de la clase base
class Rosa extends Flor {
    constructor(tipo: string) {
        super(tipo);
        this.tipo = tipo;
    }
    describir(): void {
        console.log(`La flor más regalada en San Valentín es la rosa`);
        
    }
}

class Girasol extends Flor {
    constructor(tipo: string) {
        super(tipo);
        this.tipo = tipo;
    }
    describir(): void {
        console.log(`La flor más bonita es el girasol`);
        
    }
}

const rosa = new Rosa('Rosa');
const girasol = new Girasol('Girasol');

rosa.describir()
girasol.describir()
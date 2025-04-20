// Ejercicio 4: Clases y Objetos1. Define una clase llamada Animal con propiedades nombre y tipo, y un
// método hacerSonido().
// 2. Crea una instancia de la clase Animal y llama al método.

export class Animal {
    // propiedades
    public nombre: string;
    public tipo: string

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Metodo de hacerSonido()
    public hacerSonido(): void {
        console.log(`${this.nombre} hace un sonido`)
    }
}

const gato = new Animal('Garra', "Gato")
gato.hacerSonido();
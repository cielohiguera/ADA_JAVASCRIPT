// Definimos una clase
class Gato {
    // propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    // constructor
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza
    }
    // Método para obtener información del gatito
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, edad: ${this.edad}, raza: ${this.raza}`
    }

    // Método para cambiar la raza del gatito
    public cambiarRaza(nuevaRaza: string) : void {
        this.raza = nuevaRaza;
    }
}

// Creamos una instancia de la clase gato
const gato1 = new Gato('Miau', 2, 'siames')

// Llamamos al método obtener informacion
console.log(gato1.obtenerInformacion());

// Cambiamos raza
gato1.cambiarRaza("Persa")
console.log(gato1.obtenerInformacion());


// Ejercicio 2: Herencia Simple con Acceso
// Consigna: Crea una clase base Maestro con propiedades protegidas nombre y
// materia, y un método enseñar(). Luego, crea una clase derivada
// MaestroMatematicas que extienda de Maestro y sobrescriba el método
// enseñar() para imprimir un mensaje específico de matemáticas

class Maestro {
    protected nombre: string;
    protected materia: string;

    constructor(nombre: string, materia: string) {
        this.nombre = nombre;
        this.materia = materia;
    }
    // Metodo de enseñar
    protected enseñar(): void {
        console.log(`El maestro ${this.nombre} enseña la materia de ${this.nombre}`)
    }
}

class MaestroMatematicas extends Maestro {
    constructor(nombre: string) {
        super(nombre, "Matematicas");
    }
    public enseñar(): void {
        console.log(`La maestra ${this.nombre} esta explicando ecuaciones diferenciales`);
        
    }
}

// Uso de método
const profesor = new MaestroMatematicas("Laura")
profesor.enseñar();
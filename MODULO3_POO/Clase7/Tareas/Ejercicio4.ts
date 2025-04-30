// 4. Ejercicio de Aviones
// Crea una clase Avion con propiedades privadas para el modelo, capacidad y 
// velocidad. Implementa getters y setters para cada propiedad, asegurándote de 
// validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
// Nota sobre la inicialización de propiedades
// En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las 
// propiedades _capacidad y _velocidad. Esto se hace para evitar un error de 
// TypeScript que indica que estas propiedades no estaban inicializadas en el 
// constructor. Este enfoque asegura que las propiedades serán asignadas 
// adecuadamente en el constructor mediante el uso de los setters, manteniendo 
// así la validación de los valores. Tener esto en cuenta para los demás ejercicios.

export class Avion {
    private _modelo: string;
    private _capacidad!: number; // operador ! para indicar que será inicializado después
    private _velocidad!: number; // operador ! para indicar que será inicializado después

    constructor(modelo: string, capacidad: number, velocidad: number) {
        this._modelo = modelo;
        this.capacidad = capacidad; // usando el setter
        this.velocidad = velocidad; // usando el setter
    }

    // Getter y Setter para modelo
    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(valor: string) {
        this._modelo = valor;
    }

    // Getter y Setter para capacidad
    public get capacidad(): number {
        return this._capacidad;
    }

    public set capacidad(valor: number) {
        if (valor >= 0) {
            this._capacidad = valor;
        } else {
            console.log("Error: La capacidad no puede ser menor que 0.");
            this._capacidad = 0;
        }
    }

    // Getter y Setter para velocidad
    public get velocidad(): number {
        return this._velocidad;
    }

    public set velocidad(valor: number) {
        if (valor >= 0) {
            this._velocidad = valor;
        } else {
            console.log("Error: La velocidad no puede ser negativa.");
            this._velocidad = 0;
        }
    }

    public mostrarInfo(): void {
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Capacidad: ${this._capacidad} pasajeros`);
        console.log(`Velocidad: ${this._velocidad} km/h`);
    }
}

// Prueba
const avion1 = new Avion("Boeing 747", 416, 920);
avion1.mostrarInfo();

avion1.capacidad = -5; 
avion1.velocidad = -300;
avion1.mostrarInfo();

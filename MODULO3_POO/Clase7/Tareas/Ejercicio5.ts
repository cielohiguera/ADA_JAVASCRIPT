// 5. Ejercicio de Vacaciones
// Desarrolla una clase Vacacion que tenga propiedades privadas para destino, 
// duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de 
// que duracion no sea menor que 1 y presupuesto sea mayor que 0

class Vacacion {
    private _destino: string;
    private _duracion!: number;
    private _presupuesto!: number;

    constructor(destino: string, duracion: number, presupuesto: number) {
        this._destino = destino;
        this.duracion = duracion;       // Usando el setter para validar
        this.presupuesto = presupuesto; // Usando el setter para validar
    }

    // Getter y Setter para destino
    public get destino(): string {
        return this._destino;
    }

    public set destino(valor: string) {
        this._destino = valor;
    }

    // Getter y Setter para duración
    public get duracion(): number {
        return this._duracion;
    }

    public set duracion(valor: number) {
        if (valor >= 1) {
            this._duracion = valor;
        } else {
            console.log("Error: La duración debe ser de al menos 1 día.");
            this._duracion = 1;
        }
    }

    // Getter y Setter para presupuesto
    public get presupuesto(): number {
        return this._presupuesto;
    }

    public set presupuesto(valor: number) {
        if (valor > 0) {
            this._presupuesto = valor;
        } else {
            console.log("Error: El presupuesto debe ser mayor que 0.");
            this._presupuesto = 1;
        }
    }

    public mostrarInfo(): void {
        console.log(`Destino: ${this._destino}`);
        console.log(`Duración: ${this._duracion} días`);
        console.log(`Presupuesto: $${this._presupuesto}`);
    }
}

// Prueba
const vacacion1 = new Vacacion("Cancún", 7, 1500);
vacacion1.mostrarInfo();

vacacion1.duracion = 0;
vacacion1.presupuesto = -100;
vacacion1.mostrarInfo();

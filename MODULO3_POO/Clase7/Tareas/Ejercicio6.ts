// 6. Ejercicio de Supermercado
// Crea una clase Producto que contenga propiedades privadas como nombre, 
// precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea 
// negativo y que cantidad no sea menor que 0.

export class Producto {
    private _nombre: string;
    private _precio!: number;  // operador ! porque se inicializa en el setter
    private _cantidad!: number;

    constructor(nombre: string, precio: number, cantidad: number) {
        this._nombre = nombre;
        this.precio = precio;     // Usamos setter
        this.cantidad = cantidad; // Usamos setter
    }

    // Getter y Setter para nombre
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(valor: string) {
        this._nombre = valor;
    }

    // Getter y Setter para precio
    public get precio(): number {
        return this._precio;
    }

    public set precio(valor: number) {
        if (valor >= 0) {
            this._precio = valor;
        } else {
            console.log("Error: El precio no puede ser negativo.");
            this._precio = 0;
        }
    }

    // Getter y Setter para cantidad
    public get cantidad(): number {
        return this._cantidad;
    }

    public set cantidad(valor: number) {
        if (valor >= 0) {
            this._cantidad = valor;
        } else {
            console.log("Error: La cantidad no puede ser menor que 0.");
            this._cantidad = 0;
        }
    }

    public mostrarInfo(): void {
        console.log(`Producto: ${this._nombre}`);
        console.log(`Precio: $${this._precio}`);
        console.log(`Cantidad: ${this._cantidad}`);
    }
}

// Prueba
const producto1 = new Producto("Manzanas", 2.5, 30);
producto1.mostrarInfo();

producto1.precio = -10; // Error controlado
producto1.cantidad = -5; // Error controlado
producto1.mostrarInfo();

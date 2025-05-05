// Ejercicio 9: Sistema de Tienda en Línea
// Consigna: Desarrolla un sistema para una tienda en línea. Crea una clase base
// Producto que tenga propiedades como nombre, precio, y un método
// detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas
// deben sobrescribir el método detallesProducto() con información más
// específica.
// Crea una interfaz Envio que defina el método calcularEnvio(). La clase
// Electronico debe implementar esta interfaz y el cálculo del envío será un 10%
// del precio del producto.

// Crear interface
interface Envio {
    calcularEnvio(): number;
}

// Clase base del producto
export class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
    detallesProducto(): string {
        return `Producto: ${this.nombre}, precio: $${this.precio.toFixed(2)}`
    }
}

// Clase derivada
class Electronico extends Producto implements Envio {
    constructor(nombre: string, precio: number, public marca: string) {
        super(nombre, precio)
    }
    detallesProducto(): string {
        return `Electronico: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio.toFixed(2)}`
    }
    calcularEnvio(): number {
        return this.precio * 0.10
    }
}

// Clase derivada ropa

class Ropa extends Producto {
    constructor(nombre: string, precio: number, public talla: string) {
        super(nombre, precio);
    }
    detallesProducto(): string {
        return `Ropa ${this.nombre}, Talla: ${this.talla}, Precio: $${this.precio.toFixed(2)}`
    }
}

const laptop = new Electronico("Laptop Dell", 1200, "Dell");
const camiseta = new Ropa("Camiseta deportiva", 25, "M");

console.log(laptop.detallesProducto());
console.log(`Costo de envío: $${laptop.calcularEnvio().toFixed(2)}`);
console.log("-----------------------------------");
console.log(camiseta.detallesProducto());
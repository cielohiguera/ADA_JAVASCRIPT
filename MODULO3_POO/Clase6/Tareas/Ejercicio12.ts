// Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases
// Crea un sistema de inventario que gestione diferentes tipos de productos.
// Define una clase abstracta Producto con:
// • Propiedades protegidas: nombre, precio.
// • Un método abstracto calcularDescuento().
// Implementa dos subclases: Ropa y Electronica.
// • La subclase Ropa aplicará un 10% de descuento.
// • La subclase Electronica tendrá un 5% de descuento.
// Añade un método concreto en la clase abstracta para mostrar la información del
// producto.

// Clase abstracta Producto
abstract class Producto {
    protected nombre: string;
    protected precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método concreto para mostrar información del producto
    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre} | Precio: $${this.precio.toFixed(2)}`);
    }

    // Método abstracto que debe implementarse en las subclases
    abstract calcularDescuento(): number;
}

// Subclase Ropa
class Ropa extends Producto {
    calcularDescuento(): number {
        const descuento = this.precio * 0.10;
        console.log(`Descuento en ropa: $${descuento.toFixed(2)}`);
        return descuento;
    }
}

// Subclase Electronica
class Electronica extends Producto {
    calcularDescuento(): number {
        const descuento = this.precio * 0.05;
        console.log(`Descuento en electrónica: $${descuento.toFixed(2)}`);
        return descuento;
    }
}

// Ejemplo de uso
const pantalon = new Ropa("Pantalón de mezclilla", 800);
pantalon.mostrarInformacion();
pantalon.calcularDescuento();

console.log('---');

const laptop = new Electronica("Laptop Gamer", 25000);
laptop.mostrarInformacion();
laptop.calcularDescuento();

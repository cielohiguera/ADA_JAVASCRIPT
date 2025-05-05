// Ejercicio 9: Sistema de Gestión de Compras
// Crea un sistema que gestione productos y órdenes de compra. Usa una clase
// abstracta Producto, clases concretas Electrónico y Alimento, y una clase
// OrdenCompra que contenga múltiples productos.

// Clase abstracta del producto
export abstract class Producto {
    constructor(public nombre: string, public precio: number) {}
    abstract obtenerDescripcion(): string;
}

// Clase concreta: Electrónico
class Electronico extends Producto {
    constructor(nombre: string, precio: number, public marca: string) {
        super(nombre, precio);
    }
    obtenerDescripcion(): string {
        return `Electrónico: ${this.nombre}, Marca: ${this.marca}, Precio: $${this.precio.toFixed(2)}`;
    }
}

// Clase concreta: Alimento
class Alimento extends Producto {
    constructor(nombre: string, precio: number, public fechaCaducidad: string) {
        super(nombre, precio);
    }
    obtenerDescripcion(): string {
        return `Alimento: ${this.nombre}, Caduca: ${this.fechaCaducidad}, Precio: $${this.precio.toFixed(2)}`;
    }
}

// Clase Orden de compra
class OrdenCompra {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }

    private calcularTotal(): number {
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }

    mostrarOrden(): void {
        console.log("Orden de compras");
        this.productos.forEach((p, i) => {
            console.log(`${i + 1}. ${p.obtenerDescripcion()}`);
        });
        console.log(`Total: $${this.calcularTotal().toFixed(2)}`);
    }
}


const laptop = new Electronico("Laptop Lenovo", 1500, "Lenovo");
const celular = new Electronico("iPhone", 1200, "Apple");
const pan = new Alimento("Pan integral", 3.5, "2025-06-01");
const leche = new Alimento("Leche deslactosada", 1.8, "2025-05-20");

const orden = new OrdenCompra();
orden.agregarProducto(laptop);
orden.agregarProducto(celular);
orden.agregarProducto(pan);
orden.agregarProducto(leche);

orden.mostrarOrden();
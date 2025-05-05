// ENCAPSULAMIENTO
// 7. Ejercicio de Bodega
// Diseña una clase Bodega que tenga propiedades privadas para nombre,
// direccion, y inventario (un array de objetos con producto y cantidad).
// Implementa métodos para agregar productos al inventario, eliminar productos,
// y listar el inventario. Si se intenta agregar un producto con una cantidad
// negativa, imprime un mensaje informativo.

class Bodega {
    private _nombre: string
    private _direccion: string
    private _inventario: {producto: string; cantidad: number}[] // Inventario de productos

    constructor(nombre: string, direccion: string) {
        this._nombre = nombre
        this._direccion = direccion
        this._inventario = [] // Inicializa el inventario como un arreglo vacío
    }
    // Geter para el nombre
    public get nombre(): string {
        return this._nombre // devuelve el nombre de la bodega
    }
    public agregarProducto(producto: string, cantidad: number): void {
        if (cantidad < 0) {
            console.log("La cantidad no puede ser negativa");
        } else {
            this._inventario.push({producto, cantidad}) // Agrego el producto al inventario
            console.log(`Producto ${producto} agregado con cantidad ${cantidad}`)
        }
    }
    public eliminarProducto(producto: string): void {
        const index = this._inventario.findIndex(item => item.producto === producto)
        if (index === -1) {
            console.log(`El producto ${producto} no esta en el inventario`);
        } else {
            this._inventario.splice(index, 1)
            console.log(`Producto ${producto} eliminado del inventario`);
        }
    }
    public listarInventario(): {producto: string; cantidad: number}[] {
        return this._inventario
    }
}

// Pruebas
const bodega = new Bodega('Bodega central', 'Calle principal 123')
bodega.agregarProducto('Manzanas', 50)
bodega.agregarProducto('Peras', -10)
console.log(`Inventario de ${bodega.nombre}: `, bodega.listarInventario());

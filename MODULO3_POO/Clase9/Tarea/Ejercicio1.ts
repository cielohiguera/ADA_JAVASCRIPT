// 1. Mueblería: Actualización de PreciosEn una mueblería, se requiere un sistema que permita actualizar los precios de
// los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
// un identificador único. Implementa las siguientes funciones:
// • Añadir un nuevo mueble.
// • Actualizar el precio de un mueble después de 3 segundos utilizando
// setTimeout().
// • Mostrar el inventario de muebles

type Mueble = [number, string, number]; // [id, nombre, precio]

// Inventario como un arreglo de muebles
export const inventario: Mueble[] = []

// Funcion para añadir un nuevo mueble
function agregarMueble(id: number, nombre: string, precio: number) {
    const nuevoMueble: Mueble = [id, nombre, precio];
    inventario.push(nuevoMueble)
    console.log(`Mueble ${nombre} añadido con éxito`);
}

// Funcion para mostrar inventario

function mostrarInventario() {
    console.log("Inventario de la muebleria");
    inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    })
}

// Función para actualizar el precio de un mueble
function actualizarPrecio(id: number, nuevoPrecio: number) {
    setTimeout(() => {
        const mueble = inventario.find(m => m[0] === id);
        if (mueble) {
            mueble[2] = nuevoPrecio; // Actualizar el precio
            console.log(`El precio del mueble ${mueble[1]} se ha actualizado a $${nuevoPrecio}.`);
        } else {
            console.log("Mueble no encontrado.");
        }
    }, 3000); // Después de 3 segundos
}

// Añadimos algunos muebles
agregarMueble(1, "Sofá", 300);
agregarMueble(2, "Mesa", 150);

// Mostramos el inventario
mostrarInventario();

// Actualizamos el precio del sofá
actualizarPrecio(1, 350);
// Actividad 4: Control de inventario
// Consigna: Crea un programa para llevar el control de un inventario. El
// programa debe permitirte:
// 1. Agregar un producto: Registrar un producto con su nombre y
// cantidad disponible.
// 2. Listar los productos: Mostrar todos los productos registrados.
// 3. Actualizar la cantidad de un producto: Modificar la cantidad de
// un producto en el inventario.
// Pistas:
// • Usa un archivo JSON para guardar los productos.
// • Si el archivo no existe, comienza con un arreglo vacío.
// • Cada producto debe tener un ID único que se pueda utilizar para
// actualizar su cantidad.

// Paso 1: Importamos

const fs = require('fs')
const filePath = './inventario.json'

// Paso 2: Funcion para leer el inventario

const leerInventario = () => {
    // Si el archivo no existe, creamos un archivo vacío
    if(!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]')
    }
    const contenido = fs.readFileSync(filePath, 'utf-8') // leemos el archivo
    return JSON.parse(contenido) // conventirmos el contenido en un arreglo de materiales existentes
}

// Paso 3: Funcion para escribir los materiales del archivo

const escribirMateriales = (materiales) => {
    fs.writeFileSync(filePath, JSON.stringify(materiales, null, 2))
}

// Paso 4: Funcion para agregar un nuevo material

const agregarMaterial = (nuevoMaterial, cantidadProductos) => {
    const material = leerInventario() // Leer materiales existentes
    material.push({id:material.length + 1, producto: nuevoMaterial, cantidad: parseInt(cantidadProductos)}); // Agregamos mas productos
    escribirMateriales(material); // Lista actualizada
    console.log(`Producto agregado: ${nuevoMaterial}, cantidad: ${cantidadProductos}`);
}

// Paso 5: Lista de los materiales agregados

const listarMaterial = () => {
    const materiales = leerInventario();
    console.log(`Inventario de productos:`);
    materiales.forEach(material => {
        console.log(`${material.id}. ${material.producto} - ${material.cantidad} productos`);
    });
};

// Paso 6: Actualizar la cantidad de un producto: 

const actualizarInventario = (idMaterial, nuevaCantidad) => {
    const materiales = leerInventario();
    const material = materiales.find(p => p.id === idMaterial);
    if (material) {
        material.cantidad = parseInt(nuevaCantidad);
        escribirMateriales(materiales);
        console.log(`El producto: ${material.producto} ha actualizado su cantidad de piezas ${material.cantidad}`);
    } else {
        console.log(`Producto no encontrado`);
    }
};

// Ejemplos de uso

agregarMaterial("Clavos", 9);
listarMaterial();
actualizarInventario(1, 6)
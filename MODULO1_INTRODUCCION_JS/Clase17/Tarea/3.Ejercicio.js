// Ejercicio 3: Gestión Compleja de Arrays
// A partir del siguiente array de productos, escriba la función
// ‘gestionarProductos’ que realice las siguientes tareas:
// 1. Añada un nuevo producto al array.
// 2. Elimine el último producto del array.
// 3. Encuentre el índice de un producto específico. En este punto
// pueden usar forEach o investigar el método “findIndex()”
// https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// 4. Verifique si existe un producto con precio mayor a 50. Para esto
// investigar el método “.some()”
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Glo
// bal_Objects/Array/some
// 5. Devuelva una cadena de nombres de productos separados por
// comas.

let productos = [
    { nombre: "Alfajores", precio: 30},
    { nombre: "Chocolates", precio: 50},
    { nombre: "Chupetines", precio: 70},
    { nombre: "Caramelos", precio: 20},
    { nombre: "Bombones", precio: 20},
];

function gestionarProductos (productos) {
    // Añadir un nuevo producto al array
    let nuevoProducto = { nombre: "Chicles", precio: 10 };
    productos.push(nuevoProducto);
    //Elimine el último producto del array.
    productos.pop();
    // Encuentre el índice de un producto específico
    let findProduct = "Chocolates";
    let indexFindProduct = productos.findIndex(producto => producto.nombre === findProduct);
    // Verifique si existe un producto con precio mayor a 50.
    let productWhithPrice = productos.some(producto => producto.precio > 50);
    // Devuelva una cadena de nombres de productos separados por comas
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");

    // Devolver resultado
    return {
        productos: productos,
        indexFindProduct: indexFindProduct,
        productWhithPrice: productWhithPrice,
        nombresProductos: nombresProductos
    };
}

let resultado = gestionarProductos(productos);
console.log(resultado);
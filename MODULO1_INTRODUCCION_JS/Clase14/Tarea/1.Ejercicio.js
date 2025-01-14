// Ejercicio 1: Calcular el precio final del IVA
// Solicitar al usuario el precio de un producto y el porcentaje de de IVA. Usa una funcion
// flecha para calcular el precio final
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el producto de un producto
let precioProducto = parseFloat(prompt('Ingresa el precio de un producto: '));
let iva = parseFloat(prompt('Ingresa el porcentaje IVA: '));

const porcentajeIva = (precioProducto, iva) => precioProducto + (precioProducto * iva/100);
let precioFinal = porcentajeIva (precioProducto, iva)

console.log(`El precio del producto al aplicar IVA es: ${precioFinal}`);
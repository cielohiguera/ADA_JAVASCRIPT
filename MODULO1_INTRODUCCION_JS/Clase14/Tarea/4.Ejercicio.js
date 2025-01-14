// Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario.
// Usa una funcion flecha para calcular el total con descuento según la cantidad.

// Solicitar al usuario los productos y el descuento

const prompt = require('prompt-sync')();
let producto = parseFloat(prompt("Ingresa la cantidad de productos: "));
let productoUnitario = parseFloat(prompt("Ingresa el precio de cada producto: "));

// Usar la funcion flecha para conocer el descuento

const precioConDescuento = (producto, productoUnitario) => {
    descuento = 0;
    if (producto >= 10 && producto < 20) {
    descuento = 0.10; // 10% de descuento
    } else if (producto >= 20 && producto < 50) {
        descuento = 0.20; // 20% de descuento
    }
    return (producto * productoUnitario) * (1 - descuento);
};

let total = precioConDescuento(producto, productoUnitario);
console.log(`El total a pagar incluyendo el descuento es: ${total}`);

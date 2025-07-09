"use strict";
// 2. Florería: Envío Programado de Pedidos
// Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
// contener el nombre del cliente, la cantidad de flores y el tipo de flores.
// Implementa las siguientes funciones:
// • Añadir un pedido.
// • Programar el envío de un pedido utilizando setTimeout() para simular un
// retraso de 5 segundos.
// • Mostrar todos los pedidos pendientes.
const pedidos = [];
// Funcion parta añadir nuevas clientes con sus respectivas flores
function agregarPedido(nombreCliente, cantidadFlores, tipoFlores) {
    const nuevoPedido = [nombreCliente, cantidadFlores, tipoFlores];
    pedidos.push(nuevoPedido);
    console.log(`Pedido añadido para ${nombreCliente}`);
}
function enviarPedido(indice) {
    setTimeout(() => {
        if (pedidos[indice]) {
            console.log(`El pedido para ${pedidos[indice][0]} ha sido enviado`);
            pedidos.splice(indice, 1);
        }
        else {
            console.log(`Pedido no encontrado`);
        }
    }, 5000); // Despues de 5 segundos
}
function mostrarPedidos() {
    console.log(`Pedidos pendientes de envío`);
    pedidos.forEach((pedido, indice) => {
        console.log(`${indice}: Cliente: ${pedido[0]}, Cantidad: ${pedido[1]}, Tipo de Flor: ${pedido[2]}`);
    });
}
agregarPedido("Juan", 12, "Rosas");
agregarPedido("Ana", 5, "Tulipanes");
// Mostramos los pedidos
mostrarPedidos();
// Simulamos el envío del primer pedido
enviarPedido(0);

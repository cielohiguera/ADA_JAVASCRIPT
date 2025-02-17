// Ejercicio 10: Cliente que detecta pérdida de conexión
// Consigna
// Crea un cliente que:
// 1. Si deja de recibir datos durante 10 segundos, muestre " No hay
// datos del servidor" y cierre la conexión.Pistas
// • Usa setTimeout() que se reinicie con cada mensaje recibido.
// • Si pasan 10 segundos sin mensajes, cierra con client.end()

const net = require('net')

// Cliente que detecta pérdida de conexión
let timeout = setTimeout(() => {
    console.log('No hay datos del servidor, cerrando conexión');
    client.end();
}, 10000);
client.on('data', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('No hay datos del servidor, cerrando conexión');
        client.end();
    }, 10000);
});
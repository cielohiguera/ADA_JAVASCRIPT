// DESAFÍO 1: Cliente con Reconexión Automática
// Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
// conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
// El cliente debe:
// Conectarse al servidor en el puerto 5000.
// Enviar un mensaje inicial: "¡Hola, servidor!".Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
// Escuchar y manejar 'error', mostrando el mensaje en consola

const net = require('net');

// Conectarse el servidor en el puerto 5000

const client = net.createConnection({port: 5000}, () => {
    console.log('Conectando al servidor..');
    client.write('Hola servidor, soy el cliente');
});

client.on('data', (data) => {
    console.log('Mensaje recibido', data.toString());
});

client.on('close', () => {
    console.log('Conexión cerrada con el servidor. Intentado reconectarse en 3 segundos')
});

client.on('error', (err) => {
    console.log('Error: ', err.message);
});
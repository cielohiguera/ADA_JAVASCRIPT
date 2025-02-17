// DESAFÍO 5: Cliente con Eventos y Control de Referencias
// Objetivo: Aplicar ref() y unref() para controlar la terminación del
// proceso de Node.js.
// El cliente debe:
// Conectarse y enviar un mensaje inicial.
// Escuchar los eventos 'data', 'end', 'close' y 'error'.
// Llamar a client.unref() a los 10 segundos para permitir que el proceso
// termine.
// A los 15 segundos, llamar a client.ref() para que el proceso se
// mantenga activo.
// Cerrar la conexión a los 20 segundos.

const net = require('net');

const client = net.createConnection({port: 5000}, () => {
    console.log('Conectando al servidor');
    client.write('Hola servidor');
});

client.on('data', (data) => console.log('Datos recibidos:', data.toString()));
client.on('end', () => console.log('Servidor cerró la conexión.'));
client.on('close', () => console.log('Conexión cerrada.'));
client.on('error', (err) => console.error('Error:', err.message));

setTimeout(() => {
    console.log('Llamando a unref()...');
    client.unref();
}, 10000);

setTimeout(() => {
    console.log('Llamando a ref()...');
    client.ref();
}, 15000);

setTimeout(() => {
    console.log('Finalizando conexión...');
    client.end();
}, 20000);
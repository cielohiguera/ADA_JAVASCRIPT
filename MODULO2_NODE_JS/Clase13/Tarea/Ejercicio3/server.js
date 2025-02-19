// Ejercicio 3: Servidor TCP con UUID v1 y JSON
// Objetivo:
// Crear un servidor TCP que responda con un objeto JSON que contenga
// un UUID v1 basado en el tiempo y la dirección MAC.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.o Crear un servidor TCP que genere un UUID v1 basado en el
// tiempo.
// o Enviar un objeto JSON con el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
// mostrar el UUID en la consola.

const net = require('net');
const { v1: uuidv1 } = require('uuid');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Generar UUID V1 basado en el tiempo y la MAC
    const idv1 = uuidv1();
    console.log('UUID V1 generado:', idv1);

    // Enviar UUID en formato JSON al cliente
    const response = JSON.stringify({ uuid: idv1 }) + "\n";
    socket.write(response);

    // Manejar cierre de conexión
    socket.on('end', () => {
        console.log('Conexión finalizada con el cliente');
    });
});

// Iniciar servidor en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
});

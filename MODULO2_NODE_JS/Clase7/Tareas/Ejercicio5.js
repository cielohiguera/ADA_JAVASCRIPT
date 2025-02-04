// Ejercicio 5: Servidor con Contador de Conexiones
// Consigna:
// Crea un servidor TCP que lleve un contador de cuántos clientes se han
// conectado. Cada vez que un nuevo cliente se conecta, el servidor debe
// enviarle un mensaje indicando cuántos clientes se han conectado hasta
// ese momento. Cuando un cliente se desconecta, el servidor debe reducir
// el contador.
// Requisitos:
// • Usa una variable global para mantener el contador de conexiones.
// • Usa el evento connection para incrementar el contador y enviar el
// mensaje al cliente.
// • Usa el evento close para reducir el contador cuando un cliente se
// desconecta.


const { Socket } = require('dgram');
const net = require('net');

// Crear contador
let connectionCount = 0;

const server = net.createServer((socket) => {
    connectionCount++; // Incrementa el contador
    console.log(`Nuevo cliente conectado. Total de conexiones: ${connectionCount}`);

    // Envia el numero de conexiones al cliente
    socket.write(`Bienvenido. Eres el cliente numero: ${connectionCount}\n`);

    // Envia 'close': Reduce el contador cuando un cliente se desconecta

    socket.on('close', () => {
        connectionCount--;
        console.log(`Cliente desconectado. Total de conexiones: ${connectionCount}`);
    });
});

server.listen(3000, () => {
    console.log('Server escuchando en el puerto 3000')
})
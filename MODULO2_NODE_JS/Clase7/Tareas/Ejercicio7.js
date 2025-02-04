// Ejercicio 7: Servidor de Chat Grupal
// Consigna:
// Crea un servidor TCP que permita a múltiples clientes conectarse y enviar
// mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a
// todos los demás clientes conectados. El servidor debe notificar cuando
// un cliente se conecta o desconecta.
// Requisitos:
// • Usa un array para almacenar las conexiones de los clientes.
// • Usa el evento data para recibir mensajes y retransmitirlos a todos
// los clientes.
// • Usa el evento end para eliminar a un cliente del array cuando se
// desconecta.
// • Notifica a los demás clientes cuando alguien se conecta o
// desconecta.

const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    let authenticated = false;

    socket.write('Por favor, ingresa tu nombre de usuario:\n');

    socket.on('data', (data) => {
        if (!authenticated) {
            const input = data.toString().trim();
            if (input === 'usuario:contraseña') { // Credenciales simples
                authenticated = true;
                socket.write('Autenticación exitosa. Puedes enviar mensajes.\n');
            } else {
                socket.write('Credenciales incorrectas. Cerrando conexión...\n');
                socket.end();
            }
        } else {
            const message = data.toString().trim();
            socket.write(`Mensaje recibido: ${message}\n`);
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado.');
    });
});

server.listen(3000, () => {
    console.log('Servidor de autenticación escuchando en el puerto 3000');
});
// Paso 1: Importamos el modulo NET (nos permite trabajar con servidores TCP)

const net = require('net');

// Paso 2: Creamos el servidor TCP usando la función de createServer del modulo

const server = net.createServer((socket) => {
    // Este mensaje aparece cuando el cliente se conecta al servidor
    console.log('Un cliente se ha conectado');
    // Escuchamos el evento  'data' que se activa cuando el cliente envia datos al servidor
    socket.on('data', (data) => {
        // Mostrara en consola el mensaje recibido del cliente
        console.log('Mensaje recibido: ', data.toString())
    })
    // Escuchamos el evento 'end' que se activa cuando el cliente se desconecta del servidor
    socket.on('end', () => {
        console.log('El cliente se ha desconectado');
    })
});

// Paso 3: Definimos el puerto en el que el servidor estará escuchando conexiones

const PORT = 4000;
// Iniciamos el servidor y lo ponemos a escuchar en el puerto especifico
server.listen(PORT, () => {
    // mostramos un mensaje por consola indicando que el servidor esta listo
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
})
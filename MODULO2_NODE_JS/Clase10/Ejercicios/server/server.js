// Paso 1: Importar el modulo net

const net = require('net');

// Paso 2: Crear el servidor TCP
const server = net.createServer();

// Paso 3: Manejar el evento 'conecction' que emite cuando un cliente se conecta al servidor

server.on('connection', (socket) => {
    // Manejamos el evento data
    socket.on('data', (data) => {
        console.log('\nEl cliente' + socket.remoteAdress + socket.remotePort + "dice" + data);
        // Confirmación de recepción de datos
        socket.write('Recibí tu mensaje Mrs. cliente!')
    })
    // Manejamos el evento close
    socket.on('close', () => {
        console.log('Comunicación finalizada');
    })
    // Manejamos el evento error
    socket.on('error', (err) => {
        console.log(err.message);
    })
})

// Paso 4: Iniciamos el servidor como tal

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto', server.address().port);
})
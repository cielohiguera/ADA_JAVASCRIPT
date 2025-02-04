// Ejercicio 2: Servidor con Timeout
// Consigna:
// Crea un servidor TCP que cierre automáticamente la conexión con un
// cliente si no recibe datos en un período de 10 segundos. Si el cliente
// envía datos antes de que se cumpla el tiempo, el servidor debe reiniciar
// el contador de tiempo.
// Requisitos:
// • Usa el método socket.setTimeout() para establecer un tiempo de
// espera.
// • Usa el evento timeout para cerrar la conexión si se alcanza el
// tiempo límite.• Usa el evento data para reiniciar el contador de tiempo cada vez
// que se reciben datos

const net = require('net')

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado');

    // Establece un timeout de 10 segundos
    socket.setTimeout(10000);
    // Evento 'timeout': Cierra la conexión si no se reciben datos
    socket.on('timeout', () => {
        console.log('Tiempo de espera agotado. Cerrando sesión.');
        socket.end();
    });
    // Evento 'data': Reincia el timeout cada vez que se reciben datos
    socket.on('data', (data) => {
        console.log(`Datos recibidos ${data.toString()}`);
        socket.setTimeout(10000); // Reinicia el timeout
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando al puerto 3000')
});
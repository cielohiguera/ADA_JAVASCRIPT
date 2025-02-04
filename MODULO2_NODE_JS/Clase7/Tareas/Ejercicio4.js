// Ejercicio 4: Servidor con Manejo de Errores
// Consigna:
// Crea un servidor TCP que maneje errores de conexión de manera
// adecuada. Si ocurre un error en la conexión con un cliente, el servidor
// debe imprimir un mensaje de error en la consola y cerrar la conexión con
// ese cliente. Además, el servidor debe seguir funcionando y aceptando
// nuevas conexiones.
// Requisitos:• Usa el evento error para detectar errores en la conexión.
// • Usa el método socket.destroy() para cerrar la conexión en caso de
// error.
// • Asegúrate de que el servidor siga escuchando nuevas conexiones
// después de manejar el error.


const net = require('net');

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado.');

    // Evento 'error': Maneja errores en la conexión
    socket.on('error', (err) => {
        console.error(`Error en la conexión: ${err.message}`);
        socket.destroy();
    });
});

socket.listen(3000, () => {
    console.log('Servidor escuchando al puerto 3000.');
});
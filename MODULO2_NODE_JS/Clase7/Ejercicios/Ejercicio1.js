// Objetivo: Implementa un servidor TCP en Node.js que gestione conexiones, reciba/envie datos y maneje eventos.
// Requerimientos
// Usa el modulo net
// Esuchemos el puerto 3000
// Eventos del socket (por cliente)
// Registra conexiones de datos recibidos


// Paso 1: Importamos el modulo NET
const net = require('net') // Crea conexiones entre servidores y clientes

// Paso 2: Creamos el servidor TCP utilizando el metodo createServer
// este modulo recibe una función callback que se ejecuta cada vez que un cliente se conecta al servidor
const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor');
    // Paso 3: Agregamos los eventos
    // 1. Evento data: se emite cuando el servidor recibe datos del cliente
    socket.on('data', (data) => {
        console.log(`Datos recibidos del cliente ${data.toString()}`);
        // Podemos responder al cliente enviandole un mensaje de respuesta
        socket.write('Mensaje recibido por el servidor');
    })

    // 2. Evento end: se emite este evento cuando el cliente cierra la conexión de manera ordenada
    socket.on('end', () => {
        console.log('El cliente ha cerrado la conexión')
    })

    // 3. Evento error: Se emite cuando ocurre un evento en el socket
    socket.on('error', (err) => {
        console.err(`Error en la conexión: ${err.message}`);
    })

    // 4. Evento close: se emite cuando el socket se cierra de manera abrupta o inmediata
    socket.on('close', () => {
        console.log('La conexión se ha cerrado')
    })

    // 5. Evento timeOut: Se emite cuando alcanza el tiempo de espera definido por setTimeOut para recibir datos
    socket.on('timeout', () => {
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos.');
        // Podemos cerrar la conexión si se alcanza el time out
        socket.end()
    })

    // Configuramos el tiempo de espera.
    socket.setTimeout(5000) // 5000 = 5 segundos
})

// 6. Evento conection
server.on('connection', (socket) => {
    console.log(`Nueva conexión establecida`)
});

// Paso 4: Ponemos el servidor a escuchar al puerto
const PORT = 3000
server.listen(PORT, () => {
    console.log(`El servidor esta escuchando el puerto ${PORT}`);
});

// 7. Evento listening: Se emite cuando el servidor comienza a escuchar en un puerto especifico
server.on('listening', () => {
    console.log('El servidor esta lista para recibir conexiones');
});

// 8. Evento error: Se emite si ocurre al intentar una conexión al servidor
server.on('error', () => {
    console.err(`Error al iniciar el servidor ${err.message}`)
})

// 9. Evento close: Se emite cuando el servidor se cierra
server.on('close', () => {
    console.log('El servidor se ha cerrado')
})

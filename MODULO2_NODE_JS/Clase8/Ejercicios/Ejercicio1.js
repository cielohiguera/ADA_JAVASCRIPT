// Paso 1: Importamos el modulo net

const net = require('net')

// Paso 2: Configuración de la conexión
const PORT = 5000;
const HOST = 'localhost'

// Paso 3: Creamos la conexión al servidor usando 
const client = net.createConnection({port: PORT, host:HOST}, () => {
    // Paso 4: Mensaje para la conexión
    console.log('Conectado al servidor')

    // Paso 5: Enviamos un mensaje inicial al servidor
    client.write('Hola servidor!')

    // Paso 6: Configuramos tiempo de espera 
    client.setTimeout(1000, () => {
        console.log('Tiempo de espera alcanzado, cerrando conexión... ');
        client.end()
    });

    // Paso 7: Pausamos la recepción de datos después de 2 segundos
    setTimeout (() => {
        console.log('Pausando la recepción de datos...');
        client.pause()

        setTimeout(() => {
            console.log('Reanudando la recepción de datos...')
            client.resume();

            client.write('Otro mensaje después de reanudar...')
        }, 3000)
    }, 2000)


})

// Proxima clase
client.on ('error', (err) => {
    console.error('Error:', err.message);
})


// Paso 8: Para permitir que el proceso de node termine si no hay mas tareas pendientes

client.unref()

// Paso 9: Para mantener activo el proceso mientras que la conexión siga abierta
client.ref()

setTimeout(() => {
    console.log('Destuyendo el socket...')
    client.destroy()
}, 5000)
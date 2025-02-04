// Ejercicio 4: Manejo de errores en la conexión
// Consigna
// Modifica el cliente para que:
// 1. Si ocurre un error (como un servidor no disponible), lo detecte y lo
// muestre con " Error: [mensaje]".
// 2. Si la conexión se cierra inesperadamente, muestre " Conexión
// cerrada inesperadamente".
// Pistas
// • Usa client.on('error', callback) para manejar errores.
// • Usa client.on('close', callback) para detectar cierres.

// Paso 1: Importamos el modulo net
const net = require('net')

// Paso 2: Configuración de la conexión
const PORT = 5000;
const HOST = 'localhost'

// Creamos la conexión al servidor usando
const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectando al servidor')

    // Enviamos un mensaje
    client.write('Hola servidor!')

    // Configuramos el tiempo de espera
    client.setTimeout(5000, () => {
        console.log('Tiempo de espera agotado...');
        client.end()
    })

    // Paso 3: Recibir mensajes
    setTimeout(() => {
        console.log('Pausando la recepción de datos...')
        client.pause()

        setTimeout(() => {
            console.log('Reanudando la recepción de datos...')
            client.resume();
        }, 3000)
    }, 3000)
});


client.on('error', (err) => {
    console.log('Error:', err.message)
})

client.on('close', () => {
    console.log('Se cierra conexión');
} )
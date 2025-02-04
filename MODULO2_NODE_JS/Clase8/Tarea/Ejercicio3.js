// Ejercicio 3: Pausar y reanudar la recepción de datos
// Consigna
// Crea un cliente TCP que:
// 1. Reciba mensajes continuamente del servidor.
// 2. Al recibir el primer mensaje, pause la recepción durante 3
// segundos.
// 3. Luego de los 3 segundos, reanude la recepción y siga mostrando
// los mensajes.
// Pistas
// • Usa client.pause() y client.resume().
// • Un setTimeout() puede ayudarte a reanudar después de 3
// segundos

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

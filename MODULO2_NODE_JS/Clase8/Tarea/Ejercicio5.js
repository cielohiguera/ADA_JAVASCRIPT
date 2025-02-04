// Ejercicio 5: Detectar cuando el servidor cierra la conexiónConsigna
// Crea un cliente que:
// 1. Se conecte y envíe "¿Sigues ahí, servidor?".
// 2. Cuando el servidor cierre la conexión, muestre " Servidor cerró
// la conexión".
// Pistas
// • El evento 'end' se activa cuando el servidor finaliza la conexión

// Paso 1: Importamos el modulo net
const net = require('net')

// Paso 2: Configuración de la conexión
const PORT = 5000;
const HOST = 'localhost'

// Creamos la conexión al servidor usando
const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectando al servidor')

    // Enviamos un mensaje
    client.write('¿Sigues ahí, servidor?')

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


client.end('Adiós, servidor!')
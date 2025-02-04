// Ejercicio 6: Cliente interactivo con la usuaria
// Consigna
// Crea un cliente donde la usuaria pueda escribir mensajes en la consola y
// enviarlos al servidor.
// • Después de cada mensaje, la usuaria puede escribir otro.
// • Si escribe "salir", el cliente se desconecta.
// Pistas
// • Usa readline para capturar texto de la usuaria.
// • Si el mensaje es "salir", cierra la conexión con client.end().


// Paso 1: Importación del modulo readline
const readline = require('readline');
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

// Creamos la interface

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Ingresa un mensaje', (mensaje) => {
    if(mensaje === 'salir') {
        console.log('Saliendo del sistema')
        rl.close();
    } else {
        rl.question('Ingresa otro mensaje', (mensaje) => {
            client.write(mensaje)

        })
    }
})
// Ejercicio 2: Implementar un timeout en la conexión
// Consigna
// Modifica el cliente del Ejercicio 1 para que:
// 1. Si después de 5 segundos no ha recibido una respuesta, cierre la
// conexión.
// 2. Muestre " Tiempo de espera agotado" en la consola antes de
// cerrar.
// Pistas
// • Usa client.setTimeout() con 5000 milisegundos.
// • Cuando el timeout ocurra, usa client.end() para cerrar la conexión.

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
});


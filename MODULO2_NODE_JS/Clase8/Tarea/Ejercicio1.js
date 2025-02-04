// Ejercicio 1: Conectar y enviar un mensaje al servidor
// Consigna
// Crea un cliente TCP que:
// 1. Se conecte a un servidor en localhost:5000.
// 2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
// servidor!".
// 3. Escuche los datos recibidos y los muestre en consola.
// Pistas
// • Usa net.createConnection() para conectar al servidor.
// • Maneja el evento 'connect' para saber cuándo la conexión está
// lista.
// • Usa client.write() para enviar el mensaje.
// • Captura los datos con el evento 'data'.


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
});

client.on('data' (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
});
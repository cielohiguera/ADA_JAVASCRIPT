// Instrucciones
// 1. Crear un cliente TCP en Node.js que se conecte a un servidor en el puerto 5000.
// 2. Enviar y recibir mensajes del servidor.
// 3. Implementar eventos clave (data, end, close, error).
// 4. Utilizar métodos de control y conexión, como pause(), resume(), destroy(), setTimeout(), etc.
// 5. Ejecutar pruebas para observar el comportamiento de cada método

const net = require('net')

const client = net.createConnection({port:5000}, () => {
    console.log('Conectando al servidor...');
    client.write('Hola servidor, soy el cliente.')
});

client.on('data', (data) => {
    console.log('Mensaje recibido', data.toString());
});

client.on('end', () => {
    console.log('El servidor ha cerrado la conexión');
});

client.on('close', () => {
    console.log('Conexión cerrada con el servidor')
});

client.on('error', (err) => {
    console.log('Error: ', err.message);
});

client.setTimeout(() => {
    console.log('Pausando la recepción de datos');
    client.pause()
}, 2000);

client.setTimeout(() => {
    console.log('Reanudando la recepción de datos');
    client.resume()
}, 2000);

client.setTimeout(() => {
    console.log('Destruyendo la conexión');
    client.destroy()
}, 2000);

client.setTimeout(() => {
    console.log('Eliminando la referencia del socket');
    client.unref()
}, 2000);

client.setTimeout(() => {
    console.log('Manteniendo la conexión activa');
    client.ref()
}, 2000);

client.setTimeout(() => {
    console.log('Cierre correcto de conexión');
    client.end()
}, 2000);
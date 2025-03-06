// Ejercicio 1: Crear un Servidor TCP con Persistencia de Datos
// Consigna:
// Crea un servidor TCP que reciba mensajes de los clientes y los guarde en
// un archivo JSON. Luego, permite a los clientes consultar todos los
// mensajes almacenados.
// Pasos:
// • Usa el módulo net para crear el servidor.
// • Usa fs para guardar los mensajes en un archivo mensajes.json.
// • Implementa un comando especial (ej: /historial) para que los
// clientes puedan consultar todos los mensajes.

const { error } = require('console');
const net = require('net')

//paso 7: creamos al cliente
const client = net.createConnection({ port: 3000 }, () => {
    console.log('conectado al servidor');
    client.write('hola servidor')
})
// evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
})

client.on('error', (err) => {
    console.log(err.message);
});

// evento end
client.on('end', () => {
    console.log('Descconectado del servidor');
})



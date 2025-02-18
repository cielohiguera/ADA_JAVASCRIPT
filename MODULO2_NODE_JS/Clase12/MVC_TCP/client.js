// Exportamos el modulo net 
const net = require('net')

// Creamos una conexión tcp al servidor que esta escuchando en el puerto 4000
const client = net.createConnection({port:4000}, () => {
    console.log('Conectado al servidor');
    // Enviamos un id de vehiculos al servidor 
    const vehicleId = '2'
    client.write(vehicleId) // Enviando el id al servidor
})

// Evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor: ', data.toString());
    client.end()
})

// Evento end
client.on('end', () => {
    console.log('Conexión cerrada');
})
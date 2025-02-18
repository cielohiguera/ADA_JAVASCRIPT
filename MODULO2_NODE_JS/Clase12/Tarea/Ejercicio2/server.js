// Importamos el modulo net

const net = require('net')

// Importamos el controlador
const HotelController = require('../Ejercicio2/controllers/hotelController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Evento data
    socket.on('data', (data) => {
        // Convertimos los datos recibidos a una cadena de texto y eliminamos espacios
        const hotelId = data.toString().trim()
        console.log(`Solicitud recibida: ID ${hotelId}`);
    // Llamamos al método handleRequest del controlador para manejar la solicitud
    // este método toma el id del vehiculo y devuelve una respuesta formateada
        const response = HotelController.handleRequest(hotelId)
        // Enviamos la respuesta al cliente usando el método write
        socket.write(response)
    })
    // Evento end
    socket.on('end', () => {
        console.log('Cliente desconectado');
    })
})

server.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000')
})
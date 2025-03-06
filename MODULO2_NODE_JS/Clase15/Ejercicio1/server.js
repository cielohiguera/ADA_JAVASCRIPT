// Importamos las librerias
const net = require('net') // servidor
const fs = require('fs') // archivos
const path = require('path') // rutas

// Definimos la ruta donde se guardaran los mensajes en formato json.
const rutaMensaje = path.join(__dirname, 'mensajes.json')

// Verificar si el archivo json existe y si no se crea un array vacío

if(!fs.existsSync(rutaMensaje)) {
    fs.writeFileSync(rutaMensaje, '[]', 'utf-8')
}

// Se crea el servidor

const server = net.createServer((socket) => {
    console.log('Cliente conectado')

    // Manejamos los datos recibidos por el cliente

    socket.on('data', (data) => {
        const mensaje = data.toString().trim()

        if (mensaje === '/historial') {
            // leemos el mensaje recibido es /historial, enviamos todos los mensajes almacenados
            const historial = fs.readFileSync(rutaMensaje, 'utf-8')
            // Enviamos el historial(todos los mensajes)
            socket.write(`Historial de mensajes: \n${historial}`);
        } else {
            // si no me manda este comando, se deberá ejecutar lo siguiente
            const mensajes = JSON.parse(fs.readFileSync(rutaMensaje, 'utf-8') || '[]')
            // agregamos el nuevo mensaje con la fecha y hora actual
            mensajes.push({ fecha: new Date().toISOString(), mensaje });
            // se guarda un array actaulizado en el archivo de mensaje.json 
            fs.writeFileSync(rutaMensaje, JSON.stringify(mensajes, null, 2), 'utf-8')
            // se envia una confirmación de que se guardo bien al cliente
            socket.write('Mensaje guardado correctamente')
        }
    })
    socket.on('end', () => {
        console.log('cliente desconectado');
    })
})


server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})
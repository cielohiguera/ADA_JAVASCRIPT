// Ejercicio 3: Aplicación de Chat con Módulo NET y Crypto
// Consigna:
// Crea una aplicación de chat en tiempo real usando el módulo net.
// Asegura los mensajes cifrándolos con el módulo crypto.Pasos:
// • Usa net para crear un servidor y clientes.
// • Usa crypto para cifrar y descifrar los mensajes.
// • Implementa un sistema de autenticación básico

const net = require('net')
const crypto = require('crypto')

// Clave secreta para el cifrado
const clave = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Función para cifrar los mensajes
function cifrar(mensaje) {
    const cipher = crypto.createCipheriv('aes-256-cbc', clave, iv);
    let cifrado = cipher.update(mensaje, 'utf-8', 'hex');
    cifrado += cipher.final('hex');
    return cifrado;
}

// función para descifrar mensajes
function descifrar(cifrado) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', clave, iv);
    let mensaje = decipher.update(cifrado, 'hex', 'utf-8');
    mensaje += decipher.final('utf-8')
    return mensaje;
}

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    // Escuchar mensajes del cliente
    socket.on('data', (data) => {
        const mensajeCifrado = data.toString().trim();
        const mensajeDescifrado = descifrar(mensajeCifrado);
        console.log('Mensaje recibido:', mensajeDescifrado);

        // Responder al cliente
        const respuesta = cifrar(`Servidor: Recibí tu mensaje (${mensajeDescifrado})`);
        socket.write(respuesta);
    });

    // Manejar desconexión
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

// Iniciar servidor
server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
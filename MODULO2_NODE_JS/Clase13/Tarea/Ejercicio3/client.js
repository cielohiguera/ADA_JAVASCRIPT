// Ejercicio 3: Servidor TCP con UUID v1 y JSON
// Objetivo:
// Crear un servidor TCP que responda con un objeto JSON que contenga
// un UUID v1 basado en el tiempo y la dirección MAC.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.o Crear un servidor TCP que genere un UUID v1 basado en el
// tiempo.
// o Enviar un objeto JSON con el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
// mostrar el UUID en la consola.

const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
    console.log("Conectado al servidor");
});

// Manejar datos recibidos del servidor
client.on('data', (data) => {
    const responseText = data.toString();
    
    // Verificar que los datos sean JSON antes de parsearlos
    if (responseText.startsWith("{") && responseText.endsWith("}")) {
        const response = JSON.parse(responseText);
        console.log("UUID V1 recibido del servidor:", response.uuid);
    } else {
        console.log("Datos inválidos recibidos:", responseText);
    }

    client.end(); // Cerrar la conexión después de recibir los datos
});

// Manejar cierre de conexión
client.on('end', () => {
    console.log("Conexión cerrada por el servidor");
});

// Manejar errores
client.on('error', (err) => {
    console.error("Error:", err.message);
});


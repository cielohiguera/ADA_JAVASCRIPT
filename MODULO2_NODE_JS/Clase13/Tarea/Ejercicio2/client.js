// Ejercicio 2: Servidor TCP con UUID v5 y JSON
// Objetivo:
// Crear un servidor TCP que responda con un objeto JSON que contenga
// un UUID v5 basado en un nombre fijo y un espacio de nombres.
// Pasos:
// 1. Servidor TCP (server.js):
// o Importar los módulos net y uuid.
// o Crear un servidor TCP que genere un UUID v5 basado en un
// nombre y un espacio de nombres.
// o Enviar un objeto JSON con el UUID al cliente.
// 2. Cliente TCP (client.js):
// o Importar el módulo net.
// o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
// mostrar el UUID en la consola.

const net = require('net');
const {v5: uuidv5} = require('uuid')

const client = net.createConnection({port: 8080}, () => {
    console.log("Conectando al servidor")
    const NAMESPACE = uuidv5.URL
    const idv5 = uuidv5("usuario", NAMESPACE)
    console.log("Conexión establecida")
    console.log("UUID V5: ", idv5)

    client.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    })
    client.on('error', (err) => {
        console.log(err.message)
    })
})
// Paso 1: Importamos el modulo http para crear el servidor (solicitudes)
// importamos tambien fs para trabajar en archivos
const http = require('http')
const fs = require('fs')
// Paso 2: Definimos el puerto
const PORT = 3000

// Creamos el servidor

const server = http.createServer((req, res) => {
    // Leer los archivo datos.json
    fs.readFile('datos.json', 'utf8', (err, data) => {
        if (err) {
            // Si hay un error mostramos un mensaje
            res.end('No se pudo leer el archivo JSON') // mensaje de error
            return;
        }
        // Enviamos el contenido del archivo JSON al navegador
        res.setHeader('Content-Type', 'application/json') // configurando el tipo de contenido
        res.end(data) // enviamos el contenido el archivo JSON
    })
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando  en http://localhost:${PORT}`);
})
// Paso 1: Importamos el modulo http
const { log } = require('console')
const http = require('http')

// Paso 2: Creamos el servidor
// - req: representa la solicitud
// - res: representa la respuesta
const server = http.createServer((req, res) => {
    // Establecemos el codigo de respuesta en 200 (OK)
    // indicando que salió exitosa la operación
    res.statusCode = 200
    // Configurar el encabezado
    // - content-type para que el cliente conozca el contenido
    // - text/plain: Texto plano
    res.setHeader('Content-type', 'text/plain')
    // Envía respuesta al cliente con el mensaje y finalizamos
    // la respues
    res.end('¡Hola chicas!')
})

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})
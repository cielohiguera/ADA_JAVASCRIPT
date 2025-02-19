const net = require('net')
const {v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5} = require('uuid')

const NAMESPACE = uuidv3.URL

const server = net.createServer((socket) => {
    // generamos uuids de diferente versiones para la conexiones
    const idvl = uuidv1()
    const idv3 = uuidv3("usuario", NAMESPACE)
    const idv4 = uuidv4()
    const idv5 = uuidv5("usuario", NAMESPACE)
    // Imprimir los uuids en consola
    console.log("Conexión establecida");
    console.log("UUID V1: ", idvl)
    console.log("UUID V3: ", idv3)
    console.log("UUID V4: ", idv4)
    console.log("UUID V5: ", idv5)
    // Manejo de evento data
    socket.on('data', (data) => {
        console.log(`Datos recibidos: ${data}`);
    })

    // Manejamos el evento end
    socket.on('end', () => {
        console.log(`Conexión finalizada`);
    })
})

server.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
})
// Importamos express
const express = require('express')

//  Creacion de la instancia de express
const app = express()

// Definimos un puerto
const PORT = 3000

// Ruta get para url raiz
app.get('/', (req, res) => {
    res.send('Hola chicas de ada, bienvenidas a express!')
})

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
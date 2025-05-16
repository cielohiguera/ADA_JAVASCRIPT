// jercicio 5: Manejo de rutas y errores con Express
// Consigna: Crea un servidor que:
// 1. Devuelva un mensaje de bienvenida (¡Bienvenida al servidor de Express!) al
// acceder a la ruta raíz /.
// 2. Devuelva un error 404 (Ruta no encontrada) para cualquier ruta que no
// esté definida

// Importamos librerias
const express = require('express');
const app = express();

// Ruta raiz que devuelve un mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor Express')
})

// Middleware para manejar rutas no definidas
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
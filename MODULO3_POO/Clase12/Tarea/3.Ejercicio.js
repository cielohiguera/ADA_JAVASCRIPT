// Ejercicio 3: Usar parámetros dinámicos con :id
// Consigna: En este ejercicio, vamos a permitir que el cliente busque información
// de un usuario por su ID. Crea un endpoint GET que reciba un parámetro
// dinámico :id en la URL (por ejemplo, /users/1). Usa req.params para capturar
// este valor y busca al usuario correspondiente en una lista. Si no se encuentra el
// usuario, responde con un error 404.

// Importamos
const express = require('express');
const app = express();

// Lista de usuarios unicos (id)
const users = [
    { id: 1, name: 'Ada', email: 'ada@gmail.com'},
    { id: 2, name: 'Sample', email: 'sample@gmail.com'}
]

// endpoint GET para buscar un usuario por ID
app.get('/user/:id', (req, res) => {
    // Se captura el parametro dinamico :id de la URL
    const {id} = req.params;
    // Buscamos al usuario cuyo ID coincida
    const user = users.find(u => u.id === parseInt(id));
    // Si el usuario no existe, se responde con un error 404
    if (!user) {
        return res.status(404).send('Usuario no encontrado')
    }
    // Si el usuario existe, enviamos como respuesta en formato JSON
    res.json(user)
})

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
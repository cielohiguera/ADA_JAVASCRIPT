// Ejercicio 1: Creando un Endpoint GET p
// Consigna: Imagina que tienes una aplicación que necesita mostrar una lista de
// usuarios. Tu tarea es crear un endpoint GET en Express que responda con un
// listado de usuarios en formato JSON. Cada usuario debe tener un nombre
// (name) y un correo electrónico (email).
// Utiliza el método res.json() para enviar la respuesta. Asegúrate de que el
// servidor funcione correctamente en el puerto 3000 y de imprimir un mensaje en
// la consola al iniciarlo.

// Importacion del modulo express
const { log } = require('console');
const express = require('express');
const app = express();

// Array con lista de usuarios
const users = [
    {name: 'Jennifer Lopez', email: 'jennyLopez@gmail.com'},
    {name: 'Emma Rodriguez', email: 'emma14@gmail.com'}
];

// Metodo endpoint GET que devuelva la lista de usuarios
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Iniciamos el servidor y escuchamos en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000/users');
})
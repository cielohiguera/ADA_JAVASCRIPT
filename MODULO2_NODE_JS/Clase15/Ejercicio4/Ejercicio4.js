// Ejercicio 4: Sistema de Autenticación con UUID y JSON
// Consigna:
// Crea un sistema de autenticación básico donde los usuarios puedan
// registrarse e iniciar sesión. Cada usuario debe tener un ID único
// generado con UUID y sus datos deben guardarse en un archivo JSON.
// Pasos:
// • Usa el módulo uuid para generar IDs únicos.
// • Usa fs para guardar y leer los usuarios en un archivo JSON.
// • Implementa funciones para registrar usuarios y validar
// credenciales.

const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const rutaUsuarios = path.join(__dirname, 'usuarios.json');

function cargarUsuarios() {
    try {
        const datos = fs.readFileSync(rutaUsuarios, 'utf-8');
        return JSON.parse(datos);
    } catch (error) {
        return [];
    }
}

function registrarUsuario(nombre, email, contraseña) {
    const usuarios = cargarUsuarios();
    const id = uuidv4; // Generar un unico id
    const nuevoUsuario = { id, nombre, email, contraseña };
    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);
    console.log('Usuarios registrados con ID:', id);
}

// Para iniciar sesión

function iniciarSesion(email, contraseña) {
    const usuarios = cargarUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.contraseña === constraseña);
    if (usuario) {
        console.log('Inicio de sesión éxitoso. Bienvenido, ', usuario.nombre);
    } else {
        console.log('Credenciales inconrrectas.');
    }
}

// Ejemplo de uso 
registrarUsuario('Aron', 'aron_gab@example.com', '256');
iniciarSesion('aron_gab@example.com', '256');
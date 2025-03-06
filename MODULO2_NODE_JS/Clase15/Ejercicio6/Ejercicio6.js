// Ejercicio 6: Aplicación de Cifrado con Módulo Crypto y ReadlineConsigna:
// Crea una aplicación que permita a los usuarios cifrar y descifrar mensajes
// usando el módulo crypto. Implementa un menú interactivo con readlinesync.
// Pasos:
// • Usa crypto.createCipheriv y crypto.createDecipheriv para cifrar y
// descifrar mensajes.
// • Usa readline-sync para crear un menú interactivo.
// • Guarda los mensajes cifrados en un archivo JSON.

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

// Configuración del algoritmo de cifrado
const algoritmo = 'aes-256-cbc';
const clave = crypto.randomBytes(32); // Clave de 256 bits
const iv = crypto.randomBytes(16); // Vector de inicialización

// Archivo donde se almacenarán los mensajes cifrados
const archivoMensajes = path.join(__dirname, 'mensajes_cifrados.json');

// Verificar si el archivo JSON existe, si no, crearlo con un array vacío
if (!fs.existsSync(archivoMensajes)) {
    fs.writeFileSync(archivoMensajes, '[]', 'utf-8');
}

// Función para leer los mensajes almacenados
function leerMensajes() {
    try {
        const data = fs.readFileSync(archivoMensajes, 'utf-8');
        return JSON.parse(data) || [];
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return [];
    }
}

// Función para cifrar un mensaje
function cifrarMensaje() {
    const mensaje = readline.question('Ingrese el mensaje a cifrar: ').trim();
    if (!mensaje) {
        console.log('El mensaje no puede estar vacío.');
        return;
    }

    const cipher = crypto.createCipheriv(algoritmo, clave, iv);
    let mensajeCifrado = cipher.update(mensaje, 'utf-8', 'hex');
    mensajeCifrado += cipher.final('hex');

    const mensajes = leerMensajes();
    const id = mensajes.length + 1; // Generar un ID simple
    mensajes.push({ id, mensaje: mensajeCifrado, iv: iv.toString('hex') });

    fs.writeFileSync(archivoMensajes, JSON.stringify(mensajes, null, 2), 'utf-8');
    console.log(`Mensaje cifrado y guardado con ID: ${id}`);
}

// Función para descifrar un mensaje
function descifrarMensaje() {
    const id = parseInt(readline.question('Ingrese el ID del mensaje a descifrar: ').trim(), 10);
    const mensajes = leerMensajes();
    const mensajeObj = mensajes.find(m => m.id === id);

    if (!mensajeObj) {
        console.log(`No se encontró un mensaje con ID: ${id}`);
        return;
    }

    const decipher = crypto.createDecipheriv(algoritmo, clave, Buffer.from(mensajeObj.iv, 'hex'));
    let mensajeDescifrado = decipher.update(mensajeObj.mensaje, 'hex', 'utf-8');
    mensajeDescifrado += decipher.final('utf-8');

    console.log(`Mensaje descifrado: ${mensajeDescifrado}`);
}

// Función para listar todos los mensajes cifrados
function listarMensajes() {
    const mensajes = leerMensajes();
    if (mensajes.length === 0) {
        console.log('No hay mensajes cifrados.');
    } else {
        console.log('Mensajes cifrados almacenados:');
        mensajes.forEach(({ id, mensaje }) => {
            console.log(`ID: ${id}, Mensaje Cifrado: ${mensaje}`);
        });
    }
}

// Menú interactivo
function menu() {
    while (true) {
        console.log('\nAplicación de Cifrado');
        console.log('1️. Cifrar un mensaje');
        console.log('2️. Descifrar un mensaje');
        console.log('3️. Listar todos los mensajes cifrados');
        console.log('4️. Salir');

        const opcion = readline.question('Seleccione una opcion: ').trim();

        switch (opcion) {
            case '1':
                cifrarMensaje();
                break;
            case '2':
                descifrarMensaje();
                break;
            case '3':
                listarMensajes();
                break;
            case '4':
                console.log('Saliendo de la aplicacion...');
                return;
            default:
                console.log('Opción invalida, intenta de nuevo.');
        }
    }
}

// Ejecutar el menú
menu();

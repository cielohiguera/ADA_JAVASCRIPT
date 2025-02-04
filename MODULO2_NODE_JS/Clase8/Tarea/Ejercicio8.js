// Ejercicio 8: Cliente con unref/ref para control de procesos
// Consigna
// Crea un cliente que:
// 1. Use client.unref() para permitir que Node.js termine si no hay otras
// tareas.
// 2. Luego, después de 5 segundos, use client.ref() para evitar que el
// proceso termine.
// Pistas
// • unref() hace que el socket no impida que Node.js termine.
// • ref() lo vuelve a mantener activo.

const net = require('net')

//Cliente con unref/ref para control de procesos
client.unref();
setTimeout(() => {
    console.log('Manteniendo proceso activo con ref()');
    client.ref();
}, 5000);
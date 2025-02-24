// Ejercicio 2: Menú Interactivo con readline-sync
// Crea un script de Node.js que muestre un menú de opciones usando
// readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
// ver un mensaje de bienvenida, generar un hash de un texto, o salir.

const readlineSync = require('readline-sync')


const acciones = ['Mensaje de bienvenida', 'Generar un hash de texto', 'Salir']
const accionSeleccionada = readlineSync.keyInSelect(acciones, '¡Hola usuario! Escoge entre las tres acciones');

if ( accionSeleccionada === -1) {
    console.log('No has seleccionado ninguna de las acciones');
} else {
    (`Has seleccionado ${acciones[accionSeleccionada]}`);
}
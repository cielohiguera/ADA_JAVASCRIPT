// Importación de la biblioteca
const readlineSync = require('readline-sync')

const deseaContinuar = readlineSync.keyInYN('¿Deseas continuar?');

if (deseaContinuar) {
    console.log('Continuando con la operación');
} else {
    console.log ('Operación cancelada por el usuario');
}
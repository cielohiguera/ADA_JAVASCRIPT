/// Importamos el modulo readline-sync

const readlineSync = require('readline-sync')

const nombre = readlineSync.question('Ingrese su nombre: ');
const edad = readlineSync.question('Ingresa la edad: ');

console.log(`Hola ${nombre}, tienes ${edad} anios`);
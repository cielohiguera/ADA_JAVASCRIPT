const path = require('path')

// Ejemplo 2: Normalización de una ruta con barras redudantes 
const rawPath1 = '/home/user/docs/./file.txt'
const normalizePath1 = path.normalize(rawPath1)
console.log('Ejemplo 1 - Ruta normalizada: ');
console.log(normalizePath1);
const path = require('path')

// Ejemplo 1: Obtener la extensión de un archivo desde una ruta absoluta

const filePath = '/home/user/docs/file.txt'
const ejemplo1 = path.extname(filePath)
console.log('Ejemplo 1 - Extensión del archivo (Abs): ', ejemplo1)

// Ejemplo 2: Obtener extensión de un archivo desde una ruta relativa
const relativaPath = '/src/utils/helpers.js'
const ejemplo2 = path.extname(relativaPath)
console.log('Ejemplo 2 - Extensión del archivo (Relativa): ', ejemplo2)

// Ejemplo 3: Manejo de archivos sin extensión
const noExtPath = '/home/user/docs/README'
const ejemplo = path.extname(noExtPath)
console.log('Ejemplo 3 - Extensión del archivo sin extensión: ', ejemplo)


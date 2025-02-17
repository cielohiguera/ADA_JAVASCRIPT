const path = require('path')

// Ejemplo 1: Resolución de una ruta relativa desde el directorio actual

const resolvePath = path.resolve('file.txt')
console.log('Ejemplo 1 - Ruta relativa desde el directorio actual', resolvePath)


// Ejemplo 2: Resolución de multiples segmentos de ruta en una ruta absoluta
const resolvePath2 = path.resolve('/home/user', 'docs', 'file.txt')
console.log('Ejemplo 2 - Ruta resuelta con multiples segmentos: ', resolvePath2)

// Ejemplo 3: Uso con rutas relativas que suben varios niveles

const resolvePath3 = path.resolve('/home/user/docs', '/..image', 'file.jpg')
console.log('Ejemplo 3 - Ruta resuelta con navegación hacia arriba: ', resolvePath3)
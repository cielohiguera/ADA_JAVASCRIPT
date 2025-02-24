const crypto = require('crypto')

const algoritmo = 'aes-256-cbc' // Algoritmo de cifrado AES con un tamaño de 256 bites
const key = crypto.randomBytes(32) // Genera una clave de 256 bits que traducidos son 32 bytes
const iv = crypto.randomBytes(16) // Genera un vector de inicialización

// Creamos el objeto cypher
const cipher = crypto.createCipheriv(algoritmo,key,iv);

// Ciframos los datos
const data = 'Este es un mensaje secreto'
let encriptado = cipher.update(data, 'utf8', 'hex') //process el texto plano y lo cifra
encriptado += cipher.final('hex') // Finaliza el cifrado

console.log('Texto cifrado: ', encriptado);

// Crear objeto en decipher
const decipher = crypto.createDecipheriv(algoritmo, key, iv)

// deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf8')
decifrado += decipher.final('utf8')
console.log('Texto decifrados: ', decifrado);


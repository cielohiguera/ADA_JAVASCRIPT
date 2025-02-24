const crypto = require('crypto')

// Datos que vamos a autenticar
const data = 'mensaje secreto'

// Clave secreta para hmac
const secretKey = 'mi_clave_secreta'

// creación de un obj hmac usando un algoritmo sha256
const hmac = crypto.createHmac('sha256', secretKey)

// actualizamos el hmac con los datos

hmac.update(data)

// obtener el hmac en formato hexadecimal
const hmacOutPut = hmac.digest('hex')

// Leemos el hmac generado
console.log('HMAC de sha256: ', hmacOutPut)
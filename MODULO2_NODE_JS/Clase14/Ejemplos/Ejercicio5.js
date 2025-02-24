const crypto = require('crypto')
// datos que queremos hastear

const data = 'Este es un mensaje secreto'

// Creamos el objeto hash usando el algoritmo sha256
const hash = crypto.createHash('sha256')

// Actualizar el hash con los demas datos
hash.update(data)

// Obtener el hash en formato hexadecimal
const hashOutput = hash.digest('hex')

// mostrar el hash generado
console.log('Hash de sha256: ', hashOutput)

// resultado: Hash de sha256:  bd9df9b4e369718e1a48505ada8c578d19baf077b3099c1e0db1feed4408e469
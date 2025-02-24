// DESAFIO Ejercicio 5: Cifrado y Descifrado Básico con crypto
// Crea un script en Node.js que permita al usuario ingresar un texto, luego
// lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
// resultado original. Usa el módulo crypto para el cifrado y descifrado.

const readline = require('readline');
const crypto = require('crypto');

const algoritmo = 'aes-256-cbc'; // Algoritmo AES de 256 bits
const key = crypto.randomBytes(32); // Clave de 32 bytes (256 bits)
const iv = crypto.randomBytes(16); // Vector de inicialización de 16 bytes (AES-CBC)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingresa un texto: ', (textoOriginal) => {
    // Cifrado del texto
    const cipher = crypto.createCipheriv(algoritmo, key, iv);
    let textoCifrado = cipher.update(textoOriginal, 'utf8', 'hex');
    textoCifrado += cipher.final('hex');

    // Descifrado del texto
    const decipher = crypto.createDecipheriv(algoritmo, key, iv);
    let textoDescifrado = decipher.update(textoCifrado, 'hex', 'utf8');
    textoDescifrado += decipher.final('utf8');

    console.log('Texto cifrado:', textoCifrado);
    console.log('Texto descifrado:', textoDescifrado);

    rl.close();
});

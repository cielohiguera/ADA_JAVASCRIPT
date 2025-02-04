// Ejercicio 7: Cliente que destruye el socket al fallar
// Consigna
// Crea un cliente que:
// 1. Se conecte al servidor.
// 2. Si hay un error en la conexión, use client.destroy() y muestre "
// Conexión destruida".
// Pistas
// • client.destroy() libera los recursos del socket de inmediato.

const net = require('net')

// Cliente que destruye el socket al fallar
client.on('error', () => {
    console.log('Conexión destruida');
    client.destroy();
});
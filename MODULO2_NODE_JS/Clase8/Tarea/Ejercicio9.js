// Ejercicio 9: Cliente que reconecta automáticamente
// Consigna
// Crea un cliente que:
// 1. Si la conexión falla, reintente conectarse cada 3 segundos hasta
// que tenga éxito.
// Pistas
// • Usa setTimeout() para intentar de nuevo tras 3 segundos.
// • Llama a net.createConnection() dentro del reintento.

const net = require('net')

// Cliente que reconecta automáticamente
function reconectar() {
    setTimeout(() => {
        console.log('Reintentando conexión...');
        client.connect(5000, 'localhost');
    }, 3000);
}
client.on('error', reconectar);
client.on('close', reconectar);

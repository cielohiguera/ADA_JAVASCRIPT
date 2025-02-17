// Paso 1: Importaciones
const net = require('net')
const readline = require('readline-sync')

// Paso 2: Definimos las opciones de conexión para el cliente
const options = {
    port: 4000,
    host: '127.0.0.1'
}

// Paso 3: Crear una conexión  con el servidor

const client = net.createConnection(options)

// Paso 5: Manejo de eventos

client.on('connect', () => {
    console.log('Conexión satisfactoria!');
    sendLine() // Llamo a la función sendline para que el usuario ingrese los datos
});

client.on('data', (data) => {
    console.log('El servidor dice: '+ data);
    sendLine();
})

client.on('error', (err) => {
    console.log(err.message);
});

// Paso 4: Definimos la funcion sendLine() que permite al usuario ingresar un mensaje y decide que hacer con el

function sendLine () {
    // muestra un prompt y la entrada del usuario de manera sincrona
    let line = readline.question('\nDigita alguna cosa\t')
    if (line == "0") { // verifique si el usuario ingresó 0
        client.end() // cierra la conexión con el servidor si se ingresó 0
    } else {
        client.write(line) // Envía el mensaje ingresado por el usuario. 
    }
}
// Ejercicio 4: Mensaje de despedida personalizado
// Consigna:
// Crea un programa interactivo que pregunte al usuario su nombre y lo
// use en un mensaje de despedida. Usa variables de entorno para
// personalizar el saludo inicial.Requisitos del programa:
// 1. Usa una variable de entorno llamada START_MESSAGE para
// configurar el saludo inicial.
// 2. Usa readline para preguntar el nombre del usuario.
// 3. Despídete del usuario con un mensaje personalizado.

const readline = require('readline');

require('dotenv')

const startMessage = process.env.START_MESSAGE || '¡Hola!';

// Creamos la interface

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log(startMessage);

// Pregunta para el usuario

rl.question('¿Cómo te llamas? ', (name) => {
    // Responde con un mensaje de despedida personalizado
    console.log(`¡Hasta luego, ${name}! Gracias por visitar el programa.`);
  
    // Cierra la interfaz
    rl.close();
  });
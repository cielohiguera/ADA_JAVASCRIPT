// Ejercicio 3: ¡Sumemos dos números!
// Consigna:
// Tu tarea es escribir un programa interactivo que permita al usuario
// ingresar dos números y calcule su suma. Este ejercicio te ayudará a
// practicar el uso del módulo readline para leer entradas del usuario en la
// consola.
// Requisitos del programa:
// 1. Usa el módulo readline para crear una interfaz interactiva.
// 2. Pide al usuario que ingrese dos números, uno a la vez.
// 3. Calcula y muestra la suma de los dos números.
// 4. Finaliza el programa con un mensaje de agradecimiento.
// Indicaciones:
// 1. Crea un archivo llamado app.js.
// 2. Usa readline.createInterface para manejar la entrada y salida del
// usuario.
// 3. Utiliza callbacks para procesar las respuestas del usuario.
// 4. Ejecuta el programa y prueba ingresando diferentes valores

// Paso 1: Importar el modulo readline
const readline = require('readline')

// Cargamos las variables del entorno del archivo
require('dotenv')

// Creamos la interfaz para la entrada y salida

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Mostramos el saludo personalizado
console.log('¡Bienvenido al programa para hacer sumas interactivas');
// Preguntamos por el primer numero
rl.question('Ingresa el primer numero: ', (num1) => {
    rl.question('Ingresa el segundo numero: ', (num2) => {
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        const suma = numero1 + numero2;
        console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
        rl.close()
    })
})

// Manejamos el evento de close
rl.on('close', () => {
    console.log('Gracias por usar este programa. ¡Adios!');
    process.exit(0)
});
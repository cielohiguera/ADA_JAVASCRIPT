// Ejercicio 10: Adivinando el mumero
// Crear un programa donde la computadora seleccione un numero al azar entre 1 y 10.
// Luego pide al usuario que adivine el numero hasta los tres intentos. Si el usuario acierta en cualquier de los de los intentos
// muestra, un mensaje de felicitación y deten los intentos restantes. Si no acierta después de los 3 intentos
// muestra el numero numero secreto. Usa un for para resolver este ejercicio. 
const prompt = require('prompt-sync')();
// Generar un numero aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("¡Bienvenido al juego de adivinar el numero!");
console.log("La computadora va a generar un numero entre 1 y 10");
console.log("Tienes 3 intentos para adivinarlo");

// Usamos un ciclo for para dar al usuario hasta 3 intentos
let acertado = false;
for (let intento = 1; intento <=3; intento++) {
    // Solicitamos al usuario que adivine el numero
    let numeroUsuario = parseInt(prompt(`Intento ${intento}: Ingresa tu numero: `));
    // Verificamos si el usuario acertó
    if (numeroUsuario === numeroSecreto) {
        console.log(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en el intento ${intento}`);
        acertado = true;
        break;
    } else{
        console.log("Numero incorrecto. Intenta de nuevo.");
    }
}

// Si el numero no acerto despues de 3 intentos

if (!acertado){
    console.log(`Ups, no lograste adivinar el numero secreto, el cual era ${numeroSecreto}`);
}
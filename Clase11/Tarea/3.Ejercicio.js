// Ejercicio 3: ¿Sabes contar?
// Pedir al usuario un numero positivo. El programa deberá contar desde el 1 hasta ese número  e imprimir cada valor en la consola
const prompt = require('prompt-sync')();
// Solicitar al usuario que ingrese un número positivo
let numeroPositivo = parseFloat(prompt('Ingresa un numero positivo: '));
// Verificar que el número sea válido
if (numeroPositivo > 0) {
    console.log("Contemos desde 1 hasta " + numeroPositivo + ":");
    // Usamos un ciclo for para contar
    for (let i = 1; i <= numeroPositivo; i++) {
        console.log(i);
    }
} else {
    console.log("Debes ingresar un numero positivo");
}
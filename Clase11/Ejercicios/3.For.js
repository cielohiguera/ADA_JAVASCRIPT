// Programa que simula ser un lorito: Repite lo que oye 5 veces
// Paso 1: Importamos el modulo promp-sync
const prompt = require('prompt-sync')();
//Paso 2: Solicitamos al usuario que ingrese un texto
let texto = prompt("Ingresa el texto que el loro repita: ");

//Paso 3: Usamos el ciclo for para repetir el texto 5 veces
// estructura del ciclo;
// Inicializacion: let i = 0 (Inicializa el contador en 0)
// Condición i < 5 (el ciclo continua mientras i sea menor que 5)
// Incremento i ++ (suma 1 al contador en cada iteración
for (let i = 0; i < 5; i++) {
    console.log(`Repeticion ${i + 1} : ${texto}`);
}
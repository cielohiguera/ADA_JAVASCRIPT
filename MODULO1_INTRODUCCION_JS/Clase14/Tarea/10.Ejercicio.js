/* Ejercicio 10: Flores favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Realiza las siguientes acciones:
1. Inicializa un array vacío para almacenar las flores favoritas.
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
agrega cada una al array manualmente (sin usar métodos como push).
3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas.
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto
debe hacerse manualmente).
*/
const prompt = require('prompt-sync')();
// Crear un arreglo donde se vayan guardando las respuestas
let floresFavoritas = [];

// Preguntarle al usuario sobre sus flores favoritas
let flor1 = prompt("¿Cual es tu primera flor favorita? ");
floresFavoritas[0] = flor1;

let flor2 = prompt("¿Cual es tu segunda flor favorita? ");
floresFavoritas[1] = flor2;

let flor3 = prompt("¿Cual es tu tercera flor favorita? ");
floresFavoritas[2] = flor3;

// Preguntar si existe una flor en el arreglo

let florEspecifica = prompt("¿Qué flor quieres verificar? ");

// Verificar si las flores se encuentran en el arreglo

let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
    if (floresFavoritas[i] === florEspecifica) {
        contador++;
    }
}

// Muestra por consola cuántas veces se mencionó la flor
if (contador > 0) {
    console.log(`La flor "${florEspecifica}" se mencionó ${contador} vez(s).`);
} else {
    console.log(`La flor "${florEspecifica}" no está entre tus flores favoritas.`);
}
// Ejercicio 4: Ciclo For - Array 
// Crear un programa que permita registar las notas de varios estudiantes usando arrays
// y mostrarlas por pantalla:
// 1. Crear un array para almacenar las notas.
// 2. Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
// 3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
// 5. Imprime en consola las notas ingresadas usando el array notas
const prompt = require('prompt-sync')();
// Denominar un array para guardas las notas
let notas = [];

// Definir el número de estudiantes
const notasEstudiantes = 3;

console.log(`Ingresa las notas de ${notasEstudiantes} estudiantes:`);

// Usar un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas
for (let i = 0; i < notasEstudiantes; i++) {
    let nota = parseFloat(prompt(`Nota del estudiante ${i + 1}: `));
    notas[i] = nota;
}

// notas ingresadas usando el array notas
console.log("\nNotas ingresadas:");
for (let i = 0; i < notas.length; i++) {
    console.log(`Estudiante ${i + 1}: ${notas[i]}`);
}
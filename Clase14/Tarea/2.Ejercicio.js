// Ejercicio 2: Calcular promedio de calificaciones
// Solicita al usuario cinco calificaciones y usa una funcion flecha para calcular
// el promedio
const prompt = require('prompt-sync')();
// Denominar un array para guardas las notas
const calcularPromedio = (calificaciones) => {
    suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

let calificaciones = [];
for (let i = 0; i < 5; i ++) {
    calificaciones[i] = parseFloat(prompt(`Ingresa la calificacion del ${i + 1} estudiante: `));
}

let promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones de los estudiantes es ${promedio}`);
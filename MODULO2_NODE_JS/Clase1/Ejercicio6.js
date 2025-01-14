// Ejercicio 6: Calculadora de promedio
// Escribe una función que reciba un array de números y devuelva el
// promedio.
// Consigna:
// • Usa un bucle for para sumar los números.
// • Divide la suma total entre la cantidad de elementos del array.

let calificaciones = [8, 9, 10, 7, 6];

function calcularPromedio(calificaciones) {
    sum_total = 0;
    for(let i = 0; i < calificaciones.length; i++) {
        sum_total += calificaciones[i]; // Sumamos cada una de las calificaciones
    }
    return sum_total/calificaciones.length; // Se divide entre el numero de caracteres que son
}

console.log(calcularPromedio(calificaciones)); // 8
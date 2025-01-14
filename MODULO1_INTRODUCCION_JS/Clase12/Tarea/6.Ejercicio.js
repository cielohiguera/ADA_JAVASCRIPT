// Ejercicio 6: Iguales a 10 pero menores a 1000
// Dado a una matriz, recorre sus valores y sumar solo los numeros que esten encima o sean iguales a 10, pero menores a 1000
let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

let sum = 0;

// Sumar solo los valores que este encima a 10, pero menosres a 1000
for (let i = 0; i < matriz.length; i++)  { // Recorremos cada fila de la matriz
    // Recorremos cada valor de la matriz
    for (let j = 0; j < matriz[i].length; j++) {
        let value = matriz[i][j];
        // Revisamos si el valor se encuentra dentro de 10 y 1000
        if (value >= 10 && value < 1000) {
            // Sumamos el valor a la suma total
            sum += value;
        }
    }
}

// Show the result
console.log("La suma de los valores es: ", sum);
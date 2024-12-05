// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos. Luego
// escribe un algoritmo para sumar todos los numeros en la matriz
const matriz = [
    [1, 3, 5, 7, 2],
    [0, 2, 4, 6, 1],
    [8, 9, 10, 11, 0],
    [9, 4, 1, 3, 7]
];

let suma = 0;

// Recorrer la fila y el valor de la matriz
// Sumar solo los valores que este encima a 10, pero menosres a 1000
for (let i = 0; i < matriz.length; i++)  { // Recorremos cada fila de la matriz
    // Recorremos cada valor de la matriz
    for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
    }

// Show the result
console.log("La suma de los valores es: ", suma); // Resultado 93

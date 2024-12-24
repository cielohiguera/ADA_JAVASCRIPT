// Ejercicio 3: Encontrar el número faltante
// Dada una matriz de n-1 números enteros únicos en el rango de 1 a n,
// encuentra el número que falta en la secuencia.

function encontrarNumeroFaltante(arr, n) {
    // Se calcula la suma esperada de los numeros del 1 al n usando la formula de la suma de una serie aritmetica
    let sumaEsperada = (n * (n + 1)) / 2;
    // Se calcula la suma real de los elementos del arreglo
    let sumaReal = arr.reduce((a, b) => a + b, 0);
    // El numero faltante será la diferencia entre la suma esperada y la suma real
    return sumaEsperada - sumaReal;
}

// Dada a una secuencia de numeros, se obtiene lo siguiente

let arr = [1, 2, 4, 5, 6];
let n = 6;
console.log("El número faltante es:", encontrarNumeroFaltante(arr, n)); // el numero faltante es 3
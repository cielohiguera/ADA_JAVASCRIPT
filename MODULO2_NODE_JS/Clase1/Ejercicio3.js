// Ejercicio 3
// Crea una función que reciba un array de números y devuelva un nuevo
// array con los números ordenados de menor a mayor. Usa el metodo sort ()

let numeros = [5, 2, 9, 1, 7];

function numerosOrdenados(numeros) {
    return numeros.sort((a, b) => a - b)
}

console.log(numerosOrdenados(numeros)); // [ 1, 2, 5, 7, 9 ]

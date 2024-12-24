// Para practicar la implementación del algoritmo de búsqueda binaria,
// vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
// la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
// solución.
// Utilizar el algoritmo de búsqueda binaria para responder los siguientes
// ítems:
// o ¿Cuál es la posición del número 1?
// o ¿Cuál es la posición del número 5?
// o ¿Cuál es la posición del número 6?
// o ¿Cuál es la posición del número 9?
// o ¿Cuál es la posición del número 11?
// Sabemos que responder estas preguntas es extremadamente fácil, ya
// que podemos leer el array, y determinar con un cálculo visual la posición
// de cada elemento, pero, la propuesta que les hago es que codeen un
// algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
// 6, y nos indique por consola la posición del mismo.
// El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
// complejidad extra.

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const searchBinary = (list, item) => {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        // adivinar si el valor es de la mitad
        const guess = list[mid];
        // si es así, retornar esa posición
        if (guess === item) {
            return mid;
        }
        // si lo propuesto es mayor que lo que estamos buscando
        if (guess > item) {
            //
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null; // si no encontramos nada
}

console.log("¿Cuál es la posición del número 1?", searchBinary(list, 1))
console.log("¿Cuál es la posición del número 5?", searchBinary(list, 5))
console.log("¿Cuál es la posición del número 6?", searchBinary(list, 6))
console.log("¿Cuál es la posición del número 9?", searchBinary(list, 9))
console.log("¿Cuál es la posición del número 11?", searchBinary(list, 11))
// Resultado
// ¿Cuál es la posición del número 1? 0
// ¿Cuál es la posición del número 5? 4
// ¿Cuál es la posición del número 6? 5
// ¿Cuál es la posición del número 9? 8
// ¿Cuál es la posición del número 11? 10
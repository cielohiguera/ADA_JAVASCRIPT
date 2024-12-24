// Ejercicio 9: Desafío extra! Orden, lugar y númerosAl ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
// aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
// mismo del ejercicio anterior (buscar la posición de un número en un
// array), pero partiendo de esta lista:
// Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
// a mayor, utilizando bubble sort. Luego, respondan las siguientes
// preguntas:
// o ¿Cuál es la posición del número 12?
// o ¿Cuál es la posición del número 5?
// o ¿Cuál es la posición del número 22?
// o ¿Cuál es la posición del número 100?

let list = [12,3,5,7,1,22,47,100];

// primer bucle para iterar sobre todo el array
for (let i = 0; i < list.length; i++) {
    // segundo bucle para comparar elementos adyacentes
    for (let j = 0; j < list.length - 1; j++) {
        // si el elemento actual es mayor al siguiente, se intercambian
        if (list[j] > list[j + 1]) {
            let temp = list[j]; // Se guarda el valor del elemento actual en una variable temporal
            list[j] = list[j + 1]; // Se asigna el valor del siguiente elemento al actual
            list[j + 1] = temp; // Se asigna el valor guardado en la variable temporal al siguiente elemento
        }
    }
}
console.log("Lista ordenada", list);

// Responder las preguntas de la posición de los numeros
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

console.log("¿Cuál es la posición del número 12?", searchBinary(list, 12))
console.log("¿Cuál es la posición del número 5?", searchBinary(list, 5))
console.log("¿Cuál es la posición del número 22?", searchBinary(list, 22))
console.log("¿Cuál es la posición del número 100?", searchBinary(list, 100))

// Resultado
// Lista ordenada [
//     1,  3,  5,   7,
//    12, 22, 47, 100
//  ]
//  ¿Cuál es la posición del número 12? 4
//  ¿Cuál es la posición del número 5? 2
//  ¿Cuál es la posición del número 22? 5
//  ¿Cuál es la posición del número 100? 7
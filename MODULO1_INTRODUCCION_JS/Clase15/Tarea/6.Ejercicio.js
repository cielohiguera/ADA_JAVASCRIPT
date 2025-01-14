// Ejercicio 6: Buscar la última posición de un elemento repetido
// Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última
// posición en la que aparece el número 7

let listaNumeros = [2, 5, 7, 2, 8, 7];
console.log("Lista de numeros: ", listaNumeros);
// respuesta: Lista de numeros:  [ 2, 5, 7, 2, 8, 7 ]

// Identificar la posición del numero 7
let ultimaPosicion = listaNumeros.lastIndexOf(7);
console.log("La ultima posición del numero 7 es: ", ultimaPosicion)
// Respuesta: La ultima posición del numero 7 es:  5
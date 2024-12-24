// Ejercicio 4: Concurso de Likes
// En un concurso de fotografía, donde los usuarios publican una fotografía
// y obtienen likes, se registra la cantidad de likes obtenidos por cada
// usuario en un array. Ordenar los valores para poder indicar cuál fue la
// mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el
// tercero y cuánto el que menos likes obtuvo —suponer que participaron 15
// usuarios y suponer para cada uno, una cantidad de likes.

function ordenarLikes(likes) {
    // Ordenar el array de likes en orden descendente
    likes.sort((a, b) => b - a);

    // Imprimir los resultados
    console.log("Mayor cantidad de likes obtenidos:", likes[0]);
    console.log("Segunda mayor cantidad de likes obtenidos:", likes[1]);
    console.log("Tercera mayor cantidad de likes obtenidos:", likes[2]);
    console.log("Menor cantidad de likes obtenidos:", likes[likes.length - 1]);
}

// Ejemplo de uso
let likes = [500, 35, 99, 159, 281, 35, 144, 100, 240, 110, 60, 180, 125, 89, 185];
ordenarLikes(likes);


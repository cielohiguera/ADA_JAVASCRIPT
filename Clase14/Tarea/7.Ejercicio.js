// Ejercicio 7: Libros
// Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
// ✓ título: una cadena con el título del libro.
// ✓ autor: una cadena con el nombre del autor del libro.
// ✓ anioPublicacion: un número con el año de publicación del libro.

// Luego, crea una función llamada mostrarLibro que tome un arreglo de libros
// como parámetro y muestre por consola la información de cada libro en el
// formato especificado.

const libro1 = {
    nombre : "Los Juegos del hambre",
    autor : "Suzanne Collins",
    anioPublicacion : 2008,
}

const libro2 = {
    nombre : "Harry Potter",
    autor : "J.K. Rowling",
    anioPublicacion : 1997,
}


function libreria(libros) {
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        console.log(`El libro ${libro.nombre} fue escrito por ${libro.autor} y fue publicado en el año ${libro.anioPublicacion}`);
    }
}
let biblioteca = [libro1, libro2];

libreria(biblioteca);
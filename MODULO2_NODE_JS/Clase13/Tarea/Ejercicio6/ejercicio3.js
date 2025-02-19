// Definir una cadena JSON que representa un libro
const jsonString = `{
    "title": "El Principito",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943
}`;

// Convertir la cadena JSON a un objeto de JavaScript
const book = JSON.parse(jsonString);

// Acceder y mostrar cada propiedad en la consola
console.log("Título:", book.title);
console.log("Autor:", book.author);
console.log("Año de publicación:", book.year);

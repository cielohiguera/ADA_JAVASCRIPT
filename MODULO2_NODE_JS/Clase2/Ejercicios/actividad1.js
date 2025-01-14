// Ejercicio 1: Creación y Manipulación de un Objeto JSON
// 1.Dentro de la carpeta ADA_TRABAJOS, crea una nueva carpeta llamada
// clase2.
// 2.En la carpeta clase2, crea un archivo JavaScript llamado actividad1.js.
// 3.En este archivo, crea un objeto JSON que represente un libro. El objeto
// debe tener las siguientes propiedades: titulo, autor, año, genero (puede
// ser un array de géneros).
// Instrucciones:
// • Muestra en la consola el título y el autor del libro.
// • Actualiza el año del libro a un valor más reciente.
// • Añade una nueva propiedad llamada páginas que indique el número
// de páginas del libro.
// • Muestra el objeto actualizado en la consola.

const fs = require('fs');

const rutaArchivo = "./libros.json"

fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error("El archivo no se puede acceder", err);
        return;
    }

    const libros = JSON.parse(data)

    // Mostrar el título y el autor del libro
    console.log(`El título es: ${libros.titulo} y el autor es ${libros.autor}`);

    // Actualizar el libro con nuevas propiedades
    let libroActualizado = {
        titulo: libros.titulo,
        autor: libros.autor,
        anio: 2001, // Año actualizado
        genero: libros.genero,
        paginas: 570 // Nueva propiedad
    };

    console.log("Libro actualizado:", libroActualizado);

    fs.writeFile(rutaArchivo, JSON.stringify(libroActualizado, null, 2), 'utf-8', (err) => {
        if (err) {
            console.error("Error al guardar el archivo actualizado", err);
            return;
        }
        console.log("El archivo JSON se ha actualizado correctamente.");
    });
});
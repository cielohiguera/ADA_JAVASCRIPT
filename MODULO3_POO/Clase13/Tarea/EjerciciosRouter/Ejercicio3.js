// Ejercicio 3: Crear un Servicio de Búsqueda de Películas
// Descripción:
// 1. Crea un archivo searchMovie.js.
// 2. Escribe una función que reciba el título de una película como parámetro,
// realice una solicitud a la API de OMDb y devuelva el título y el año de
// lanzamiento de la primera película que coincida con la búsqueda.
// (Requiere clave de API gratuita).
// 3. Llama a esta función pasando un título, y muestra el resultado en la
// consola.
// Pistas:
// • Usa fetch("https://www.omdbapi.com/?s=" + titulo +
// "&apikey=TU_API_KEY") para realizar la solicitud.
// • La respuesta contiene una lista de películas en Search; accede a la primera
// película con Search[0]

const apiKey = '73abd0d0'

async function searchMovie(titulo) {
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(titulo)}&apikey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'True' && data.Search && data.Search.length > 0) {
            const firstMovie = data.Search[0];
            return {
                title: firstMovie.Title,
                year: firstMovie.Year
            };
        } else {
            throw new Error('No se encontraron películas.');
        }
    } catch (error) {
        console.error('Error al buscar película:', error.message);
    }
}

// Llamada de ejemplo
searchMovie('Titanic').then(result => {
    if (result) {
        console.log(`Título: ${result.title}`);
        console.log(`Año: ${result.year}`);
    }
});
// Ejercicio 4: Obtener Información de un País por Nombre
// 1. Crea un archivo getCountry.js.
// 2. Escribe una función que reciba el nombre de un país como parámetro,
// realice una solicitud a la API de REST Countries, y devuelva el nombre,
// capital y región del país.
// 3. Muestra estos datos en la consola.
// Pistas:
// • La URL para buscar un país es
// https://restcountries.com/v3.1/name/{name}.
// • La respuesta contiene un arreglo; accede al primer objeto con [0] para
// extraer la información.


async function getCountry(countryName) {
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            const country = data[0];
            const name = country.name.common;
            const capital = country.capital ? country.capital[0] : 'No disponible';
            const region = country.region;

            return {
                name,
                capital,
                region
            };
        } else {
            throw new Error('No se encontró el país.');
        }
    } catch (error) {
        console.error('Error al obtener información del país:', error.message);
    }
}

// Llamada de ejemplo
getCountry('México').then(result => {
    if (result) {
        console.log(`Nombre: ${result.name}`);
        console.log(`Capital: ${result.capital}`);
        console.log(`Región: ${result.region}`);
    }
});
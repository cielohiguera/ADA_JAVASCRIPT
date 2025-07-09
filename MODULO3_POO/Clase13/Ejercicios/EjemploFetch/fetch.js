/*
Descripción: Modificar la función para recibir un id como parametro y así hacer la función 
reutilizable para distintos personajes. Solicitar datos de diferentes personajes de la API
de StarWars pasando un id como argumento
Crear la función fetchCharacter(id)
Validar el id y lanzar error si no es válido
*/


// Definimos función asincrona que recibe un parametro id
async function fetchCharacter(id) { // Hacer asincrona nuestra función
    // Dentro del bloque try
    try {

        // Validamos que el id fue ingresado
        if (!id) throw new Error('No ingresaste el ID')
        
        // Hacemos una solicitud a la API de star wars
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        // Verificamos si la respuesta fue exitosa (status diferente 200) lanzamos un console

        if(!response.ok) throw new Error(`El personaje no fue encontradp: ${response.status}`)
        
        // Convertimos la respuesta a formato JSON para obtener los datos del personaje
        const character = await response.json()

        // Imprimimos los datos del personaje
        console.log('Datos del personaje: ', character);
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

fetchCharacter('ditto')
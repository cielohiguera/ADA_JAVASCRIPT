// 2. Lectura de Datos con Retraso Simulado y Manejo de Errores
// Escribe una función que simule la obtención de datos de una base de datos o
// API. La función debe simular un retraso de 2 segundos para obtener los datos.
// Sin embargo, en ocasiones esta operación puede fallar (simula este fallo
// lanzando un error manualmente).
// Detalles:
// • Utiliza async y await para hacer que la función sea asíncrona.
// • Usa try/catch para capturar posibles errores.
// • Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
// • En caso de error, muestra "Error al leer datos".
// Esta simulación es muy útil para ver cómo manejar errores en operaciones de
// obtención de datos, una tarea común en programación backend.

const obtenerDatos = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulando la obtención de datos exitosa
            resolve("Datos obtenidos");
        }, 2000);
    })
}

// Función principal que usa try/Catch para manejar errores
async function leerDatos() {
    try {
        const datos = await obtenerDatos(); // Esperamos la respuesta de obtener datos
        console.log(datos); // Se muestra mensaje donde se obtienen dichos datos
    } catch (error) {
        console.error("Error al leer los datos: ", error); // Si falla, se maneja el error   
    }
}

leerDatos();
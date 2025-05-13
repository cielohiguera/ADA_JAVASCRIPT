// 8. Simulación de Descarga de Archivos con Manejo de Errores
// Crea una función que simule la descarga de un archivo. Si el nombre del archivo
// es null o undefined, la descarga debe fallar y lanzar un error. Utiliza try/catch
// para manejar el error de manera adecuada.
// Detalles:
// • La función descargarArchivo debe recibir el nombre del archivo como
// parámetro.
// • Si el archivo es válido, simula la descarga con un retardo de 2 segundos y
// retorna el mensaje "Archivo [nombre] descargado".
// • En caso de que el nombre sea null o undefined, lanza el error "Error en la
// descarga".• Usa una función iniciarDescarga para invocar descargarArchivo y manejar
// el error.
// Este ejercicio refuerza el uso de try/catch en operaciones de descarga de
// archivos, algo muy útil cuando se manejan archivos en una aplicación.

// Función que simula la descarga de un archivo
const descargarArchivo = async (archivo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Verificamos si el nombre del archivo es válido
            if (archivo) {
                resolve(`Archivo ${archivo} descargado`); // Si es válido, retornamos mensaje de éxito
            } else {
                reject("Error en la descarga"); // Si no es válido, lanzamos un error
            }
        }, 2000); // Simulamos un tiempo de descarga de 2 segundos
    });
};

// Función principal que maneja la descarga y captura posibles errores
async function iniciarDescarga(archivo) {
    try {
        const mensaje = await descargarArchivo(archivo); // Intentamos descargar el archivo
        console.log(mensaje); // Mostramos el mensaje si la descarga fue exitosa
    } catch (error) {
        console.error("Error en la descarga:", error); // Capturamos y mostramos el error
    }
}

iniciarDescarga("documento.pdf"); // Cambia el nombre del archivo para probar el error
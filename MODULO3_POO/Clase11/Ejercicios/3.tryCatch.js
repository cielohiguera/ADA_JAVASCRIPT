// Función que solicita datos con una opcion de exito o error
function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Datos recibidos correctamente")
            } else {
                reject("Error al obtener los datos")
            }
        }, 2000)
    })
}

// Función asincronica que intenta obtener los datos y manejar los posibles errores
async function consultarDatos() {
    try {
        console.log("Iniciando la consulta de datos.. ");
        // Pa8usar hasta obtenerDatyos se completo o atyrapa un eror
        const resultado = await obtenerDatos(true)
        console.log(resultado);
    } catch (error) {
        console.error("Ocurrió un error ", error)
    } finally {
        console.log("Finalizando consulta de datos.. ");
        
    }
}

consultarDatos()
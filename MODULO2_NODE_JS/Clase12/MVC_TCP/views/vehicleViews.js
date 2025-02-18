// Paso 3: Creamos un objeto que contendra los métodos para formatear respuestas relacionadas con vehiculos
const VehicleView = {
    // Método para formatear la respuesta que se enviará al usuario
    formatResponse: (vehicle) => {
        // Verificamos si el vehiculo es null o undefined (osea que no se encuentre en ningun lado)
        if (!vehicle) {
            // si no se encontró el vehiculo devolvemos un objeto json con un mensaje de error
            return JSON.stringify({
                status: "error", // indicación que hubo error
                message: "Vehiculo no encontrado" // Mensaje descriptivo
            })
        }
        // Si no se encontró el vehiculo, devolvemos un objeto json con los datos del vehiculo
        return JSON.stringify({
            status: "sucess", // indicamos que fue exitoso
            data: vehicle // Incluimos los datos del vehiculo
        })
    }
}

module.exports = VehicleView;
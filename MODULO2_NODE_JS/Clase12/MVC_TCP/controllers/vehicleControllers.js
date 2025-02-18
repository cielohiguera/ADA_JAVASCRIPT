// Paso 3: Importamos el modulo que hicicmos en el modelo
// Este modulo contiene la logica para obtener los datos de los vehiculos
const VehicleModel = require('../Models/vehicleModel');

// Paso 4: Importamos el modulo de la vista
// Este modulo contiene la lógica para formatear la respuesta que se le enviará al usuario.
const VehicleView = require('../views/vehicleViews');

// Creamos un objeto que manejará las solicitudes relacionadas con vehículos
const VehicleController = {
    // Método para manejar solicitudes de vehículos por id
    handleRequest: (id) => {
        // Llamamos al método getVehicle del modelo para obtener los datos del vehículo
        // Convertimos el id a un número entero usando parseInt(base10)
        const vehicle = VehicleModel.getVehicleById(parseInt(id, 10));
        
        // Llamamos al método formatResponse del view
        // Este método toma los datos del vehículo y los prepara para ser enviados al usuario
        return VehicleView.formatResponse(vehicle);
    }
};

// Exportamos el objeto para que se use en otro lado (archivos)
module.exports = VehicleController;
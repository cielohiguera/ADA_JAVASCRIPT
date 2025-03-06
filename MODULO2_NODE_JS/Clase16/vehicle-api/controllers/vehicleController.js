const vehicleModel = require('../models/vehicleModel');
const vehicleView = require('../views/vehicleView');

// Esta función lee el archivo json donde se encuentra el conjunto de autos almacenados
const vehicleController = {
    showVehicle: () => {
        const vehicle = vehicleModel.readVehicle();
        vehicleView.showVehicle(vehicle)
    },

    addVehicle: () => {
        const vehicleDescription = vehicleView.promptForVehicle(); 
        const vehicle = vehicleModel.readVehicle();
        vehicle.push({"id": vehicle.length + 1, "marca": vehicleDescription.marca, "modelo": vehicleDescription.modelo, "anio": vehicleDescription.anio});
        vehicleModel.saveVehicle(vehicle);
        vehicleView.confirmationMessage('Vehiculo agregado con exito');
    },

    deleteVehicle: () => {
        const vehicle = vehicleModel.readVehicle();
        if(vehicle.lenght === 0) {
            vehicleView.showVehicle('No hay vehiculos a eliminar');
            return;
        }
        const vehicleId = vehicleView.promptForVehicle(vehicle);
        vehicle.splice(vehicleId, 1)
        vehicleModel.saveVehicle(vehicle);
        vehicleView.confirmationMessage('Vehiculo eliminado con exito');
    }
}

module.exports = vehicleController;
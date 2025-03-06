const readFileSync = require('readline-sync');
const vehicleModel = require('../models/vehicleModel');
const { showVehicle } = require('../controllers/vehicleController');

const vehicleView = {
    showVehicle: () => {
        const vehicles = vehicleModel.readVehicle();
        if(vehicles.length === 0) {
            console.log('No hay vehiculos para mostrar');
        } else {
            console.log('Vehiculos: ');
            vehicles.forEach((vehicle, index) => {
                console.log(`${index + 1}. ${vehicle.marca} ${vehicle.modelo} (${vehicle.anio})`)
            })
        }
    },
    promptForVehicle: () => {
        marca = readFileSync.question('Ingresa la marca del vehiculo: ');
        modelo = readFileSync.question('Ingrese el modelo del vehiculo: ');
        anio = readFileSync.question('Ingrese el anio del vehiculo: ');
        return {marca, modelo, anio}
    }, 

    promptForVehicleId: (vehicle) => {
        const vehicleId = readFileSync.question('Ingrese el ID del vehiculo a eliminar: ') -1;
        if (vehicleId < 1 || vehicleId > vehicle.length) {
            console.log('Id de vehiculo invalido');
            return 1;
        }
        return vehicleId
    },
    confirmationMessage: (mensaje) => {
        console.log(mensaje);
    }
};
module.exports = vehicleView;